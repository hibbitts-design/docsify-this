# Remote Docsify

This site, which is built using [Docsify](https://docsify.js.org), provides a quick way to render a remote Markdown file as a standalone page. Use a rich media embed service such as [embed.ly](https://embed.ly/) to workaround iframe cross-domain issues.

## Examples

* [Docsify Open Publishing Starter Kit README file](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md), displayed as a [Standalone Page](https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&standalone=true)
* [Docsify Open Publishing Starter Kit README file](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md), displayed as a [Standalone Page with a Table of Contents](https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&standalone=true&toc=true)

## Technical Details

This is a customized [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) site which can render multiple remote Markdown files (for example, a Markdown file in a GitHub repository).  

For example, to render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page the URL would be:  
https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/

To render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page with a table of contents the URL would be:  
https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/&toc=true

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page, the URL would be:  
https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page with a table of contents, the URL would be:  
https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true

_TIP: To get the path of a file on GitHub for the **basepath** URL parameter, tap the **Raw** button when viewing the file and then remove the filename. If not a README file, the filename will need to be passed using the **homepage** URL parameter._

## Additional Examples

* [GitHub Training Manual Working Locally with Git file](https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md), displayed as a [Standalone Page with a Table of Contents](https://hibbitts-design.github.io/docsify-open-publishing-starter-kit-remote/?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&toc=true#/)
* [Single Page Docsify Open Course Starter Kit](https://github.com/paulhibbitts/cpt-363-user-interface-design/blob/main/README.md), displayed as a [Standalone Page with a Table of Contents](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/cpt-363-user-interface-design/main/&toc=true#/)
---

**🙇🏻‍♂️Credits**  
[Beau Shaw](https://github.com/DaddyWarbucks) for his [Remote Docsify](https://github.com/DaddyWarbucks/remote-docsify) example.  
[Alan Levine](https://github.com/cogdog) for the inspiration of a consolidated ReadMe collection.
