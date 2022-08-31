<h1> Docsify-This </h1>

![3D render](images/milad-fakurian-CN2FEPXERRI-unsplash.jpg  ':class=banner-image')  
Photo by <a href="https://unsplash.com/@fakurian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
Milad Fakurian</a> on <a href="https://unsplash.com/s/photos/render?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## Display Markdown files as web pages in seconds.

This web app, built using the magical documentation site generator [Docsify](https://docsify.js.org) and the [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit), provides a quick way to display Markdown files as standalone web pages (also perfect for embedding) without needing to setup your own website. All you need is a publicly available Markdown file and pass that URL to https://docsify-this.net. Try it out below!  

<div class="docsifythisurlbuilder">

## URL Builder

**Markdown File URL** (GitHub or raw source URL):</br>
<input name="markdownFileURL" aria-label="markdown file url" class="docsifythisurlfield" type="url" autofocus="autofocus" onfocus="this.select()" onclick="this.select()" onkeypress="checkKey(event);" id="text" size="200px" value="https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md" /></br>
<input class="docsifythisurlbuilderprimarybutton docsifythisurlbuilderbutton" style="border:none;" type="button" id="btn_1" value="View as Standalone Page" onclick="openURLs(document.getElementById('text').value,false,false)"/> <input class="docsifythisurlbuildersecondarybutton docsifythisurlbuilderbutton" style="border:none;" type="button" id="btn_2" value="View as Standalone Page with Table of Contents" onclick="openURLs(document.getElementById('text').value,true,false)"/> <input class="docsifythisurlbuildersecondarybutton docsifythisurlbuilderbutton" style="border:none;" type="button" id="btn_3" value="View as Standalone Page with Docsify Sidebar" onclick="openURLs(document.getElementById('text').value,false,true)"/></br>
<input class="docsifythisurlbuildercheckbox" type="checkbox" id="editCheck" unchecked><label for="editCheck">Include 'Edit this Page' Link (requires GitHub Markdown file)</label></br>

Entering the URL of a Markdown file into the above URL Builder, that file will be displayed as a standalone web page in a new Browser tab. This URL may then be copied and shared for others to view the same page. The URL Builder will also automatically transform a URL of a GitHub Markdown file into the needed raw source URL (i.e. raw.githubusercontent.com).

</div>

## Additional Demos

* [GitHub Training Manual Working Locally with Git file](https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md), displayed as a [Standalone Page with a Table of Contents](https://docsify-this.net?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&toc=true#/)
* [Single Page Docsify Open Course Starter Kit](https://github.com/paulhibbitts/cpt-363-user-interface-design/blob/main/README.md), displayed as a [Standalone Page with a Table of Contents](https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/cpt-363-user-interface-design/main&toc=true#/)

## Technical Details

Docsify-This is a customized [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) site configured to render remote Markdown files via URL parameters in the format `https://docsify-this.net?basePath=URLpath&homepage=filename.md`. The **basePath** parameter is the directory containing the raw source Markdown file to render. If the file is named the expected default **README.md** then no other parameter are required, otherwise the **homepage** parameter must also be included set to the name of the file to render. To render a file stored on GitHub you need to use the raw source URL of a file (i.e. raw.githubusercontent.com), tap the **Raw** button when [viewing a file](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file) to get this URL when not using the above URL Builder.  

## Examples of Usage

**Single Page Examples**  
For example, to render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main

To render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page with a table of contents the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true

To render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page with a table of contents and an "Edit this Page" link the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md

To render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page with the Docsify Sidebar the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&sidebar=true

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page, the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page with a table of contents, the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page with a table of contents and an "Edit this Page" link, the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page with the Docsify Sidebar, the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&sidebar=true

**Multiple Page Examples**  
To render a set of Markdown files (located in the same GitHub repository) as a standalone website with the initial page being the README.md file, the URL for the would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master

To render a set of Markdown files (located in the same GitHub repository) as a standalone website with the initial page being the README.md file and each page having it's own table of contents, the URL for the site would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&toc=true

To render a set of Markdown files (located in the same GitHub repository) as a standalone website with the initial page being the README.md file and each page having it's own table of contents and an "Edit this Page" link, the URL for the site would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&toc=true&edit-link=https://github.com/nicolas-van/easy-markdown-to-github-pages/blob/master/README.md

To render a set of Markdown files (located in the same GitHub repository) as a standalone website with the initial page being the README.md file and each page having it's own Docsify Sidebar, the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&sidebar=true

_TIP: If not a README.md file, the filename will also need to be passed using the **homepage** URL parameter._

## Additional Customization Parameters

**edit-link-top**  
Change the default position of the optional "Edit this Page" link from the bottom of pages to be the top of pages, for example https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md&edit-link-top=true

**font-family**  
Set a custom font for your standalone pages with the optional **font-family** parameter, for example https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-family=Helvetica,Arial,sans-serif. Please note to use fonts with spaces in their names they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "Courier New" would be "Courier%20New". This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform.

**hide-credits**  
Hide the credits usually shown at the bottom of every rendered Docsify-This page, for example https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&hide-credits=true.

**link-color**  
Set a custom color for all links, defined using the standard hexadecimal format _without the '#' symbol_, for example, for example https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-color=CC0000.

**toc-narrow**  
Change the default breakpoint (1300) for moving the optional Page Table of Contents to the top of the screen to an alternative smaller size (800) with the optional **toc-narrow** parameter, for example https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&toc-narrow=true. Please note that in rare situations Markdown page content may not respect margin boundaries with this smaller breakpoint. This parameter can be particularly valuable when embedding content where a smaller screen area is likely.

## Looking for Even More Customization and Control?

Docsify-This is intended as a quick way to display one or more remotely located Markdown files. If you want to further customize and control the presentation of your Markdown content, while also substantially speeding up the rendering of multiple page Markdown file sites on GitHub, you can install your own [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) (that this hosted web app is based on) and store Markdown files within that site. To further customize the rendering of remote files, install your own instance of [Docsify-This](https://github.com/hibbitts-design/docsify-this). You can learn more about the capabilities of Docsify itself at [Docsify](https://docsify.js.org).

## Troubleshooting
_'404 - Not found' message is displayed._  
The provided **basePath** parameter and/or optional **homepage** parameter may not be correct, verify that these items lead to accessible content. This error message may also be a result of a Cross-Origin Resource Sharing (CORS) policy, which restricts resources on a web page to be requested from another domain. If possible, relocate files to a domain that supports cross-origin requests.

_Updated Markdown file not displayed in the Browser._  
Docsify is likely displaying the last cached version. To ensure the most recent version of a file is loaded, do a [hard refresh of your Browser cache](https://www.makeuseof.com/hard-refresh-browser/).

_Embedded image not displayed as expected._  
The most likely cause for embedded images not being displayed as expected is the use of HTML (i.e. `<img src="images/filename.jpg" alt="Alt Text">`). Use Markdown for embedded images if possible (i.e. `![Alt Text](images/filename.jpg)`) to better support remote rendering. Alternatively, use absolute URLs for HTML image sources.

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

## Support this Project

- Add a ⭐️ [star on GitHub](https://github.com/hibbitts-design/docsify-this)
- 🐦 [tweet out your thoughts](https://twitter.com/intent/tweet?text=I+am+checking+out+the+Docsify-This.net+project+that+displays+Markdown+files+as+web+pages+in+seconds.+You+can+learn+about+the+project+at&url=https%3A%2F%2Fgithub.com%2Fhibbitts-design%2Fdocsify-this&hashtags=docsify,remote,markdown,file,webpage)
- Follow [@hibbittsdesign](https://twitter.com/hibbittsdesign) for updates

---

This open source project is by Paul Hibbitts of [Hibbitts Design](https://hibbittsdesign.org/).  

**🙇🏻‍♂️Special Thanks**  
[Beau Shaw](https://github.com/DaddyWarbucks) for his [Remote Docsify](https://github.com/DaddyWarbucks/remote-docsify) example.  
[Alan Levine](https://github.com/cogdog) for the inspiration of a consolidated ReadMe collection.
