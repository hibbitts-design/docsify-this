/**
 * @fileoverview
 * Docsify Page Actions Menu Plugin
 *
 * Adds a customizable menu to the top of each Docsify documentation page.
 * Inspired by Mintlify's "copy page" menu, but extended for fully custom actions
 * via the `$docsify.pageActionItems` config.
 *
 * Default actions:
 *   - Copy page as Markdown
 *   - View Markdown
 *   - Open Claude with page context
 *   - Open Perplexity with page context
 *
 * Usage:
 *   window.$docsify = {
 *     // ...other config,
 *     pageActionItems: [
 *       // ...custom menu items
 *     ]
 *   };
 *   // Plugin is loaded via <script> and will auto-register.
 *
 * @author Mihály Tóth
 * @license MIT
 */
function pageActionItems(hook, vm) {
   let rawMarkdown = '',
      blobUrl = null;

   // SVG icons for menu items
   const svgs = {
      copy: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 5.25H7.25C6.14543 5.25 5.25 6.14543 5.25 7.25V14.25C5.25 15.3546 6.14543 16.25 7.25 16.25H14.25C15.3546 16.25 16.25 15.3546 16.25 14.25V7.25C16.25 6.14543 15.3546 5.25 14.25 5.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.80103 11.998L1.77203 5.07397C1.61003 3.98097 2.36403 2.96397 3.45603 2.80197L10.38 1.77297C11.313 1.63397 12.19 2.16297 12.528 3.00097" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      view: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.25 3.75H2.75C1.64543 3.75 0.75 4.64543 0.75 5.75V12.25C0.75 13.3546 1.64543 14.25 2.75 14.25H15.25C16.3546 14.25 17.25 13.3546 17.25 12.25V5.75C17.25 4.64543 16.3546 3.75 15.25 3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.75 11.25V6.75H8.356L6.25 9.5L4.144 6.75H3.75V11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 9.5L13.25 11.25L15 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.25 11.25V6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      claude:
         '<svg fill="currentColor" fill-rule="evenodd" height="18" width="18" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Anthropic</title><path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path></svg>',
      perplexity:
         '<svg width="18" height="18" viewBox="0 0 34 38" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.12114 0.0400391L15.919 9.98864V9.98636V0.062995H18.0209V10.0332L28.8671 0.0400391V11.3829H33.3202V27.744H28.8808V37.8442L18.0209 28.303V37.9538H15.919V28.4604L5.13338 37.96V27.744H0.680176V11.3829H5.12114V0.0400391ZM14.3344 13.4592H2.78208V25.6677H5.13074V21.8167L14.3344 13.4592ZM7.23518 22.7379V33.3271L15.919 25.6786V14.8506L7.23518 22.7379ZM18.0814 25.5775V14.8404L26.7677 22.7282V27.744H26.7789V33.219L18.0814 25.5775ZM28.8808 25.6677H31.2183V13.4592H19.752L28.8808 21.7302V25.6677ZM26.7652 11.3829V4.81584L19.6374 11.3829H26.7652ZM14.3507 11.3829H7.22306V4.81584L14.3507 11.3829Z" fill="currentColor"></path></svg>',
   };

   // Default menu items
   const defaultItems = [
      {
         icon: svgs.copy,
         label: 'Copy page',
         desc: 'Copy page as Markdown for LLMs',
         action: 'copy',
         onSuccess: 'Copied!',
         onError: 'Copy failed!',
      },
      {
         icon: svgs.view,
         label: 'View as Markdown <span style="margin-left:0.25rem;font-size:0.85em;">↗</span>',
         desc: 'View this page as plain text',
         action: 'view',
      },
      {
         icon: svgs.claude,
         label: 'Open in Claude <span style="margin-left:0.25rem;font-size:0.85em;">↗</span>',
         desc: 'Ask questions about this page',
         action: 'llm',
         llm: 'claude',
      },
      {
         icon: svgs.perplexity,
         label: 'Open in Perplexity <span style="margin-left:0.25rem;font-size:0.85em;">↗</span>',
         desc: 'Ask questions about this page',
         action: 'llm',
         llm: 'perplexity',
      },
   ];

   const defaultButton = {
      icon: svgs.copy,
      label: 'Page actions',
   };

   // LLM target URLs
   const llmUrls = {
      chatgpt: (md) =>
         `https://chatgpt.com/?hints=search&prompt=Read+from+${encodeURIComponent(
            md
         )}+so+I+can+ask+questions+about+it.`,
      claude: (url) =>
         `https://claude.ai/new?q=Read%20from%20${encodeURIComponent(
            url
         )}%20so%20I%20can%20ask%20questions%20about%20it.`,
      perplexity: (url) =>
         `https://www.perplexity.ai/search/new?q=Read%20from%20${encodeURIComponent(
            url
         )}%20so%20I%20can+ask+questions+about+it.`,
   };

   // Helper: handle onSuccess/onError for an item
   function handleActionResult(type, item, context, error) {
      const handler = item[type];
      if (!handler) return;

      if (typeof handler === 'function') {
         handler(context, error);
      } else {
         // If string or localization object, show as notification (adapt this to your UI)
         const msg = getLocalizedText(handler, window.location.hash.replace(/^#/, '') || '/');
         // For demo: set button label, but you may want a toast/notification
         if (context.triggerButton) {
            context.triggerButton.querySelector('span:nth-child(2)').textContent = msg;
            setTimeout(() => {
               context.triggerButton.querySelector('span:nth-child(2)').textContent =
                  getLocalizedText(
                     context.triggerButtonConfig.label,
                     window.location.hash.replace(/^#/, '') || '/'
                  );
            }, 1800);
         } else {
            alert(msg); // fallback
         }
      }
   }

   // Get effective menu items (user config or defaults)
   function getMenuItems() {
      const { pageActionItems } = vm.config;
      if (
         pageActionItems &&
         typeof pageActionItems === 'object' &&
         !Array.isArray(pageActionItems) &&
         pageActionItems.items
      ) {
         return pageActionItems.items;
      } else if (Array.isArray(pageActionItems)) {
         return pageActionItems;
      } else {
         return defaultItems;
      }
   }

   // Get the button config
   function getButton() {
      return { ...defaultButton, ...(vm.config.pageActionItems.button ?? {}) };
   }

   // Get current Docsify page URL
   function getCurrentPageUrl() {
      const { origin, pathname } = window.location;
      let route = window.location.hash.replace(/^#\//, '').replace(/\.md$/, '') || 'README.md';
      if (!route.endsWith('.md')) route += '.md';

      const cleanPathname = pathname.replace(/\/$/, '');
      const cleanRoute = route.replace(/^\//, '');
      return origin + cleanPathname + '/' + cleanRoute;
   }

   // Get localized text utility function (inpsired by the implementation in the docsify-pagination plugin)
   function getLocalizedText(text, path) {
      if (typeof text === 'string') return text;
      if (typeof text === 'object' && text !== null) {
         // Try to find the best match (longest matching prefix)
         let matchedLocale = null;
         let matchedLength = -1;
         for (const locale in text) {
            if (path && path.startsWith(locale) && locale.length > matchedLength) {
               matchedLocale = locale;
               matchedLength = locale.length;
            }
         }
         if (matchedLocale) return text[matchedLocale];
         // Fallback: try root ("/") or first available
         if (text['/']) return text['/'];
         return Object.values(text)[0];
      }
      return '';
   }

   // Inject CSS only once
   function injectStyles() {
      if (document.getElementById('page-actions-menu-style')) return;
      const style = document.createElement('style');
      style.id = 'page-actions-menu-style';
      style.textContent = `
      :root {
        --dapm-bg-alt: var(--color-mono-2, #f5f5f5);
        --dapm-bg: var(--color-mono-1, #fff);
        --dapm-border-color: var(--border-color, #eee);
        --dapm-border-radius: var(--border-radius, 6px);
        --dapm-button-padding: var(--button-padding, 8px 16px);
        --dapm-desc-color: var(--color-mono-max, #888);
        --dapm-font-size-desc: var(--font-size-xs, 0.9rem);
        --dapm-font-size-label: var(--font-size-l, 1.1rem);
        --dapm-font-size: var(--font-size-s, 1rem);
        --dapm-font-weight: var(--font-weight, 500);
        --dapm-icon-bg: var(--color-mono-min, #f9f9f9);
        --dapm-icon-box-size: 26px;
        --dapm-spacing: var(--navbar-drop-link-spacing, 8px);
        --dapm-text: var(--color-text, #222);
        --dapm-transition-duration: var(--duration-medium, 0.2s);
        --dapm-z-index: var(--z-sidebar-toggle, 20);
      }
      #page-actions-menu-container {
        display: flex;
        justify-content: flex-end;
        margin-bottom: var(--dapm-spacing);
        color: var(--dapm-text);
      }
      #page-actions-menu-wrapper { position: relative; }
      #page-actions-menu-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 12px;
        border-radius: var(--dapm-border-radius);
        border: 1px solid var(--dapm-border-color);
        background: var(--dapm-bg);
        color: var(--dapm-text);
        transition: background var(--dapm-transition-duration);
        font-weight: 500;
        font-size: 1rem;
        box-shadow: 0 2px 4px var(--dapm-bg-alt);
        cursor: pointer;
      }
      #page-actions-menu-btn:hover { background: var(--dapm-bg-alt); }
      #page-actions-menu-dropdown {
        position: absolute;
        right: 0;
        top: 2.56rem;
        z-index: var(--dapm-z-index);
        min-width: 164px;
        text-wrap-mode: nowrap;
        background: var(--dapm-bg);
        border: 1px solid var(--dapm-border-color);
        border-radius: var(--dapm-border-radius);
        box-shadow: 0 2px 4px var(--dapm-bg-alt);
        padding: 0;
        font-size: var(--dapm-font-size);
        display: none;
      }
      .page-actions-menu-item {
        display: flex;
        width: 100%;
        align-items: center;
        gap: var(--dapm-spacing);
        padding: var(--dapm-button-padding);
        color: var(--dapm-text);
        text-align: left;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: var(--dapm-border-radius);
        transition: background var(--dapm-transition-duration);
      }
      .page-actions-menu-item:not(:last-child) { margin-bottom: var(--dapm-spacing); }
      .page-actions-menu-item:hover { background: var(--dapm-bg-alt); }
      .page-actions-menu-item:focus { background: var(--dapm-bg-alt); }
      .page-actions-menu-item-action-label { font-weight: calc(var(--dapm-font-weight) * 2); }
      .page-actions-menu-icon {
        width: var(--dapm-icon-box-size);
        height: var(--dapm-icon-box-size);
        overflow: hidden;
        font-size: var(--dapm-font-size-label);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-color: var(--dapm-border-color);
        border-radius: var(--dapm-border-radius);
        background-color: var(--dapm-icon-bg);
        padding: 4px;
      }
      .page-actions-menu-desc {
        color: var(--dapm-desc-color);
        font-size: var(--dapm-font-size-desc);
      }
    `;
      document.head.appendChild(style);
   }

   // Generate HTML for menu
   function generateMenuHtml() {
      const items = getMenuItems();
      const button = getButton();

      // Handle localization of the available texts:
      const path = window.location.hash.replace(/^#/, '') || '/';
      const buttonLabel = getLocalizedText(button.label, path);
      const localizedItems = items.map((item) => {
         return {
            ...item,
            label: getLocalizedText(item.label, path),
            desc: getLocalizedText(item.desc, path),
         };
      });

      return `
      <div id="page-actions-menu-container">
        <div id="page-actions-menu-wrapper">
          <button id="page-actions-menu-btn">
            <span class="page-actions-menu-icon">${button.icon}</span>
            <span>${buttonLabel}</span>
          </button>
          <div id="page-actions-menu-dropdown">
            ${localizedItems
               .map(
                  (item, idx) => `
              <button tabindex="0" class="page-actions-menu-item" data-idx="${idx}">
                <span class="page-actions-menu-icon">${item.icon}</span>
                <div>
                  <div class="page-actions-menu-item-action-label">${item.label}</div>
                  <div class="page-actions-menu-desc">${item.desc}</div>
                </div>
              </button>
            `
               )
               .join('')}
          </div>
        </div>
      </div>
    `;
   }

   // Bind all menu events
   function bindMenuEvents() {
      const btn = document.getElementById('page-actions-menu-btn');
      const dropdown = document.getElementById('page-actions-menu-dropdown');
      const items = getMenuItems();
      const triggerButtonConfig = getButton();
      const path = window.location.hash.replace(/^#/, '') || '/';
      if (!btn || !dropdown) return;

      btn.onclick = (e) => {
         e.stopPropagation();
         dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      };
      document.body.addEventListener('click', () => {
         dropdown.style.display = 'none';
      });

      dropdown.querySelectorAll('.page-actions-menu-item').forEach((el, idx) => {
         el.onclick = async (e) => {
            e.stopPropagation();
            const item = items[idx];
            const context = {
               rawMarkdown,
               blobUrl,
               vm,
               triggerButton: btn,
               triggerButtonConfig,
               item,
               event: e,
            };
            try {
               let result;
               if (item.action === 'copy' && rawMarkdown) {
                  await navigator.clipboard.writeText(rawMarkdown);
                  handleActionResult('onSuccess', item, context);
               } else if (item.action === 'view' && blobUrl) {
                  window.open(blobUrl, '_blank');
                  handleActionResult('onSuccess', item, context);
               } else if (item.action === 'llm') {
                  let url =
                     item.llm === 'chatgpt'
                        ? llmUrls[item.llm]?.(rawMarkdown)
                        : llmUrls[item.llm]?.(getCurrentPageUrl());
                  window.open(url, '_blank');
                  handleActionResult('onSuccess', item, context);
               } else if (typeof item.onClick === 'function') {
                  result = await item.onClick(context);
                  handleActionResult('onSuccess', item, context);
               }
               dropdown.style.display = 'none';
            } catch (error) {
               handleActionResult('onError', item, { ...context, error }, error);
               dropdown.style.display = 'none';
            }
         };
      });
   }

   // Docsify hooks
   hook.beforeEach((md) => {
      rawMarkdown = md;
      if (blobUrl) URL.revokeObjectURL(blobUrl);
      blobUrl = URL.createObjectURL(new Blob([md], { type: 'text/markdown' }));
      return md;
   });
hook.afterEach((html, next) => {
      injectStyles();
      const menuHtml = generateMenuHtml();
      
      // Get the target image class from config
      const targetImageClass = vm.config.pageActionItems?.targetImageClass;
      
      // If no target class is specified, put menu at the top
      if (!targetImageClass) {
         html = /<article[\s>]/.test(html)
            ? html.replace(/(<article[\s>])/i, `$1${menuHtml}`)
            : menuHtml + html;
         next(html);
         return;
      }
      
      // Convert to array if it's a single string
      const classes = Array.isArray(targetImageClass) ? targetImageClass : [targetImageClass];
      let menuAdded = false;
      
      // Try each class until we find one
      for (const className of classes) {
         // If class name contains "heading", look for image + headings pattern
         if (className.includes('heading')) {
            const pattern = `(<img[^>]*class="[^"]*${className}[^"]*"[^>]*>[^<]*</p>\\s*<h1[^>]*>.*?</h1>(?:\\s*<h2[^>]*>.*?</h2>)?)`;
            const regex = new RegExp(pattern, 'is');
            
            if (regex.test(html)) {
               html = html.replace(regex, `$1${menuHtml}`);
               menuAdded = true;
               break;
            }
         } else {
            // No "heading" in class name, look for just the image
            const pattern = `(<img[^>]*class="[^"]*${className}[^"]*"[^>]*>)`;
            const regex = new RegExp(pattern, 'i');
            
            if (regex.test(html)) {
               html = html.replace(regex, `$1${menuHtml}`);
               menuAdded = true;
               break;
            }
         }
      }
      
      // If no target images found, put menu at the top as fallback
      if (!menuAdded) {
         html = /<article[\s>]/.test(html)
            ? html.replace(/(<article[\s>])/i, `$1${menuHtml}`)
            : menuHtml + html;
      }
      
      next(html);
   });
   hook.doneEach(bindMenuEvents);
}

// ---- USAGE ----
window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(pageActionItems);
