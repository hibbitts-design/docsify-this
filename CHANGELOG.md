# Changelog

## [1.3.4] - XX/XX/XXXX

**Improved:**   
* Added section about embedding Docsify-This pages into other platforms
in ReadMe
* Added section about example Docsify-This usage scenarios in ReadMe

## [1.3.3] - 01/24/2023

**New**
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

**New**
* Support for displaying a footer ('_footer.md' file) using the URL parameter 'footer=true' or via the 'footer' setting in index.html (when using your own instance of Docsify-This.net)

**Improved:**   
* Included 'navbar' setting in index.html (when using your own instance of Docsify-This.net) for Docsify Open Publishing Kit compatability
* Added check for valid URL of Markdown file (files exists check does not seem possible due to CORS)
* Updated ReadMe

**Bugfix:**  
* Fixed JS source map errors 

## [1.3.1] - 12/15/2022

**New**
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
