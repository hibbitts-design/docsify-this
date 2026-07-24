// Original source kindly shared by @Wsine on GitHub
// Code generated/assisted by Anthropic Claude AI
(function() {
  function sidebarExpandCollapsePlugin(hook, vm) {
    var options = vm.config.sidebarExpandCollapse || {};
    var accordion = options.accordion !== false;
    
    hook.init(function() {
      var style = document.createElement('style');
      style.textContent = `
        .sidebar-nav > ul > li.sidebar-group,
        .sidebar-nav > ul > li.sidebar-group > ul {
          -webkit-tap-highlight-color: transparent;
        }
        
        .sidebar-nav > ul > li.sidebar-group {
          cursor: pointer;
        }
        
        .sidebar-nav > ul > li.sidebar-group > span {
          display: block;
          padding-right: calc(var(--_sidebar-inset, 20px) + 15px);
          border-radius: var(--border-radius);
          text-decoration-line: underline;
          text-decoration-style: solid;
          text-decoration-thickness: var(--link-underline-thickness, 2px);
          text-decoration-color: transparent;
          text-underline-offset: 2px;
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Touch device feedback */
        @media (hover: none) {
          .sidebar-nav > ul > li.sidebar-group > span:active {
            background-color: rgba(11, 133, 215, 0.1);
          }
          
          .sidebar-nav > ul > li.sidebar-group > ul > li > a:active {
            background-color: rgba(11, 133, 215, 0.1);
          }
        }
        
        .sidebar-nav > ul > li.sidebar-group > ul > li > a {
          -webkit-tap-highlight-color: transparent;
        }
        
        .sidebar-nav > ul > li.sidebar-group > span {
          background: no-repeat calc(100% - var(--_sidebar-inset, 20px)) calc(50% - 2.5px) / 6px 5px
              linear-gradient(45deg, transparent 2.75px, var(--color-mono-3, #ccc) 2.75px 4.25px, transparent 4px),
            no-repeat calc(100% - var(--_sidebar-inset, 20px)) calc(50% + 2.5px) / 6px 5px
              linear-gradient(135deg, transparent 2.75px, var(--color-mono-3, #ccc) 2.75px 4.25px, transparent 4px);
        }
        
        @media (hover: none) {
          .sidebar-nav > ul > li.sidebar-group > span:active {
            background-color: rgba(11, 133, 215, 0.1);
            background-image: 
              linear-gradient(45deg, transparent 2.75px, var(--color-mono-3, #ccc) 2.75px 4.25px, transparent 4px),
              linear-gradient(135deg, transparent 2.75px, var(--color-mono-3, #ccc) 2.75px 4.25px, transparent 4px);
            background-position: 
              calc(100% - var(--_sidebar-inset, 20px)) calc(50% - 2.5px),
              calc(100% - var(--_sidebar-inset, 20px)) calc(50% + 2.5px);
            background-size: 6px 5px, 6px 5px;
            background-repeat: no-repeat;
          }
        }
        
        .sidebar-nav > ul > li.sidebar-group > span:hover {
          text-decoration-color: var(--sidebar-link-color-active);
          translate: 0;
        }
        
        .sidebar-nav > ul > li.sidebar-group > span:focus {
          outline: none;
        }
        
        .sidebar-nav > ul > li.sidebar-group > span:focus-visible {
          outline: 2px solid var(--theme-color, #0B85D7);
          outline-offset: 2px;
        }
        
        .sidebar-nav > ul > li.sidebar-group.expanded > span {
          background: no-repeat calc(100% - var(--_sidebar-inset, 20px) - 4px) center / 5px 6px
              linear-gradient(225deg, transparent 2.75px, var(--color-mono-3, #ccc) 2.75px 4.25px, transparent 4.25px),
            no-repeat calc(100% - var(--_sidebar-inset, 20px) + 1px) center / 5px 6px
              linear-gradient(135deg, transparent 2.75px, var(--color-mono-3, #ccc) 2.75px 4.25px, transparent 4.25px);
        }
        
        @media (hover: none) {
          .sidebar-nav > ul > li.sidebar-group.expanded > span:active {
            background-color: rgba(11, 133, 215, 0.1);
            background-image: 
              linear-gradient(225deg, transparent 2.75px, var(--color-mono-3, #ccc) 2.75px 4.25px, transparent 4.25px),
              linear-gradient(135deg, transparent 2.75px, var(--color-mono-3, #ccc) 2.75px 4.25px, transparent 4.25px);
            background-position: 
              calc(100% - var(--_sidebar-inset, 20px) - 4px) center,
              calc(100% - var(--_sidebar-inset, 20px) + 1px) center;
            background-size: 5px 6px, 5px 6px;
            background-repeat: no-repeat;
          }
        }
        
        .sidebar-nav > ul > li.sidebar-group ul.collapsed {
          display: none;
        }
      `;
      document.head.appendChild(style);
    });
    
    hook.doneEach(function() {
      document.querySelectorAll(".sidebar-nav > ul > li").forEach(function(node, index) {
        if (node.classList.contains('sidebar-group')) {
          return;
        }
        
        var ul = node.querySelector('ul');
        
        if (!ul) {
          return;
        }
        
        var span = document.createElement("span");
        var sectionId = 'sidebar-section-' + index;
        
        // Handles both text nodes and elements like <strong>
        span.textContent = node.firstChild.textContent || node.firstChild.data || '';
        span.setAttribute('role', 'button');
        span.setAttribute('tabindex', '0');
        span.setAttribute('aria-expanded', 'false');
        span.setAttribute('aria-controls', sectionId);
        
        ul.id = sectionId;
        
        var toggleSection = function() {
          var isCurrentlyCollapsed = ul.classList.contains('collapsed');
          
          if (accordion) {
            // Close all sections first
            document.querySelectorAll(".sidebar-nav > ul > li.sidebar-group").forEach(function(otherNode) {
              var otherUl = otherNode.querySelector('ul');
              var otherSpan = otherNode.querySelector('span[role="button"]');
              
              if (!otherUl || !otherSpan) {
                return;
              }
              
              otherUl.classList.add('collapsed');
              otherNode.classList.remove('expanded');
              otherSpan.setAttribute('aria-expanded', 'false');
            });
            
            if (isCurrentlyCollapsed) {
              ul.classList.remove('collapsed');
              node.classList.add('expanded');
              span.setAttribute('aria-expanded', 'true');
            }
          } else {
            // Toggle without closing other sections
            if (isCurrentlyCollapsed) {
              ul.classList.remove('collapsed');
              node.classList.add('expanded');
              span.setAttribute('aria-expanded', 'true');
            } else {
              ul.classList.add('collapsed');
              node.classList.remove('expanded');
              span.setAttribute('aria-expanded', 'false');
            }
          }
        };
        
        span.onclick = toggleSection;
        span.onkeydown = function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleSection();
          }
        };
        
        node.firstChild.replaceWith(span);
        ul.classList.add('collapsed');
        node.classList.add('sidebar-group');
      });
      
      var active = document.querySelector(".sidebar-nav li.active");
      if (active) {
        var parentList = active.parentElement;
        var parentNode = parentList.parentElement;
        var parentSpan = parentNode.querySelector('span[role="button"]');
        
        if (parentList && parentNode && parentSpan) {
          parentList.classList.remove('collapsed');
          parentNode.classList.add('expanded');
          parentSpan.setAttribute('aria-expanded', 'true');
        }
      }
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(sidebarExpandCollapsePlugin, window.$docsify.plugins || []);
})();