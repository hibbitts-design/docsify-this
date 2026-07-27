// Support for footer files ('_footer.md') in subfolders
// Original source plugin 'docsify-footer' by @alertbox
// This code was developed with the assistance of ChatGPT, an AI language model by OpenAI
(function (Docsify, $docsify, undefined) {
    const DEFAULT_FOOTER = "_footer";
  
    const install = function (hook, vm) {
      const { loadFooter, ext, requestHeaders } = vm.config;
  
      // Fail fast if loadFooter is not defined
      if (!loadFooter) {
        return;
      }
  
      hook.afterEach(function (html, next) {
        try {
          // Parse current URL to extract folder path
          var urlFragment = window.location.hash.slice(1); // Remove '#' character
          var pathSegments = urlFragment.split("/");
          var folderPath = pathSegments.slice(0, -1).join("/"); // Exclude the file part
          folderPath = folderPath ? folderPath + "/" : ""; // Ensure folder path ends with '/'
        
          var footerAppended = false; // Flag to indicate footer append status
        
          var footerFile =
            folderPath +
            (loadFooter === true ? DEFAULT_FOOTER + ext : loadFooter);
        
          // Fetch and append the footer content
          Docsify.get(vm.router.getFile(footerFile), false, requestHeaders)
            .then((content) => {
              const footerHtml = vm.compiler.compile(content);
              footerAppended = true; // Set flag to true as footer is appended
              next(html + footerHtml); // Append the footer to the current page content
            })
        } finally {
          // Check if footer was not appended, then pass html
          if (!footerAppended) {
            next(html);
          }
        }
      });
    };
  
    $docsify.plugins = [].concat(install, $docsify.plugins);
  })(Docsify, $docsify);
  