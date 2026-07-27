// Adds markdown table renderer for use with responsive table CSS
// Original source plugin 'docsify-responsive-tables' by @jhildenbiddle
// Code generated/assisted by Anthropic Claude AI */

(function () {
  function responsiveTablesPlugin(hook, vm) {
    hook.doneEach(function () {
      // Find all tables that haven't been processed
      const tables = document.querySelectorAll('table:not([data-responsive-processed])');
      
      tables.forEach(function(table) {
        try {
          // Mark as processed
          table.setAttribute('data-responsive-processed', 'true');
          
          // Generate unique ID
          const tableId = '_' + Math.random().toString(36).substr(2, 9);
          table.id = tableId;
          
          // Create wrapper if it doesn't exist
          if (!table.parentElement.classList.contains('table-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
          }

          // Get headers - matching v4 approach
          const thElms = Array.apply(
            null,
            table.getElementsByTagName('th')
          );
          const thTitles = thElms.map(function (thElm) {
            return thElm.innerHTML.replace(' ', ' ');
          });

          // Generate CSS rules - matching v4 approach
          if (thTitles.length > 0) {
            const styleElm = document.head.appendChild(
              document.createElement('style')
            );
            const styleSheet = styleElm.sheet;

            thTitles.forEach((title, i) => {
              const rule = `#${tableId} td:nth-child(${
                i + 1
              })::before{content:"${title}";}`;

              try {
                styleSheet.insertRule(rule, styleSheet.cssRules.length);
              } catch (e) {
                // eslint-disable-next-line
                console.log('Failed to render responsive table: ' + e);
              }
            });
          }
        } catch (e) {
          // eslint-disable-next-line
          console.log('Failed to render responsive table: ' + e);
        }
      });
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = window.$docsify.plugins || [];
  window.$docsify.plugins.push(responsiveTablesPlugin);
})();