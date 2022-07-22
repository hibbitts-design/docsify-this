# Docsify Open Publishing Starter Kit

[![Docsify](https://img.shields.io/npm/v/docsify?label=docsify)](https://docsify.js.org/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/LICENSE)
<a href="https://discord.gg/zT8eS8ZG">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Docsify Discord Chat" />
</a>

> This is a starter kit to quickly create Markdown-based article, portfolio and documentation websites with the site generator [Docsify](https://docsify.js.org). Global navigation elements can be hidden for seamlessly embedding pages into other platforms or shared as standalone pages. Includes an optional "Edit this Page" link.

📸 Docsify Open Publishing Screenshots
---
![ Docsify Open Publishing Starter Kit](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/smartmockups_l3dl0det.png)
_Figure 1. Docsify Open Publishing Starter Kit. Explore a demo at [hibbitts-design.github.io/demo-docsify-open-publishing-starter-kit/](https://hibbitts-design.github.io/demo-docsify-open-publishing-starter-kit/#/)_

🚀 GitHub Pages Quickstart
---
**Pre-flight Checklist**  

1. GitHub account

**Installation and Deployment**

1. Tap **Use this template** on the source repository (upper-right green button)
![ Docsify Open Publishing Starter Kit - Install Page 1](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-op-install-1.png)

2. Choose the name for your new repository to contain the copied site files and then tap **Create repository from template**
![ Docsify Open Publishing Starter Kit - Install Page 2](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-op-install-2.png)

3. Go to **Settings** of your newly created repository, tap the **Pages** tab (on the left-hand side), choose **main branch**, then **docs folder** and finally tap the **Save** button (see more details in the [Docsify documentation](https://docsify.js.org/#/deploy?id=github-pages))
![ Docsify Open Publishing Starter Kit - Install Page 3](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-op-install-3.png)

4. And you're done! (view your new site using the provided URL on the **Pages** tab - it can take up to 10 minutes for your site to be initially available)
![ Docsify Open Publishing Starter Kit - Install Page 4](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-op-install-4.png)

Do you use GitLab? You can also use Docsify with [GitLab Pages](https://docsify.js.org/#/deploy?id=gitlab-pages)!

✏️ Editing Your Docsify Site Pages on GitHub
---  

1. Go to the Docsify Markdown (.md) page in the `docs` folder of your repository you want to edit
![ Editing Your Docsify Site Pages 1](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-page-edit-1.png)

2. Tap the **Pencil Icon** (top left-hand toolbar area) to start the editor
![ Editing Your Docsify Site Pages 2](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-page-edit-2.png)

3. Scroll down to the bottom of the page and tap the **Commit changes** button to save your changes
![ Editing Your Docsify Site Pages 3](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-page-edit-3.png)

[Learn more about creating pages in Docsify.](https://docsify.js.org/#/more-pages)

🔗 Activating the “Edit this Page” on Your Docsify Site
---   

1. At the top-level of your GitHub Repository copy the URL
![ Docsify Open Publishing Starter Kit - “Edit this Page” Link 1](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-op-gitlink-1.png)

2. Tap on the **docs** folder
![ Docsify Open Publishing Starter Kit - “Edit this Page” Link 2](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-op-gitlink-2.png)

2. Tap on the **index.html** file
![ Docsify Open Publishing Starter Kit - “Edit this Page” Link 3](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-op-gitlink-3.png)

3. Tap the **Pencil Icon** (top left-hand toolbar area) to start the editor
![ Docsify Open Publishing Starter Kit - “Edit this Page” Link 4](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-op-gitlink-4.png)

4. Find the line `var gitLinkRepoURL = '';` and enter the URL of your own GitHub Repository between the two quotes and then scroll down to the bottom of the page and tap the **Commit changes** button to save your changes
![ Docsify Open Publishing Starter Kit - “Edit this Page” Link 5](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-op-gitlink-5.png)

💻 Locally Editing Your Docsify Site Pages
---  

**Editing Your Docsify Site Pages on Your Desktop**
1. Tap **Code** on your repository (upper-right green button)
2. Choose **Open Desktop** and follow the prompts, installing [GitHub Desktop](https://desktop.github.com/) if not already present
3. You will now be able to edit your Docsify site (in the `docs` folder) using the desktop editor of your choice (e.g. [Atom](https://atom.io/))
4. Use GitHub Desktop to push any changes to your repository.  

[Learn more about using GitHub Desktop](https://help.github.com/en/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project).

You can also clone (i.e download) a copy of your repository to your computer and [run Docsify locally](https://docsify.js.org/#/quickstart) to preview your site. See the below video for details.

🧩 Using your Docsify Page Content with Other Systems
---  

![ Docsify Open Publishing Page Ready for Embedding](https://raw.githubusercontent.com/paulhibbitts/github-repo-images/master/docsify-op-ready-for-embedding.png)
_Figure 2. Docsify Open Publishing page ready for embedding or linking as standalone content_

The optional ‘standalone’ (all lowercase) URL parameter hides a site’s sidebar for seamlessly embedding Docsify page content within another platform such as Canvas LMS, Moodle, Microsoft Teams or being displayed in an existing or new Browser tab. The parameter 'embedded' is supported as an alias for `standalone`.

To only display Docsify page content, add the following to a Docsify page URL:

`?‘standalone’=true`

Example standard Docsify page:  
https://hibbitts-design.github.io/demo-docsify-open-publishing-starter-kit/#/  

Example Docsify page displaying only page content (i.e., no sidebar is shown):  
https://hibbitts-design.github.io/demo-docsify-open-publishing-starter-kit/#/?standalone=true  

To optionally show a page Table of Contents (based on included Headers), use the following:

`?‘standalone’=true&toc=true`

Example Docsify page displaying only page content:  
https://hibbitts-design.github.io/demo-docsify-open-publishing-starter-kit/#/introduction?standalone=true  

Example Docsify page displaying only page content with a page Table of Contents included:  
https://hibbitts-design.github.io/demo-docsify-open-publishing-starter-kit/#/introduction?standalone=true&toc=true  

To optionally hide the 'Edit this Page' link, use the following:

`?‘standalone’=true&hidegitlink=true`

Example Docsify page displaying only page content:  
https://hibbitts-design.github.io/demo-docsify-open-publishing-starter-kit/#/introduction?standalone=true  

Example Docsify page displaying only page content with the 'Edit this Page' link hidden:  
https://hibbitts-design.github.io/demo-docsify-open-publishing-starter-kit/#/introduction?standalone=true&hidegitlink=true.

🖼 Presenting your Docsify Page Content as Standalone Webpages
---  

In addition to using URL parameters when embedding Docsify page content into other systems, it is possible to permanently display all pages as standalone, and to also always display a page Table of Contents.

**To Display all Pages as Standalone**
1. Open the `index.html` file for editing.
2. Locate the line `var standalone = false;` and change it to `var standalone = true;`.
3. Save the `index.html` file and reload site.

**To Display Page Table of Contents**
1. Open the `index.html` file for editing.
2. Locate the line `var ToC = false;` and change it to `var showToC = true;`.
3. Save the `index.html` file and reload site.

Please note a page must have a series of Headings (#, ##, ###) for the Table of Contents to be displayed correctly.

🛸 Docsify Remote Rendering
---

It is possible to render remote Markdown files (for example, a Markdown file in a GitHub repository) using Docsify by passing a URL parameter. To enable this functionality, the following section of code in the `index.html` file must be uncommented:

```
/*
const params = new URLSearchParams(window.location.search);
params.forEach((value, key) => {
  window.$docsify[key] = value;
});
*/
```  

For example, to render a Markdown file named **README.md** (the expected default name) as a regular Docsify page the URL would be:  
https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/

To render a Markdown file named **README.md** (the expected default name) as a standalone page the URL would be:  
https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/&standalone=true

To render a Markdown file named **README.md** (the expected default name) as a standalone page with a table of contents the URL would be:  
https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/&standalone=true&toc=true

To render a Markdown file named **introduction.md** as a regular Docsify page, the URL would be:  
https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md

To render a Markdown file named **introduction.md** as a standalone page, the URL would be:  
https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&standalone=true

To render a Markdown file named **introduction.md** as a standalone page with a table of contents, the URL would be:  
https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&standalone=true&toc=true

_TIP: To get the path of a file on GitHub for the **basepath** URL parameter, tap the **Raw** button when viewing the file and then remove the filename. If not a README file, the filename will need to be passed using the **homepage** URL parameter._

📚 Docsify and Markdown Resources
---
**Docsify**  
[Docsify Documentation](https://docsify.js.org/#/?id=docsifyg)  
[Docsify Basics by MichaelCurrin](https://michaelcurrin.github.io/docsify-js-tutorial/#/?id=docsify-basics)  

**Docsify Themable**  
[Docsify Themeable Documentation](https://jhildenbiddle.github.io/docsify-themeable/#/introduction)  
[Docsify Themeable GitHub](https://github.com/jhildenbiddle/docsify-themeable)  

**Markdown**  
[Markdown Here Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet)  
[Markdown Guide](https://www.markdownguide.org/)  

🧰 Useful Markdown CSS Classes
---

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
<div class="video-container-4by3"><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRnnRFelgw1ksq_p8Eryg3dnyLCRRLPf5fBgdwdv9p-tCIwcxqWvzDGrGbjxGHL7HqEJVpmV26ntk3a/embed?start=false&loop=false&delayms=3000" frameborder="0" width=780" height="585" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
```

`video-container-16by9`  
```html
<div class="video-container-16by9"><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRnnRFelgw1ksq_p8Eryg3dnyLCRRLPf5fBgdwdv9p-tCIwcxqWvzDGrGbjxGHL7HqEJVpmV26ntk3a/embed?start=false&loop=false&delayms=3000" frameborder="0" width=780" height="585" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
```

📼 Video Walkthrough of Local Docsify Install/Config
---
[![Generating Documentation Sites with GitHub and Docsify - Alysson Alvaran](youtube.png)](https://www.youtube.com/watch?v=TV88lp7egMw)  
_Video 1. Generating Documentation Sites with GitHub and Docsify - Alysson Alvaran_

🙇‍Credits and Special Thanks
---
[Docsify Themeable](https://github.com/jhildenbiddle/docsify-themeable)  
[Beau Shaw](https://github.com/DaddyWarbucks) for his [Remote Docsify](https://github.com/DaddyWarbucks/remote-docsify) example.  
