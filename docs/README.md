<div id="docsifythis">

<div class="docsifythisheader">
<div style="margin-bottom:6px; margin-right:-6px; text-align:right;"><a class="navpill" href="https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this/main&homepage=README.md&edit-link=https://github.com/hibbitts-design/docsify-this/blob/main/README.md&sidebar=true&browser-tab-title=Docsify-This%20ReadMe&edit-link-text=Suggest%20an%20Edit%20on%20GitHub&maxLevel=4&header-weight=600&zoom-images=true&dark-mode=true" target="_blank"><i class="fas fa-book-open fa-fw" style="margin-right:2px;"></i>Docsify-This ReadMe Docs</a><a class="navpill" href="https://discord.gg/docsify" target="_blank"><i class="fab fa-discord fa-fw" style="margin-right:2px;"></i>Docsify Discord Chat</a><a class="navpill" href="https://github.com/hibbitts-design/docsify-this" target="_blank"><i class="fab fa-github fa-fw" style="margin-right:2px;"></i>GitHub</a></div>
  <div class="logoandtext">
    <img src='https://raw.githubusercontent.com/hibbitts-design/docsify-this/main/docs/images/icon.svg' alt='Docsify Logo' />
    <h1>Docsify&#8288;&#8211;&#8288;This</h1>
  </div>
</div>

<h1>Instantly Turn Online Markdown Files into Web Pages</h1>

