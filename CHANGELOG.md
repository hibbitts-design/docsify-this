# Changelog

## [1.7.3] - XX/XX/2023

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
