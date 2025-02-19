(function () {

  /**
   * Converts a colon formatted string to a object with properties.
   *
   * This is process a provided string and look for any tokens in the format
   * of `:name[=value]` and then convert it to a object and return.
   * An example of this is ':include :type=code :fragment=demo' is taken and
   * then converted to:
   *
   * ```
   * {
   *  include: '',
   *  type: 'code',
   *  fragment: 'demo'
   * }
   * ```
   *
   * @param {string}   str   The string to parse.
   *
   * @return {{str: string, config: object}} The original string formatted, and parsed object, { str, config }.
   */
  function getAndRemoveConfig(str = '') {
    const config = {};

    if (str) {
      str = str
        .replace(/^('|")/, '')
        .replace(/('|")$/, '')
        .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, (m, key, value) => {
          if (key.indexOf(':') === -1) {
            config[key] = (value && value.replace(/&quot;/g, '')) || true;
            return '';
          }

          return m;
        })
        .trim();
    }

    return { str, config };
  }

  /**
   * Remove the docsifyIgnore configs and return the str
   * @param {string}   content   The string to deal with.
   *
   * @return {{content: string, ignoreAllSubs: boolean, ignoreSubHeading: boolean}} The string after delete the docsifyIgnore configs, and whether to ignore some or all.
   */
  function getAndRemoveDocisfyIgnoreConfig(content = '') {
    let ignoreAllSubs, ignoreSubHeading;
    if (/<!-- {docsify-ignore} -->/g.test(content)) {
      content = content.replace('<!-- {docsify-ignore} -->', '');
      ignoreSubHeading = true;
    }

    if (/{docsify-ignore}/g.test(content)) {
      content = content.replace('{docsify-ignore}', '');
      ignoreSubHeading = true;
    }

    if (/<!-- {docsify-ignore-all} -->/g.test(content)) {
      content = content.replace('<!-- {docsify-ignore-all} -->', '');
      ignoreAllSubs = true;
    }

    if (/{docsify-ignore-all}/g.test(content)) {
      content = content.replace('{docsify-ignore-all}', '');
      ignoreAllSubs = true;
    }

    return { content, ignoreAllSubs, ignoreSubHeading };
  }

  /* eslint-disable no-unused-vars */

  let INDEXS = {};

  const LOCAL_STORAGE = {
    EXPIRE_KEY: 'docsify.search.expires',
    INDEX_KEY: 'docsify.search.index',
  };

  function resolveExpireKey(namespace) {
    return namespace
      ? `${LOCAL_STORAGE.EXPIRE_KEY}/${namespace}`
      : LOCAL_STORAGE.EXPIRE_KEY;
  }

  function resolveIndexKey(namespace) {
    return namespace
      ? `${LOCAL_STORAGE.INDEX_KEY}/${namespace}`
      : LOCAL_STORAGE.INDEX_KEY;
  }

  function escapeHtml(string) {
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return String(string).replace(/[&<>"']/g, s => entityMap[s]);
  }

  function getAllPaths(router) {
    const paths = [];

    Docsify.dom
      .findAll('.sidebar-nav a:not(.section-link):not([data-nosearch])')
      .forEach(node => {
        const href = node.href;
        const originHref = node.getAttribute('href');
        const path = router.parse(href).path;

        if (
          path &&
          paths.indexOf(path) === -1 &&
          !Docsify.util.isAbsolutePath(originHref)
        ) {
          paths.push(path);
        }
      });

    return paths;
  }

  function getTableData(token) {
    if (!token.text && token.type === 'table') {
      token.rows.unshift(token.header);
      token.text = token.rows
        .map(columns => columns.map(r => r.text).join(' | '))
        .join(' |\n ');
    }
    return token.text;
  }

  function getListData(token) {
    if (!token.text && token.type === 'list') {
      token.text = token.raw;
    }
    return token.text;
  }

  function saveData(maxAge, expireKey, indexKey) {
    localStorage.setItem(expireKey, Date.now() + maxAge);
    localStorage.setItem(indexKey, JSON.stringify(INDEXS));
  }

  function genIndex(path, content = '', router, depth) {
    const tokens = window.marked.lexer(content);
    const slugify = window.Docsify.slugify;
    const index = {};
    let slug;
    let title = '';

    tokens.forEach((token, tokenIndex) => {
      if (token.type === 'heading' && token.depth <= depth) {
        const { str, config } = getAndRemoveConfig(token.text);

        const text = getAndRemoveDocisfyIgnoreConfig(token.text).content;

        // Extract title from Markdown link
        const match = text.match(/\[(.*?)\]\((.*?)\)/);
        let title = match ? match[1] : text;
        if (config.id) {
          slug = router.toURL(path, { id: slugify(config.id) });
        } else {
          // Sanitize title for ID only if using title for the slug
          slug = router.toURL(path, { 
            id: slugify(title)
              .replace(/\//g, '') // Remove slashes
              .replace(/\?/g, '') // Remove question marks
              .replace(/[^a-zA-Z0-9-]/g, '-') // Replace other non-alphanumeric
              .replace(/^\(|\)$/g, '') // Remove parentheses
              .replace(/['"]/g, '') // Remove straight quotes
              .replace(/[\u2018\u2019\u201C\u201D]/g, '') // Remove curved quotes
              .replace(/^-/, '_') // Remove leading hyphen with underscore
              .toLowerCase() 
          });
        }

        if (str) {
          title = getAndRemoveDocisfyIgnoreConfig(str).content;
        }

        index[slug] = { slug, title: title, body: '' };
      } else {
        if (tokenIndex === 0) {
          slug = router.toURL(path);
          index[slug] = {
            slug,
            title: path !== '/' ? path.slice(1) : 'Home Page',
            body: token.text || '',
          };
        }

        if (!slug) {
          return;
        }

        if (!index[slug]) {
          index[slug] = { slug, title: '', body: '' };
        } else if (index[slug].body) {
          token.text = getTableData(token);
          token.text = getListData(token);

          index[slug].body += '\n' + (token.text || '');
        } else {
          token.text = getTableData(token);
          token.text = getListData(token);

          index[slug].body = token.text || '';
        }
      }
    });
    slugify.clear();
    return index;
  }

  function ignoreDiacriticalMarks(keyword) {
    if (keyword && keyword.normalize) {
      return keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    return keyword;
  }

  // Function to convert string to title case and replace hyphens with spaces
  // This code was developed with the assistance of ChatGPT, an AI language model by OpenAI
  function convertToTitle(str) {
    return str
      .split('-') // Split the string by hyphens
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and lower case the rest
      .join(' '); // Join the words with spaces
  }

  // Function to strip common Markdown markup
  // This code was developed with the assistance of ChatGPT, an AI language model by OpenAI
  function stripCommonMarkdown(markdown) {
    // Regular expressions for common Markdown elements
    const regexes = [
      { pattern: /(\*\*|__)(.*?)\1/g, replacement: '$2' }, // Bold: **text** or __text__
      { pattern: /(\*|_)(.*?)\1/g, replacement: '$2' },   // Italic: *text* or _text_
      { pattern: /[-+*]\s+(.*?)/g, replacement: '$1' },   // Unordered lists: - item, + item, * item
      { pattern: /\d+\.\s+(.*?)/g, replacement: '$1' },   // Ordered lists: 1. item
      { pattern: /^#{1,6}\s+(.*)/gm, replacement: '$1' }  // Headers: # Header, ## Header, etc.
    ];

    // Apply all regular expressions to the input text
    let plainText = markdown;
    regexes.forEach(({ pattern, replacement }) => {
      plainText = plainText.replace(pattern, replacement);
    });

    // Trim leading/trailing whitespace and return
    return plainText.trim();
  }

  // Function to replace Markdown links with their titles and remove Markdown images
  // This code was developed with the assistance of ChatGPT, an AI language model by OpenAI
  function replaceMarkdownLinksWithTitlesandRemoveImages(content) {
    // Regular expression to match both Markdown images and links
    // Capture images separately to identify and remove them
    const markdownLinkRegex = /(!?\[([^\]]+)\]\(([^)]+)\))/g;

    return content.replace(markdownLinkRegex, (match, fullMatch, title, url) => {
      // Check if it's an image link by the presence of '!' at the start
      if (fullMatch.startsWith('!')) {
        // Return an empty string to remove the image
        return '';
      }
      // Otherwise, replace the link with its title
      return title;
    });
  }

  // Function to strip all HTML tags from a string
  // This code was developed with the assistance of ChatGPT, an AI language model by OpenAI
  function stripHtmlTags(content) {
    // Regular expression to match HTML tags
    const htmlTagRegex = /<[^>]*>/g;

    // Replace all HTML tags with an empty string
    return content.replace(htmlTagRegex, '');
  }

  /**
   * @param {String} query Search query
   * @returns {Array} Array of results
   */
  function search(query) {
    const matchingResults = [];
    let data = [];
    Object.keys(INDEXS).forEach(key => {
      data = [
        ...data,
        ...Object.keys(INDEXS[key]).map(page => INDEXS[key][page]),
      ];
    });

    query = query.trim();
    let keywords = query.split(/[\s\-，\\/]+/);
    if (keywords.length !== 1) {
      keywords = [query, ...keywords];
    }

    for (const post of data) {
      let matchesScore = 0;
      let resultStr = '';
      let handlePostTitle = '';
      let handlePostContent = '';
      const postTitle = post.title && post.title.trim();
      const postContent = stripHtmlTags(stripCommonMarkdown(replaceMarkdownLinksWithTitlesandRemoveImages(post.body && post.body.trim())));
      const postUrl = post.slug || '';
      const postPageSlug = postUrl.split('/')[1].split('?')[0].replace('0', '');
      const postPageTitle = convertToTitle(postPageSlug);

      // Skip posts that contain iframes, Font Awesome icons, or embedly cards
      // console.log(postContent);
      // const isImage = /!\[[^\]]*\]\([^)]*\)/g.test(postContent); // Check if it's a Markdown image

      if (postContent.includes('iframe') || postContent.includes(':fas') || postContent.includes(':fab') || postContent.includes('embedly-card')) {
        continue;
      }

      if (postTitle) {
        keywords.forEach(keyword => {
          // From https://github.com/sindresorhus/escape-string-regexp
          const regEx = new RegExp(
            escapeHtml(ignoreDiacriticalMarks(keyword)).replace(
              /[|\\{}()[\]^$+*?.]/g,
              '\\$&'
            ),
            'gi'
          );
          let indexTitle = -1;
          let indexContent = -1;
          handlePostTitle = postTitle
            ? escapeHtml(ignoreDiacriticalMarks(postTitle))
            : postTitle;

          // Remove Markdown link syntax from title
          handlePostTitle = handlePostTitle.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1').trim();

          handlePostContent = postContent
            ? escapeHtml(ignoreDiacriticalMarks(postContent))
            : postContent;

          indexTitle = postTitle ? handlePostTitle.search(regEx) : -1;
          indexContent = postContent ? handlePostContent.search(regEx) : -1;

          if (indexTitle >= 0 || indexContent >= 0) {
            matchesScore += indexTitle >= 0 ? 3 : indexContent >= 0 ? 2 : 0;
            if (indexContent < 0) {
              indexContent = 0;
            }

            let start = 0;
            let end = 0;

            start = indexContent < 11 ? 0 : indexContent - 10;
            end = start === 0 ? 70 : indexContent + keyword.length + 60;

            if (postContent && end > postContent.length) {
              end = postContent.length;
            }

            // This code was developed with the assistance of ChatGPT, an AI language model by OpenAI
            const matchContent = handlePostContent && (() => {
              // Extract the substring where the match will be applied
              const contentSegment = handlePostContent.substring(start, end);

              // Find the first occurrence of the word using the regular expression
              const match = contentSegment.match(regEx);

              if (match) {
                // Get the position of the first match
                const matchIndex = contentSegment.indexOf(match[0]);

                // Split the content segment into before, match, and after parts
                const beforeMatch = contentSegment.substring(0, matchIndex);
                const firstMatch = contentSegment.substring(matchIndex, matchIndex + match[0].length);
                const afterMatch = contentSegment.substring(matchIndex + match[0].length);

                // Return the reassembled string with the first match wrapped in <em> tags
                return '...' +
                  beforeMatch +
                  `<em class="search-keyword">${firstMatch}</em>` +
                  afterMatch +
                  '...';
              }

              // If no match is found, return the original segment surrounded by ellipses
              return '...' + contentSegment + '...';
            })();

            resultStr += matchContent;
          }
        });

        // This code was developed with the assistance of ChatGPT, an AI language model by OpenAI
        // Only prepend postPageTitle when it is not empty and not equal to handlePostTitle (case insensitive)
        if (matchesScore > 0) {
          const matchingPost = {
            title: handlePostTitle,
            content: (
              // Convert both postPageTitle and handlePostTitle to lowercase for case-insensitive comparison
              postPageTitle &&
              postPageTitle.toLowerCase() !== handlePostTitle.toLowerCase() &&
              postPageTitle.toLowerCase() !== 'readme' // Exclude 'ReadMe' from being prepended
                ? `<strong>${postPageTitle}</strong><br>`
                : ''
            ) + (postContent ? resultStr : ''),
            url: postUrl,
            score: matchesScore,
          };

          matchingResults.push(matchingPost);
        }
      }
    }

    const uniquePageTitles = new Set();
    matchingResults.forEach(result => {
      const contentMatch = result.content.match(/^<strong>(.*?)<\/strong><br>/);
      if (contentMatch) {
        uniquePageTitles.add(contentMatch[1]);
      }
    });
    
    // If all results share the same postPageTitle, remove it from display
    if (uniquePageTitles.size === 1) {
      const sharedPageTitle = [...uniquePageTitles][0]; // Extract the single title
      matchingResults.forEach(result => {
        // Ensure we only remove the correct title, avoiding partial removals
        result.content = result.content.replace(new RegExp(`^<strong>${sharedPageTitle}</strong><br>`, 'i'), '');
      });
    }

    return matchingResults.sort((r1, r2) => r2.score - r1.score);
  }

  // This code was developed with the assistance of ChatGPT, an AI language model by OpenAI
  function init$1(config, vm) {
    const isAuto = config.paths === 'auto';
    const paths = isAuto ? getAllPaths(vm.router) : config.paths;

    let namespaceSuffix = '';

    // only in auto mode
    if (paths.length && isAuto && config.pathNamespaces) {
      const path = paths[0];

      if (Array.isArray(config.pathNamespaces)) {
        namespaceSuffix =
          config.pathNamespaces.filter(
            prefix => path.slice(0, prefix.length) === prefix
          )[0] || namespaceSuffix;
      } else if (config.pathNamespaces instanceof RegExp) {
        const matches = path.match(config.pathNamespaces);

        if (matches) {
          namespaceSuffix = matches[0];
        }
      }
      const isExistHome = paths.indexOf(namespaceSuffix + '/') === -1;
      const isExistReadme = paths.indexOf(namespaceSuffix + '/README') === -1;
      if (isExistHome && isExistReadme) {
        paths.unshift(namespaceSuffix + '/');
      }
    } else if (paths.indexOf('/') === -1 && paths.indexOf('/README') === -1) {
      paths.unshift('/');
    }

    const expireKey = resolveExpireKey(config.namespace) + namespaceSuffix;
    const indexKey = resolveIndexKey(config.namespace) + namespaceSuffix;

    // Check if the database is expired
    const isExpired = localStorage.getItem(expireKey) < Date.now();

    if (isExpired) {
      // If expired, clear the existing database
      localStorage.removeItem(expireKey);
      localStorage.removeItem(indexKey);
      // console.log('Existing database expired and deleted.');
    } else {
      // console.log('Database is not expired, but it will still be reset.');
    }

    // Clear the database every load regardless of expiration
    localStorage.removeItem(expireKey);
    localStorage.removeItem(indexKey);
    // console.log('Existing database cleared.');

    // Initialize INDEXS to an empty object
    INDEXS = {};

    const len = paths.length;
    let count = 0;

    paths.forEach(path => {
      if (INDEXS[path]) {
        return count++;
      }

      Docsify.get(vm.router.getFile(path), false, vm.config.requestHeaders).then(
        result => {
          INDEXS[path] = genIndex(path, result, vm.router, config.depth);
          len === ++count && saveData(config.maxAge, expireKey, indexKey);
        }
      );
    });
  }

  /* eslint-disable no-unused-vars */

  let NO_DATA_TEXT = '';
  let options;

  function style() {
    const code = `
.sidebar {
  padding-top: 0;
}

.search {
  margin-bottom: 20px;
  padding: 6px;
  border-bottom: 1px solid #eee;
}

.search .input-wrap {
  display: flex;
  align-items: center;
}

.search .results-status:not(:empty) {
  margin-top: 10px;
  font-size: smaller;
}

.search .results-panel {
  display: none;
}

.search .results-panel.show {
  display: block;
}

.search input {
  outline: none;
  border: none;
  width: 100%;
  padding: 0.6em 7px;
  font-size: inherit;
  border: 1px solid transparent;
}

.search input:focus {
  box-shadow: 0 0 5px var(--theme-color, #42b983);
  border: 1px solid var(--theme-color, #42b983);
}

.search input::-webkit-search-decoration,
.search input::-webkit-search-cancel-button,
.search input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.search input::-ms-clear {
  display: none;
  height: 0;
  width: 0;
}

.search .clear-button {
  cursor: pointer;
  width: 36px;
  text-align: right;
  display: none;
}

.search .clear-button.show {
  display: block;
}

.search .clear-button svg {
  transform: scale(.5);
}

.search kbd {
  position: absolute;
  right: 8px;
  margin: 0;
}

.search input:focus ~ kbd,
.search input:not(:empty) ~ kbd {
  display: none;
}

.search h2 {
  font-size: 17px;
  margin: 10px 0;
}

.search a {
  text-decoration: none;
  color: inherit;
}

.search .matching-post {
  border-bottom: 1px solid #eee;
}

.search .matching-post:last-child {
  border-bottom: 0;
}

.search p {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.search p.empty {
  text-align: center;
}

.sidebar-nav.hide {
  display: none;
}`;

    Docsify.dom.style(code);
  }

  function tpl(defaultValue = '') {
    const html = /* html */ `
    <div class="input-wrap">
      <input type="search" value="${defaultValue}" aria-keyshortcuts="/ control+k meta+k" />
      <div class="clear-button">
        <svg width="26" height="24">
          <circle cx="12" cy="12" r="11" fill="#ccc" />
          <path stroke="white" stroke-width="2" d="M8.25,8.25,15.75,15.75" />
          <path stroke="white" stroke-width="2"d="M8.25,15.75,15.75,8.25" />
        </svg>
      </div>
      <kbd title="Press / to search">/</kbd>
    </div>
    <div class="results-status" aria-live="polite"></div>
    <div class="results-panel"></div>
  `;
    const el = Docsify.dom.create('div', html);
    const aside = Docsify.dom.find('aside');

    Docsify.dom.toggleClass(el, 'search');
    el.setAttribute('role', 'search');
    Docsify.dom.before(aside, el);
  }

  function doSearch(value) {
    const $search = Docsify.dom.find('div.search');
    const $panel = Docsify.dom.find($search, '.results-panel');
    const $clearBtn = Docsify.dom.find($search, '.clear-button');
    const $sidebarNav = Docsify.dom.find('.sidebar-nav');
    const $status = Docsify.dom.find('div.search .results-status');

    if (!value) {
      $panel.classList.remove('show');
      $clearBtn.classList.remove('show');
      $panel.innerHTML = '';
      $status.textContent = '';

      if (options.hideOtherSidebarContent) {
        $sidebarNav && $sidebarNav.classList.remove('hide');
      }

      return;
    }

    const matches = search(value);

    let html = '';
    matches.forEach((post, i) => {
      html += /* html */ `
      <div class="matching-post" aria-label="search result ${i + 1}">
        <a href="${post.url}">
          <h2>${post.title}</h2>
          <p>${post.content}</p>
        </a>
      </div>
    `;
    });

    $panel.classList.add('show');
    $clearBtn.classList.add('show');
    $panel.innerHTML = html || /* html */ `<p class="empty">${NO_DATA_TEXT}</p>`;
    $status.textContent = `Found ${matches.length} results`;

    if (options.hideOtherSidebarContent) {
      $sidebarNav && $sidebarNav.classList.add('hide');
    }
  }

  function bindEvents() {
    const $search = Docsify.dom.find('div.search');
    const $input = Docsify.dom.find($search, 'input');
    const $inputWrap = Docsify.dom.find($search, '.input-wrap');

    let timeId;

    /**
      Prevent to Fold sidebar.

      When searching on the mobile end,
      the sidebar is collapsed when you click the INPUT box,
      making it impossible to search.
     */
    Docsify.dom.on(
      $search,
      'click',
      e =>
        ['A', 'H2', 'P', 'EM'].indexOf(e.target.tagName) === -1 &&
        e.stopPropagation()
    );
    Docsify.dom.on($input, 'input', e => {
      clearTimeout(timeId);
      timeId = setTimeout(_ => doSearch(e.target.value.trim()), 100);
    });
    Docsify.dom.on($inputWrap, 'click', e => {
      // Click input outside
      if (e.target.tagName !== 'INPUT') {
        $input.value = '';
        doSearch();
      }
    });
  }

  function updatePlaceholder(text, path) {
    const $input = Docsify.dom.getNode('.search input[type="search"]');

    if (!$input) {
      return;
    }

    if (typeof text === 'string') {
      $input.placeholder = text;
    } else {
      const match = Object.keys(text).filter(key => path.indexOf(key) > -1)[0];
      $input.placeholder = text[match];
    }
  }

  function updateNoData(text, path) {
    if (typeof text === 'string') {
      NO_DATA_TEXT = text;
    } else {
      const match = Object.keys(text).filter(key => path.indexOf(key) > -1)[0];
      NO_DATA_TEXT = text[match];
    }
  }

  function updateOptions(opts) {
    options = opts;
  }

  function init(opts, vm) {
    const keywords = vm.router.parse().query.s;

    updateOptions(opts);
    style();
    tpl(keywords);
    bindEvents();
    keywords && setTimeout(_ => doSearch(keywords), 500);
  }

  function update(opts, vm) {
    updateOptions(opts);
    updatePlaceholder(opts.placeholder, vm.route.path);
    updateNoData(opts.noData, vm.route.path);
  }

  /* eslint-disable no-unused-vars */

  const CONFIG = {
    placeholder: 'Type to search',
    noData: 'No matches found.',
    paths: 'auto',
    depth: 2,
    maxAge: 86400000, // 1 day
    hideOtherSidebarContent: false,
    namespace: undefined,
    pathNamespaces: undefined,
    keyBindings: ['/', 'meta+k', 'ctrl+k'],
  };

  const install = function (hook, vm) {
    const { util } = Docsify;
    const opts = vm.config.search || CONFIG;

    if (Array.isArray(opts)) {
      CONFIG.paths = opts;
    } else if (typeof opts === 'object') {
      CONFIG.paths = Array.isArray(opts.paths) ? opts.paths : 'auto';
      CONFIG.maxAge = util.isPrimitive(opts.maxAge) ? opts.maxAge : CONFIG.maxAge;
      CONFIG.placeholder = opts.placeholder || CONFIG.placeholder;
      CONFIG.noData = opts.noData || CONFIG.noData;
      CONFIG.depth = opts.depth || CONFIG.depth;
      CONFIG.hideOtherSidebarContent =
        opts.hideOtherSidebarContent || CONFIG.hideOtherSidebarContent;
      CONFIG.namespace = opts.namespace || CONFIG.namespace;
      CONFIG.pathNamespaces = opts.pathNamespaces || CONFIG.pathNamespaces;
      CONFIG.keyBindings = opts.keyBindings || CONFIG.keyBindings;
    }

    const isAuto = CONFIG.paths === 'auto';

    hook.init(() => {
      const { keyBindings } = vm.config;

      // Add key bindings
      if (keyBindings.constructor === Object) {
        keyBindings.focusSearch = {
          bindings: CONFIG.keyBindings,
          callback(e) {
            const sidebarElm = document.querySelector('.sidebar');
            const sidebarToggleElm = document.querySelector('.sidebar-toggle');
            const searchElm = sidebarElm?.querySelector('input[type="search"]');
            const isSidebarHidden = sidebarElm?.getBoundingClientRect().x < 0;

            isSidebarHidden && sidebarToggleElm?.click();

            setTimeout(() => searchElm?.focus(), isSidebarHidden ? 250 : 0);
          },
        };
      }
    });
    hook.mounted(_ => {
      init(CONFIG, vm);
      !isAuto && init$1(CONFIG, vm);
    });
    hook.doneEach(_ => {
      update(CONFIG, vm);
      isAuto && init$1(CONFIG, vm);
    });
  };

  window.$docsify = window.$docsify || {};
  $docsify.plugins = [install, ...($docsify.plugins || [])];

})();
