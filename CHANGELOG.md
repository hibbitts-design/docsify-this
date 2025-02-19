# Changelog

## [1.10.2] - XX/XX/XXXX

**Improved:**
* Various minor enhancements to Search plugin
* Updated ReadMe
* Underscores may be used to represent spaces in URL parameters, in addition to the standard encoded value of %20 (thanks to a helpful discussion with @davidmalawey)

**Bugfix:**
* Fixed incorrect theme CSS with regards to image scaling (with thanks and appreciation to @harlows for the PR)

## [1.10.1] - 02/01/2025🍁

**New:**
* Always on option for dark theme
* Support for image grid plugin, including customizations (with thanks and appreciation to @gllmAR)
* Support for image captions plugin via optional `image-captions` URL parameter (with thanks and appreciation to @gllmAR)

**Improved:**
* Updated ReadMe
* Support horizontal scrolling in code blocks
* Adjusted bottom margin for summary elements
* Various Web Page Builder UI updates

**Bugfix:**
* Fixed URL parameter handling of dark mode colors for links and link hovers
* Set correct default link color for dark mode (with contrast ratio for WCAG)

## [1.10.0] - 01/01/2025🎉

**New:**
* Additional link appearance and behavior Web Page Builder options and URL parameters (`link-color-hover`,  `link-color-hover-dark-mode`, `link-text-decoration`, `link-text-decoration-hover` and `external-link-target`)
* Initial offering of pre-configured styles for embedding content into popular LMSs (Learning Management Systems): http://load-canvas.docsify-this.net, http://load-moodle.docsify-this.net, http://load-brightspace.docsify-this.net and http://load-sakai.docsify-this.net

**Improved:**
* Updated ReadMe
* Updated example custom CSS for Moodle LMS
* Updated to latest stable Docsify 4.x preview build (including Marked 4.2.12)
* Minor Web Page Builder UI updates
* Font size can now be set in px as well as rem units via URL parameter

**Bugfix:**
* Restored missing Website logo support in Web Page Builder
* Convert any '&amp;' encoded entities in URLs to '&'
* Only load custom.css file when displaying remote Markdown file
* Ensure font-family URL parameter is decoded correctly

## [1.9.16] - 11/25/2024

**Improved:**
* Updated ReadMe

**Bugfix:**
* More robust handling of of Web Page Builder custom settings

## [1.9.15] - 11/18/2024

**New:**
* Support for SVG icons via optional `svg-icons` URL parameter (with thanks and appreciation to @erickjx for the updated Font Awesome plugin)
* Support for prefixing Markdown file URLs with Docsify-This.net to load the Web Page Builder with that URL, for example https://docsify-this.net?https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md
* Support for flexible alerts plugin (with thanks and appreciation to @fzankl)

**Improved:**
* Use of window.matchMedia.addListener replaced with window.matchMedia.addEventListener
* Updated ReadMe
* Addition of optional `lazy-load-images` URL parameter for enabling Browser lazy loading of images
* Cleanup HTML
* Updated Font Awesome Free assets to v6.6.0
* Updated to use docsify-tabs plugin v1.6.3

**Bugfix:**
* Provide default values in error handling to avoid possible script error
* Add missing variable declaration for enabledarkmode

## [1.9.14] - 10/16/2024

**Improved:**
* Updated CSS with word-wrap for code blocks

**Bugfix:**
* Added missing Markdown Prism language file
* Fix formatting conflict with Prism formatted code blocks

## [1.9.13] - 10/14/2024🍁

**Improved:**
* Updated ReadMe
* Added basic CORS (Cross-Origin Resource Sharing) error handling

**Bugfix:**
* Support expected passing of id parameter
* Scroll offset fix (with thanks and appreciation to @rizdaprasetya for the initial code)

## [1.9.12] - 09/18/2024

**Improved:**
* Updated ReadMe
* Minor Web Page Builder UI updates
* Minor theme update

## [1.9.11] - 09/03/2024🏫

