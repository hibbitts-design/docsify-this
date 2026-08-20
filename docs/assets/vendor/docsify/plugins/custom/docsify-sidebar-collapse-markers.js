// Code generated/assisted by Anthropic Claude AI
// Opt-in sidebar group collapsing, controlled by the bullet character used in _sidebar.md.
//
// Docsify v5's native `collapseSidebarGroups` makes every plain-text (non-link)
// sidebar heading with children collapsible automatically, which can surprise
// existing sites that only used "*" to organize links, not to build accordions.
// This plugin restores that heading to a plain, always-expanded heading by
// default, and lets an author opt a specific heading into being a toggle by
// changing its bullet character:
//
//   * Text Heading (no expand/collapse)
//     * [Page 1](page1.md)
//
//   + Toggle Heading (starts collapsed, click to expand)
//     + [Page 1](page1.md)
//
//   - Toggle Heading (starts expanded, click to collapse)
//     - [Page 1](page1.md)
//
// Only the bullet on the heading line itself matters; child bullets are
// normalized to "*" so mixed markers don't fragment the markdown list.
(function () {
  var MARKER_CLASS = 'sidebar-toggle-marker';

  function preprocessSidebarMarkdown(text) {
    var index = 0;
    return text.replace(/^(\s*)([*+-])( +)(?!\[[ xX]\])/gm, function (match, indent, marker, spacing) {
      if (marker === '*') {
        return indent + '*' + spacing;
      }
      var initial = marker === '+' ? 'collapsed' : 'expanded';
      var attrs = 'data-toggle-index="' + index++ + '" data-toggle-initial="' + initial + '"';
      return indent + '*' + spacing + '<i class="' + MARKER_CLASS + '" ' + attrs + ' hidden></i>';
    });
  }

  function sidebarToggleSyntaxPlugin(hook, vm) {
    var previousState = {};
    var previousScrollTop = null;

    // vm.compiler isn't created until initRender(), which runs after the
    // "init" hook fires, so patch it on "mounted" instead.
    hook.mounted(function () {
      var compiler = vm.compiler;
      var originalSidebar = compiler.sidebar.bind(compiler);
      compiler.sidebar = function (text, level) {
        // Read the outgoing sidebar's collapse states before it's replaced,
        // so a group the user toggled stays that way across navigation
        // instead of resetting to its marker's initial state every render.
        previousState = {};
        document.querySelectorAll('.sidebar-nav [data-sidebar-toggle-index]').forEach(function (title) {
          var idx = title.getAttribute('data-sidebar-toggle-index');
          var li = title.closest('li');
          if (li) {
            previousState[idx] = li.classList.contains('collapse');
          }
        });

        // Docsify replaces the sidebar's HTML wholesale on every navigation,
        // which resets its scroll container back to the top. Remember where
        // it was so clicking a link deep in an expanded group doesn't scroll
        // the sidebar away from the item you just clicked.
        var scroller = document.querySelector('aside.sidebar');
        previousScrollTop = scroller ? scroller.scrollTop : null;

        return originalSidebar(preprocessSidebarMarkdown(text), level);
      };
    });

    hook.doneEach(function () {
      var nav = document.querySelector('.sidebar-nav');
      if (!nav) {
        return;
      }

      // Explicitly marked headings (+/-) opt in to being a toggle, restored
      // to their last known state if this isn't the first render.
      nav.querySelectorAll('.' + MARKER_CLASS).forEach(function (marker) {
        var index = marker.getAttribute('data-toggle-index');
        var collapsed = index in previousState
          ? previousState[index]
          : marker.getAttribute('data-toggle-initial') === 'collapsed';
        var li = marker.closest('li');
        marker.remove();

        var title = li && li.querySelector(':scope > .group-title');
        if (!title) {
          // No nested list (nothing to toggle), or the heading is a link
          // (native code never turns link headings into groups).
          return;
        }

        li.classList.add('group');
        li.classList.toggle('collapse', collapsed);
        title.setAttribute('role', 'button');
        title.setAttribute('tabindex', '0');
        title.setAttribute('aria-expanded', String(!collapsed));
        title.setAttribute('data-sidebar-toggle-index', index);
        // Root-level headings get a native data-group-id too; drop it so
        // docsify's own persistence map doesn't shadow ours.
        title.removeAttribute('data-group-id');
      });

      // Everything else reverts to a plain, always-expanded heading, undoing
      // docsify's automatic collapse behavior for unmarked ("*") headings.
      nav.querySelectorAll('.group-title:not([data-sidebar-toggle-index])').forEach(function (title) {
        var li = title.closest('li');
        if (!li) {
          return;
        }
        li.classList.remove('group', 'collapse');
        title.removeAttribute('role');
        title.removeAttribute('tabindex');
        title.removeAttribute('aria-expanded');
        title.removeAttribute('data-group-id');
      });

      // Restore scroll position last, once groups are back to their real
      // (possibly expanded) height - restoring any earlier leaves nothing
      // to scroll to yet and the browser clamps it back to 0.
      if (previousScrollTop !== null) {
        var scroller = document.querySelector('aside.sidebar');
        if (scroller) {
          scroller.scrollTop = previousScrollTop;
        }
      }
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(sidebarToggleSyntaxPlugin, window.$docsify.plugins || []);
})();
