# Changelog

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
* Added missing source maps
* Scoped front matter check to only be at start of file
* Fixed embedded code blocks overflow issues
* Initial fix for setting '_top' as external link targets

## 07/22/2022

**New:**  
* Welcome to the public preview of Docsify-This!
