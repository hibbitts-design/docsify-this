var defaultOptions = {
  headings: 'h2',
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
    div.classList.remove('active');
  });

  // Make sure this is attached to the parent not itself
  e.target.classList.add('active');
};

var createList = function(wrapper, count) {
  while (count--) {
    if(wrapper){
	    wrapper = wrapper.appendChild(
	      document.createElement('ul')
	    );
    }
    if (count) {
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
    currentWrapper = currentWrapper.parentElement;
  }

  return currentWrapper;
};

var buildTOC = function(options) {
  var ret = document.createElement('ul');
  var wrapper = ret;
  var lastLi = null;
  var selector = options.scope + ' ' + options.headings
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
  hook.mounted(function () {
    var content = window.Docsify.dom.find('.content');
    if (content) {
      var nav = window.Docsify.dom.create('aside', '');
      window.Docsify.dom.toggleClass(nav, 'add', 'nav');
      window.Docsify.dom.before(content, nav);
    }
  });

  hook.doneEach(function () {
    var nav = document.querySelector('.nav');
    if (!nav) {
      return;
    }

    const toc = buildTOC(vm.config.toc);
    nav.innerHTML = '';  // Clear previous content
    if (!toc.innerHTML) {
      return;
    }

    var container = document.createElement('div');
    container.setAttribute('class', 'page_toc');
    container.appendChild(toc);

    // Existing TOC
    var tocChild = document.querySelector('.nav .page_toc');
    if (tocChild) {
      tocChild.parentNode.removeChild(tocChild);
    }

    nav.appendChild(container);

    // Highlight the corresponding TOC item based on scroll position
    window.addEventListener('scroll', function () {
      highlightTocItem();
    });
  });
}

function highlightTocItem() {
  var headings = document.querySelectorAll('.markdown-section ' + defaultOptions.headings);
  var tocItems = document.querySelectorAll('.nav .page_toc a');

  var fromTop = window.scrollY + 20;

  tocItems.forEach(function(item, index) {
    var heading = headings[index];
    var nextHeading = headings[index + 1];

    if (heading) {
      var link = item;
      var target = heading;

      if (nextHeading && fromTop >= heading.offsetTop && fromTop < nextHeading.offsetTop) {
        tocItems.forEach(function(item) {
          item.classList.remove('active');
        });
        link.classList.add('active');
      } else if (!nextHeading && fromTop >= heading.offsetTop) {
        tocItems.forEach(function(item) {
          item.classList.remove('active');
        });
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

// Docsify plugin options
// console.log(defaultOptions);
var myOptions = defaultOptions ;
if (getURLParameterByName('toc-headings')) {
  tocheadings = getURLParameterByName('toc-headings', null, null, window.location.href, true);
  // console.log(tocheadings);
  // console.log(defaultOptions.headings);
  defaultOptions.headings = tocheadings;
}
window.$docsify['toc'] = Object.assign(myOptions, window.$docsify['toc']);
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
