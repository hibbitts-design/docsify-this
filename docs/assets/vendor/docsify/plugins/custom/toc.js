// Modified with the assistance of Claude Code (claude.ai)

var defaultOptions = {
  headings: 'h1, h2',
  scope: '.markdown-section',

  // To make work
  title: '',
  listType: 'ul',
}

// Element builders
var tocHeading = function(Title) {
  return document.createElement('h2').appendChild(
    document.createTextNode(Title)
  )
}

var aTag = function(src) {
  var a = document.createElement('a');
  var content = src.firstChild.innerHTML;

  // Use this to clip text w/ HTML in it.
  // https://github.com/arendjr/text-clipper
  a.innerHTML = content;
  a.href = src.firstChild.href;
  a.onclick = tocClick

  // In order to remove this gotta fix the styles.
  a.setAttribute('class', 'anchor');

  return a
};

var tocClick = function(e) {
  var divs = document.querySelectorAll('.page_toc .active');

  // Remove the previous classes
  [].forEach.call(divs, function(div) {
    div.setAttribute('class', 'anchor')
  });

  // Make sure this is attached to the parent not itself
  e.currentTarget.setAttribute('class', 'active')
};

var createList = function(wrapper, count) {
  while (count--) {
    if(wrapper){
	    wrapper = wrapper.appendChild(
	      document.createElement('ul')
	    );
    }
    if (count && wrapper) {
      wrapper = wrapper.appendChild(
        document.createElement('li')
      );
    }
  }

  return wrapper;
};

//------------------------------------------------------------------------

var getHeaders = function(selector) {
  var headings2 = document.querySelectorAll(selector);
  var ret = [];

  [].forEach.call(headings2, function(heading) {
    ret = ret.concat(heading);
  });

  return ret;
};

var getLevel = function(header) {
  var decs = header.match(/\d/g);

  return decs ? Math.min.apply(null, decs) : 1;
};

var jumpBack = function(currentWrapper, offset) {
  while (offset--) {
    if (!currentWrapper.parentElement) {
      break;
    }
    currentWrapper = currentWrapper.parentElement;
  }

  return currentWrapper;
};

var buildTOC = function(options) {
  var ret = document.createElement('ul');
  var wrapper = ret;
  var lastLi = null;
  var selector = options.headings
    .split(',')
    .map(function(h) { return options.scope + ' ' + h.trim(); })
    .join(',');
  var headers = getHeaders(selector).filter(h => h.id);

  headers.reduce(function(prev, curr, index) {
    var currentLevel = getLevel(curr.tagName);
    var offset = currentLevel - prev;

    wrapper = (offset > 0)
      ? createList(lastLi, offset)
      : jumpBack(wrapper, -offset * 2)

    wrapper = wrapper || ret;

    var li = document.createElement('li');

    wrapper.appendChild(li).appendChild(aTag(curr));

    lastLi = li;

    return currentLevel;
  }, getLevel(options.headings));

  return ret;
};

// Docsify plugin functions
function plugin(hook, vm) {
  var userOptions = vm.config.toc;

  hook.mounted(function () {
    var content = window.Docsify.dom.find(".content");
    if (content) {
      var nav = window.Docsify.dom.create("aside", "");
      nav.classList.add("nav");
      window.Docsify.dom.before(content, nav);
    }
  });

  hook.doneEach(function () {
    var nav = document.querySelectorAll('.nav')[0]
    var t = Array.from(document.querySelectorAll('.nav'))

    if (!nav) {
      return;
    }

  	const toc = buildTOC(userOptions);

    // Just unset it for now.
    if (!toc.innerHTML) {
      nav.innerHTML = null
      return;
    }

    // Fix me in the future
		var title = document.createElement('p');
		title.innerHTML = userOptions.title;
		title.setAttribute('class', 'title');

		// Mobile-only accordion toggle; hidden and inert on desktop via CSS.
		// No [type] attribute on purpose: some themes style any button carrying
		// one like a pill button, which can clobber this flat bar look.
		var toggle = document.createElement('button');
		toggle.setAttribute('class', 'page_toc-toggle');
		toggle.setAttribute('aria-expanded', 'false');
		toggle.setAttribute('aria-controls', 'page_toc-panel');
		toggle.innerHTML = userOptions.title || 'On this page';

		var panel = document.createElement('div');
		panel.id = 'page_toc-panel';
		panel.setAttribute('class', 'page_toc-panel');
		panel.appendChild(toc);

		var container = document.createElement('div');
		container.setAttribute('class', 'page_toc');

		toggle.onclick = function (e) {
		  e.preventDefault(); // guard against accidental form submit; no [type] attr to key off of
		  var isOpen = container.classList.toggle('open');
		  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
		};

		container.appendChild(title);
		container.appendChild(toggle);
		container.appendChild(panel);

    // Existing TOC
    var tocChild = document.querySelectorAll('.nav .page_toc');

    if (tocChild.length > 0) {
      tocChild[0].parentNode.removeChild(tocChild[0]);
    }

    nav.appendChild(container);
  });
}

// Docsify plugin options
window.$docsify['toc'] = Object.assign(defaultOptions, window.$docsify['toc']);

// toc-headings URL param always wins, even over a site's own explicit
// toc.headings config, so it works as a genuine override (matching how
// toc/toc-narrow/standalone etc. already behave elsewhere in docsify-this).
tocheadings = getURLParameterByName(['toc-headings','tocHeadings'], null, null, window.location.href, true);
if (typeof tocheadings === 'string' && tocheadings) {
  window.$docsify['toc'].headings = tocheadings;
}

// toc-title URL param always wins, same override behavior as toc-headings above.
tocTitle = getURLParameterByName(['toc-title','tocTitle'], null, null, window.location.href, true);
if (typeof tocTitle === 'string' && tocTitle) {
  window.$docsify['toc'].title = tocTitle;
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
