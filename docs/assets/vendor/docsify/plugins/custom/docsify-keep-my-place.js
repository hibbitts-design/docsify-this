// Keep My Place: a "Continue reading" bar on each course's or guide's home page, as in Grav Open Course Space – hibbittsdesign.org
// Its label can be changed with keepMyPlace: { label: '...' } in window.$docsify (courses use "Continue where you left off").
// Only sidebar pages are remembered (not navbar pages such as Schedule), in the reader's own browser.
// Code generated/assisted by Anthropic Claude AI
(function () {
  var homePages = ['', 'home', 'README'];

  // sites can share one address (all Docsify-This sites, or local previews), so the site's basePath and name are part of it too
  function getStorageKey(siteName, folder) {
    var basePath = new URLSearchParams(window.location.search).get('basePath');
    if (!basePath) {
      basePath = '';
    }
    return 'docsify-keep-my-place|' + window.location.pathname + '|' + basePath + '|' + siteName + '|' + folder;
  }

  // "/cpt363-basic/module-01" has the folder "cpt363-basic" and the page "module-01"
  function getFolder(path) {
    var parts = path.replace(/^\/+/, '').split('/');
    if (parts.length > 1) {
      return parts[0];
    }
    return '';
  }

  function getPage(path) {
    var parts = path.replace(/^\/+/, '').split('/');
    return parts[parts.length - 1];
  }

  function isInSidebar(path) {
    var links = document.querySelectorAll('.sidebar-nav a[href]');
    for (var i = 0; i < links.length; i++) {
      var linkPath = links[i].getAttribute('href').split('?')[0];
      if (linkPath === '#' + path) {
        return true;
      }
    }
    return false;
  }

  // A course or guide in its own folder has a sidebar that only links into that folder. A single guide's sidebar
  // links across the folders of its parts (section-1, section-2...), so there the whole site is one guide.
  function sidebarLinksToSeveralFolders() {
    var links = document.querySelectorAll('.sidebar-nav a[href^="#/"]');
    var firstFolder = '';
    for (var i = 0; i < links.length; i++) {
      var linkFolder = getFolder(links[i].getAttribute('href').slice(1).split('?')[0]);
      if (linkFolder === '') {
        continue;
      }
      if (firstFolder === '') {
        firstFolder = linkFolder;
      } else if (linkFolder !== firstFolder) {
        return true;
      }
    }
    return false;
  }

  // the course or guide the page belongs to: its folder, or '' for the whole site
  function getPlaceFolder(path) {
    if (sidebarLinksToSeveralFolders()) {
      return '';
    }
    return getFolder(path);
  }

  // "/sample-guide/section-two/README" is in "sample-guide/section-two"
  function getFolderPath(path) {
    var parts = path.replace(/^\/+/, '').split('/');
    parts.pop();
    return parts.join('/');
  }

  // only the home page right in the course's or guide's folder counts, not a section's README
  function isHomePage(path, placeFolder) {
    if (homePages.indexOf(getPage(path)) === -1) {
      return false;
    }
    return getFolderPath(path) === placeFolder;
  }

  // localStorage can be turned off (for example in some private windows), so each use is wrapped in try
  function savePlace(key, place) {
    try {
      localStorage.setItem(key, JSON.stringify(place));
    } catch (error) {
    }
  }

  function loadPlace(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return null;
    }
  }

  function forgetPlace(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
    }
  }

  function showContinueBar(key, place, label) {
    var content = document.querySelector('.markdown-section');
    if (!content) {
      return;
    }

    var bar = document.createElement('div');
    bar.className = 'keep-my-place';
    bar.innerHTML = '<a><span class="keep-my-place-label"></span> <span class="keep-my-place-title"></span></a>'
      + '<button type="button" class="keep-my-place-close"><span aria-hidden="true">&times;</span></button>';
    bar.querySelector('.keep-my-place-label').textContent = label + ':';
    bar.querySelector('button').setAttribute('aria-label', 'Dismiss ' + label);
    bar.querySelector('a').href = '#' + place.path;
    bar.querySelector('.keep-my-place-title').textContent = place.title;

    var heading = content.querySelector('h1');

    // after closing, keyboard focus moves to the page's heading, rather than back to the top of the page
    bar.querySelector('button').addEventListener('click', function () {
      forgetPlace(key);
      bar.remove();
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus();
      }
    });

    // right above a guide's section cards (card-list-sections, or card-list-rows for cards one per row), as in Grav
    // Open Publishing Space, or a course's This Week box (announcement); otherwise below the guide's cover
    // (guide-cover) or the page's heading, or at the top
    var sectionCards = content.querySelector('.card-list-sections, .card-list-rows');
    var thisWeek = content.querySelector('.announcement');
    var cover = content.querySelector('.guide-cover');
    if (sectionCards) {
      sectionCards.before(bar);
    } else if (thisWeek && thisWeek.parentElement === content) {
      thisWeek.before(bar);
    } else if (cover) {
      cover.after(bar);
    } else if (heading && heading.parentElement === content) {
      heading.after(bar);
    } else {
      content.prepend(bar);
    }
  }

  function keepMyPlace(hook, vm) {
    hook.doneEach(function () {
      var isEmbedded = /[?&](embedded|standalone)=/.test(window.location.search);
      if (isEmbedded) {
        return;
      }

      var path = vm.route.path;
      var page = getPage(path);
      var placeFolder = getPlaceFolder(path);
      // a name can have a line break in it (such as 'Docsify\nOpen Publishing Starter Kit'), read as a space here
      var siteName = (vm.config.name || '').replace(/\s+/g, ' ').trim();
      var key = getStorageKey(siteName, placeFolder);

      if (isHomePage(path, placeFolder)) {
        var savedPlace = loadPlace(key);
        if (savedPlace) {
          var label = 'Continue reading';
          if (vm.config.keepMyPlace && vm.config.keepMyPlace.label) {
            label = vm.config.keepMyPlace.label;
          }
          showContinueBar(key, savedPlace, label);
        }
        return;
      }

      if (isInSidebar(path)) {
        var heading = document.querySelector('.markdown-section h1');
        var title = page;
        if (heading) {
          title = heading.textContent.trim();
        }
        savePlace(key, { path: path, title: title });
      }
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [keepMyPlace].concat(window.$docsify.plugins || []);
})();