**Improved:**
* Updated ReadMe
* Removed RunKit support due to current unavailability of platform and unknown future

**Bugfix:**
* Fixed Web Page Builder button lable handling on smaller screens 
* Support file URL for 'Edit this Page' links as expected when Sidebar is displayed with single pages

## [1.9.10] - 08/27/2024

**New:**
* Added platform default font choice ('system-ui')
* Added basic 404 error handling (i.e. 404 - File not found error)

**Improved:**
* Updated ReadMe
* Use Docsify Frontmatter plugin instead of custom HTML filtering
* Docsify-This Web app UI appearance updates
* Optimized images for smaller download sizes (with thanks and appreciation to TinyPNG)

## [1.9.9] - 08/19/2024

**New:**
* Added example Docsify-This template (Multiple Page Open Publishing Site Template)
* Added checkbox to move Navbar items to the top of the Sidebar on smaller screens in Advanced Web Page Builder (in addition to URL parameter `mergeNavbar`)

**Improved:**
* Support for mathematical formula display now provided by the Latex plugin for compatibility with future Marked.js compatibility (with thanks and appreciation to @scruel)
* Search plugin URL parameter changed to `searchbox` from `search` for future Docsify v5 compatability
* Updated ReadMe
* Reorganized Docsify-This docs

## [1.9.8] - 07/23/2024

**Improved:**
* Improve accessibility of Font Awesome icons when used for decorative elements (automatic addition of `aria-hidden` attribute assuming decorative icons)
* Updated ReadMe

## [1.9.7] - 06/21/2024🏒

**Improved:**
* Updated Open Graph image for social media
* Updated ReadMe
* Adjusted bottom margin for summary elements
* Improved Search plugin results list presentation, including source page title when appropriate

**Bugfix:**
* Change default external link config from '_blank' to '_top'
* Delete and create local database for Search plugin to remove conflicts between Docsify-This web sites

## [1.9.6] - 06/03/2024

**New:**
* New Open Graph image for social media
* Support of optional `edit-link-emoji` URL parameter for custom emoji 'Edit this Page' link (not available in the Web Page Builder)

**Improved:**
* Updated ReadMe
* Added CSS Markdown class to support responsive HTML images `responsive`

**Bugfix:**
* Added CSS to automatically wrap links that overflow
* Fixed URL error checking for raw GitHub Gists
* Do not overwrite existing target attribute in Markdown links
* Properly pass URL parameter values when configuring the default values of the Docsify-This Web Page Builder
* Added CSS to automatically wrap code blocks that overflow
* Added CSS to better vertically align 'Edit this Page' emoji and text

## [1.9.5] - 04/29/2024🏒

**New:**
* Support for .markdown file extension in addition to .md
* Added Docsify RunKit plugin (with thanks and appreciation to @jhildenbiddle for developing the plugin)

**Improved:**
* Updated ReadMe

**Bugfix:**
* Remove CSS for use with accordion elements with plain details/summary elements

## [1.9.4] - 03/28/2024

**Improved:**
* Updated ReadMe
* Updated to use Coloris v0.22.0
* Updated to use docsify-tabs plugin 1.6.2
* Support display of site name with standard Docsify Sidebar
* Streamline handling of local URLs to handle 'Edit this Page' links and use of hypothesis
* Streamline hook.doneEach script
* Code of Conduct now located in .github Repository

**Bugfix:**
* Remove extra `<br>` elements when credits are visible

## [1.9.3] - 02/22/2024

**New:**
* Support for the Browser-level image lazy loading (with thanks and appreciation to @sy-records for the source plugin 'docsify-loading')
* Added example multiple language template (Docsify-This Multi-language Site Template) 

**Improved:**
* Add ability to define custom colors for badges (with thanks to @cmadland for the example use of colored badges)
* Updated ReadMe
* Support of footer files ('_footer.md') in subfolders, which also provides multi-language usage (with thanks and appreciation to @alertbox for the source plugin 'docsify-footer')

