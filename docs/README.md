<h1> Docsify-This </h1>

![3D render](images/milad-fakurian-CN2FEPXERRI-unsplash.jpg  ':class=banner-image')  
Photo by <a href="https://unsplash.com/@fakurian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
Milad Fakurian</a> on <a href="https://unsplash.com/s/photos/render?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## Display a Markdown file as a simple web page in seconds.

This web app, built using the magical documentation site generator [Docsify](https://docsify.js.org) and the [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit), provides a quick way to display Markdown files as standalone web pages (also perfect for embedding) without needing to setup your own website. All you need is a publicly available Markdown file and pass that URL to https://docsify-this.net. Try it out below!  

<div class="docsifythisurlbuilder">

## Web Page Builder

Enter the URL of a Markdown file into the Web Page Builder and view that file as a standalone web page in a new Browser tab. The resulting page URL can be copied and shared as a standalone page or used for embedding into other systems.

**Markdown File URL** (GitHub or raw source URL):</br>
<input name="markdownFileURL" aria-label="markdown file url" class="docsifythisurlfield" type="url" autofocus="autofocus" onfocus="this.select()" onclick="this.select()" onkeypress="checkKey(event);" id="text" size="200px" value="https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md" /></br>
<input class="docsifythisurlbuilderprimarybutton docsifythisurlbuilderbutton" style="border:none;" type="button" id="btn_1" value="View as Standalone Page" onclick="openURLs(document.getElementById('text').value,false,false)"/> <input class="docsifythisurlbuildersecondarybutton docsifythisurlbuilderbutton" style="border:none;" type="button" id="btn_2" value="View as Standalone Page with Table of Contents" onclick="openURLs(document.getElementById('text').value,true,false)"/> <input class="docsifythisurlbuildersecondarybutton docsifythisurlbuilderbutton" style="border:none;" type="button" id="btn_3" value="View as Standalone Page with Docsify Sidebar" onclick="openURLs(document.getElementById('text').value,false,true)"/></br>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="editCheck" unchecked><label for="editCheck">Include 'Edit this Page' link with GitHub files (default location is bottom of page)</label></div>

<div class="docsifythisurlbuildershowhidelink"><a name="toggleDivlink" href="#" onclick="toggleDiv(this); return false;">Show More Page Options &raquo;</a></div>

<div id="docsifythisurlbuilderoptionsDiv" style='display: none'>

<hr>

<div class="docsifythisurlbuilderoptionsline"><label for="fontfamily">Set the page font family and size to:</label><br>
<select class="docsifythisurlbuilderoptionsline" id="fontfamily" name="fontfamily">
  <option value="default">Source Sans Pro</option>
  <option disabled="disabled">----</option>
  <option value="Arial,sans-serif">Arial, sans-serif</option>
  <option value="Helvetica,sans-serif">Helvetica, sans-serif</option>
  <option value="Verdana">Verdana, sans-serif</option>
  <option value="Tahoma">Tahoma, sans-serif</option>
  <option value="Times%20New%20Roman, serif">Times New Roman, serif</option>
  <option value="Georgia,serif">Georgia, serif</option>
  <option value="Courier,monospace">Courier, monospace</option>
</select>
<select class="docsifythisurlbuilderoptionsline" id="fontsize" name="fontsize">
  <option value="1.125">18px (1.125rem)</option>
  <option disabled="disabled">----</option>
  <option value=".875">14px (.875rem)</option>
  <option value="1">16px (1rem)</option>
  <option value="1.25">20px (1.25rem)</option>
</select>
</div>

<div class="docsifythisurlbuilderoptionsline"><label type="color">Set the page link color to:</label><br>#<input value="0374B5" id="linkcolor" /></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="editLinkTopCheck" unchecked><label for="editLinkTopCheck">Set location of the 'Edit this Page' link to top of page</label></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="hideCredits" unchecked><label for="hideCredits">Remove the Docsify-This credit text from bottom of page</label></div>

<hr>

<div class="docsifythisurlbuilderoptionsline"><label for="tocheadings">Headings to include in Table of Contents (at least one required):</label><br>
&nbsp;&nbsp;&nbsp;<input class="docsifythisurlbuildercheckbox" type="checkbox" id="toch1" unchecked><label for="toch1">Heading 1 (h1)</label>&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;<input class="docsifythisurlbuildercheckbox" type="checkbox" id="toch2" checked><label for="toch2">Heading 2 (h2)</label>&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;<input class="docsifythisurlbuildercheckbox" type="checkbox" id="toch3" checked><label for="toch3">Heading 3 (h3)</label></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="narrowToC" unchecked><label for="narrowToC">Use a more narrow Table of Contents area, along with a smaller breakpoint</label></div>

<div class="docsifythisurlbuilderrestoredefaultsbutton"><input type="button" id="btn_4" value="Reset to Defaults" onclick="restoreAllDefaults()"/></div>

</div>

</div>

## Additional Demos

* [GitHub Training Manual Working Locally with Git file](https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md), displayed as a [Standalone Page with a Table of Contents](https://docsify-this.net?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&toc=true) or as a [Standalone Page with a Docsify Sidebar](https://docsify-this.net?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&sidebar=true)
* [Single Page Docsify Open Course Starter Kit](https://github.com/paulhibbitts/cpt-363-user-interface-design/blob/main/README.md), displayed as a [Standalone Page with a Table of Contents](https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/cpt-363-user-interface-design/main&toc=true&toc-headings=h1,h2) or as a [Standalone Page with a Docsify Sidebar](https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/cpt-363-user-interface-design/main&sidebar=true&maxLevel=2)

## Technical Details

Docsify-This is a customized [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) site configured to render remote Markdown files via URL parameters in the format `https://docsify-this.net?basePath=URLpath&homepage=filename.md`. The **basePath** parameter is the directory containing the raw source Markdown file to render. If the file is named the expected default **README.md** then no other parameter are required, otherwise the **homepage** parameter must also be included set to the name of the file to render. To render a file stored on GitHub you need to use the raw source URL of a file (i.e. raw.githubusercontent.com) - tap the **Raw** button when [viewing a file](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file) to get this URL when not using the above Web Page Builder, which does this automatically.  

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

To render a set of Markdown files (located in the same GitHub repository) as a standalone website with the initial page being the README.md file and each page having its own table of contents, the URL for the site would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&toc=true

To render a set of Markdown files (located in the same GitHub repository) as a standalone website with the initial page being the README.md file and each page having its own table of contents and an "Edit this Page" link, the URL for the site would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&toc=true&edit-link=https://github.com/nicolas-van/easy-markdown-to-github-pages/blob/master/README.md

To render a set of Markdown files (located in the same GitHub repository) as a standalone website with the initial page being the README.md file and each page having its own Docsify Sidebar, the URL would be:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&sidebar=true

_TIP: If not a README.md file, the filename will also need to be passed using the **homepage** URL parameter._

## All Customization Parameters

**edit-link**  
Display a "Edit this Page" link (default location is bottom of page) with the optional **edit-link** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md

**edit-link-top**  
Change the default position of the optional "Edit this Page" link from the bottom of pages to be the top of pages, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md&edit-link-top=true

**font-family**  
Set a custom font for your standalone pages with the optional **font-family** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-family=Helvetica,Arial,sans-serif. This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform. Please note to use fonts with spaces in their names they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "Courier New" would be "Courier%20New".  

**font-size**  
Set a custom font size for your standalone pages with the optional **font-size** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-size=1. This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform. Please note the font size is set in [REM units](https://www.freecodecamp.org/news/what-is-rem-in-css/).  

**hide-credits**  
Hide the credits usually shown at the bottom of every displayed Docsify-This page, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&hide-credits=true.

**link-color**  
Set a custom color for all links, defined using the standard hexadecimal format _without the '#' symbol_, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-color=CC0000.

**sidebar**  
Display a Docsify sidebar with the optional **sidebar** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&sidebar=true

**toc**  
Display a page table of contents with the optional **toc** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true

**toc-headings**  
Set the page heading levels (i.e. h1, h2, etc.) to be included in the Page Table of Contents with the optional **toc-headings** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&toc=true&toc-headings=h1,h2.

**toc-narrow**  
Use a less wide Page Table of Contents with the optional **toc-narrow** parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&toc-narrow=true. This parameter can be particularly valuable when embedding content where a smaller screen area is likely.

Please note that standard [Docsify configuration settings](https://docsify.js.org/#/configuration) can also be used as URL parameters, for example when displaying the Docsify sidebar the parameter **maxLevel** can be used to set the maximum header level.

## Improving Markdown Previews in Text Editors

Some text editors, such as [Microsoft Visual Studio](https://code.visualstudio.com/), have the ability to link your own CSS so Markdown previews are more visually accurate. If your editor supports this ability, the below CSS files can be used.

Docsify-This (based on the Docsify Open Publishing Starter Kit) CSS:  
https://docsify-this.net/assets/css/editor.css

FontAwesome CSS:  
https://docsify-this.net/assets/vendor/fontawesome/css/all.min.css

## Looking for Even More Customization and Control?

Docsify-This is intended as a quick way to display one or more remotely located Markdown files. If you want to further customize and control the presentation of your Markdown content, while also substantially speeding up the rendering of multiple page Markdown file sites on GitHub, you can install your own [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) (that this hosted web app is based on) and store Markdown files within that site. To further customize the rendering of remote files, install your own instance of [Docsify-This](https://github.com/hibbitts-design/docsify-this). You can learn more about the capabilities of Docsify itself at [Docsify](https://docsify.js.org).

## Troubleshooting
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

## Support this Project

- Add a ⭐️ [star on GitHub](https://github.com/hibbitts-design/docsify-this)
- 🐦 [tweet out your thoughts](https://twitter.com/intent/tweet?text=I+am+checking+out+the+Docsify-This.net+project+that+displays+Markdown+files+as+web+pages+in+seconds.+You+can+learn+about+the+project+at&url=https%3A%2F%2Fgithub.com%2Fhibbitts-design%2Fdocsify-this&hashtags=docsify,remote,markdown,file,webpage)
- Follow [@hibbittsdesign](https://twitter.com/hibbittsdesign) for updates

Paul offers a range of services related to using the system-independent format of Markdown in a range of education and publication scenarios, especially in relation to his [Docsify](https://docsify.js.org/#/) and [Grav CMS](https://getgrav.org/) open source projects. These professional services include consulting, premium support subscriptions, workshops, and custom development. Sound of interest? Send a note to [paul@hibbittsdesign.org](mailto:paul@hibbittsdesign.org).

---

This open source project is by Paul Hibbitts of [Hibbitts Design](https://hibbittsdesign.org/).  

**🙇🏻‍♂️Special Thanks**  
[Beau Shaw](https://github.com/DaddyWarbucks) for his [Remote Docsify](https://github.com/DaddyWarbucks/remote-docsify) example.  
[Alan Levine](https://github.com/cogdog) for the inspiration of a consolidated ReadMe collection.