This open-source web app, built with magical documentation site generator [Docsify](https://docsify.js.org), lets you publish online [Markdown](https://en.wikipedia.org/wiki/Markdown) files as web pages without setting up your own website. Try it out below!  

<div id="docsifythisurlbuilder">

<h2>Web Page Builder</h2>

<p style="margin-bottom:-8px;">Enter the URL of a Markdown file and view that file as a web page in a new Browser tab. The resulting Docsify-This page URL can be copied and shared or used as an iFrame source URL.</p>

**Markdown File URL** (GitHub, Codeberg or raw source URL):  
<input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Markdown File URL (GitHub, Codeberg or raw source URL)" name="markdownFileURL" aria-label="markdown file url" id="docsifythisurlfield" type="url" onfocus="this.select()" onkeypress="checkKey(event);" size="200px" value="https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md" />
<input class="docsifythisurlbuilderprimarybutton" type="button" id="btn_1" value="Publish as a Web Page" onclick="openURLs(document.getElementById('docsifythisurlfield').value)"/></br>

Page layout:

<div style="display: flex; margin-top: -3px;">

<label>
  <input type="radio" name="pagestyle" id="stylecontentonly" aria-label="Page Content Only" checked>
  <img style="padding: 1px;" src="images/contentonly.png" alt="Page Content Only">
  <figcaption id="caption">Content Only</figcaption>
</label>

<label>
  <input type="radio" name="pagestyle" id="styletoc" aria-label="Page with Table of Contents">
  <img style="padding: 1px;" src="images/toc.png" alt="Page with Table of Contents">
  <figcaption id="caption">Table of Contents</figcaption>
</label>

<label>
  <input type="radio" name="pagestyle" id="stylesidebar" aria-label="Page with Docsify Sidebar (collapsible)">
  <img style="padding: 1px;" src="images/sidebar.png" alt="Page with Docsify Sidebar (collapsible)">
  <figcaption id="caption">Docsify Sidebar</figcaption>
</label>

</div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="editCheck" unchecked><label for="editCheck">Include 'Edit this Page' link with public GitHub or Codeberg files (default location is bottom of page)</label></div>

<div id="docsifythisurlbuildershowhidelink";><a name='toggleDivlink' href='#' onclick='toggleDiv(this); return false;'>Show More Page Appearance Options &raquo;</a></div>

<div id="docsifythisurlbuilderoptionsDiv" style='display: none'>

<div id="pageappearanceoptionsheader"><h3>Page Appearance Options</h3></div>

<hr>

<div class="docsifythisurlbuilderoptionsline">Title on Browser tab:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Title on Browser tab" type="text" maxlength="60" value="Published by Docsify-This" id="browserTabTitle" name="browserTabTitle"></div>

<div class='stackedlabeldropdown'>
  <label for="fontfamily">Page font family:</label>
  <select style="border-radius: 7px;border-color: #8e8f9d" class="docsifythisurlbuilderoptionsline" id="fontfamily" name="fontfamily">
    <option value="default">Source Sans Pro</option>
    <option disabled="disabled">----</option>
    <option value="Arial,sans-serif">Arial, sans-serif</option>
    <option value="Helvetica,sans-serif">Helvetica, sans-serif</option>
    <option value="Helvetica%20Neue,Helvetica,Arial,sans-serif">Helvetica Neue, sans-serif</option>
    <option value="Lato%20Extended,Lato,Helvetica%20Neue,Helvetica,Arial,sans-serif">Lato, sans-serif</option>
    <option value="Open%20Sans,sans-serif">Open Sans, sans-serif</option>
    <option value="system-ui,sans-serif">System UI, sans-serif</option>
    <option value="Tahoma,sans-serif">Tahoma, sans-serif</option>
    <option value="Verdana,sans-serif">Verdana, sans-serif</option>
  <option value="Georgia,serif">Georgia, serif</option>
  <option value="Merriweather,Georgia,serif">Merriweather, serif</option>
  <option value="Times%20New%20Roman,serif">Times New Roman, serif</option>
  <option value="Courier,monospace">Courier, monospace</option>
  </select>
</div>

<div class='stackedlabeldropdown'>
  <label for="fontsize">Font size:</label>
  <select style="border-radius: 7px;border-color: #8e8f9d" class="docsifythisurlbuilderoptionsline" id="fontsize" name="fontsize">
    <option value="18px">18px</option>
    <option disabled="disabled">----</option>
    <option value="14px">14px</option>
    <option value="15px">15px</option>
    <option value="16px">16px</option>
    <option value="17px">17px</option>
    <option value="19px">19px</option>
    <option value="20px">20px</option>
  </select>
</div>
        
<div class='stackedlabeldropdown'>
  <label for="lineheight">Line height:</label>
  <select style="border-radius: 7px;border-color: #8e8f9d" class="docsifythisurlbuilderoptionsline" id="lineheight" name="lineheight" style="width: 60px;">
    <option value="1.4">1.4</option>
    <option disabled="disabled">----</option>
    <option value="1.2">1.2</option>
    <option value="1.3">1.3</option>
    <option value="1.5">1.5</option>
    <option value="1.6">1.6</option>
  </select>
</div>

<div class="docsifythisurlbuilderoptionsline">Page link color:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Page link color" type="text" maxlength="7" size="8" value="#0374B5" id="linkcolor" style="text-transform:uppercase" oninput="validateColorAndUpdatePreview('linkcolor', 'linkcolorpreview');" data-coloris><span id="linkcolorpreview"></span></div>

<div class="docsifythisurlbuilderoptionsline"><div class='stackedlabeldropdown' style='margin-bottom:4px;border-radius: 7px;border-color: #8e8f9d'>
  <label for="headerweight">Page headers font weight:</label>
  <select style="border-radius: 7px;border-color: #8e8f9d" class="docsifythisurlbuilderoptionsline" id="headerweight" name="headerweight">
    <option value="400">Normal (400)</option>
    <option disabled="disabled">----</option>
    <option value="600">Semi Bold (600)</option>
    <option value="700">Bold (700)</option>
  </select>
</div></div>

<div class="docsifythisurlbuilderoptionsline">Text of 'Edit this Page' link:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Text of 'Edit this Page' link" type="text" maxlength="60" value="Edit this Page" id="editLinkText" name="editLinkText"></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="editLinkTopCheck" unchecked><label for="editLinkTopCheck">Set location of the 'Edit this Page' link to top of page</label></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="zoomimages" unchecked><label for="zoomimages">Enable zoomable page images (tapping on images to enlarge them)</label></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="hideCredits" unchecked><label for="hideCredits">Remove the Docsify-This credit text from bottom of page</label></div>

<hr>

<div class="docsifythisurlbuilderoptionsline" >Headings to include in table of contents (at least one required):</div>
<div class="docsifythisurlbuilderoptionsindentedline"><input aria-label="Include h1 in table of contents" class="docsifythisurlbuildercheckbox" type="checkbox" id="toch1"  unchecked><label for="toch1">Heading 1 (h1)</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input aria-label="Include h2 in table of contents" class="docsifythisurlbuildercheckbox" type="checkbox" id="toch2" checked><label for="toch2">Heading 2 (h2)</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input aria-label="Include h3 in table of contents" class="docsifythisurlbuildercheckbox" type="checkbox" id="toch3" unchecked><label for="toch3">Heading 3 (h3)</label></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="narrowToC" unchecked><label for="narrowToC">Use a narrower table of contents area, along with a smaller screen breakpoint</label></div>

<hr>

<div class="docsifythisurlbuilderoptionsline">Maximum Header level (1-6) of Docsify Sidebar:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Maximum Header level (1-6) of Docsify Sidebar" type="number" size="1" value="2" min="1" max="6" id="maxLevel" name="maxLevel"></div>

<hr>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="hypothesisenable" unchecked><label for="hypothesisenable">Enable page annotation with Hypothes.is, an open source web annotation tool</label></div>

<input class="docsifythisurlbuilderprimarybutton" style="border:none;margin-top: 10px;" type="button" id="btn_2" value="Publish as a Web Page" onclick="openURLs(document.getElementById('docsifythisurlfield').value)"/>

<div class="docsifythisurlbuilderoptionsline" style="margin-top: 42px;margin-bottom: -27px;"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="advancedwebpagebuilder" onclick='toggleDiv2(this)' unchecked><label for="advancedwebpagebuilder">Advanced Web Page Builder Options</label></div>

<div id="docsifythisurlbuilderoptionsDiv2" style='margin-top:40px;display: none'>

<h3>Optional Page Title</h3>

<hr>

<div class="docsifythisurlbuilderoptionsline">Title added to the top of page as H1 level header:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Title added to the top of page as H1 level header" type="text" maxlength="80" value="" id="pageTitle" name="pageTitle"></div>

<h3>Link Styles and Behavior</h3>

<hr>

<div class="clearfix">

<div class='stackedlabeldropdown'>
  <label for="linktextdecoration">Link text decoration:</label>
  <select style="border-radius: 7px;border-color: #8e8f9d" class="docsifythisurlbuilderoptionsline" id="linktextdecoration" name="linktextdecoration" style="width: 60px;">
    <option value="underline">Underline</option>
    <option disabled="disabled">----</option>
    <option value="none">None</option>
  </select></div>

</div>

<div class="clearfix">

  <div class='stackedlabeldropdown'><div class="docsifythisurlbuilderoptionsline" style='margin-top:-2px;'>Link hover color:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Link hover color" type="text" maxlength="7" size="8" value="" id="linkhovercolor" style="text-transform:uppercase" oninput="validateColorAndUpdatePreview('linkhovercolor', 'linkhovercolorpreview');" data-coloris><span id="linkhovercolorpreview"></span></div></div>

  <div class='stackedlabeldropdown' style="margin-top:-6px;">
  <label for="linkhovertextdecoration">Link hover text decoration:</label>
  <select style="border-radius: 7px;border-color: #8e8f9d" class="docsifythisurlbuilderoptionsline" id="linkhovertextdecoration" name="linkhovertextdecoration" style="width: 60px;">
    <option value="none">None</option>
    <option disabled="disabled">----</option>
    <option value="underline">Underline</option>
  </select></div>

</div>

<div class="clearfix">

<div class='stackedlabeldropdown' style="margin-top:-11px;">
<label for="externalLinkTarget">External link target:</label>
<select style="border-radius: 7px;border-color: #8e8f9d" class="docsifythisurlbuilderoptionsline" id="externalLinkTarget" name="externalLinkTarget" style="width: 60px;">
  <option value="_top">Same window or tab</option>
  <option disabled="disabled">----</option>
  <option value="_blank">New window or tab</option>
</select></div>

</div>

<h3>Docsify Custom Files</h3>

<hr>

<div class="docsifythisurlbuilderoptionsline">Load and display additional <a href="https://docsify.js.org/#/more-pages" target="_blank">Docsify</a> custom files (must be located at root level of remote files):</div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="loadcustomsidebar"  unchecked><label for="loadcustomsidebar">Sidebar (<code>_sidebar.md</code>)</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="loadcustomnavbar" unchecked><label for="loadcustomnavbar">Navbar (<code>_navbar.md</code>)</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="loadcoverpage" unchecked><label for="loadcoverpage">Coverpage (<code>_coverpage.md</code>)</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="loadfavicon"  unchecked><label for="loadfavicon">Favicon (<code>favicon.png</code>)</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="loadcustomfooter" unchecked><label for="loadcustomfooter">Footer (<code>_footer.md</code>)</label></div>

<h3>Docsify Custom Sidebar Options</h3>

<hr>

<div class="docsifythisurlbuilderoptionsline">Website name displayed in Sidebar:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Website name displayed in Sidebar" type="text" maxlength="80" value="" id="siteName" name="siteName"></div>

<div class="docsifythisurlbuilderoptionsline">Website logo displayed in Sidebar (folder path and image filename):<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Website logo displayed in Sidebar" type="text" maxlength="80" value="" id="siteLogo" name="siteLogo"></div>

<div class="docsifythisurlbuilderoptionsline">Maximum header level of Sidebar automatic table of contents (0 for none):<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Maximum header level of Sidebar automatic table of contents (0 for none)" type="number" size="1" value="2" min="0" max="6" id="subMaxLevel" name="subMaxLevel"></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="enableSidebarsearch" unchecked><label for="enableSidebarsearch">Enable search field in Sidebar</label></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="pagination" unchecked><label for="pagination">Enable pagination buttons in page content area (Docsify custom Sidebar required)  </label></div>

<h3>Docsify Custom Navbar Options</h3>

<hr>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="mergeNavbar" unchecked><label for="mergeNavbar">Move Navbar items to the top of the Sidebar on smaller screens</label></div>

<h3>Docsify Custom Coverpage Color</h3>

<hr>

<div class="docsifythisurlbuilderoptionsline">Coverpage color:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Coverpage color" type="text" maxlength="7" size="8" value="#6C8A9A" id="coverpagecolor" style="text-transform:uppercase" oninput="validateColorAndUpdatePreview('coverpagecolor', 'coverpagecolorpreview');" data-coloris><span id="coverpagecolorpreview"></span></div>

<h3>Dark Theme Support and Colors</h3>

<hr>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="enableDarkmode" unchecked><label for="enableDarkmode">Enable automatic switching of light/dark theme based on system OS-level preference</label></div>

<div class="docsifythisurlbuilderoptionsline" style="margin-left: 10px;">Page link color for dark theme:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Page link color for dark theme" type="text" maxlength="7" size="8" value="#0374B5" id="linkcolordarkmode" style="text-transform:uppercase" oninput="validateColorAndUpdatePreview('linkcolordarkmode', 'linkcolordarkmodepreview');" data-coloris><span id="linkcolordarkmodepreview"></span></div>

<div class="docsifythisurlbuilderoptionsline" style="margin-left: 10px;">Page link hover color for dark theme:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Page link hover color for dark theme" type="text" maxlength="7" size="8" value="" id="linkhovercolordarkmode" style="text-transform:uppercase" oninput="validateColorAndUpdatePreview('linkhovercolordarkmode', 'linkhovercolordarkmodepreview');" data-coloris><span id="linkhovercolordarkmodepreview"></span></div>

<div class="docsifythisurlbuilderoptionsline" style="margin-left: 10px;">Coverpage color for dark theme:<br><input style="border-radius: 7px;border-color: #8e8f9d" aria-label="Coverpage color for dark theme" type="text" maxlength="7" size="8" value="#262D30" id="coverpagecolordarkmode" style="text-transform:uppercase" oninput="validateColorAndUpdatePreview('coverpagecolordarkmode', 'coverpagecolordarkmodepreview');" data-coloris><span id="coverpagecolordarkmodepreview"></span></div>

<input class="docsifythisurlbuilderprimarybutton" style="border:none;margin-top: 10px;margin-bottom: 8px;" type="button" id="btn_3" value="Publish as a Web Page" onclick="openURLs(document.getElementById('docsifythisurlfield').value)"/>

</div>

<div id="docsifythisurlbuilderrestoredefaultsbutton"><input style="color: #323232;" type="button" id="btn_4" value="Reset to Defaults" onclick="restoreAllDefaults()"/></div>

</div>

</div>

## All About Docsify-This

### [1. Introduction and Overview](/?id=_1-introduction-and-overview-1)
- [What Problem Does Docsify-This Solve?](/?id=what-problem-does-docsify-this-solve)
- [Docsify-This Core Design Principles](/?id=docsify-this-core-design-principles)
- [How Docsify-This Works](/?id=how-docsify-this-works)
- [Read What People are Saying about Docsify-This](/?id=read-what-people-are-saying-about-docsify-this)

### [2. Publishing with Docsify-This](/?id=_2-publishing-with-docsify-this-1)
- [Page Appearance URL Parameters (Basic)](/?id=page-appearance-url-parameters-basic)
- [Page Appearance URL Parameters (Supplemental)](/?id=page-appearance-url-parameters-supplemental)
- [Embedding Docsify-This Pages into Other Platforms](/?id=embedding-docsify-this-pages-into-other-platforms)
- [Ready-to-Use Docsify-This Markdown Templates](/?id=ready-to-use-docsify-this-markdown-templates)
- [Example Content Workflows](/?id=example-content-workflows)
- [Editing Docsify-This Markdown Files on your Desktop](/?id=editing-docsify-this-markdown-files-on-your-desktop)

### [3. Customization and Advanced Usage](/?id=_3-customization-and-advanced-usage-1)
- [Supported Markdown CSS Classes](/?id=supported-markdown-css-classes)
- [Custom Markdown CSS Classes](/?id=custom-markdown-css-classes)
- [Looking for Even More Customization and Control?](/?id=looking-for-even-more-customization-and-control)

### [4. Resources and Additional Templates](/?id=_4-resources-and-additional-templates-1)
- [Markdown Syntax References](/?id=markdown-syntax-references)
- [Font Awesome Icons](/?id=font-awesome-icons)
- [Additional Docsify-This Markdown Files](/?id=additional-docsify-this-markdown-files)
- [Additional Docsify-This Learning Materials](/?id=additional-docsify-this-learning-materials)

### [5. Tips, Techniques, and Troubleshooting](/?id=_5-tips-techniques-and-troubleshooting-1)
- [Content Display Tips and Techniques](/?id=content-display-tips-and-techniques)
- [Making a Markdown File Available Online](/?id=making-a-markdown-file-available-online)
- [Improving Markdown Previews in Text Editors](/?id=improving-markdown-previews-in-text-editors)
- [Loading Web Page Builder Custom Settings](/?id=loading-web-page-builder-custom-settings)
- [Troubleshooting](/?id=troubleshooting)

### [6. Support and Policies](/?id=_6-support-and-policies-1)
- [Privacy Policy Summary](/?id=privacy-policy-summary)
- [Contact and Support](/?id=contact-and-support)

What do you think about Docsify-This so far? Help shape its direction by sharing your feedback in just a few minutes!

[:fa fa-comment fa-fw: Share your Feedback](https://forms.gle/ViYu2ZdPmj6PeQ439 ':class=button-secondary-rounded')

---

### 1. Introduction and Overview

* [What Problem Does Docsify-This Solve?](#what-problem-does-docsify-this-solve)
* [Docsify-This Core Design Principles](#docsify-this-core-design-principles)
* [How Docsify-This Works](#how-docsify-this-works)
* [Read What People are Saying about Docsify-This](#read-what-people-are-saying-about-docsify-this)

---

#### What Problem Does Docsify-This Solve?

Docsify-This provides an easy way to display and share [Markdown](https://www.markdownguide.org/basic-syntax/) content in various contexts, with no website setup or build process required. By hosting your Markdown files on GitHub or Codeberg, you can also leverage version control (the ability to track and reverse changes) and enable collaboration.  

With Docsify-This you can:

* Publish Markdown files as single web pages or entire websites, with no site setup or build process
* Keep web page content stored in its original location, under your full control
* Visually style web pages with a point-and-click Web Page Builder
* Share GitHub or Codeberg-hosted Markdown files with an automatic 'Edit this Page' link
* Embed your constraint-free Markdown/HTML seamlessly into other platforms (e.g., LMS or CMS)
* Reuse Markdown content by embedding it across platforms without duplication
* Use URL parameters to adjust the visual appearance of embedded content for each platform

---

#### Docsify-This Core Design Principles

* Frictionless Markdown publishing
* Flexible content display handling
* Your content, your control
* Support the 5 Rs of OER
* Authors helping other authors

---

#### How Docsify-This Works

Docsify-This is a customized [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) site configured to render remote Markdown files via URL parameters in the following format (automatically created by the above Web Page Builder):

<p style="word-wrap: break-word; margin-top: 1rem; padding: 6px; background-color: #666666; color: #F1F1F1; font-weight:normal; font-size: x-large; border-radius: 3px; font-family: monospace;">https://docsify-this.net?basePath=<span style="font-weight:bold">URLpath<span style="font-weight:normal">&homepage=<span style="font-weight:bold">filename.md</p>

The **basePath** Docsify parameter is the URL path containing the raw source Markdown file to render. If the file is named the expected default **README.md** then no other parameter are required, otherwise the **homepage** Docsify parameter must also be included set to the name of the file to render. An example Docsify-This URL would be:
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md  

Docsify-This can render files from anywhere that the content of a Markdown file can be viewed within a web browser, including:

* [GitHub.com](https://github.com/)(recommended) or [Codeberg.org](https://codeberg.org/) repository
* [GitHub Gist](https://gist.github.com/) (raw source URL required)
* Personal or organizational webhost
* _Or just about anywhere a raw source Markdown file can be accessed!_

To directly render a file stored in a public GitHub repository when not using the above Web Page Builder, you need to use the raw source URL of that file (i.e. raw.githubusercontent.com) by tapping the **Raw** button when [viewing a file](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file). It is also possible to render a file stored in a private GitHub repository by activating GitHub Pages within that repository and then using the GitHub Pages URL of that file (i.e. username.github.io).  

The appearance of rendered Markdown files can be customized by optional [URL parameters](/?id=page-appearance-url-parameters) and a small set of available [CSS Classes](/?id=supported-markdown-css-classes) within source Markdown files. In addition to supporting standard Markdown, [Embed.ly](https://embed.ly/code), [H5P](https://h5p.org/), [Latex](https://github.com/scruel/docsify-latex) and [Mermaid Diagrams](https://github.com/Leward/mermaid-docsify) are included. Optionally, page annotation with [Hypothes.is](https://hypothes.is) can be enabled.  

Looking for an overall introduction to publishing with Docsify-This? Check out [Markdown Publishing with Docsify-This](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/publishing-with-docsify-this/main&sidebar=true&edit-link=https://github.com/hibbitts-design/publishing-with-docsify-this/blob/main/README.md&maxLevel=4&title=Markdown%20Publishing%20with%20Docsify-This).

---

#### Read What People are Saying about Docsify-This

> I’m blown away just by the fact you put a (Markdown file) URL into Docsify-This and then you get a URL back for a web page… done! Take the URL and go. It is so seamless.  
— J. Groom, [Reclaim Today Episode 39](https://today.reclaimhosting.com/podcast/039-docsify-this-with-paul-hibbitts/) (Co-founder, Reclaim Hosting)

> I've been using Docsify-This for my graduate publishing production course, partly to explore new models in markdown publishing, but partly also to tame Canvas, which I find awkward and cumbersome. Keeping all my course notes as plain text files and deploying them through Github and Docsify-this is easy and makes my course development a breeze. Plus, I keep all my materials locally, and can use re-use them without being reliant on Canvas.  
— J. Maxwell (Director & Associate Professor in the Publishing Program at Simon Fraser University)

> Best tool I’ve found in years - this is one of those creations that is just done right, all the way to the core.  
— D. Malawey (Multidisciplinary Lab Coordinator, Texas A&M University)

> Docsify-This has significantly improved my WordPress themes by being able to seamlessly embed into the interface the same documentation I use in the GitHub repository. This in turn has lead me to write better docs! I've barely scratched the surface of what Docsify-This can do as a simple-to-use web publishing tool.  
— A. Levine aka CogDog (Independent Educational Technologist)

---

Docsify-This has been recognized as a finalist in the Open Infrastructure category for the [2024 Open Education Awards for Excellence](https://awards.oeglobal.org/2024-finalists/) — thank you to all Docsify.js.org maintainers and contributors, and to fellow open publishers, educators, and creators who share their open content with the rest of the world through Docsify-This.

---

### 2. Publishing with Docsify-This

* [Overview](#overview)
* [Page Appearance URL Parameters (Basic)](#page-appearance-url-parameters-basic)
* [Page Appearance URL Parameters (Supplemental)](#page-appearance-url-parameters-supplemental)
* [Embedding Docsify-This Pages into Other Platforms](#embedding-docsify-this-pages-into-other-platforms)
* [Ready-to-Use Docsify-This Markdown Templates](#ready-to-use-docsify-this-markdown-templates)
* [Example Content Workflows](#example-content-workflows)
* [Editing Docsify-This Markdown Files on your Desktop](#editing-docsify-this-markdown-files-on-your-desktop)

---

#### Overview

The visual appearance of an online Markdown file displayed as a web page by Docsify-This can be altered in two ways:

- **Using the above Web Page Builder** — This point-and-click tool automatically generates the required Docsify-This URL with the necessary parameters
- **Manually adjusting URL parameters** — You can also manually modify the appearance by changing or adding specific parameters to the Docsify-This URL

For example, to display the Markdown file located at https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main/home.md with a Docsify sidebar including headings up to 3 levels, the Docsify-This URL is:  

<p style="word-wrap: break-word; margin-top: 1rem; padding: 6px; background-color: #666666; color: #F1F1F1; font-weight:normal; font-size: x-large; border-radius: 3px; font-family: monospace;">https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md&sidebar=true&maxLevel=3
</p>

And here’s how Docsify-This.net displays the same URL:

<img src="https://raw.githubusercontent.com/hibbitts-design/docsify-this/main/docs/images/docsify-this-example-page.jpg" width="1152" height="819" class="responsive image-border-rounded" alt="Example Docsify-This URL displayed by Docsify-This"><br>
<em>The web page displayed by Docsify-This.net, showing the Markdown file with a sidebar that includes headings up to 3 levels, as specified by the Docsify-This URL.</em>

#### Page Appearance URL Parameters (Basic)

Learn more about each of the basic Docsify-This URL parameters below, and discover what is possible when combining URL parameters and online Markdown files with a set of [ready-to-use Docsify-This markdown templates](#ready-to-use-docsify-this-markdown-templates).

**Basic URL Parameters (included in the standard Web Page Builder)**  

* [browser-tab-title](/?id=browser-tab-title)
* [edit-link](/?id=edit-link)
* [edit-link-text](/?id=edit-link-text)
* [edit-link-top](/?id=edit-link-top)
* [font-family](/?id=font-family)
* [font-size](/?id=font-size)
* [header-weight](/?id=header-weight)
* [hide-credits](/?id=hide-credits)
* [hypothesis](/?id=hypothesis)
* [line-height](/?id=line-height)
* [link-color](/?id=link-color)
* [maxLevel](/?id=maxLevel)
* [sidebar](/?id=sidebar)
* [toc](/?id=toc)
* [toc-headings](/?id=toc-headings)
* [toc-narrow](/?id=toc-narrow)
* [zoom-images](/?id=zoom-images)

##### browser-tab-title
Set a custom title on Browser tab for your web pages with the optional **browser-tab-title** parameter, for example:  
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
Set a custom font for your web pages with the optional **font-family** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-family=Helvetica,Arial,sans-serif. This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform. Please note to use fonts with spaces in their names they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "Courier New" would be "Courier%20New".  

##### font-size
Set a custom font size for your web pages with the optional **font-size** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-size=1. This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform. Please note the font size is set in [REM units](https://www.freecodecamp.org/news/what-is-rem-in-css/).  

##### header-weight
Set a custom header font weight (default is 400 - regular) for your web pages with the optional **header-weight** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&header-weight=600. 

##### hide-credits
Hide the credits usually shown at the bottom of every displayed Docsify-This page with the optional **hide-credits** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&hide-credits=true.

##### hypothesis
Enable page annotation with [Hypothes.is](https://hypothes.is) with the optional **hypothesis** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&hypothesis=true.  

##### line-height
Set a custom line height for your web pages with the optional **line-height** parameter, for example:  
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

##### zoom-images
Enable image zoom (tapping on page images to enlarge them) with the optional **zoom-images** Docsify parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-markdown-content-demo/main&zoom-images=true. To exclude images, use `![](image.png ":no-zoom")`.  

#### Page Appearance URL Parameters (Supplemental)

The following additional URL parameters are available for use in Docsify-This URLs, and are included in the [Advanced Web Page Builder](https://docsify-this.net/?advanced=true) unless otherwise indicated.

**Supplemental URL Parameters (included in the Advanced Web Page Builder)**  

* [coverpage](/?id=coverpage)
* [coverpage-color](/?id=coverpage-color)
* [coverpage-color-dark-mode](/?id=coverpage-color-dark-mode)
* [dark-mode](/?id=dark-mode)
* [edit-link-emoji](/?id=edit-link-emoji)
* [link-color-dark-mode](/?id=link-color-dark-mode)
* [link-color-hover](/?id=link-color-hover)
* [link-color-hover-dark-mode](/?id=link-color-hover-dark-mode)
* [link-text-decoration](/?id=link-text-decoration)
* [link-text-decoration-hover](/?id=link-text-decoration-hover)
* [loadFavicon](/?id=loadFavicon)
* [loadFooter](/?id=loadFooter)
* [loadNavbar](/?id=loadNavbar)
* [loadSidebar](/?id=loadSidebar)
* [logo](/?id=logo)
* [mergeNavbar](/?id=mergeNavbar)
* [name](/?id=name)
* [page-title](/?id=page-title)
* [pagination](/?id=pagination)
* [searchbox](/?id=searchbox)
* [subMaxLevel](/?id=subMaxLevel)
* [svg-icons](/?id=svg-icons)

##### coverpage
Display a [Docsify custom coverpage](https://docsify.js.org/#/configuration?id=coverpage) with the optional **coverpage** parameter, for example:  
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

##### edit-link-emoji
Change the default emoji for a "Edit this Page" link with the optional **edit-link-emoji** parameter (not included in the Advanced Web Page Builder), for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md&edit-link-text=View%20on%20GitHub&edit-link-emoji=:file_folder:

##### lazy-load-images
Enable the lazy loading of images by Browsers with the optional **lazy-load-images** parameter (not included in the Advanced Web Page Builder), for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&lazy-load-images=true Please note that enabling lazy loading of images may affect page scroll accuracy, for example by the Docsify Sidebar etc.

##### link-color-dark-mode
Set a custom color for all links in dark mode, defined using the standard hexadecimal format _without the '#' symbol_ with the optional **link-color-dark-mode** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-color=CC0000&dark-mode=true&link-color-dark-mode=FF9E9E.

##### link-color-hover
Set a custom hover color for all links, defined using the standard hexadecimal format _without the '#' symbol_ with the optional **link-hover-color** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-hover-color=CC0000.

##### link-color-hover-dark-mode
Set a custom hover color for all links in dark mode, defined using the standard hexadecimal format _without the '#' symbol_ with the optional **link-hover-color-dark-mode** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-color=CC0000&dark-mode=true&link-hover-color-dark-mode=FF9E9E.

##### link-text-decoration
Set a custom text decoration for all links, with the optional **link-text-decoration** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-text-decoration=none

##### link-text-decoration-hover
Set a custom hover text decoration for all links, with the optional **link-text-decoration-hover** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-text-decoration-hover=underline

##### loadFavicon
You can set a custom Favicon from the image file passed from the optional **loadFavicon** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-markdown-content-demo/main&loadFavicon=open-access.png

##### loadFooter
Load a Docsify footer from the Markdown file in the current directory passed with the optional **loadFooter** Docsify parameter, for example: 
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&loadFooter=_footer.md

##### loadNavbar
Load a [Docsify custom navbar](https://docsify.js.org/#/custom-navbar?id=custom-navbar) from the Markdown file passed with the optional **loadNavbar** Docsify parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&loadNavbar=_navbar.md

##### loadSidebar
Load a [Docsify custom sidebar](https://docsify.js.org/#/more-pages?id=sidebar) from the Markdown file passed with the optional **loadSidebar** Docsify parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-cmpt-363-222-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar-with-home.md  

##### logo
Display a logo image for the website in a Docsify custom Sidebar (i.e. file 'logo.png) with the optional **logo** Docsify parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&name=CPT-363&logo=/images/logo.png The full folder path and filename must be provided. A website name must also be provided, and will be used as the alt text for the logo.  

##### mergeNavbar
Merge the Navbar items to the top of the sidebar on smaller screens with the optional **mergeNavbar** Docsify parameter, for example: 
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&mergeNavbar=true&name=CPT-363

##### name
Display the name for the website in a Docsify custom Sidebar (i.e. file '_sidebar.md) with the optional **name** Docsify parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&search=true&name=CPT-363  When this parameter is provided it will be automatically used as the Browser tab title as well.  

##### page-title
Set a custom page title at the top of your web pages with the optional **page-title** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/demo-grav-open-matter-course-hub/master/pages/04.resources&homepage=page.md&page-title=Resources Please note to use titles with spaces they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "My Page" would be "My%20Page".  

##### pagination
Display Pagination buttons in page content area (Docsify custom Sidebar required) with the optional **pagination** parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&search=true&pagination=true  

##### searchbox
Enable the Docsify Search plugin (which currently includes matches for text and markup) on multiple page sites including a custom Sidebar with the optional **searchbox** Docsify parameter, for example:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&searchbox=true

##### subMaxLevel
Set the maximum automatic table of contents header levels in Docsify custom Sidebar (i.e. file '_sidebar.md) with the optional **subMaxLevel** Docsify parameter, for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-cmpt-363-222-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar-with-home.md&subMaxLevel=1

##### svg-icons
Use the SVG version of Font Awesome icons instead of Web Fonts with the optional **svg-icons** parameter (not included in the Advanced Web Page Builder), for example:  
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=schedule.md&svg-icons=true

---

#### Embedding Docsify-This Pages into Other Platforms

##### Canvas LMS

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

##### Moodle LMS

[iFrame (for embedding content within pages)](https://docs.moodle.org/401/en/Iframe)  

[External tool (for adding a link to course navigation or elements)](https://docs.moodle.org/401/en/External_tool)

---

#### Ready-to-Use Docsify-This Markdown Templates

While all you need to get going with Docsify-This is a basic Markdown file, below are some templates you can use that show what is possible with Markdown, images, URL parameters, and even a few HTML snippets!

To use these templates you would generally do the following (template specific instructions are included with each template):

1.  Sign in to [GitHub](https://github.com), or create an account if you don’t already have one.

2. Tap **Use this template** in the chosen template repository (upper-right green button) and then choose **Create a new repository**

3. Choose the name for your new repository to contain the files and then tap **Create repository** to copy the template files to your own GitHub account

4. View an included Markdown file, for example **home.md**, and copy its URL.

5. Go to https://docsify-this.net and paste the copied URL into the **Markdown File URL** field

6. Select the page options you want (e.g. Docsify Sidebar) and tap the **Publish as a Web Page** button to view your Markdown file as a web page for sharing or embedding  

To edit a file in GitHub, tap the **Pencil** icon (Edit file) in the upper-right when viewing the file, make your changes, and then tap the **Commit changes...** button to save those changes.   

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This One Page Article Template](images/docsify-this-one-page-article.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

<h4><a href="https://github.com/hibbitts-design/docsify-this-one-page-article">Docsify-This One Page Article Template</a></h4>

One Page Article [home.md](https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md) file displayed by Docsify-This as a:  
* [Web Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md "Single Page Docsify Open Course Starter Kit - Web Page")  
* [Web Page with Table of Contents including h2 and h3 Headers and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md&toc=true&toc-headings=h2,h3&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Web Page with Table of Contents")  
* [Web Page with Docsify Sidebar with maxLevel of 3 (H3) and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md&sidebar=true&maxLevel=3&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Web Page with Docsify Sidebar")

</div>

</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This One Page Course Template](images/docsify-this-one-page-course.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

<h4><a href="https://github.com/hibbitts-design/docsify-this-one-page-course">Docsify-This One Page Course Template</a></h4>

One Page Course [home.md](https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md) file displayed by Docsify-This as a:   
* [Web Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-course/main&homepage=home.md "Single Page Docsify Open Course Starter Kit - Web Page")  
* [Web Page with Table of Contents and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-course/main&homepage=home.md&toc=true&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Web Page with Table of Contents")  
* [Web Page with Docsify Sidebar and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-course/main&homepage=home.md&sidebar=true&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Web Page with Docsify Sidebar")

</div>

</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This Multiple Page Site](images/docsify-this-multiple-page-site.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

<h4><a href="https://github.com/hibbitts-design/docsify-this-multiple-page-site">Docsify-This Multiple Page Site Template</a></h4>

Multiple Page Site [home.md](https://github.com/hibbitts-design/docsify-this-multiple-page-site/blob/main/home.md) file, including the use of the Markdown CSS class `header-image-full-width`, displayed by Docsify-This as:  
* [Website](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md "Docsify-This Multiple Page Site - Web Pages")
* [Website using the Merriweather font](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&font-family=Merriweather,Georgia,serif "Docsify-This Multiple Page Site - Web Pages using the Merriweather font")
* [Website using the Merriweather font and red links](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&font-family=Merriweather,Georgia,serif&link-color=CC0000 "Docsify-This Multiple Page Site - Web Pages using the Merriweather font and red links")
* [Website and 'Edit this Page' links](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-site/blob/main/home.md "Docsify-This Multiple Page Site - Web Pages with 'Edit this Page' link")
* [Website and 'Edit this Page' links using the Merriweather font](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-site/blob/main/home.md&font-family=Merriweather,Georgia,serif "Docsify-This Multiple Page Site - Web Pages with 'Edit this Page' link using the Merriweather font")
* [Website with Docsify Navbar](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&loadNavbar=_navbar "Docsify-This Multiple Page Site - Web Pages with Docsify Navbar and an 'Edit this Page' link")
* [Website with Footer and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&loadFooter=_footer&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-site/blob/main/home.md "Docsify-This Multiple Page Site - Web Pages with Footer and an 'Edit this Page' link")
* [Website with Docsify Navbar and 'GitHub Repository' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&loadNavbar=_navbar&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-site&edit-link-text=GitHub%20Repository "Docsify-This Multiple Page Site - Web Pages with Docsify Navbar and an 'GitHub Repository' link")

</div>

</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This Multiple Page Open Publishing Site](images/docsify-this-multiple-page-open-publishing-site.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

<h4><a href="https://github.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site">Docsify-This Multiple Page Open Publishing Site Template</a></h4>

Multiple Page Open Publishing Site [home.md](https://github.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/blob/main/home.md) file, including the use of a Docsify custom [Sidebar](https://github.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/blob/main/_sidebar.md) file, displayed by Docsify-This as:  
* [Website with Docsify Sidebar](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&hide-credits=true "Docsify-This Multiple Page Open Publishing Site - Website with Docsify Sidebar")  
* [Website with Docsify Sidebar showing only H1 headers](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&subMaxLevel=1&hide-credits=true "Docsify-This Multiple Page Open Publishing Site - Website with Docsify Sidebar only showing level 1 headers")  
* [Website with Docsify Sidebar and Navbar](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&hide-credits=true "Docsify-This Multiple Page Open Publishing Site - Website with Docsify Sidebar and Navbar")  
* [Website with Docsify Sidebar and Search](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&searchbox=true&hide-credits=true "Docsify-This Multiple Page Open Publishing Site - Website with Docsify Sidebar and Search")  
* [Website with Docsify Sidebar, Search and website name](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&searchbox=true&name=Open%20Publishing%20Space&hide-credits=true "Docsify-This Multiple Page Open Publishing Site - Website with Docsify Sidebar and Search")  
* [Website with Docsify Sidebar, Pagination buttons, Search and website name](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&pagination=true&searchbox=true&name=Open%20Publishing%20Space&hide-credits=true "Docsify-This Multiple Page Open Publishing Site - Website with Docsify Sidebar, Pagination buttons, Search and website name")  
* [Website with Docsify Sidebar, Search, 'Propose an Edit to this Site' link and a website name](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/main&homepage=home.md&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/blob/main&edit-link-text=Propose%20an%20Edit%20to%20this%20Site&sidebar=true&loadSidebar=_sidebar.md&searchbox=true&name=Open%20Publishing%20Space&hide-credits=true "Docsify-This Multiple Page Open Publishing Site - Website with Docsify Sidebar, 'Propose an Edit to this Site' link and a website name")
* [Website with Docsify Sidebar, Search, 'Propose an Edit to this Site' link, website name and a Coverpage](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/main&homepage=home.md&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-open-publishing-site/blob/main&edit-link-text=Propose%20an%20Edit%20to%20this%20Site&sidebar=true&loadSidebar=_sidebar.md&searchbox=true&coverpage=_coverpage.md&name=Open%20Publishing%20Space&hide-credits=true "Docsify-This Multiple Page Open Publishing Site - Website with Docsify Sidebar, 'Propose an Edit to this Site' link , website name and a Coverpage")

</div>

</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This Course Site Template](images/docsify-this-multiple-page-course-site.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

<h4><a href="https://github.com/hibbitts-design/docsify-this-multiple-page-course-site">Docsify-This Multiple Page Course Site Template</a></h4>

Multiple Page Course Site [home.md](https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main/home.md) file, including the use of a Docsify custom [Sidebar](https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main/_sidebar.md) file and Docsify custom [Navbar](https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main/_navbar.md) file, displayed by Docsify-This as:  
* [Website](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&name=CPT-363&loadNavbar=_navbar.md&hide-credits=true&browser-tab-title=CPT-363 "Docsify-This Multiple Page Course Site - Website")  
* [Website with custom Favicon](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&name=CPT-363&loadNavbar=_navbar.md&loadFavicon=favicon.png&hide-credits=true&browser-tab-title=CPT-363 "Docsify-This Multiple Page Course Site - Website")  
* [Website with logo](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&name=CPT-363&loadNavbar=_navbar.md&loadFavicon=favicon.png&hide-credits=true&browser-tab-title=CPT-363&logo=images/logo.png "Docsify-This Multiple Page Course Site - Website with website logo")  
* [Website with Pagination buttons](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&name=CPT-363&loadNavbar=_navbar.md&hide-credits=true&browser-tab-title=CPT-363&pagination=true "Docsify-This Multiple Page Course Site - Website with Pagination buttons")  
* [Website with a 'Propose an Edit to this Site' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main&edit-link-text=Propose%20an%20Edit%20to%20this%20Site&sidebar=true&loadSidebar=_sidebar.md&name=CPT-363&loadNavbar=_navbar.md&hide-credits=true&browser-tab-title=CPT-363 "Docsify-This Multiple Page Course Site - Website with a 'Propose an Edit to this Site' link")
* [Website with Footer and a 'Propose an Edit to this Site' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-course-site/main&homepage=home.md&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main&edit-link-text=Propose%20an%20Edit%20to%20this%20Site&sidebar=true&loadSidebar=_sidebar.md&name=CPT-363&loadNavbar=_navbar.md&hide-credits=true&loadFooter=_footer.md&browser-tab-title=CPT-363 "Docsify-This Multiple Page Course Site - Website with Footer and a 'Propose an Edit to this Site' link")

</div>

</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This LMS Content Pages Template](images/docsify-this-lms-content-pages.jpg ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

<h4><a href="https://github.com/hibbitts-design/docsify-this-lms-content-pages">Docsify-This LMS Content Pages Template</a></h4>

Example pages, including the use of the `font-family`, `font-size` and `hide-credits` URL parameters for seamless content embedding within the Canvas LMS, as displayed by Docsify-This:  
* [Embeddable Home Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=home.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Home Page")
* [Embeddable Weekly Module Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=module-01.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Weekly Module Page")
* [Embeddable Schedule Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=schedule.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Schedule Page")
* [Embeddable Topics Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=topics.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Topics Page")
* [Embeddable Resources Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=resources.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Resource Page")
* [Embeddable UX Techniques Guide Page (using Accordion format)](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=ux-techniques-guide.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable UX Techniques Guide Page (using Accordion format)")
* [Embeddable Contact Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=contact.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;hide-credits=true "Embeddable Contact Page")

View an example Canvas LMS site using Docsify-This content at https://canvas.sfu.ca/courses/76692.

</div>

</div>

---

#### Example Content Workflows

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

#### Editing Docsify-This Markdown Files on your Desktop

When using Docsify-This to display Markdown files located on Git-based services such as GitHub or Codeberg you can download (clone) files to your desktop for local editing and then upload (push) changes back to the online files.

For example, to edit GitHub Markdown files on your desktop you would do the following:

1. Tap **Code** on your GitHub Markdown files repository (upper-right green button)
2. Choose **Open Desktop** and follow the prompts, installing [GitHub Desktop](https://desktop.github.com/) if not already present
3. You will now be able to edit the Docsify-This Markdown files using the desktop text editor of your choice such as [Microsoft Visual Studio](https://code.visualstudio.com/), [Pulsar](https://pulsar-edit.dev/) (was Atom.io), [Typora](https://typora.io/) etc.
4. Use GitHub Desktop to push any changes to your repository.  

[Learn more about getting started with GitHub Desktop](https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop).

---

### 3. Customization and Advanced Usage

* [Supported Markdown CSS Classes](#supported-markdown-css-classes)
* [Custom Markdown CSS Classes](#custom-markdown-css-classes)
* [Looking for Even More Customization and Control?](#looking-for-even-more-customization-and-control)

---

#### Supported Markdown CSS Classes

* [accordion](/?id=accordion)
* [badge](/?id=badge)
* [banner-image](/?id=banner-image)
* [banner-tall-image](/?id=banner-tall-image)
* [button](/?id=button)
* [button-rounded](/?id=button-rounded)
* [button-secondary](/?id=button-secondary)
* [button-secondary-rounded](/?id=button-secondary-rounded)
* [embedly-card](/?id=embedly-card)
* [header-image-fade](/?id=header-image-fade)
* [header-image-full-width](/?id=header-image-full-width)
* [image-75/image-50/image-25](/?id=image-75image-50image-25)
* [image-75-border/image-50-border/image-25-border](/?id=image-75-borderimage-50-borderimage-25-border)
* [image-border](/?id=image-border)
* [image-border-rounded](/?id=image-border-rounded)
* [navpill](/?id=navpill)
* [responsive](/?id=responsive)
* [row/column](/?id=rowcolumn)
* [video-container-4by3](/?id=video-container-4by3)
* [video-container-16by9](/?id=video-container-16by9)

The following CSS classes are available when authoring your own Markdown content.  

##### accordion

<div class="accordion">

<details>
  <summary>Example Accordion Topic One</summary>
  
  Topic one details here.
  
</details>

<details>
  <summary>Example Accordion Topic Two</summary>
  
  Topic two details here.
  
</details>

</div>

```html
<div class="accordion">

<details>
  <summary>Topic One</summary>
  
  Topic one details here.
  
</details>

<details>
  <summary>Topic Two</summary>
  
  Topic two details here.
  
</details>

</div>
```

##### badge

<span class='badge'> Example Badge</span>

```html
<span class='badge'> Tue Jun 12th 11:59pm PDT</span>
```

<span class='badge' style='--badge-bg-color: #0164db;'> Example Badge with Custom Background Color</span>

```html
<span class='badge' style='--badge-bg-color: #0164db;'> Tue Jun 12th 11:59pm PDT</span>
```

<span class='badge' style='--badge-bg-color: #e7c500; --badge-text-color: #000;'> Example Badge with Custom Background and Text Color</span>

```html
<span class='badge' style='--badge-bg-color: #e7c500; --badge-text-color: #000;'> Tue Jun 12th 11:59pm PDT</span>
```

<span class='badge'> [Example Badge with Link](https://www.timeanddate.com/worldclock/fixedtime.html?msg=CMPT-363+Blackboard+Mini-lectures+and+Activities&iso=20220516T1430&p1=256&ah=1&am=50)</span>  

```html
<span class='badge'> [Tue May 16 2:30pm PT](https://www.timeanddate.com/worldclock/fixedtime.html?msg=CMPT-363+Blackboard+Mini-lectures+and+Activities&iso=20220516T1430&p1=256&ah=1&am=50)</span>  
```

##### banner-image
Cropped to height of 250px on large screens, 125px on small screens.  

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-image')
```

##### banner-tall-image
Cropped to height of 350px on large screens, 175px on small screens.   

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-tall-image')
```

##### button

[Example Button](# ':class=button')

```markdown
[Required Reading Quiz due Jun 4th](https://canvas.sfu.ca/courses/44038/quizzes/166553 ':class=button')
```

<a class="button" href="#" target="_blank"><i class="fa fa-download fa-fw"></i>Example Button with Font Awesome Icon</a>

```markdown
[﹕fa fa-download fa-fw﹕Download](https://creativecommons.org/wp-content/uploads/2019/02/ccheart_black.svg_.zip ':class=button')
```

```html
<a class="button" href="https://creativecommons.org/wp-content/uploads/2019/02/ccheart_black.svg_.zip" target="_blank"><i class="fa fa-download fa-fw"></i>Download</a>
```

##### button-rounded

[Example Rounded Button](# ':class=button-rounded')

```markdown
[Required Reading Quiz due Jun 4th](https://canvas.sfu.ca/courses/44038/quizzes/166553 ':class=button-rounded')
```

<a class="button-rounded" href="#" target="_blank"><i class="fa fa-download fa-fw"></i>Example Rounded Button with Font Awesome Icon</a>

```markdown
[﹕fa fa-download fa-fw﹕Download](https://creativecommons.org/wp-content/uploads/2019/02/ccheart_black.svg_.zip ':class=button-rounded')
```

```html
<a class="button-rounded" href="https://creativecommons.org/wp-content/uploads/2019/02/ccheart_black.svg_.zip" target="_blank"><i class="fa fa-download fa-fw"></i>Download</a>
```

##### button-secondary

[Example Secondary Button](# ':class=button-secondary')

```markdown
[Required Reading Quiz due Jun 4th](https://canvas.sfu.ca/courses/44038/quizzes/166553 ':class=button-secondary')
```

<a class="button-secondary" href="#" target="_blank"><i class="fa fa-download fa-fw"></i>Example Secondary Button with Font Awesome Icon</a>

```markdown
[﹕fa fa-download fa-fw﹕Download](https://creativecommons.org/wp-content/uploads/2019/02/ccheart_black.svg_.zip ':class=button-secondary')
```

```html
<a class="button-secondary" href="https://creativecommons.org/wp-content/uploads/2019/02/ccheart_black.svg_.zip" target="_blank"><i class="fa fa-download fa-fw"></i>Download</a>
```

##### button-secondary-rounded

[Example Secondary Rounded Button](# ':class=button-secondary-rounded')

```markdown
[Required Reading Quiz due Jun 4th](https://canvas.sfu.ca/courses/44038/quizzes/166553 ':class=button-secondary-rounded')
```

<a class="button-secondary-rounded" href="#" target="_blank"><i class="fa fa-download fa-fw"></i>Example Secondary Rounded Button with Font Awesome Icon</a>

```markdown
[﹕fa fa-download fa-fw﹕Download](https://creativecommons.org/wp-content/uploads/2019/02/ccheart_black.svg_.zip ':class=button-secondary-rounded')
```

```html
<a class="button-secondary-rounded" href="https://creativecommons.org/wp-content/uploads/2019/02/ccheart_black.svg_.zip" target="_blank"><i class="fa fa-download fa-fw"></i>Download</a>
```

##### embedly-card
For linked article previews, embedded slides/videos, etc.  

```html
<a class="embedly-card" data-card-controls="0" data-card-align="left" href="https://blog.prototypr.io/defining-usability-e7bf42e8abd0">Defining usability</a>
```

##### header-image-fade
Suggested width of 1200px to 2000px.  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=header-image-fade')
```

##### header-image-fade-full-width
Suggested width of 1200px to 2000px, and display of Table of Contents is not available.  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=header-image-fade-full-width')
```

##### header-image-full-width
Suggested size of 1200px to 2000px width and 400px to 600px height, and display of Table of Contents is not available.  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=header-image')
```

##### image-75/image-50/image-25
Scale images to %.  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=image-75')
```

##### image-75-border/image-50-border/image-25-border
Scale images with border to %.  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=image-75-border')
```

##### image-border

```markdown
![Photo of Mountain](images/mountain.jpg ':class=image-border')
```

##### image-border-rounded

```markdown
![Photo of Mountain](images/mountain.jpg ':class=image-border-rounded')
```

##### navpill

[Example Navpill](# ':class=navpill')

```markdown
[GitHub](https://github.com/hibbitts-design/docsify-this ':class=navpill')
```

<a class="navpill" href="https://github.com" target="_blank"><i class="fab fa-github fa-fw"></i>Example Navpill with Font Awesome Icon</a>

```markdown
[﹕fab fa-github fa-fw﹕GitHub](https://github.com/hibbitts-design/docsify-this ':class=navpill')
```

```html
<a class="navpill" href="https://github.com" target="_blank"><i class="fab fa-github fa-fw"></i>GitHub</a>
```

##### responsive
Make raw HTML images that include size dimensions responsive.

```html
<img src="https://raw.githubusercontent.com/hibbitts-design/publishing-with-docsify-this/main/images/docsify-this-web-page-builder.jpg" width="910" height="682" class="responsive image-border" alt="Docsify-This Web Page Builder">
```

##### row/column

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

##### row/column with reversed column order

```html
<div class="row reverse-columns">
<div class="column">

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

</div>
<div class="column">

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

</div>
</div>
```

##### row/column with right-aligned second column

```html
<div class="row">
<div class="column">

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

</div>
<div class="column-right">

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

</div>
</div>
```

##### video-container-4by3

```html
<div class="video-container-4by3"><div class="video-container-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/lJIrF4YjHfQ"></iframe></div>
```

##### video-container-16by9
Automatically added to all iFrames with the source domains 'youtube.com' or 'docs.google.com'.  
```html
<div class="video-container-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/lJIrF4YjHfQ"></iframe></div>
```

---

#### Custom Markdown CSS Classes

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

#### Looking for Even More Customization and Control?

Docsify-This was designed to quickly and easily display one or more remotely hosted Markdown files. For greater customization of file rendering and to ensure consistent availability, even if the public Docsify-This.net instance was no longer available, you can host your own instance of Docsify-This.  

##### GitHub Instance

To host your own instance on GitHub Pages, which also supports the option of a custom domain, fork or clone the [Docsify-This](https://github.com/hibbitts-design/docsify-this) repository to your GitHub account. Then, enable GitHub Pages using the `/docs` folder.  

##### Codeberg Instance

You can also have an instance of Docsify-This run on [Codeberg](https://codeberg.org/) such as https://docsify-this.codeberg.page by creating a new repository called `pages`, then choosing **paulhibbitts/docsify-this-app** in the **template** dropdown menu, choosing the **Git Content (Default Branch)** option and then tapping the **Create Repository** button.  

Alternatively, you can upload the files in the Docsify-This `/docs` folder into a newly created Codeberg repository and then manually enable [Codeberg Pages](https://docs.codeberg.org/codeberg-pages/). An example Docsify-This instance running on Codeberg is available at https://codeberg.org/paulhibbitts/docsify-this-app, which uses a Branch renamed to `pages`.  

##### Webserver Instance

If you want to run Docsify-This on your own Websever, create a destination folder on your server and then copy the files within the Docsify-This folder `/docs` to your newly created server folder. You could also use this `docs` folder as a custom domain root. 

A more future-friendly setup would be to fork the Docsify-This repository (to support getting upstream updates) and use a GitHub Action such as [FTP-Deploy](https://github.com/SamKirkland/FTP-Deploy-Action) to deploy all changed repository files to a webserver.

##### Limiting File Domains

You can limit the domains which remote files can be rendered from by locating the line `var allowedDomains = '';` within the `index.html` file and include your list of allowed domains separated by commas, for example `var allowedDomains = 'codeberg.org,raw.githubusercontent.com,hibbittsdesign.org';`.  

##### Advanced Customization

If you want to further customize and control the presentation of your Markdown content, especially when rendering multiple page sites, you can install your own [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) (that this hosted web app is based on) and store all Markdown files within that site. You can learn more about the capabilities of Docsify itself at [Docsify.js.org](https://docsify.js.org).  

Looking for some help with getting a Docsify custom-This instance up and running for your organization? Paul provides a range of professional services related to Docsify-This - [contact him to learn more](https://docsify-this.net/#/?id=contact-and-support).  

---

### 4. Resources and Additional Templates

* [Markdown Syntax References](/?id=markdown-syntax-references)
* [Font Awesome Icons](/?id=font-awesome-icons)
* [Additional Docsify-This Markdown Files](/?id=additional-docsify-this-markdown-files)
* [Additional Docsify-This Learning Materials](/?id=additional-docsify-this-learning-materials)

---

#### Markdown Syntax References

* [What Is Markdown, and How Do You Use It?](https://www.howtogeek.com/448323/what-is-markdown-and-how-do-you-use-it/)
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Markdown Guide](https://www.markdownguide.org/)

---

#### Font Awesome Icons

The display of [Font Awesome Free](https://fontawesome.com/icons) icons within Markdown content is supported with the following format:

:`fas fa-home fa-fw`:

The above Markdown is equivalent to the HTML markup `<i class="fas fa-home fa-fw" aria-hidden="true"></i>`.

When using the above shortcode for Font Awesome icons, it is assumed to be for decorative purposes, and so for improved accessibility an `aria-hidden="true"` attribute is automatically added to the icon. For semantic purposes, it is recommended you refer to the [Font Awesome Icons and Accessibility](https://docs.fontawesome.com/web/dig-deeper/accessibility) guidelines.

The following style prefixes are available with Docsify-This:

* fas (i.e. [Solid](https://fontawesome.com/search?o=r&m=free&s=solid))
* fab (i.e. [Brands](https://fontawesome.com/search?o=r&m=free&f=brands))

---

#### Additional Docsify-This Markdown Files

* [Examples](/?id=examples)
* [Templates](/?id=templates)

##### Examples

[GitHub Training Manual Working Locally with Git Markdown file](https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md), displayed by Docsify-This as a:  
* [Web Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md "GitHub Training Manual Working Locally with Git - Web Page")  
* [Web Page with Table of Contents](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&toc=true&toc-headings=h2,h3 "GitHub Training Manual Working Locally with Git - Web Page with Table of Contents")
* [Web Page with Docsify Sidebar](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&sidebar=true&maxLevel=3 "GitHub Training Manual Working Locally with Git - Web Page with Docsify Sidebar")

[Easy Markdown to Github Pages linked set of Markdown files](https://github.com/nicolas-van/easy-markdown-to-github-pages), displayed by Docsify-This as:   
* [Website](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&homepage=README.md "Easy Markdown to Github Pages - Web Page")  
* [Website with Table of Contents and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&homepage=README.md&toc=true&edit-link=https://github.com/nicolas-van/easy-markdown-to-github-pages/blob/master/README.md "Easy Markdown to Github Pages - Web Page with Table of Contents")  
* [Website with Docsify Sidebar and an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&homepage=README.md&sidebar=true&edit-link=https://github.com/nicolas-van/easy-markdown-to-github-pages/blob/master/README.md "Easy Markdown to Github Pages - Web Page with Docsify Sidebar")

[A Collection of GitHub Markdown files](https://github.com/paulhibbitts/cmpt-363-222-pages) used as course content [within an SFU CMPT-363 Canvas LMS site](https://canvas.sfu.ca/courses/69678).  

[A Collection of GitHub Markdown files with inline CSS](https://github.com/paulhibbitts/docsify-this-cmpt-363-222-site) used as a [multiple page SFU CMPT-363 course site with SFU visual branding and the Docsify Search plugin enabled](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-cmpt-363-222-site/main&homepage=home.md&loadNavbar=_navbar.md&sidebar=true&loadSidebar=_sidebar.md&loadFavicon=favicon.png&dark-mode=true&name=CMPT-363-222&search=true#/course-welcome), [multiple page SFU CMPT-363 course site with SFU visual branding and website logo](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-cmpt-363-222-site/main&homepage=home.md&loadNavbar=_navbar.md&sidebar=true&loadSidebar=_sidebar.md&loadFavicon=favicon.png&dark-mode=true&name=CMPT-363-222&logo=images/logo.png#/course-welcome), and an example [single Markdown file with default visual styling for embeddeding](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-cmpt-363-222-site/main&homepage=home.md&hide-credits=true#/course-welcome).

[GitHub Markdown Content Demo file](https://github.com/hibbitts-design/docsify-this-markdown-content-demo/blob/main/README.md), displayed by Docsify-This as a [Web Page with 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-content-demo/main&homepage=README.md&edit-link=https://github.dev/hibbitts-design/docsify-this-markdown-content-demo/blob/main/README.md) using the new [GitHub.dev web editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor) (currently in Beta).  

[GitHub Markdown Content Demo file](https://github.com/hibbitts-design/docsify-this-markdown-content-demo/blob/main/README.md), displayed by Docsify-This as a [Web Page with 'View raw Markdown' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-content-demo/main&edit-link=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-content-demo/main/README.md&edit-link-text=View%20raw%20Markdown).  

[Codeberg Markdown Content Demo file](https://codeberg.org/paulhibbitts/docsify-this-markdown-content-demo/src/branch/main/README.md), displayed by Docsify-This as a [Web Page with 'View raw Markdown' link](https://docsify-this.net/?basePath=https://raw.codeberg.page/paulhibbitts/docsify-this-markdown-content-demo/&edit-link=https://codeberg.org/paulhibbitts/docsify-this-markdown-content-demo/raw/branch/main/README.md&edit-link-text=View%20raw%20Markdown).  

[GitHub's LaTeX Support Examples Markdown file](https://github.com/dotcom-poland/medium-latex-support/blob/main/README.md), displayed by Docsify-This as a [Web Page with an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/dotcom-poland/medium-latex-support/main&edit-link=https://github.com/dotcom-poland/medium-latex-support/blob/main/README.md#/).

[Mermaid-Docsify Example GitHub Markdown file](https://github.com/Leward/mermaid-docsify/blob/master/example/README.md), displayed by Docsify-This as a [Web Page with an 'Edit this Page' link](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/Leward/mermaid-docsify/master/example&edit-link=https://github.com/Leward/mermaid-docsify/blob/master/example/README.md#/).  

##### Templates

[Docsify-This Multi-language Site Template](https://github.com/hibbitts-design/docsify-this-multilanguage-site), displayed by Docsify-This as a:
* [Website with Docsify Sidebar and Navbar](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-multilanguage-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&name=Multi-language%20Site)
* [Website with Docsify Sidebar, Navbar and Footer](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-multilanguage-site/main&homepage=home.md&sidebar=true&loadSidebar=_sidebar.md&loadNavbar=_navbar.md&loadFooter=_footer.md&hide-credits=true&name=Multi-language%20Site)  

[Docsify-This Simple Visual Portfolio Template](https://github.com/hibbitts-design/docsify-this-simple-visual-portfolio) (based on [Notion Portfolio Template](https://www.notion.so/templates/design-portfolio-notion)), displayed by Docsify-This as a:  
* [Website](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-simple-visual-portfolio/main&homepage=README.md&font-size=1.25&browser-tab-title=Design%20Portfolio&loadFavicon=favicon.png "Docsify-This Simple Visual Portfolio")  
* [Website with automatic light/dark theme switching](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-simple-visual-portfolio/main&homepage=README.md&font-size=1.25&browser-tab-title=Design%20Portfolio&loadFavicon=favicon.png&dark-mode=true "Docsify-This Simple Visual Portfolio")  
* [Website using the Merriweather font](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-simple-visual-portfolio/main&homepage=README.md&font-size=1.25&browser-tab-title=Design%20Portfolio&loadFavicon=favicon.png&font-family=Merriweather,Georgia,serif "Docsify-This Simple Visual Portfolio")
* [Website with zoomable images](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-simple-visual-portfolio/main&homepage=README.md&font-size=1.25&browser-tab-title=Design%20Portfolio&loadFavicon=favicon.png&zoom-images=true "Docsify-This Simple Visual Portfolio")

[Docsify-This Visual Portfolio Template](https://github.com/hibbitts-design/docsify-this-visual-portfolio) (based on [Notion Portfolio Template](https://www.notion.so/templates/design-portfolio-notion)), displayed by Docsify-This as a:  
* [Website](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-visual-portfolio/main&homepage=README.md&sidebar=true&loadSidebar=_sidebar.md&loadFavicon=favicon.png&name=Design%20Portfolio "Docsify-This Visual Portfolio")  
* [Website with automatic light/dark theme switching](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-visual-portfolio/main&homepage=README.md&sidebar=true&loadSidebar=_sidebar.md&loadFavicon=favicon.png&name=Design%20Portfolio&dark-mode=true "Docsify-This Visual Portfolio")  
* [Website with larger font size](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-visual-portfolio/main&homepage=README.md&sidebar=true&loadSidebar=_sidebar.md&loadSidebar=_sidebar.md&loadFavicon=favicon.png&name=Design%20Portfolio&font-size=1.25 "Docsify-This Visual Portfolio") 
* [Website with zoomable images](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-visual-portfolio/main&homepage=README.md&sidebar=true&loadSidebar=_sidebar.md&loadFavicon=favicon.png&name=Design%20Portfolio&zoom-images=true "Docsify-This Visual Portfolio")
* [Website with pagination](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-visual-portfolio/main&homepage=README.md&sidebar=true&loadSidebar=_sidebar.md&loadFavicon=favicon.png&name=Design%20Portfolio&pagination=true#/ "Docsify-This Visual Portfolio") 

A simple [Markdown Student Portfolio Starter Template](https://github.com/hibbitts-design/docsify-this-markdown-student-portfolio-starter) (based on [Markdown Student Portfolio Template](https://github.com/thoresonjd/markdown-portfolio-template) by [Justin Thoreson](https://github.com/thoresonjd)) which is viewable on both GitHub and with Docsify-This.net, displayed by Docsify-This as:  
* [Website](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-student-portfolio-starter/main&homepage=README.md "Docsify-This Markdown Student Portfolio Starter Template")  
* [Website with automatic light/dark theme switching](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-student-portfolio-starter/main&homepage=README.md&dark-mode=true "Docsify-This Markdown Student Portfolio Starter Template")  
* [Website using the Merriweather font](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-student-portfolio-starter/main&homepage=README.md&font-family=Merriweather,Georgia,serif "Docsify-This Markdown Student Portfolio Starter Template")
* [Website using the Merriweather font and red links](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-student-portfolio-starter/main&homepage=README.md&font-family=Merriweather,Georgia,serif&link-color=cc0000#/ "Docsify-This Markdown Student Portfolio Starter Template")
* [Website with zoomable images](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-student-portfolio-starter/main&homepage=README.md&zoom-images=true "Docsify-This Markdown Student Portfolio Starter Template")
* [Website with 'Edit this Page' links](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-markdown-student-portfolio-starter/main&homepage=README.md&edit-link=https://github.com/hibbitts-design/docsify-this-markdown-student-portfolio-starter/blob/main/README.md "Docsify-This Markdown Student Portfolio Starter Template")  

---

#### Additional Docsify-This Learning Materials

##### Guides

[Introduction to Docsify⁠–⁠This](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/otessa-2024/main/pages&homepage=introduction-to-docsify-this.md&edit-link=https://github.com/paulhibbitts/otessa-2024&sidebar=true&edit-link-text=View%20on%20GitHub&edit-link-emoji=:file_folder:&browser-tab-title=Introduction%20to%20Docsify-This&header-weight=600&dark-mode=true&coverpage=_coverpage.md)  
_Introductory, beginner to intermediate._  
An introduction of Markdown publishing using the open source project Docsify⁠–⁠This.  

[Self-Publishing with Docsify⁠–⁠This](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/self-publishing-with-docsify-this/main/pages&homepage=introduction-to-self-publishing-with-docsify-this.md&edit-link=https://github.com/paulhibbitts/self-publishing-with-docsify-this&sidebar=true&maxLevel=4&edit-link-text=View%20on%20GitHub&edit-link-emoji=:file_folder:&browser-tab-title=Overview%20to%20Self-Publishing%20with%20Docsify-This&header-weight=600&dark-mode=true&coverpage=_coverpage.md)  
_Intermediate, with a mix of basic and advanced aspects._  
An overview to self-publishing with Markdown using the open source project Docsify⁠–⁠This, with a focus on digital literacy.

##### Screencasts

* [Demo Wednesdays Live: Quick Start to Markdown Publishing: Using Docsify-This](https://www.youtube.com/watch?v=FQKniYvXS90)
* [Open Publishing Ecosystems: DocsifyThis](https://www.youtube.com/watch?v=EjeqxOJ2ZxE)

---

### 5. Tips, Techniques, and Troubleshooting

* [Content Display Tips and Techniques](/?id=content-display-tips-and-techniques)
* [Making a Markdown File Available Online](/?id=making-a-markdown-file-available-online)
* [Improving Markdown Previews in Text Editors](/?id=improving-markdown-previews-in-text-editors)
* [Loading Web Page Builder Custom Settings](/?id=loading-web-page-builder-custom-settings)
* [Troubleshooting](/?id=troubleshooting)

---

#### Content Display Tips and Techniques

* [Matching Fonts with Your Destination Platform Content](/?id=matching-fonts-with-your-destination-platform-content)
* [Providing a Page Table of Contents within a Smaller Area](/?id=providing-a-page-table-of-contents-within-a-smaller-area)
* [Including Code Blocks](/?id=including-code-blocks)
* [Including External Markdown Content](/?id=including-external-markdown-content)
* [Use of WikiLinks](/?id=use-of-wikilinks)
* [Display of AsciiDoc Files (file extension .adoc)](/?id=display-of-asciidoc-files-file-extension-adoc)
* [Display of HedgeDocs Files](/?id=display-of-hedgedocs-files)
* [Use of Camel Case (e.g. camelCase) Format for URL parameters](/?id=use-of-camel-case-eg-camelcase-format-for-url-parameters)
* [Use of New Web Editor GitHub.dev](/?id=use-of-new-web-editor-githubdev)

##### Matching Fonts with Your Destination Platform Content
Use a page inspector to identify the font family and font size used in the platform you are embedding Docsify-This content in, and then pass that font family using the `font-family` ([encoded](https://meyerweb.com/eric/tools/dencoder/), where spaces are replaced with '%20') and `font-size` (REM units) URL parameters to Docsify-This. For example, to match fonts with the Canvas LMS:  
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/cmpt-363-222-pages/main&homepage=topics.md&font-family=Lato%20Extended,Lato,Helvetica%20Neue,Helvetica,Arial,sans-serif&font-size=1  

##### Providing a Page Table of Contents within a Smaller Area
If you want to include a Page Table of Contents with embedded Docsify-This content, but the destination platform screen area is not very wide, you might want to try the optional `toc-narrow` display option. For example, to use a narrower Table of Contents area that includes a smaller screen breakpoint:
https://docsify-this.net?basePath=https://raw.githubusercontent.com/paulhibbitts/cmpt-363/main/docs/222&homepage=week-01.md&toc-narrow=true  

##### Including Code Blocks
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

##### Including External Markdown Content

The content of external Markdown files can be embedded into Docisfy-This web pages with the following:

```markdown
[included Markdown from same source location](example.md ':include')
```

```markdown
[included Markdown from URL](https://raw.githubusercontent.com/paulhibbitts/Markdown-File-Tests/main/itworks.md ':include')
```

For additional examples of including external content, view [Docsify Embeded Files](https://docsify.js.org/#/embed-files?id=embed-files).

##### Use of WikiLinks
[WikiLinks format](https://help.obsidian.md/Linking+notes+and+files/Internal+links) for links and images are supported, as also found in the desktop editor [Obsidian](https://obsidian.md) and other platforms.  

##### Display of AsciiDoc Files (file extension .adoc)
The display of [AsciiDoc](https://asciidoc.org/) files ('.adoc' extension) via [DownDoc](https://github.com/opendevise/downdoc) is possible by manually passing the relevant filenames within a Docsify-This URL (not available in the Docisfy-This.net Web Page Builder), for example: https://docsify-this.net/?basePath=https://raw.githubusercontent.com/asciidoctor/asciidoctor-pdf/main/examples&homepage=basic-example.adoc&edit-link=https://github.com/asciidoctor/asciidoctor-pdf/blob/main/examples/basic-example.adoc  

You can support the display of AsciiDoc files in the Web Page Builder of your own instance of Docsify-This by locating the function `getAllowedFileExtensions()` within the `index.html` file and add the file extension '.adoc' to the `return` statement, for example `return ".md,.adoc";`.  

##### Display of HedgeDocs Files
The display of [HedgeDoc](https://hedgedoc.org/) files containing basic Markdown (as well as Mermaid and MathJax elements) is possible by manually using 'download' for the `homepage` URL parameter within a Docsify-This URL (not available in the Docisfy-This.net Web Page Builder), for example: https://docsify-this.net/?basePath=https://demo.hedgedoc.org/crN3ispNQdejWkUXXIXYQA&homepage=download  

Here is an additional example, using the HedgeDoc file https://demo.hedgedoc.org/oisWMy9ZS36PE6TvYhJC4A?both (seen in split-screen view) and and rendered as a web page by Docsify-This https://docsify-this.net/?basePath=https://demo.hedgedoc.org&homepage=oisWMy9ZS36PE6TvYhJC4A/download&edit-link=https://demo.hedgedoc.org/oisWMy9ZS36PE6TvYhJC4A?both&toc=true&edit-link-text=Edit%20this%20Page%20in%20HedgeDoc  

You can support HedgeDoc URLs (e.g. https://demo.hedgedoc.org/ip4SRxZYTEKa6JHr62XTiA) in the Web Page Builder of your own instance of Docsify-This by locating the line `var hedgedocInstances = '';` within the `index.html` file and include your HedgeDoc instances separated by commas, for example `var hedgedocInstances = 'demo.hedgedoc.org';`. Try out a demo instance of Docsify-This with support for demo.hedgedoc.org files at https://hibbitts-design.github.io/hedgedoc-docsify-this.  

##### Use of Camel Case (e.g. camelCase) Format for URL Parameters
You can use [camel case](https://en.wikipedia.org/wiki/Camel_case) instead of hyphens for the names of Docsify-This URL parameters if prefered. For example, https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md&toc=true&toc-headings=h2,h3&edit-link=https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md and https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md&toc=true&tocHeadings=h2,h3&editLink=https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md are equilivent.

##### Use of New Web Editor GitHub.dev
To use the new GitHub.dev web editor (currently in Beta) for 'Edit this Page' links, change `github.com` to `github.dev` for GitHub.com files entered into the Web Page Builder Markdown File URL field.

---

#### Making a Markdown File Available Online
There are multiple ways to get a raw Markdown file available online, here are three options to help you get started:

**GitHub or Codeberg:**  
1. Signup for a [GitHub](https://github.com) or [Codeberg](https://codeberg.org) account
2. Create a new repository and upload your Markdown file
3. View the uploaded file, and copy/paste that URL into the Docsify-This **Markdown File URL** field

**Gist (GitHub Gists):**
1. Signup for a [GitHub](https://github.com) account
1. Create a gist with your Markdown file at https://gist.github.com
2. Enter a filename ending with `.md` (e.g. `myfile.md`)
3. Choose **Create public gist** and tap on that button
4. Tap on **Raw** button in the upper right of your Gist field and copy/paste that URL into the Docsify-This **Markdown File URL** field

**Personal or Organizational Website:**  
1. Obtain login information for your server
2. Upload the Markdown file to your server
3. Navigate to the location of that file, view the contents in your Browser, and copy/paste that URL into the Docsify-This **Markdown File URL** field

---

#### Improving Markdown Previews in Text Editors
Some text editors, such as [Microsoft Visual Studio](https://code.visualstudio.com/) (including the online [GitHub.dev web editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor)), have the ability to link your own CSS so Markdown previews are more visually accurate. If your editor supports this ability, the below CSS files can be used.

Docsify-This (based on the Docsify Open Publishing Starter Kit) CSS:  
https://docsify-this.net/assets/css/editor.css

FontAwesome CSS:  
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css

**Enhanced Previews with Microsoft Visual Studio**  

For an even closer visual representation of your Docsify-This pages in Microsoft Visual Studio, do the following:

1. Install and enable the [docsify-Preview](https://marketplace.visualstudio.com/items?itemName=dzylikecode.docsify-preview&ssr=false#overview) VSCode Extension
2. Download and unzip the [Docsify-This GitHub repository](https://github.com/hibbitts-design/docsify-this)
3. Place the folder of Markdown files to be rendered by Docsify-This inside of the unzipped repository `docs` folder
4. When viewing a Markdown file, right-click in the content area and select a **docsify Preview** option

_TIP: If you change the VSCode setting for **Workbench › Editor: Show Tabs** to **single** then the docsify preview area will remain in place as you edit multiple Markdown files._

---

#### Loading Web Page Builder Custom Settings
You can load custom default settings in the Docsify-This Web Page Builder using URL parameters. This ability is especially helpful for Docsify-This online sessions, workshops, or when users collaborate and assist one another. Along with the standard Docsify-This URL parameters, the Web Page Builder also offers the following specific parameters:  

##### url-field
```html

https://docsify-this.net/?url-field=https://codeberg.org/paulhibbitts/docsify-this-one-page-course/src/branch/main/home.md

```

```html

https://docsify-this.net/?url-field=empty

```

_You can even just type **docsify-this.net?** in front of an online Markdown file URL that you are viewing (such as files hosted on GitHub, Codeberg, or raw source files) to instantly set up the Docsify-This Web Page Builder with that file. Once the Web Page Builder loads, press the Return key — no need to leave the keyboard — to see Docsify-This display the Markdown file as a web page! For example, `https://docsify-this.net?https://github.com/hibbitts-design/docsify-this-one-page-course/blob/main/home.md`._

##### edit-link-checkbox
```html

https://docsify-this.net/?url-field=https://codeberg.org/paulhibbitts/docsify-this-one-page-course/src/branch/main/home.md&edit-link-checkbox=true

```

##### show-page-options
```html

https://docsify-this.net/?show-page-options=true

```

##### advanced
```html

https://docsify-this.net/?advanced=true

```

For example, the following URL will display the Advanced Web Page Builder, with the Markdown file URL set to `https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main/home.md`, the site name 'CPT-363' along with a Docsify custom Sidebar and Navbar to be included: https://docsify-this.net/?url-field=https://github.com/hibbitts-design/docsify-this-multiple-page-course-site/blob/main/home.md&sidebar=true&loadSidebar=true&loadNavbar=true&name=CPT-363

The quickest way to create such a shareable URL is to use the Docsify-This Web Page Builder to generate a Docisfy-This web page URL, and then replace the URL parameter `basepath` with `url-field` using the full path of the source Markdown file URL. For example, the URL https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md&sidebar=true&maxLevel=3 would be changed to https://docsify-this.net/?url-field=https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md&homepage=home.md&sidebar=true&maxLevel=3.

---

#### Troubleshooting

* ['404' File not Found message is Displayed](/?id=404-file-not-found-message-is-displayed)
* ['Edit this Page' Links not Working](/?id=edit-this-page-links-not-working)
* [Updated Markdown file not Displayed in the Browser](/?id=updated-markdown-file-not-displayed-in-the-browser)
* [Embedded Image not Displayed](/?id=embedded-image-not-displayed)
* [Embedded iFrame not Displayed](/?id=embedded-iframe-not-displayed)
* [Docsify Sidebar is not Displaying Header Levels](/?id=docsify-sidebar-is-not-displaying-header-levels)
* [Search Results do not Return all Expected Matches](/?id=search-results-do-not-return-all-expected-matches)
* [Multiple Embedded Scripts are not Working as Expected](/?id=multiple-embedded-scripts-are-not-working-as-expected)

##### '404' File not Found message is Displayed
The provided **basePath** parameter and/or optional **homepage** parameter may not be correct, verify that these items lead to accessible content. This error message may also result from a [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/web/HTTP/CORS) policy, which restricts resources on a web page to be requested from another domain. If possible, relocate files to a domain that supports cross-origin requests or alternatively if the domain in question is under your control explore re-configuring [CORS related settings](https://www.w3.org/wiki/CORS_Enabled). You can confirm the cause of the 404 message by viewing the errors displayed in the [Browser Javascript Console](https://balsamiq.com/support/faqs/browserconsole/).  

When displaying GitHub Markdown files, the branch name is assumed to be `main`, and other paths will likely cause a 404 file not found message. When displaying Codeberg Markdown files, the path is assumed to contain `/src/branch/main` and other paths will likely cause a 404 file not found message.  

##### 'Edit this Page' Links not Working
Due to not being able to update Navbar or custom Sidebar links before page rendering, 'Edit this Page' links cannot be automatically updated to their correct target pages. Manually pass a URL pointing to the Git Repository using the URL parameter `edit-link` as a workaround, for example https://docsify-this.net?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-multiple-page-site/main&homepage=home.md&loadNavbar=_navbar&edit-link=https://github.com/hibbitts-design/docsify-this-multiple-page-site&edit-link-text=GitHub%20Repository and https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-cmpt-363-222-site/main&homepage=home.md&loadNavbar=_navbar.md&sidebar=true&loadSidebar=_sidebar.md&edit-link=https://github.com/paulhibbitts/docsify-this-cmpt-363-222-site/tree/main&edit-link-text=GitHub%20Repository

##### Updated Markdown file not Displayed in the Browser
Docsify is likely displaying the last cached version. To ensure the most recent version of a file is loaded, do a [hard refresh of your Browser cache](https://www.makeuseof.com/hard-refresh-browser/).

##### Embedded Image not Displayed
The most likely cause for embedded images in Markdown not being displayed as expected is the use of relative paths (i.e. `![Alt Text](images/filename.jpg)`) - review image paths and ensure the full path to each image is used (i.e. `![Alt Text](/folder/images/filename.jpg)`). Likewise, if images in HTML are not being displayed as expected the likely cause is again the use of relative paths (i.e. `<img src="images/filename.jpg" alt="Alt Text">`) - use absolute URLs for HTML image sources (i.e. `<img src="https://raw.githubusercontent.com/user/repository/main/images/filename.jpg" alt="Alt Text">`).

##### Embedded iFrame not Displayed
Due to iframe cross-domain issues embedded content may not be able to be displayed. Use the included rich media embed service [embed.ly](https://embed.ly/) as a workaround.  

For example, the following iFrame HTML:  

```html
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRnnRFelgw1ksq_p8Eryg3dnyLCRRLPf5fBgdwdv9p-tCIwcxqWvzDGrGbjxGHL7HqEJVpmV26ntk3a/embed?start=false&loop=false&delayms=3000" frameborder="0" width=780" height="585" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
```

Would be changed to:  

```html
<a class="embedly-card" data-card-controls="0" data-card-align="left" data-card-width="100%" href="https://docs.google.com/presentation/d/1BLaaOTsGxDmNcAhg6pdx3hl9IvI8NErg8Oe5ceh83fw/edit?usp=sharing">Grav and Docsify Slides Placeholder</a>
```

##### Docsify Sidebar is not Displaying Header Levels
When displaying a Docsify Sidebar or custom Sidebar, it is expected that page header levels start with a H1 level header.  

##### Search Results do not Return all Expected Matches
When the search field is enabled in a Docsify custom Sidebar, only pages listed and linked in the Sidebar will be indexed for the search. Any pages linked in an optional Navbar will not be included in searches.  

##### Multiple Embedded Scripts are not Working as Expected
Docsify-This (as with Docsify itself) will only execute the first script included in a Markdown page, as described in the [Docsify documentation](https://docsify.js.org/#/configuration?id=executescript).

---

### 6. Support and Policies

* [Privacy Policy Summary](#privacy-policy-summary)
* [Contact and Support](#contact-and-support)

---

#### Privacy Policy Summary

* This website is hosted by [GitHub Pages, which is GDPR compliant](https://github.blog/2018-04-19-updates-to-our-privacy-statement-and-terms-of-service/)
* Only this web page (containing the Web Page Builder) uses [Google Analytics in a GDPR manner](https://support.google.com/analytics/answer/9019185?hl=en#IP&zippy=%2Cin-this-article)
* Web pages generated by remote Markdown files are not tracked in any manner by Google Analytics
* The web service [H5P](https://h5p.org/privacy) is automatically loaded when displaying remote Markdown files
* The open source JavaScript tools [Mermaid](https://mermaid.js.org/) and [MathJax](https://www.mathjax.org/) are automatically loaded via [jsDelivr](https://www.jsdelivr.com/terms) when displaying remote Markdown files
* The web service [Hypothes.is](https://web.hypothes.is/privacy/) is only loaded if chosen when displaying remote Markdown files
* The web service [Embed.ly](https://embed.ly/legal/privacy) is only loaded if [Embedly Card](https://embed.ly/cards) elements are present in remote Markdown files

---

#### Contact and Support

- Follow [@hibbittsdesign@mastodon.social](https://mastodon.social/@hibbittsdesign) on Mastodon for updates, or subscribe via [RSS feed](https://mastodon.social/@hibbittsdesign.rss)
- 👩🏻‍💻🧑🏻‍💻 Join the [Docsify Discord](https://discord.gg/docsify) and visit the **#Docsify-This** Channel
- Add a ⭐️ [star on GitHub](https://github.com/hibbitts-design/docsify-this) to the Docsify-This project repository

What do you think about Docsify-This so far? Help shape its direction by sharing your feedback in just a few minutes!

[:fa fa-comment fa-fw: Share your Feedback](https://forms.gle/ViYu2ZdPmj6PeQ439 ':class=button-secondary-rounded')

By leveraging his extensive UX design expertise and systems-oriented approach, Paul helps teams and individuals utilize open content in a range of education and publication settings, especially in connection with his Markdown-based [Docsify](https://docsify.js.org/#/) and [Grav CMS](https://getgrav.org/) open-source projects. Professional services include user experience and workflow consulting, premium support subscriptions, workshops, and custom development.  Sound of interest? Send a note to [paul@hibbittsdesign.org](mailto:paul@hibbittsdesign.org).

---

This [open source project](https://github.com/hibbitts-design/docsify-this) is by Paul Hibbitts of [HibbittsDesign.org](https://hibbittsdesign.org/).  

**🙇🏻‍♂️Special Thanks**  
[Beau Shaw](https://github.com/DaddyWarbucks) for his [Remote Docsify](https://github.com/DaddyWarbucks/remote-docsify) example.  
[Alan Levine](https://github.com/cogdog) for the inspiration of a consolidated ReadMe collection.  

</div>