**Bugfix:**
* Ensure the link for displayed site name is correct after scrolling to id element

## [1.9.2] - 02/05/2024

**New:**
* Added CSS Markdown class for right-aligned columns `column-right`
* Added CSS Markdown class for full width background gradient header image (`header-image-fade-full-width`)
* Use of Docsify and Docsify Themeable preview build assets for access to upcoming Docsify accessibility enhancements authored by @jhildenbiddle (with thanks and appreciation to John)
* Added checkbox to enable the Advanced Web Page Builder (in addition to URL parameter https://docsify-this.net?advanced=true)
* Added example Docsify-This templates (Docsify-This Simple Visual Portfolio Template and Docsify-This Visual Portfolio Template) 

**Improved:**
* Updated ReadMe
* Moved zoom images option to More Page Appearance Options in Web Page Builder
* Moved page headers font weight to More Page Appearance Options in Web Page Builder
* Separated Coverpage color options from Dark Theme settings in Advanced Web Page Builder

## [1.9.1] - 01/18/2024❄️

**New:**
* Added CSS Markdown class for taller full width header image `header-tall-image-full-width`
* Added CSS Markdown class for rounded button `button-rounded`
* Added CSS Markdown classes for secondary buttons `button-secondary` and `button-secondary-rounded`

**Improved:**
* Adjusted padding for Markdown File URL field and buttons in Web Page Builder
* Further adjusted Docsify-This Web Page Builder primary and secondary button styles
* Support for Website logo ('logo') in Web Page Builder
* Adjusted display of full width header image

## [1.9.0] - 01/01/2024🎉

**New:**
* Support for the docsify-tabs plugin (with thanks and appreciation to @jhildenbiddle for the plugin and thanks to @harlows for requesting this feature which made me discover it was unintentionally not already included)
* Added CSS Markdown class `reverse-columns`
* Updated Docsify-This Multiple Page Site Template
* Added example Docsify-This template (Markdown Starter Portfolio Template) 

**Improved:**
* Support for Wikilinks in Tables (with thanks and appreciation to @ethack for the docsify-wikilink PR)
* Support for Wikilink images
* Updated ReadMe
* Improved image alignment with two column layouts
* Improved contrast for unselected Tabs
* Updated Docsify-This Web Page Builder button and field styles
* Slightly adjusted Docsify-This Web Page Builder color scheme
* Updated screenshots

**Bugfix:**
* Pass all existing URLs on multiple page sites with 'Edit this Page' links
* Utilize revised array logic for carrying over URL params
* Remove link color for H2 headers on Docsify-This app page

## [1.8.3] - 11/27/2023

**Improved:**
* Use of 'aria-label' instead of 'label for' on select Web Page Builder elements to improve accessibility with screen readers
* Updated screenshots
* Updated ReadMe
* Added 'onedrive.live.com' to domains made responsive through the automatic addition of the CSS Markdown class `video-container-16by9`

## [1.8.2] - 11/14/2023

**Improved:**
* Support for URL parameter aliases (e.g. use of camel case in additions to hyphenated names)
* Updated ReadMe

**Bugfix:**
* Ensure custom Docsify Sidebar is present when setting site name
* Provide expected results for true and false settings with Web Page Builder defaults
* Add trailing slash to base Docsify URL to support running from a subdirectory

## [1.8.1] - 10/31/2023🎃

**Improved:**
* Updated ReadMe
* Support for Website name ('name') and pagination buttons in Web Page Builder defaults

**Bugfix:**
* Use correct full HedgeDoc URL files for 'Edit this Page' when Sidebar is present
* Added relevant element IDs to 'label for' attributes

## [1.8.0] - 10/26/2023

**New:**
* Support for display of site name in custom Docsify Sidebar
* Support display of pagination buttons in page content area
* Added documentation for the display of HedgeDoc files via manual Docsify-This URLs using 'download' as the `homepage` URL parameter (with thanks to @TaylorJadin for discovering this ability)
* Included 'hedgedocInstances' setting in index.html (when using your own instance of Docsify-This.net) for supporting HedgeDoc URLs in the Web Page Builder
* Support for 'Edit this Page' link in Web Page Builder for HedgeDoc URLs (when using your own instance of Docsify-This.net)

**Improved:**
* Updated ReadMe
* Support passing of Boolean values in URL parameters
* Automatically set Browser tab title to the value of 'name' parameter

## [1.7.5] - 09/28/2023⚛️

**New:**
* Support for custom Docsify Sidebar automatic page table of contents (`subMaxLevel`) in Advanced Web Page Builder
* Support for 'Edit this Page' links with raw Gist file URLs (thanks to wolflu for sharing the possibility of using Gists with Docsify-This) 
* If Docsify-This Standalone Web Page window already exists refresh it rather than open a new window

**Improved:**
* Updated ReadMe

## [1.7.4] - 08/31/2023

**New:**
* Support for 'Edit this Page' links with Beta github.dev (web editor) via Markdown File URL field in Web Page Builder and URL parameter

**Improved:**
* Remove selection of file URL upon click
* Updated ReadMe

## [1.7.3] - 08/23/2023🌒

**New:**
* Initial support of Web Page Builder advanced mode (`https://docsify-this.net/?advanced=true`)
* Support of all options with remote passing of initial URL parameter values

**Improved:**
* Updated ReadMe
* Use light/dark theme display for navpills on Docsify-This app page
* Use light/dark theme display for topic indexes

**Bugfix:**
* Update Sidebar chevron with custom link colour
* Remove Coloris opacity selector
* Add missing zoom-image URL parameter passing
* Fix handling of empty Title on Browser Tab field
* Automatically make Edit Page link to repository root if custom Sidebar or Navbar in use

## [1.7.2] - 08/15/2023

**Improved:**
* Added 'youtube-nocookie.com' to domains made responsive through the automatic addition of the CSS Markdown class `video-container-16by9`
* Updated ReadMe
* Improved accessibility of app logo, Web Page Builder and documentation text
* Improved accessibility of app logo and text of Publishing with Docsify-This Guide
* Web Page Builder colour scheme changed
* Support light/dark theme display for navpills
* Minor Web Page Builder spacing and style improvements

## [1.7.1] - 07/27/2023

**New:**
* Support for enabling image zoom (`zoom-image=true`), where tapping on images enlarges them 
* Added example Docsify-This template (Multiple Page Course Site Template) 
* Support for nav pill (`navpill`) Markdown CSS class
* Support for enabling Docsify Search plugin (`search=true`) when using a custom Sidebar for multiple page sites

**Improved:**
* Updated ReadMe
* Updated to use Coloris v0.21.0

**Bugfix:**
* Support for the use of hyphens within footnote names (and passed along to Docsify Plugin author @sy-records)
* Restored loading of custom.css file

## [1.7.0] - 06/27/2023

**New:**
* Initial support for the display of AsciiDoc files ('.adoc' extension) via manual Docsify-This URLs through DownDoc (with thanks and appreciation to @gchiesa for developing the plugin)
* Support possible Docsify loadSidebar parameter (`loadSidebar=_sidebar.md`) to display a custom sidebar for multiple page sites
* Support for loading a custom favicon image file (`loadFavicon=favicon.png`)
* All iFrames with source domains 'youtube.com' or 'docs.google.com' made responsive through the automatic addition of the CSS Markdown class `video-container-16by9`

**Improved:**
* Updated ReadMe
* Support the use of an H1 tag as a site title when a custom sidebar is used
* Remove unintended double thick bottom border from accordion elements
* Updated to use Docsify v4.13.1

**Bugfix:**
* Remove unneeded javascript .map files
* Require filename is present in Web Page Builder Markdown file URL (no longer default to README.md)

## [1.6.5] - 06/09/2023

**Improved:**
* Updated ReadMe
* Make filename extension handling more robust and flexible
* Improve extension checking and related error message
* Updated to Docsify Mermaid Plugin v2, which with Mermaid v10 which only loads Mermaid components as required when displaying remote Markdown files

**Bugfix:**
* Update all needed Coverpage elements when switching light/dark theme modes

## [1.6.4] - 05/11/2023

**Improved:**
* Updated ReadMe
* Refactored handling of light/dark theme mode switching
* Refactored passing of existing URL parameters
* Better support for linking to a single Git repository URL
* More efficient calculation of 'Edit this Page' URLs

**Bugfix:**
* Removed extraneous character from index.html
* Fix multiple page 'Edit this Page' link updating

## [1.6.3] - 05/07/2023

**Improved:**
* Updated ReadMe
* Refined responsive header line heights

## [1.6.2] - 04/21/2023

**Improved:**
* Updated ReadMe
* Increased support of HTML img tags with relative paths for GitHub and Codeberg Markdown files (use of '../' not supported)
* Refined responsive header font size and line heights

## [1.6.1] - 04/09/2023

**New:**
* Support optional URL parameters for key Web Page Builder defaults (`url-field`,`toc-layout`,`sidebar-layout`,`edit-link-checkbox`, and `show-page-options`)

**Improved:**
* Updated ReadMe
* Remove extra space between icon and text label for 'Edit this Page' link
* Use default theme colours for dark mode coverpage buttons

**Bugfix:**
* Fixed incorrect handling of dark mode color changes through updated function

## [1.6.0] - 03/22/2023

**New:**
* Coloris color picker (with thanks and appreciation to @mdbassit)
* Add Merriweather font choice

**Improved:**
* Updated ReadMe
* Set font of buttons to sans-serif
* Set font of badges to sans-serif

**Bugfix:**
* Properly format coverpage color parameter for CSS setting
* Remove duplicated code for dark mode support
* Remove unneeded web app page CSS
* Relocate Sidebar CSS to hide site title

## [1.5.3] - 03/13/2023

**Improved:**
* Adjust header colors in dark mode
* Updated web app banner area, including use of Docsify logo

## [1.5.2] - 03/10/2023

**New:**
* Support of optional header-weight parameter (`header-weight`) to set font weight of headers (default is 400 - regular)

**Improved:**   
* Updated ReadMe
* Load 700 font weight for bold (previously used 600, semi-bold)
* Minor improvements to the appearance of the Web Page Builder
* Do not override docsify-this.net and GitHub Docsify-This repository link targets
* Support for displaying a coverpage ('_coverpage.md' file) using the URL parameter 'coverpage=_true_' or via the 'coverpage' setting in index.html (when using your own instance of Docsify-This.net)
* Support of optional coverpage-color parameter (`coverpage-color`) to set the background color of the coverpage
* Support of optional coverpage-color-dark-mode parameter (`coverpage-color-dark-mode`) to set the background color of the coverpage in dark mode
* Update example custom CSS for LMSs

## [1.5.1] - 02/27/2023❄️

**New**
* Support for Codeberg-hosted Markdown files
* Support of optional page-title parameter (`page-title`) to add H1 header at top of page

**Improved:**   
* Updated ReadMe
* Restore initial header spacing except for alerts and blockquotes
* Page title parameter (`title`) renamed to Browser tab title (`browser-tab-title`)

**Bugfix:**  
* Support passing of `false` for URL parameters, in addition to removing the URL parameter to achieve the same result

## [1.5.0] - 02/13/2023

**New**
* Support for light/dark theme switching via 'dark-mode' URL parameter and setting in index.html (when using your own instance of Docsify-This.net)
* Support for images with border and rounded border (`image-border`,`image-border-rounded`)
* Support for 75%, 50% and 25% scaled images with border (`image-75-border`,`image-50-border` and `image-25-border`)
* Support of optional lineheight parameter (`line-height`)
* Support for Wikilinks, as used by Obsidian (with thanks and appreciation to @zpengg for developing the plugin)
* Support of optional page title parameter (`title`)
* Add Open Sans font choice (default Sakai LMS font)

**Improved:**   
* Consolidate and simplify example custom CSS for LMSs
* Updated ReadMe
* Additional checks for default blank values in Web Page Builder
* Match Docsify-This CSS with Docsify Starter Kits CSS

**Bugfix:**  
* Restore dropdown styling on Firefox

## [1.4.0] - 02/01/2023

**New:**
* Support for 75%, 50% and 25% scaled images (`image-75`,`image-50` and `image-25`)
* Added link to new [Markdown Publishing with Docsify-This guide](https://github.com/hibbitts-design/markdown-publishing-with-docsify-this)🎉
* Additional languages for Prismjs (Bash, Go, Java, Kotlin, PHP, Python and Swift in addition to the base set https://docsify.js.org/#/language-highlight?id=language-highlighting)
* Included 'allowedDomains' setting in index.html (when using your own instance of Docsify-This.net) for limiting all Markdown file source URLs to one or more permitted domains

**Improved:**   
* Added section about embedding Docsify-This pages into other platforms
in ReadMe
* Added section about example Docsify-This usage scenarios in ReadMe
* Support word-wrap in Sidebar navigation links

**Bugfix:**  
* Replaced incorrect font files for Source Sans Pro Google Font
* Fix visible Navbar conditional logic

## [1.3.3] - 01/24/2023

**New:**
* Add Lato font choice (default Canvas LMS font)
* Added example Docsify-This template (LMS Content Pages Template) 
* Add Helvetica Neue font choice (default Moodle LMS font)

**Improved:**   
* Adjust page margins when content is being embedded
* Adjust margins and padding for alerts and blockquotes
* Increase clickable areas for Topics alphabetical index
* Moved example CSS styles to custom.css file, which is only loaded when displaying a Markdown file
* Updated all Google Font files

## [1.3.2] - 01/17/2023

**New:**
* Support for displaying a footer ('_footer.md' file) using the URL parameter 'footer=true' or via the 'footer' setting in index.html (when using your own instance of Docsify-This.net)

**Improved:**   
* Included 'navbar' setting in index.html (when using your own instance of Docsify-This.net) for Docsify Open Publishing Kit compatability
* Added check for valid URL of Markdown file (files exists check does not seem possible due to CORS)
* Updated ReadMe

**Bugfix:**  
* Fixed JS source map errors 

## [1.3.1] - 12/15/2022

**New:**
* Support for background gradient header image (`header-image-fade`, with thanks to Jamie Adam for original CSS)
* Support for full-width header image (`header-image-full-width`, display of Table of Contents is not available)
* Added example Docsify-This template (Multiple Page Site Template) 

**Improved:**   
* Updated default example Markdown file for Web Page Builder
* Updated ReadMe

**Bugfix:**  
* Docsify-This page display credits no longer displayed on Docsify-This app page

## [1.3.0] - 11/30/2022

**New:**  
* Added Docsify Footnotes plugin (with thanks and appreciation to @sy-records for developing the plugin)
* Added Privacy Policy Summary
* Added maxLevel number field for Docsify sidebar to Web Page Builder
* Added example Docsify-This templates (One Page Course Template and One Page Article Template) 

**Improved:**  
* Updated ReadMe
* Increased use of locally loaded resources (100% tracker-free when displaying standard Markdown files)
* Conditionally load Embed.ly
* Moved all Docsify-This default theming CSS from custom.css to theme.css
* Fully support the Docsify configuration settings of 'maxLevel' for Docsify sidebar
* Changed default page Table of Contents to just H2 headers
* Changed default maxLevels for Docsify Sidebar to 2

**Bugfix:**  
* Moved script for URL field auto-focusing to ensure DOM is fully loaded
* Properly pass hypothesis URL parameter for multiple page Markdown files 
* Fixed use of a custom Docsify Navbar with GitHub repository link

## [1.2.2] - 11/21/2022

**New:**  
* Support for page annotation with Hypothes.is, an open source web annotation tool

**Improved:**  
* Add ability to show all page options with remote passing of initial URL value
* Included H5P script for improved responsive sizing of embedded H5P content
* Set font of buttons to sans-serif

**Bugfix:**  
* Fix unintended scrolling when URL field is auto-focused
* Remove unneeded character replacements for font-family parameter

## [1.2.1] - 11/01/2022

**New:**  
* Added Mermaid diagrams and Katex plugins (with thanks and appreciation to @Leward and @upupming for developing the respective Docsify Plugins)

**Improved:**  
* Support basic display options with remote passing of initial URL value (e.g. `http://docsify-this.net?url-field=https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md&toc=true&edit-link-checkbox=true`)

**Bugfix:**  
* Set missing EditCheck option for Restore all Defaults button
* Use correct ID for selecting URL field after displaying empty field error message

## [1.2.0] - 10/29/2022

**New:**  
* Added visual previews for page layout
* Added color preview area next to link color input field
* Support remote passing of initial URL value for Docsify-This Web Page Builder as parameter (e.g. `https://docsify-this.net/?url-field=https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md`)

**Improved:**  
* Refactor handling of fontfamily, fontsize and linkcolor parameters
* Refactor reset of Web Page Builder defaults
* Move check for Return Key with Web Page Builder
* Miscellaneous script cleanup
* CSS cleanup
* Error checking for invalid hexadecimal codes (incl. hide/show color preview)
* Updated to use Docsify v4.13 (removed deprecated emoji plugin)
* Leverage Docsify page-to-page cache if no dynamic URL parameters (i.e. `edit-link`)

## [1.1.2] - 10/03/2022

**Improved:**  
* Updated ReadMe
* Support of optional edit-link-text parameter (`edit-link-text`)

**Bugfix:**  
* Improved check for invalid full path to Markdown file
* Fixed handling of possible '#' character in link color field

## [1.1.1] - 09/22/2022

**New:**  
* Support of optional toc-headings parameter (`toc-headings`)

**Improved:**  
* Updated ReadMe

## [1.1.0] - 09/20/2022

**New:**  
* Added additional URL customization options to URL Builder

**Improved:**  
* Removed default ToC title and adjusted layout
* Support for scrolling of Table of Contents
* Updated ReadMe

**Bugfix:**  
* Properly handle spaces and commas when passing font-family URL parameter
* Decode passed URLs to handle possible encoded parameters

## [1.0.0] - 09/01/2022

**Improved:**  
* Updated ReadMe
* Loading min.js versions of resources
* Improved user interface of URL Builder
* Initial support for alternative ToC CSS (`toc-alt`)
* Support for display of standard Docsify Sidebar
* Changed from static Docsify URL to dynamic (i.e. current URL)
* Restored CDN loading of scripts
* Added support to retrieve values of URL parms (i.e. "Edit this Page" link)
* Remove any possible front matter with the delimiters '---'
* Restored Google Analytics, only loaded for local docsify-this.net pages
* Support of optional font-family parameter (`font-family`)
* Changed header image and updated visual styling of URL Builder
* Support for multiple page Markdown file sites on GitHub
* Check for use of GitHub for remote Docsify "Edit this Page" links
* Support of optional hideCredits parameter (`hide-credits`)
* Reposition 'Edit this Page' link to bottom of pages
* Renamed 'toc-alt' URL parameter to 'toc-narrow'
* Renamed 'editThisPageLink' URL parameter to 'edit-link'
* Support of optional link-color parameter (`link-color`)
* Support of optional edit-link-top parameter (`edit-link-top`)
* Support possible Docsify loadNavbar parameter (`loadNavbar=_navbar.md`)

**Bugfix:**  
* Added missing JS source maps
* Scoped front matter check to only be at start of file
* Fixed embedded code blocks overflow issues
* Initial fix for setting '_top' as external link targets

## 07/22/2022

**New:**  
* Welcome to the public preview of Docsify-This!
