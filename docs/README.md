<div id="docsifythis">

<div class="docsifythisheader">
<div style="margin-bottom:6px; margin-right:-6px; text-align:right;"><a class="navpill" href="https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/publishing-with-docsify-this/main&sidebar=true&browser-tab-title=Markdown%20Publishing%20with%20Docsify-This&edit-link=https://github.com/hibbitts-design/publishing-with-docsify-this/blob/main/README.md&maxLevel=3&coverpage=_coverpage.md&dark-mode=true#/" target="_blank"><i class="fas fa-book fa-fw"></i>Publishing with Docsify-This Guide</a><a class="navpill" href="https://github.com/hibbitts-design/docsify-this" target="_blank"><i class="fab fa-github fa-fw"></i>GitHub</a></div>
  <div class="logoandtext">
    <img src='https://raw.githubusercontent.com/paulhibbitts/test-docsify-this/main/docs/images/icon.svg' />
    <h1>Docsify&#8288;&#8211;&#8288;This</h1>
  </div>
</div>

<h1><strong>Instantly Turn Online Markdown Files into Web Pages</strong></h1>

This open-source web app, built with the magical documentation site generator [Docsify](https://docsify.js.org), provides a quick way to publish one or more online Markdown files as standalone web pages without needing to set up your own website. Try it out below!

<div id="docsifythisurlbuilder">

<h2>Web Page Builder</h2>

Enter the URL of a Markdown file and view that file as a web page in a new Browser tab. The resulting Docsify-This page URL can be copied and shared or used as an iFrame source URL.

**Markdown File URL** (GitHub, Codeberg or raw source URL):</br>
<input name="markdownFileURL" aria-label="markdown file url" id="docsifythisurlfield" type="url" onfocus="this.select()" onclick="this.select()" onkeypress="checkKey(event);" size="200px" value="https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md" />
<input class="docsifythisurlbuilderprimarybutton" style="border:none;" type="button" id="btn_1" value="Publish as a Standalone Web Page" onclick="openURLs(document.getElementById('docsifythisurlfield').value)"/></br>

Page layout:

<div style="display: flex; margin-top: -3px;">

<label>
  <input type="radio" name="pagestyle" id="stylecontentonly" checked>
  <img style="padding: 2px;" src="images/contentonly.png" alt="Page Content Only" title="Page Content Only" >
  <figcaption id="caption">Content Only</figcaption>
</label>

<label>
  <input type="radio" name="pagestyle" id="styletoc">
  <img style="padding: 2px;" src="images/toc.png" alt="Page with Table of Contents" title="Page with Table of Contents">
  <figcaption id="caption">Table of Contents</figcaption>
</label>

<label>
  <input type="radio" name="pagestyle" id="stylesidebar" >
  <img style="padding: 2px;" src="images/sidebar.png" alt="Page with Docsify Sidebar (collapsible)" title="Page with Docsify Sidebar (collapsible)">
  <figcaption id="caption">Docsify Sidebar</figcaption>
</label>

</div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="editCheck" unchecked><label for="editCheck">Include 'Edit this Page' link with public GitHub or Codeberg files (default location is bottom of page)</label></div>

<div id="docsifythisurlbuildershowhidelink"><a name='toggleDivlink' href='#' onclick='toggleDiv(this); return false;'>Show More Page Appearance Options &raquo;</a></div>

<div id="docsifythisurlbuilderoptionsDiv" style='display: none'>

<hr>

<div class="docsifythisurlbuilderoptionsline">

<div class="docsifythisurlbuilderoptionsline"><label>Title on Browser Tab:</label><br><input type="text" maxlength="60" value="Published by Docsify-This" id="browserTabTitle" name="browserTabTitle"></div>

  <div class='stackedlabeldropdown'>
      <label for="select1">Page font family:</label>
      <select class="docsifythisurlbuilderoptionsline" id="fontfamily" name="fontfamily">
        <option value="default">Source Sans Pro</option>
        <option disabled="disabled">----</option>
        <option value="Arial,sans-serif">Arial, sans-serif</option>
        <option value="Helvetica,sans-serif">Helvetica, sans-serif</option>
        <option value="Helvetica%20Neue,Helvetica,Arial,sans-serif">Helvetica Neue, sans-serif</option>
        <option value="Lato%20Extended,Lato,Helvetica%20Neue,Helvetica,Arial,sans-serif">Lato, sans-serif</option>
        <option value="Open%20Sans,sans-serif">Open Sans, sans-serif</option>
        <option value="Tahoma,sans-serif">Tahoma, sans-serif</option>
        <option value="Verdana,sans-serif">Verdana, sans-serif</option>
        <option value="Georgia,serif">Georgia, serif</option>
        <option value="Merriweather,Georgia,serif">Merriweather, serif</option>
        <option value="Times%20New%20Roman,serif">Times New Roman, serif</option>
        <option value="Courier,monospace">Courier, monospace</option>
      </select>
  </div>

  <div class='stackedlabeldropdown'>
      <label for="select2">Font size:</label>
      <select class="docsifythisurlbuilderoptionsline" id="fontsize" name="fontsize">
        <option value="1.125">18px (1.125rem)</option>
        <option disabled="disabled">----</option>
        <option value=".875">14px (.875rem)</option>
        <option value="1">16px (1rem)</option>
        <option value="1.25">20px (1.25rem)</option>
      </select>
  </div>
          
  <div class='stackedlabeldropdown'>
      <label for="select3">Line height:</label>
      <select class="docsifythisurlbuilderoptionsline" id="lineheight" name="lineheight" style="width: 60px;">
      <option value="1.4">1.4</option>
      <option disabled="disabled">----</option>
      <option value="1.2">1.2</option>
      <option value="1.3">1.3</option>
      <option value="1.5">1.5</option>
      <option value="1.6">1.6</option>
    </select>
  </div>

</div>

<div class="docsifythisurlbuilderoptionsline"><label type="color">Page link color:</label><br><input type="text" maxlength="7" size="7" value="#0374B5" id="linkcolor" style="text-transform:uppercase" oninput="validateColorAndUpdatePreview()" data-coloris><span id="linkcolorpreview"></span></div>

<div class="docsifythisurlbuilderoptionsline"><label>Text of 'Edit this Page' link:</label><br><input type="text" maxlength="60" value="Edit this Page" id="editLinkText" name="editLinkText"></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="editLinkTopCheck" unchecked><label for="editLinkTopCheck">Set location of the 'Edit this Page' link to top of page</label></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="hideCredits" unchecked><label for="hideCredits">Remove the Docsify-This credit text from bottom of page</label></div>

<hr>

<div class="docsifythisurlbuilderoptionsline"><label for="tocheadings">Headings to include in Table of Contents (at least one required):</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="toch1"  unchecked><label for="toch1">Heading 1 (h1)</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="toch2" checked><label for="toch2">Heading 2 (h2)</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="toch3" unchecked><label for="toch3">Heading 3 (h3)</label></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="narrowToC" unchecked><label for="narrowToC">Use a narrower Table of Contents area, along with a smaller screen breakpoint</label></div>

<hr>

<div class="docsifythisurlbuilderoptionsline"><label>Maximum Header level (1-6) of Docsify Sidebar:</label><br><input type="number" size="1" value="2" min="1" max="6" id="maxLevel" name="maxLevel"></div>

<hr>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="hypothesisenable" unchecked><label for="hypothesisenable">Enable page annotation with Hypothes.is, an open source web annotation tool</label></div>

<input class="docsifythisurlbuilderprimarybutton" style="border:none;margin-top: 10px;" type="button" id="btn_1" value="Publish as a Standalone Web Page" onclick="openURLs(document.getElementById('docsifythisurlfield').value)"/>

<div id="docsifythisurlbuilderrestoredefaultsbutton"><input style="color: #323232;" type="button" id="btn_4" value="Reset to Defaults" onclick="restoreAllDefaults()"/></div>

</div>

</div>

## All About Docsify-This

* [What Problem Does Docsify-This Solve?](/?id=what-problem-does-docsify-this-solve)
* [How Docsify-This Works](/?id=how-docsify-this-works)
* [Example Content Workflows](/?id=example-possible-workflows)
* [Ready-to-Use Docsify-This Markdown Templates](/?id=ready-to-use-docsify-this-markdown-templates)
* [More Docsify-This Markdown Examples](/?id=more-docsify-this-markdown-examples)
* [Page Appearance URL Parameters](/?id=page-appearance-url-parameters)
* [Embedding Docsify-This Pages into Other Platforms](/?id=embedding-docsify-this-pages-into-other-platforms)
* [Markdown Syntax References](/?id=markdown-syntax-references)
* [Font Awesome Icons](/?id=font-awesome-icons)
* [Supported Markdown CSS Classes](/?id=supported-markdown-css-classes)
* [Custom Markdown CSS Classes](/?id=custom-markdown-css-classes)
* [Tips and Techniques](/?id=tips-and-techniques)
* [Improving Markdown Previews in Text Editors](/?id=improving-markdown-previews-in-text-editors)
* [Looking for Even More Customization and Control?](/?id=looking-for-even-more-customization-and-control)
* [Troubleshooting](/?id=troubleshooting)
* [Privacy Policy Summary](/?id=privacy-policy-summary)
* [Support this Project](/?id=support-this-project)

---

### What Problem Does Docsify-This Solve?

Docsify-This provides an easy way to display and share [Markdown](https://www.markdownguide.org/basic-syntax/) content in various contexts, with no website setup or build process required. Collaborative authoring using GitHub or Codeberg is also supported.  

With Docsify-This you can:

* Publish your Markdown files as standalone web pages, with no website setup or build process required
* Visually style your standalone web pages using a point-and-click Web Page Builder
* Share existing GitHub-hosted Markdown files as standalone web pages, with an optional 'Edit this Page' link
* Seamlessly embed constraint-free Markdown/HTML, which you have authored, into other platforms (e.g. LMS or CMS)
* Reuse existing Markdown content by seamlessly embedding it within other platforms (e.g. LMS or CMS)
* Utilize the supported URL parameters when embedding content to match each destination platform better visually

---

### How Docsify-This Works

Docsify-This is a customized [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) site configured to render remote Markdown files via URL parameters in the following format (automatically created by the above Web Page Builder):

<p style="word-wrap: break-word; margin-top: 1rem; padding: 6px; background-color: #666666; color: #F1F1F1; font-weight:normal; font-size: x-large; border-radius: 3px;">https://docsify-this.net?basePath=<span style="font-weight:bold">URLpath<span style="font-weight:normal">&homepage=<span style="font-weight:bold">filename.md</p>

The **basePath** Docsify parameter is the URL path containing the raw source Markdown file to render. If the file is named the expected default **README.md** then no other parameter are required, otherwise the **homepage** Docsify parameter must also be included set to the name of the file to render. An example Docsify-This URL would be:
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md  

To render a file stored in a public GitHub repository you need to use the raw source URL of that file (i.e. raw.githubusercontent.com) - tap the **Raw** button when [viewing a file](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file) to get this URL when not using the above Web Page Builder, which does this automatically. It is also possible to render a file stored in a private GitHub repository by activating GitHub Pages within that repository and then using the GitHub Pages URL of that file (i.e. username.github.io).  

The appearance of rendered Markdown files can be customized by optional [URL parameters](/?id=page-appearance-url-parameters) and a small set of available [CSS Classes](/?id=supported-markdown-css-classes) within source Markdown files. In addition to supporting standard Markdown, [Embed.ly](https://embed.ly/code), [H5P](https://h5p.org/), [Katex](https://github.com/upupming/docsify-katex), and [Mermaid Diagrams](https://github.com/Leward/mermaid-docsify) are included. Optionally, page annotation with [Hypothes.is](https://hypothes.is) can be enabled.  

Looking for an overall introduction to publishing with Docsify-This? Check out [Markdown Publishing with Docsify-This](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/publishing-with-docsify-this/main&sidebar=true&edit-link=https://github.com/hibbitts-design/publishing-with-docsify-this/blob/main/README.md&maxLevel=4&title=Markdown%20Publishing%20with%20Docsify-This).

---

### Example Content Workflows

<div class="row">
<div class="column">

![Docsify-This.net open and collaborative workflow using GitHub Markdown files](images/docsify-this-gitHub.jpg ':class=image-border-rounded')  
_Docsify-This.net open and collaborative workflow using GitHub Markdown files._

</div>
<div class="column">

![Docsify-This.net workflow using Webserver Markdown files](images/docsify-this-webserver.jpg ':class=image-border-rounded')
_Docsify-This.net workflow using Webserver Markdown files._

</div>
</div>

---

### Ready-to-Use Docsify-This Markdown Templates

While all you need to get going with Docsify-This is a basic Markdown file, here are some templates (with step-by-step how to use instructions) you can use that show what is possible with Markdown, images, and even a few HTML snippets!

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This One Page Article Template](images/docsify-this-one-page-article.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

#### [Docsify-This One Page Article Template](https://github.com/hibbitts-design/docsify-this-one-page-article)

One Page Article [home.md](https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md) file displayed by Docsify-This as a:  
* [Standalone Page](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md "Single Page Docsify Open Course Starter Kit - Standalone Page")  
* [Standalone Page with Table of Contents including h2 and h3 Headers and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md&toc=true&toc-headings=h2,h3&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Table of Contents")  
* [Standalone Page with Docsify Sidebar with maxLevel of 3 (H3) and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md&sidebar=true&maxLevel=3&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Docsify Sidebar")

</div>

</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This One Page Course Template](images/docsify-this-one-page-course.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

#### [Docsify-This One Page Course Template](https://github.com/hibbitts-design/docsify-this-one-page-course)

One Page Course [home.md](https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md) file displayed by Docsify-This as a:   
* [Standalone Page](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-course/main&homepage=home.md "Single Page Docsify Open Course Starter Kit - Standalone Page")  
* [Standalone Page with Table of Contents and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-course/main&homepage=home.md&toc=true&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Table of Contents")  
* [Standalone Page with Docsify Sidebar and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-course/main&homepage=home.md&sidebar=true&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Docsify Sidebar")

</div>

</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This Multiple Page Site](images/docsify-this-multiple-page-site.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

#### [Docsify-This Multiple Page Site Template](https://github.com/hibbitts-design/docsify-this-multiple-page-site)

Multiple Page Site [home.md](https://github.com/hibbitts-design/docsify-this-multiple-page-site/blob/main/home.md) file, including the use of the Markdown CSS class `header-image-full-width`, displayed by Docsify-This as:  
* [Standalone Pages](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md "Docsify-This Multiple Page Site - Standalone Pages")
* [Standalone Pages and 'Edit this Page' links](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-site/blob/main/home.md "Docsify-This Multiple Page Site - Standalone Pages")
* [Standalone Pages with Docsify Navbar](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&loadNavbar=_navbar "Docsify-This Multiple Page Site - Standalone Pages with Docsify Navbar and an 'Edit this Page' link")
* [Standalone Pages with Footer and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&loadFooter=_footer&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-site/blob/main/home.md "Docsify-This Multiple Page Site - Standalone Pages with Footer and an 'Edit this Page' link")
* [Standalone Pages with Docsify Navbar and 'GitHub Repository' link](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&loadNavbar=_navbar&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-site&edit-link-text=GitHub%20Repository "Docsify-This Multiple Page Site - Standalone Pages with Docsify Navbar and an 'GitHub Repository' link")

</div>

<div class="docsifythiscolumn35" >

![Docsify-This Course Site Template](images/docsify-this-multiple-page-course-site.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

#### [Docsify-This Multiple Page Course Site Template](https://github.com/hibbitts-design/docsify-this-multiple-page-course-site)

Multiple Page Course Site [home.md](https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main/home.md) file, including the use of a custom Docsify [Sidebar](https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main/_sidebar.md) file, displayed by Docsify-This as:  
* [Standalone Site](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&hide-credits=true&browser-tab-title=CPT-363 "Docsify-This Multiple Page Course Site - Standalone Site")  
* [Standalone Site with custom Favicon](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&loadFavicon=favicon.png&hide-credits=true&browser-tab-title=CPT-363 "Docsify-This Multiple Page Course Site - Standalone Site")  
* [Standalone Site with a 'Propose an Edit to this Site' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main&edit-link-text=Propose%20an%20Edit%20to%20this%20Site&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&hide-credits=true&browser-tab-title=CPT-363 "Docsify-This Multiple Page Course Site - Standalone Site with a 'Propose an Edit to this Site' link")
* [Standalone Site with Footer and a 'Propose an Edit to this Site' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main&edit-link-text=Propose%20an%20Edit%20to%20this%20Site&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&hide-credits=true&loadFooter=_footer.md&browser-tab-title=CPT-363 "Docsify-This Multiple Page Course Site - Standalone Site with Footer and a 'Propose an Edit to this Site' link")

</div>

</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This LMS Content Pages Template](images/docsify-this-lms-content-pages.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

#### [Docsify-This LMS Content Pages Template](https://github.com/hibbitts-design/docsify-this-lms-content-pages)

Example pages, including the use of the `font-family`, `font-size` and `hide-credits` URL parameters for seamless content embedding within the Canvas LMS, as displayed by Docsify-This:  
* [Embeddable Home Page](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=home.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Home Page")
* [Embeddable Weekly Module Page](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=module-01.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Weekly Module Page")
* [Embeddable Schedule Page](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=schedule.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Schedule Page")
* [Embeddable Topics Page](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=topics.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Topics Page")
* [Embeddable Resources Page](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=resources.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Resource Page")
* [Embeddable UX Techniques Guide Page (using Accordion format)](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=ux-techniques-guide.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable UX Techniques Guide Page (using Accordion format)")
* [Embeddable Contact Page](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=contact.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Contact Page")

View an example Canvas LMS site using Docsify-This content at https://canvas.sfu.ca/courses/76692.

</div>

</div>

---

### More Docsify-This Markdown Examples

[GitHub Training Manual Working Locally with Git Markdown file](https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md), displayed by Docsify-This as a:  
* [Standalone Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md "GitHub Training Manual Working Locally with Git - Standalone Page")  
* [Standalone Page with Table of Contents](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&toc=true&toc-headings=h2,h3 "GitHub Training Manual Working Locally with Git - Standalone Page with Table of Contents")
* [Standalone Page with Docsify Sidebar](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&sidebar=true&maxLevel=3 "GitHub Training Manual Working Locally with Git - Standalone Page with Docsify Sidebar")

[Easy Markdown to Github Pages linked set of Markdown files](https://github.com/nicolas-van/easy-markdown-to-github-pages), displayed by Docsify-This as:   
* [Standalone Pages](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&homepage=README.md "Easy Markdown to Github Pages - Standalone Page")  
* [Standalone Pages with Table of Contents and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&homepage=README.md&toc=true&edit-link=https://github.com/nicolas-van/easy-markdown-to-github-pages/blob/master/README.md "Easy Markdown to Github Pages - Standalone Page with Table of Contents")  
* [Standalone Pages with Docsify Sidebar and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&homepage=README.md&sidebar=true&edit-link=https://github.com/nicolas-van/easy-markdown-to-github-pages/blob/master/README.md "Easy Markdown to Github Pages - Standalone Page with Docsify Sidebar")

[A Collection of GitHub Markdown files](https://github.com/paulhibbitts/cmpt-363-222-pages) used as course content [within an SFU CMPT-363 Canvas LMS site](https://canvas.sfu.ca/courses/69678).  

[A Collection of GitHub Markdown files](https://github.com/paulhibbitts/docsify-this-cmpt-363-222-site) used as a [standalone multiple page SFU CMPT-363 course site with SFU visual branding](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-cmpt-363-222-site/main&homepage=home.md&loadNavbar=_navbar.md&sidebar=true&loadSidebar=_sidebar.md&loadFavicon=favicon.png&dark-mode=true&browser-tab-title=CMPT-363-222&dark-mode=true#/README).  

[GitHub Markdown Content Demo file](https://github.com/hibbitts-design/docsify-this-markdown-content-demo/blob/main/README.md), displayed by Docsify-This as a [Standalone Page with 'View raw Markdown' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-content-demo/main&edit-link=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-content-demo/main/README.md&edit-link-text=View%20raw%20Markdown).  

[Codeberg Markdown Content Demo file](https://codeberg.org/paulhibbitts/docsify-this-markdown-content-demo/src/branch/main/README.md), displayed by Docsify-This as a [Standalone Page with 'View raw Markdown' link](https://docsify-this.net/?basePath=https://raw.codeberg.page/paulhibbitts/docsify-this-markdown-content-demo/&edit-link=https://codeberg.org/paulhibbitts/docsify-this-markdown-content-demo/raw/branch/main/README.md&edit-link-text=View%20raw%20Markdown).  

[GitHub's LaTeX Support Examples Markdown file](https://github.com/dotcom-poland/medium-latex-support/blob/main/README.md), displayed by Docsify-This as a [Standalone Page with an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/dotcom-poland/medium-latex-support/main&edit-link=https://github.com/dotcom-poland/medium-latex-support/blob/main/README.md#/).

[Mermaid-Docsify Example GitHub Markdown file](https://github.com/Leward/mermaid-docsify/blob/master/example/README.md), displayed by Docsify-This as a [Standalone Page with an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/Leward/mermaid-docsify/master/example&edit-link=https://github.com/Leward/mermaid-docsify/blob/master/example/README.md#/).  

---

### Page Appearance URL Parameters

#### Web Page Builder

* [browser-tab-title](/?id=browser-tab-title)
* [edit-link](/?id=edit-link)
* [edit-link-text](/?id=edit-link-text)
* [edit-link-top](/?id=edit-link-top)
* [font-family](/?id=font-family)
* [font-size](/?id=font-size)
* [hide-credits](/?id=hide-credits)
* [hypothesis](/?id=hypothesis)
* [line-height](/?id=line-height)
* [maxLevel](/?id=maxLevel)
* [sidebar](/?id=sidebar)
* [toc](/?id=toc)
* [toc-headings](/?id=toc-headings)
* [toc-narrow](/?id=toc-narrow)

##### browser-tab-title
Set a custom title on Browser tab for your standalone pages with the optional **browser-tab-title** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/demo-grav-open-matter-course-hub/master/pages/04.resources&homepage=page.md&browser-tab-title=Resources Please note to use titles with spaces they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "My Page" would be "My%20Page".  

##### edit-link
Display a "Edit this Page" link (default location is bottom of page) with the optional **edit-link** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md

##### edit-link-text
Change the default text for a "Edit this Page" link with the optional **edit-link-text** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md&edit-link-text=View%20as%20Markdown Please note to use text with spaces they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "View as Markdown" would be "View%20as%20Markdown".  

##### edit-link-top
Change the location of the "Edit this Page" link from the bottom of pages to be the top of pages with the optional **edit-link-top** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md&edit-link-top=true

##### font-family
Set a custom font for your standalone pages with the optional **font-family** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-family=Helvetica,Arial,sans-serif. This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform. Please note to use fonts with spaces in their names they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "Courier New" would be "Courier%20New".  

##### font-size
Set a custom font size for your standalone pages with the optional **font-size** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-size=1. This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform. Please note the font size is set in [REM units](https://www.freecodecamp.org/news/what-is-rem-in-css/).  

##### hide-credits
Hide the credits usually shown at the bottom of every displayed Docsify-This page with the optional **hide-credits** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&hide-credits=true.

##### hypothesis
Enable page annotation with [Hypothes.is](https://hypothes.is) with the optional **hypothesiss** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&hypothesis=true.  

##### line-height
Set a custom line height for your standalone pages with the optional **line-height** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&line-height=1.5. 

##### link-color
Set a custom color for all links, defined using the standard hexadecimal format _without the '#' symbol_ with the optional **link-color** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-color=CC0000.

##### maxLevel
Set the maximum header level of the Docsify sidebar with the optional **maxLevel** Docsify parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&sidebar=true&maxLevel=3 

##### sidebar
Display a Docsify sidebar with the optional **sidebar** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&sidebar=true 

##### toc
Display a page table of contents with the optional **toc** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true

##### toc-headings
Set the page heading levels (i.e. h1, h2, etc.) to be included in the Page Table of Contents with the optional **toc-headings** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true&toc-headings=h1,h2,h3.

##### toc-narrow
Use a less wide Page Table of Contents with the optional **toc-narrow** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc-narrow=true. This parameter can be particularly valuable when embedding content where a smaller screen area is likely.  

#### Additional URL Parameters

The following URL parameters are available but not included in the Web Page Builder.

* [coverpage](/?id=coverpage)
* [coverpage-color](/?id=coverpage-color)
* [coverpage-color-dark-mode](/?id=coverpage-color-dark-mode)
* [dark-mode](/?id=dark-mode)
* [header-weight](/?id=header-weight)
* [link-color-dark-mode](/?id=link-color-dark-mode)
* [loadFavicon](/?id=loadFavicon)
* [loadFooter](/?id=loadFooter)
* [loadNavbar](/?id=loadNavbar)
* [page-title](/?id=page-title)
* [search](/?id=subMaxLevel)
* [zoom-images](/?id=zoom-images)

##### coverpage
Display a Docsify coverpage with the optional **coverpage** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=home.md&coverpage=_coverpage.md

##### coverpage-color
Set a custom color for the coverpage with the optional **coverpage-color** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=home.md&coverpage=_coverpage.md&coverpage-color=cc0000

##### coverpage-color-dark-mode
Set a custom color for the coverpage in dark mode with the optional **coverpage-color-dark-mode** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=home.md&dark-mode=true&link-color=CC0000&link-color-dark-mode=FF9E9E&coverpage=_coverpage.md&coverpage-color=cc0000&coverpage-color-dark-mode=4d0000

##### dark-mode
Automatically switch light/dark theme based on system OS-level preference, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&dark-mode=true

##### header-weight
Set a custom header weight (default is 400 - regular) for your standalone pages with the optional **header-weight** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&header-weight=600. 

##### link-color-dark-mode
Set a custom color for all links in dark mode, defined using the standard hexadecimal format _without the '#' symbol_ with the optional **link-color-dark-mode** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-color=CC0000&dark-mode=true&link-color-dark-mode=FF9E9E.

##### loadFavicon
You can set a custom Favicon from the image file passed from the optional **loadFavicon** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-markdown-content-demo/main&loadFavicon=open-access.png

##### loadFooter
Load a Docsify footer from the Markdown file passed with the optional **loadFooter** Docsify parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&loadFooter=_footer.md

##### loadNavbar
Load a [Docsify custom navbar](https://docsify.js.org/#/custom-navbar?id=custom-navbar) from the Markdown file passed with the optional **loadNavbar** Docsify parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&loadNavbar=_navbar.md

##### loadSidebar
Load a [Docsify custom sidebar](https://docsify.js.org/#/more-pages?id=sidebar) from the Markdown file passed with the optional **loadSidebar** Docsify parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-cmpt-363-222-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar-with-home.md  

##### page-title
Set a custom page title at the top of your standalone pages with the optional **page-title** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/demo-grav-open-matter-course-hub/master/pages/04.resources&homepage=page.md&page-title=Resources Please note to use titles with spaces they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "My Page" would be "My%20Page".  

##### search
Enable the Docsify Search plugin (which currently includes matches for text and markup) on multiple page sites including a custom Sidebar with the optional **search** Docsify parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&search=true

##### subMaxLevel
Set the maximum header level of a custom Docsify sidebar (i.e. file '_sidebar.md) with the optional **subMaxLevel** Docsify parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-cmpt-363-222-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar-with-home.md&subMaxLevel=1  

##### zoom-images
Enable image zoom (tapping on images to enlarge them) with the optional **zoom-images** Docsify parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-markdown-content-demo/main&zoom-images=true  

---

### Embedding Docsify-This Pages into Other Platforms

#### Canvas LMS

[Embed content in Canvas](https://www.howtocanvas.com/create-amazing-pages-in-canvas/embedding-content)  
iFrame code example, including URL parameters to seamlessly match Docsify-This content to Canvas:  

```html
<p><iframe style="overflow: hidden; border: 0px #ffffff none; background: #ffffff;" src="https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/cmpt-363-222-pages/main&homepage=home.md&font-family=Lato%20Extended,Lato,Helvetica%20Neue,Helvetica,Arial,sans-serif&font-size=1&hide-credits=true" width="800px" height="1400px" allowfullscreen="allowfullscreen"></iframe></p>
```

If a scroll bar is present, you may want to re-edit your iFrame code and adjust the "height" value.  

[How do I add an external URL as a module item?](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-add-an-external-URL-as-a-module-item/ta-p/967)  
Module external link example, with Page Table of Contents:  

```html
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/cmpt-363/main/docs/222&homepage=week-02.md&toc-narrow=true&font-family=Lato%20Extended,Lato,Helvetica%20Neue,Helvetica,Arial,sans-serif&font-size=1&hide-credits=true
```

[Creating a custom link in your course navigation using the Redirect Tool](https://help.canvas.yale.edu/m/55452/l/914676-creating-a-custom-link-in-your-course-navigation-using-the-redirect-tool)  
Redirect URL field example:  

```html
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/cmpt-363-222-pages/main&homepage=resources.md&edit-link=https://github.com/paulhibbitts/cmpt-363-222-pages/blob/main/resources.md&font-family=Lato%20Extended,Lato,Helvetica%20Neue,Helvetica,Arial,sans-serif&font-size=1&hide-credits=true
```

#### Moodle LMS

[iFrame (for embedding content within pages)](https://docs.moodle.org/401/en/Iframe)  

[External tool (for adding a link to course navigation or elements)](https://docs.moodle.org/401/en/External_tool)

---

### Markdown Syntax References

* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Markdown Guide](https://www.markdownguide.org/)

---

### Font Awesome Icons

The display of [Font Awesome Free](https://fontawesome.com/icons) icons within Markdown content is supported with the following format:

:`fas fa-home fa-fw`:

The above Markdown is equivalent to the HTML markup `<i class="fas fa-home fa-fw"></i>`.

The following style prefixes are available with Docsify-This:

* fas (i.e. [Solid](https://fontawesome.com/search?o=r&m=free&s=solid))
* fab (i.e. [Brands](https://fontawesome.com/search?o=r&m=free&f=brands))

---

### Supported Markdown CSS Classes

* [badge](/?id=badge)
* [banner-image](/?id=banner-image)
* [banner-tall-image](/?id=banner-tall-image)
* [button](/?id=button)
* [embedly-card](/?id=embedly-card)
* [header-image-fade](/?id=header-image-fade)
* [header-image-full-width](/?id=header-image-full-width)
* [image-75/image-50/image-25](/?id=image-75image-50image-25)
* [image-75-border/image-50-border/image-25-border](/?id=image-75-borderimage-50-borderimage-25-border)
* [image-border](/?id=image-border)
* [image-border-rounded](/?id=image-border-rounded)
* [navpill](/?id=navpill)
* [row/column](/?id=rowcolumn)
* [video-container-4by3](/?id=video-container-4by3)
* [video-container-16by9](/?id=video-container-16by9)

The following CSS classes are available when authoring your own Markdown content.  

#### badge

<span class='badge'> Example Badge</span>

```html
<span class='badge'> Tue Jun 12th 11:59pm PDT</span>
```

<span class='badge'> [Example Badge with Link](https://www.timeanddate.com/worldclock/fixedtime.html?msg=CMPT-363+Blackboard+Mini-lectures+and+Activities&iso=20220516T1430&p1=256&ah=1&am=50)</span>  

```html
<span class='badge'> [Tue May 16 2:30pm PT](https://www.timeanddate.com/worldclock/fixedtime.html?msg=CMPT-363+Blackboard+Mini-lectures+and+Activities&iso=20220516T1430&p1=256&ah=1&am=50)</span>  
```

#### banner-image
Cropped to height of 250px on large screens, 125px on small screens.  

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-image')
```

#### banner-tall-image
Cropped to height of 350px on large screens, 175px on small screens.   

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-tall-image')
```

#### button

[Example Button](# ':class=button')

```markdown
[Required Reading Quiz due Jun 4th](https://canvas.sfu.ca/courses/44038/quizzes/166553 ':class=button')
```

#### embedly-card
For linked article previews, embedded slides/videos, etc.  

```markdown
<a class="embedly-card" data-card-controls="0" data-card-align="left" href="https://blog.prototypr.io/defining-usability-e7bf42e8abd0">Defining usability</a>
```

#### header-image-fade
Suggested width of 1200px to 2000px.  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=header-image-fade')
```

#### header-image-full-width
Suggested size of 1200px to 2000px width and 400px to 600px height, and display of Table of Contents is not available.  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=header-image')
```

#### image-75/image-50/image-25
Scale images to %.  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=image-75')
```

#### image-75-border/image-50-border/image-25-border
Scale images with border to %.  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=image-75-border')
```

#### image-border

```markdown
![Photo of Mountain](images/mountain.jpg ':class=image-border')
```

#### image-border-rounded

```markdown
![Photo of Mountain](images/mountain.jpg ':class=image-border-rounded')
```

#### navpill

[Example Navpill](# ':class=navpill')

```markdown
[GitHub](https://github.com/hibbitts-design/docsify-this ':class=navpill')
```

<a class="navpill" href="https://github.com" target="_blank"><i class="fab fa-github fa-fw"></i>Example Navpill with Font Awesome Icon</a>

```html
<a class="navpill" href="https://github.com" target="_blank"><i class="fab fa-github fa-fw"></i>GitHub</a>
```

#### row/column

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

#### video-container-4by3

```html
<div class="video-container-4by3"><div class="video-container-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/lJIrF4YjHfQ"></iframe></div>
```

#### video-container-16by9
Automatically added to all iFrames with the source domains 'youtube.com' or 'docs.google.com'.  
```html
<div class="video-container-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/lJIrF4YjHfQ"></iframe></div>
```

---

### Custom Markdown CSS Classes

<style>
.markdown-section .mybutton, .markdown-section .mybutton:hover {
  cursor: pointer;
  color: #CC0000;
  height: auto;
  display: inline-block;
  border: 2px solid #CC0000;
  border-radius: 4rem;
  margin: 2px 0px 2px 0px;
  padding: 8px 18px 8px 18px;
  line-height: 1.2rem;
  background-color: white;
  font-family: -apple-system, "Segoe UI", "Helvetica Neue", sans-serif;
  font-weight: bold;
  text-decoration: none;
}


</style>

In addition to the Markdown CSS classes supported by Docsify-This, you can also define your own custom classes within your displayed Markdown files, for example:

[Custom CSS Class Button](# ':class=mybutton')

CSS in Markdown file:  
```css
<style>
.markdown-section .mybutton, .markdown-section .mybutton:hover {
  cursor: pointer;
  color: #CC0000;
  height: auto;
  display: inline-block;
  border: 2px solid #CC0000;
  border-radius: 4rem;
  margin: 2px 0px 2px 0px;
  padding: 8px 18px 8px 18px;
  line-height: 1.2rem;
  background-color: white;
  font-family: -apple-system, "Segoe UI", "Helvetica Neue", sans-serif;
  font-weight: bold;
  text-decoration: none;
}
</style>
```

Markdown:  
```markdown
[Required Reading Quiz due Jun 4th](https://canvas.sfu.ca/courses/44038/quizzes/166553 ':class=mybutton')
```

---

### Tips and Techniques

#### Matching Fonts with Your Destination Platform Content
Use a page inspector to identify the font family and font size used in the platform you are embedding Docsify-This content in, and then pass that font family using the `font-familiy` ([encoded](https://meyerweb.com/eric/tools/dencoder/), where spaces are replaced with '%20') and `font-size` (REM units) URL parameters to Docsify-This. For example, to match fonts with the Canvas LMS:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/cmpt-363-222-pages/main&homepage=topics.md&font-family=Lato%20Extended,Lato,Helvetica%20Neue,Helvetica,Arial,sans-serif&font-size=1  

#### Providing a Page Table of Contents within a Smaller Destination Platform Screen Area
If you want to include a Page Table of Contents with embedded Docsify-This content, but the destination platform screen area is not very wide, you might want to try the optional `toc-narrow` display option. For example, to use a narrower Table of Contents area that includes a smaller screen breakpoint:
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/cmpt-363/main/docs/222&homepage=week-01.md&toc-narrow=true  

#### Including Code Blocks
Using [Prismjs](https://prismjs.com/) code blocks with syntax highlighting is supported for the languages [included with Docsify](https://docsify.js.org/#/language-highlight?id=language-highlighting) and as well Bash, Go, Java, Kotlin, PHP, Python and Swift. To embed a code block use the Markdown standard of triple backticks and start the block with the name of the language, for example to embed a block of Javascript code with syntax highlight the following would be used:  

<pre>
```javascript
function test() {
  console.log("Hello world!");
}
```
</pre>

Which would then appear as:

```javascript
function test() {
  console.log("Hello world!");
}
```

#### Display of AsciiDoc files (file extension .adoc)
The display of [AsciiDoc](https://asciidoc.org/) files ('.adoc' extension) via [DownDoc](https://github.com/opendevise/downdoc) by passing the relevant filenames within a Docsify-This URL (not included in the Web Page Builder), for example: https://docsify-this.net/?basePath=https://raw.githubusercontent.com/asciidoctor/asciidoctor-pdf/main/examples&homepage=basic-example.adoc&edit-link=https://github.com/asciidoctor/asciidoctor-pdf/blob/main/examples/basic-example.adoc  

#### Changing the Default Values of the Docsify-This Web Page Builder
You can change the default values of the Docsify-This Web Page Builder via URL parameters - this is especially useful when doing online sessions or workshops on Docsify-This. The parameters available are:

##### url-field
```html

https://docsify-this.net/?url-field=https://codeberg.org/paulhibbitts/docsify-this-one-page-course/src/branch/main/home.md

```

```html

https://docsify-this.net/?url-field=empty

```

##### toc-layout
```html

https://docsify-this.net/?url-field=https://codeberg.org/paulhibbitts/docsify-this-one-page-course/src/branch/main/home.md&toc-layout=true

```

##### sidebar-layout
```html

https://docsify-this.net/?url-field=https://codeberg.org/paulhibbitts/docsify-this-one-page-course/src/branch/main/home.md&sidebar-layout=true

```

##### edit-link-checkbox
Supported with GitHub or Codeberg hosted Markdown files.
```html

https://docsify-this.net/?url-field=https://codeberg.org/paulhibbitts/docsify-this-one-page-course/src/branch/main/home.md&edit-link-checkbox=true

```

##### show-page-options
```html

https://docsify-this.net/?show-page-options=true

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

Docsify-This is intended as a quick way to display one or more remotely located Markdown files. To further customize the rendering of remote files, fork/clone your own instance of [Docsify-This](https://github.com/hibbitts-design/docsify-this) on GitHub and enable GitHub Pages with the folder `/docs`.  

If you want to run Docsify-This on your own Websever, create a destination folder on your server and then copy the files within the Docsify-This folder `/docs` to your newly created server folder.  

You can also run Docsify-This on LMSs that support file libraries such as Canvas and Moodle. For example, here is a [Docsify-This instance on Canvas](https://canvas.instructure.com/courses/6321275/files/211083785/download).

To host a Docsify-This instance on your LMS, do the following:  
1. Tap **Download** on the [Docsify-This repository page](https://github.com/hibbitts-design/docsify-this)
2. Upload to your LMS file storage area, and unzip the upload file
3. Based on your LMS, determine the external URL required to load the `index.html` file within the Docsify `Docs` folder. In Canvas, an example URL would look similar to `https://canvas.instructure.com/courses/6321275/files/211083785/download`.

If you want to further customize and control the presentation of your Markdown content, especially when rendering multiple page sites, you can install your own [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) (that this hosted web app is based on) and store all Markdown files within that site. You can learn more about the capabilities of Docsify itself at [Docsify.js.org](https://docsify.js.org).  

---

### Troubleshooting

_'404 - Not found' message is displayed._  
The provided **basePath** parameter and/or optional **homepage** parameter may not be correct, verify that these items lead to accessible content. This error message may also result from a [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy, which restricts resources on a web page to be requested from another domain. If possible, relocate files to a domain that supports cross-origin requests or alternatively if the domain in question is under your control explore re-configuring [CORS related settings](https://www.w3.org/wiki/CORS_Enabled). You can confirm the cause of the 404 message by viewing the errors displayed in the [Browser Javascript Console](https://balsamiq.com/support/faqs/browserconsole/).  

When displaying GitHub Markdown files, the branch name is assumed to be `main`, and other paths will likely cause a 404 message. When displaying Codeberg Markdown files, the path is assumed to contain `/src/branch/main` and other paths will likely cause a 404 message.  

_Generation of 'Edit this Page' links on multiple page Markdown sites with a Navbar or custmom Sidebar not working as expected._   
Due to not being able to update Navbar or custom Sidebar links before page rendering, 'Edit this Page' links cannot be automatically updated to their correct target pages. Manually pass a URL pointing to the Git Repository using the URL parameter `edit-link` as a workaround, for example https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&loadNavbar=_navbar&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-site&edit-link-text=GitHub%20Repository and https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-cmpt-363-222-site/main&homepage=home.md&loadNavbar=_navbar.md&sidebar=true&loadSidebar=_sidebar.md&edit-link=https://github.com/paulhibbitts/docsify-this-cmpt-363-222-site/tree/main&edit-link-text=GitHub%20Repository

_Updated Markdown file not displayed in the Browser._  
Docsify is likely displaying the last cached version. To ensure the most recent version of a file is loaded, do a [hard refresh of your Browser cache](https://www.makeuseof.com/hard-refresh-browser/).

_Embedded image not displayed as expected._  
The most likely cause for embedded images in Markdown not being displayed as expected is the use of relative paths (i.e. `![Alt Text](images/filename.jpg)`) - review image paths and ensure the full path to each image is used (i.e. `![Alt Text](/folder/images/filename.jpg)`). Likewise, if images in HTML are not being displayed as expected the likely cause is again the use of relative paths (i.e. `<img src="images/filename.jpg" alt="Alt Text">`) - use absolute URLs for HTML image sources (i.e. `<img src="https://raw.githubusercontent.com/user/repository/main/images/filename.jpg" alt="Alt Text">`).

_Embedded iFrame not displayed as expected._   
Due to iframe cross-domain issues embedded content may not be able to be displayed. Use the included rich media embed service [embed.ly](https://embed.ly/) as a workaround.  

For example, the following iFrame HTML:  

```html
<div class="video-container-16by9"><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRnnRFelgw1ksq_p8Eryg3dnyLCRRLPf5fBgdwdv9p-tCIwcxqWvzDGrGbjxGHL7HqEJVpmV26ntk3a/embed?start=false&loop=false&delayms=3000" frameborder="0" width=780" height="585" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
```

Would be changed to:  

```html
<a class="embedly-card" data-card-controls="0" data-card-align="left" data-card-width="100%" href="https://docs.google.com/presentation/d/1BLaaOTsGxDmNcAhg6pdx3hl9IvI8NErg8Oe5ceh83fw/edit?usp=sharing">Grav and Docsify Slides Placeholder</a>
```

---

### Privacy Policy Summary

* This website is hosted by [GitHub Pages, which is GDPR compliant](https://github.blog/2018-04-19-updates-to-our-privacy-statement-and-terms-of-service/)
* Only this web page (containing the Web Page Builder) uses [Google Analytics in a GDPR manner](https://support.google.com/analytics/answer/9019185?hl=en#IP&zippy=%2Cin-this-article)
* Web pages generated by remote Markdown files are not tracked in any manner by Google Analytics
* The web service [H5P](https://h5p.org/privacy) is automatically loaded when displaying remote Markdown files
* The open source JavaScript tool [Mermaid](https://mermaid.js.org/) is automatically loaded via [UNPKG](https://unpkg.com/) when displaying remote Markdown files
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

</div>