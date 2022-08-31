# Docsify Open Publishing Starter Kit Remote

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

🛸 Docsify Remote Rendering
---

It is possible to render remote Markdown files (for example, a Markdown file in a GitHub repository) using Docsify by passing a URL parameter.

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


`embedly-card`  

```html
<a class="embedly-card" data-card-controls="0" data-card-align="left" data-card-width="100%" href="https://docs.google.com/presentation/d/1BLaaOTsGxDmNcAhg6pdx3hl9IvI8NErg8Oe5ceh83fw/edit?usp=sharing">Grav and Docsify Slides Placeholder</a>
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
