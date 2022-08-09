# Docsify-This

![3D cubes](images/rohit-choudhari-puy-FW4fOJc-unsplash.jpg  ':class=banner-image')  
Photo by <a href="https://unsplash.com/@lilrohit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rohit Choudhari</a> on <a href="https://unsplash.com/s/photos/network?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## Display a Markdown file as a Web page in seconds🚀

This Web app, built using the magical documentation site generator [Docsify](https://docsify.js.org) and the [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit), provides a quick way to display Markdown files as standalone Web pages (also perfect for embedding) without needing to setup your own Docsify site. All you need is a publicly available Markdown file and pass that URL to https://docsify-this.net. Try it out below!  

<div class="docsifythisurlbuilder">

## URL Builder

**Markdown File URL** (GitHub or raw source URL):</br>
<input name="markdownFileURL" aria-label="markdown file url" class="docsifythisurlfield" type="url" autofocus="autofocus" onfocus="this.select()" onclick="this.select()" onkeypress="checkKey(event);" id="text" size="200px" value="https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md" /></br>
<input class="button docsifythisurlbuilderbutton" style="border:none;" type="button" id="btn_1" value="View as Standalone Page" onclick="openURLs(document.getElementById('text').value,false,false)"/> <input class="docsifythisurlbuildersecondarybutton docsifythisurlbuilderbutton" style="border:none;" type="button" id="btn_2" value="View as Standalone Page with Table of Contents" onclick="openURLs(document.getElementById('text').value,true,false)"/> <input class="docsifythisurlbuildersecondarybutton docsifythisurlbuilderbutton" style="border:none;" type="button" id="btn_3" value="View as Standalone Page with Docsify Sidebar" onclick="openURLs(document.getElementById('text').value,false,true)"/></br>
<input class="docsifythisurlbuildercheckbox" type="checkbox" id="editCheck" unchecked><label for="editCheck">Include 'Edit this Page' Link (requires GitHub Markdown file)</label></br>

Entering the URL of a Markdown file into the above URL Builder, that file will be displayed as a standalone Web page in a new Browser tab. This URL may then be copied and shared for others to view the same page. The URL Builder will also automatically transform a URL to a GitHub Markdown file into the needed raw source URL (i.e. raw.githubusercontent.com).

</div>

## Additional Examples

* [GitHub Training Manual Working Locally with Git file](https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md), displayed as a [Standalone Page with a Table of Contents](https://docsify-this.net?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&toc=true#/)
* [Single Page Docsify Open Course Starter Kit](https://github.com/paulhibbitts/cpt-363-user-interface-design/blob/main/README.md), displayed as a [Standalone Page with a Table of Contents](https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/cpt-363-user-interface-design/main&toc=true#/)

## Technical Details

Docsify-This is a customized [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) site configured to render remote Markdown files via URL parameters in the format `https://docsify-this.net?basePath=URLpath&homepage=filename.md`. The **basepath** parameter is the directory containing the raw source Markdown file to render. If the file is named the expected default **README.md** then no other parameter are required, otherwise the **homepage** parameter must also be included set to the name of the file to render. To render a file stored on GitHub you need to use the raw source URL of a file (i.e. raw.githubusercontent.com), tap the **Raw** button when [viewing a file](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file) to get this URL when not using the above URL Builder.  

For example, to render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main

To render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page with a table of contents the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true

To render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page with the Docsify Sidebar the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&sidebar=true

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page, the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page with a table of contents, the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page with the Docsify Sidebar, the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&sidebar=true

_TIP: If not a README.md file, the filename will also need to be passed using the **homepage** URL parameter._

## Looking for more Customization and Control?

Docsify-This is intended as a quick way to display a remotely located Markdown file. If you want to further customize and control the presentation of your Markdown content you can install your own [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) (that this hosted Web app is based on) and either store Markdown files within that site or with additional configuration render files located remotely. You can learn more about the capabilities of Docsify itself at [Docsify](https://docsify.js.org).

## Troubleshooting

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
<a class="embedly-card" data-card-controls="0" data-card-align="left" href="https://docs.google.com/presentation/d/1BLaaOTsGxDmNcAhg6pdx3hl9IvI8NErg8Oe5ceh83fw/edit?usp=sharing">Grav and Docsify Slides Placeholder</a>
```

## Support this Project

- Add a ⭐️ [star on GitHub](https://github.com/hibbitts-design/docsify-this)
- 🐦 [tweet out your thoughts](https://twitter.com/intent/tweet?text=Check+out+the+Docsify-This+project+at&url=https%3A%2F%2Fgithub.com%2Fhibbitts-design%2Fdocsify-this&hashtags=docsify,remote,markdown,file,webpage)
- Follow [@hibbittsdesign](https://twitter.com/hibbittsdesign) for updates

---

This open source project is by Paul Hibbitts of [Hibbitts Design](https://hibbittsdesign.org/).  

**🙇🏻‍♂️Special Thanks**  
[Beau Shaw](https://github.com/DaddyWarbucks) for his [Remote Docsify](https://github.com/DaddyWarbucks/remote-docsify) example.  
[Alan Levine](https://github.com/cogdog) for the inspiration of a consolidated ReadMe collection.
