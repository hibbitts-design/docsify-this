# Docsify This

[![Docsify](https://img.shields.io/npm/v/docsify?label=docsify)](https://docsify.js.org/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/hibbitts-design/docsify-open-multicourse-starter-kit/blob/main/LICENSE)
<a href="https://discord.gg/zT8eS8ZG">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Docsify Discord Chat" />
</a>

## Display a Markdown file as a simple web page in seconds.

This open-source web app, built with the magical documentation site generator [Docsify](https://docsify.js.org), provides a quick way to display Markdown files as standalone web pages without needing to setup your own website. All you need is a publicly available Markdown file and pass that URL to docsify-this.net. [Try it out now!](https://docsify-this.net)

![ Docsify-This](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-this-web-page-builder.png)
_Figure 1. [Docsify-This.net](https://docsify-this.net) Web Page Builder._

## All About Docsify-This

* [How it Works](#how-it-works)
* [Docsify-This Markdown Templates](#docsify-this-markdown-templates)
* [More Docsify-This Examples](#more-docsify-this-examples)
* [Page Appearance URL Parameters](#page-appearance-url-parameters)
* [Supported Markdown CSS Classes](#supported-markdown-css-classes)
* [Improving Markdown Previews in Text Editors](#improving-markdown-previews-in-text-editors)
* [Looking for Even More Customization and Control?](#looking-for-even-more-customization-and-control)
* [Troubleshooting](#troubleshooting)
* [Privacy Policy Summary](#privacy-policy-summary)
* [Support this Project](#support-this-project)

---

### How it Works

Docsify-This is a customized [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) site configured to render remote Markdown files via URL parameters in the format `https://docsify-this.net?basePath=URLpath&homepage=filename.md`, which are automaticaly created by the above Web Page Builder. The **basePath** Docsify parameter is the directory containing the raw source Markdown file to render. If the file is named the expected default **README.md** then no other parameter are required, otherwise the **homepage** Docsify parameter must also be included set to the name of the file to render.  

To render a file stored in a public GitHub repository you need to use the raw source URL of that file (i.e. raw.githubusercontent.com) - tap the **Raw** button when [viewing a file](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file) to get this URL when not using the above Web Page Builder, which does this automatically. It is also possible to render a file stored in a private GitHub repository by activating GitHub Pages within that repository and then using the GitHub Pages URL of that file (i.e. username.github.io).  

In addition to supporting standard Markdown, [Embed.ly](https://embed.ly/code), [H5P](https://h5p.org/), [Katex](https://github.com/upupming/docsify-katex), and [Mermaid Diagrams](https://github.com/Leward/mermaid-docsify) are also included. Opionally, page annotation with [Hypothes.is](https://hypothes.is) can be enabled.

---

### Docsify-This Markdown Templates

While all you need to get going with Docsify-This is a basic Markdown file, here are some templates you can use that show what is possible with Markdown, images, and even a few HTML snippets!

**[Docsify-This One Page Course Template](https://github.com/hibbitts-design/docsify-this-one-page-course)** (including how to use)  

![Docsify-This One Page Course Template](docs/images/docsify-this-one-page-course-readme.png ':class=docsify-this-screenshot')

Docsify-This One Page Course [home.md](https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md) file displayed by Docsify-This as a:
* [Standalone Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-course/main&homepage=home.md "Single Page Docsify Open Course Starter Kit - Standalone Page")  
* [Standalone Page with Table of Contents and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-course/main&homepage=home.md&toc=true&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Table of Contents")  
* [Standalone Page with Docsify Sidebar and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-course/main&homepage=home.md&sidebar=true&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Docsify Sidebar")

**[Docsify-This One Page Article Template](https://github.com/hibbitts-design/docsify-this-one-page-article)**  (including how to use)  

![Docsify-This One Page Article Template](docs/images/docsify-this-one-page-article-readme.png ':class=docsify-this-screenshot')

Docsify-This One Page Article [home.md](https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md) file displayed by Docsify-This as a:    
* [Standalone Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md "Single Page Docsify Open Course Starter Kit - Standalone Page")  
* [Standalone Page with Table of Contents including h2 and h3 Headers and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md&toc=true&toc-headings=h2,h3&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Table of Contents")  
* [Standalone Page with Docsify Sidebar with maxLevel of 3 (H3) and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md&sidebar=true&maxLevel=3&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Docsify Sidebar")

---

### More Docsify-This Examples

[GitHub Training Manual Working Locally with Git Markdown file](https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md), displayed by Docsify-This as a:  
* [Standalone Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md "GitHub Training Manual Working Locally with Git - Standalone Page")  
* [Standalone Page with Table of Contents](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&toc=true&toc-headings=h2,h3 "GitHub Training Manual Working Locally with Git - Standalone Page with Table of Contents")
* [Standalone Page with Docsify Sidebar](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&sidebar=true&maxLevel=3 "GitHub Training Manual Working Locally with Git - Standalone Page with Docsify Sidebar")

[Easy Markdown to Github Pages linked set of Markdown files](https://github.com/nicolas-van/easy-markdown-to-github-pages), displayed by Docsify-This as:   
* [Standalone Pages](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master "Easy Markdown to Github Pages - Standalone Page")  
* [Standalone Pages with Table of Contents and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&toc=true&edit-link=https://github.com/nicolas-van/easy-markdown-to-github-pages/blob/master/README.md "Easy Markdown to Github Pages - Standalone Page with Table of Contents")  
* [Standalone Pages with Docsify Sidebar and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&sidebar=true&edit-link=https://github.com/nicolas-van/easy-markdown-to-github-pages/blob/master/README.md "Easy Markdown to Github Pages - Standalone Page with Docsify Sidebar")

[A Collection of Markdown files](https://github.com/paulhibbitts/cmpt-363-222-pages) used as course content [within a Canvas LMS site](https://canvas.sfu.ca/courses/69678).

[Markdown Content Demo file](https://github.com/paulhibbitts/markdown-content-demo/blob/main/README.md), displayed by Docsify-This as a [Standalone Page with an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/markdown-content-demo/main&edit-link=https://github.com/paulhibbitts/markdown-content-demo/blob/main/README.md#/).  

[GitHub's LaTeX Support Examples Markdown file](https://github.com/dotcom-poland/medium-latex-support/blob/main/README.md), displayed by Docsify-This as a [Standalone Page with Table of Contents](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/dotcom-poland/medium-latex-support/main&toc=true).

[Mermaid-Docsify Example Markdown file](https://github.com/Leward/mermaid-docsify/blob/master/example/README.md), displayed by Docsify-This as a [Standalone Page with an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/Leward/mermaid-docsify/master/example&edit-link=https://github.com/Leward/mermaid-docsify/blob/master/example/README.md#/).  

---

### Page Appearance URL Parameters

**edit-link**  
Display a "Edit this Page" link (default location is bottom of page) with the optional **edit-link** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md

**edit-link-text**  
Change the default text for a "Edit this Page" link with the optional **edit-link-text** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md&edit-link-text=View%20as%20Markdown Please note to use text with spaces they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "View as Markdown" would be "View%20as%20Markdown".  

**edit-link-top**  
Change the location of the optional "Edit this Page" link from the bottom of pages to be the top of pages with the optional **edit-link-top** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md&edit-link-top=true

**font-family**  
Set a custom font for your standalone pages with the optional **font-family** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-family=Helvetica,Arial,sans-serif. This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform. Please note to use fonts with spaces in their names they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "Courier New" would be "Courier%20New".  

**font-size**  
Set a custom font size for your standalone pages with the optional **font-size** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-size=1. This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform. Please note the font size is set in [REM units](https://www.freecodecamp.org/news/what-is-rem-in-css/).  

**hide-credits**  
Hide the credits usually shown at the bottom of every displayed Docsify-This page with the optional **hide-credits** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&hide-credits=true.

**hypothesis**  
Enable page annotation with [Hypothes.is](https://hypothes.is) with the optional **hypothesiss** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&hypothesis=true.

**link-color**  
Set a custom color for all links, defined using the standard hexadecimal format _without the '#' symbol_ with the optional **link-color** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-color=CC0000.

**loadNavbar**  
Load a Docsify navbar from the Markdown file passed with the optional **loadNavbar** Docsify parameter (not included in the Web Page Builder), for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&loadNavbar=_navbar.md_ This advanced option is not included in the Web Page Builder.  

**maxLevel**  
Set the maximum header level of the Docsify sidebar with the optional **maxLevel** Docsify parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&sidebar=true&maxLevel=3 

**sidebar**  
Display a Docsify sidebar with the optional **sidebar** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&sidebar=true  

**toc**  
Display a page table of contents with the optional **toc** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true

**toc-headings**  
Set the page heading levels (i.e. h1, h2, etc.) to be included in the Page Table of Contents with the optional **toc-headings** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true&toc-headings=h1,h2,h3.

**toc-narrow**  
Use a less wide Page Table of Contents with the optional **toc-narrow** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc-narrow=true. This parameter can be particularly valuable when embedding content where a smaller screen area is likely.

---

### Supported Markdown CSS Classes

`badge`  

```html
<span class='badge'> Tue Jun 12th 11:59pm PDT</span>
```

`banner-image`  

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-image')
```

`banner-tall-image`  

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-tall-image')
```

`button`  

```markdown
[Required Reading Quiz due Jun 4th](https://canvas.sfu.ca/courses/44038/quizzes/166553 ':class=button')
```

`embedly-card` (for linked article previews, embedded slides/videos, etc.)  

```markdown
<a class="embedly-card" data-card-controls="0" data-card-align="left" href="https://blog.prototypr.io/defining-usability-e7bf42e8abd0">Defining usability</a>
```

`banner-image` (cropped to height of 250px on large screens, 125px on small screens)  

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-image')
```

`banner-tall-image` (cropped to height of 350px on large screens, 175px on small screens)  

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-tall-image')
```

`header-image` (suggested size of 1200px to 2000px width and 400px to 600px height, and display of Table of Contents is not available)  

```markdown
![Welcome sign](images/mountain.jpg ':class=header-image')
```

`header-image-fade`  

```markdown
![Welcome sign](images/mountain.jpg ':class=header-image-fade')
```

`row` & `column`   

```html
<div class="row">
<div class="column">

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

</div>
<div class="column">

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

</div>
</div>
```

`video-container-4by3`  

```html
<div class="video-container-4by3"><div class="video-container-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/lJIrF4YjHfQ"></iframe></div>
```

`video-container-16by9`  
```html
<div class="video-container-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/lJIrF4YjHfQ"></iframe></div>
```

---

### Improving Markdown Previews in Text Editors

Some text editors, such as [Microsoft Visual Studio](https://code.visualstudio.com/), have the ability to link your own CSS so Markdown previews are more visually accurate. If your editor supports this ability, the below CSS files can be used.

Docsify-This (based on the Docsify Open Publishing Starter Kit) CSS:  
https://docsify-this.net/assets/css/editor.css

FontAwesome CSS:  
https://docsify-this.net/assets/vendor/fontawesome/css/all.min.css

---

### Looking for Even More Customization and Control?

Docsify-This is intended as a quick way to display one or more remotely located Markdown files. To further customize the rendering of remote files, install your own instance of [Docsify-This](https://github.com/hibbitts-design/docsify-this) enabling GitHub Pages with the folder `/docs`.  If you want to further customize and control the presentation of your Markdown content, especially when rendering multiple page sites on GitHub, you can install your own [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) (that this hosted web app is based on) and store all Markdown files within that site. You can learn more about the capabilities of Docsify itself at [Docsify](https://docsify.js.org).  

---

### Troubleshooting
_'404 - Not found' message is displayed._  
The provided **basePath** parameter and/or optional **homepage** parameter may not be correct, verify that these items lead to accessible content. This error message may also be a result of a Cross-Origin Resource Sharing (CORS) policy, which restricts resources on a web page to be requested from another domain. If possible, relocate files to a domain that supports cross-origin requests.

_Updated Markdown file not displayed in the Browser._  
Docsify is likely displaying the last cached version. To ensure the most recent version of a file is loaded, do a [hard refresh of your Browser cache](https://www.makeuseof.com/hard-refresh-browser/).

_Embedded image not displayed as expected._  
The most likely cause for embedded images in Markdown not being displayed as expected is the use of relative paths (i.e. `![Alt Text](images/filename.jpg)`) - review image paths and ensure the full path to each image is used (i.e. `![Alt Text](/folder/images/filename.jpg)`). Likewise, if images in HTML are not being displayed as expected the likely cause is again the use of relative paths (i.e. `<img src="images/filename.jpg" alt="Alt Text">`) - use absolute URLs for HTML image sources (i.e. `<img src="https://raw.githubusercontent.com/user/repository/main/images/filename.jpg" alt="Alt Text">`).

_Embedded iFrame not displayed as expected._   
Due to iframe cross-domain issues embedded content may not be able to be displayed. Use the included rich media embed service [embed.ly](https://embed.ly/) as a workaround.  

For example, the following iFrame HTML:  

```
<div class="video-container-16by9"><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRnnRFelgw1ksq_p8Eryg3dnyLCRRLPf5fBgdwdv9p-tCIwcxqWvzDGrGbjxGHL7HqEJVpmV26ntk3a/embed?start=false&loop=false&delayms=3000" frameborder="0" width=780" height="585" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
```

Would be changed to:  

```
<a class="embedly-card" data-card-controls="0" data-card-align="left" data-card-width="100%" href="https://docs.google.com/presentation/d/1BLaaOTsGxDmNcAhg6pdx3hl9IvI8NErg8Oe5ceh83fw/edit?usp=sharing">Grav and Docsify Slides Placeholder</a>
```

---

### Privacy Policy Summary

* This website is hosted by [GitHub Pages, which is GDPR compliant](https://github.blog/2018-04-19-updates-to-our-privacy-statement-and-terms-of-service/)
* Only this web page (containing the Web Page Builder) uses [Google Analytics in a GDPR manner](https://support.google.com/analytics/answer/9019185?hl=en#IP&zippy=%2Cin-this-article)
* Web pages generated by remote Markdown files are not tracked in any manner by Google Analytics
* The web service [H5P](https://h5p.org/privacy) is automatically loaded when displaying remote Markdown files
* The web service [Hypothes.is](https://web.hypothes.is/privacy/) is only loaded if chosen when displaying remote Markdown files
* The web service [Embed.ly](https://embed.ly/legal/privacy) is only loaded if [Embedly Card](https://embed.ly/cards) elements are present in remote Markdown files

---

### Support this Project

- Add a ⭐️ [star on GitHub](https://github.com/hibbitts-design/docsify-this)
- 🐦 [tweet out your thoughts](https://twitter.com/intent/tweet?text=I+am+checking+out+the+Docsify-This.net+project+that+displays+Markdown+files+as+web+pages+in+seconds.+You+can+learn+about+the+project+at&url=https%3A%2F%2Fgithub.com%2Fhibbitts-design%2Fdocsify-this&hashtags=docsify,remote,markdown,file,webpage)
- Share your 💬 [feedback in a brief survey](https://forms.gle/ViYu2ZdPmj6PeQ439)
- Follow [@hibbittsdesign](https://twitter.com/hibbittsdesign) for updates

Paul offers a range of services related to using the system-independent format of Markdown in a range of education and publication scenarios, especially in relation to his [Docsify](https://docsify.js.org/#/) and [Grav CMS](https://getgrav.org/) open source projects. These professional services include consulting, premium support subscriptions, workshops, and custom development. Sound of interest? Send a note to [paul@hibbittsdesign.org](mailto:paul@hibbittsdesign.org).

---

This [open source project](https://github.com/hibbitts-design/docsify-this) is by Paul Hibbitts of [Hibbitts Design](https://hibbittsdesign.org/).  

**🙇🏻‍♂️Special Thanks**  
[Beau Shaw](https://github.com/DaddyWarbucks) for his [Remote Docsify](https://github.com/DaddyWarbucks/remote-docsify) example.  
[Alan Levine](https://github.com/cogdog) for the inspiration of a consolidated ReadMe collection.
