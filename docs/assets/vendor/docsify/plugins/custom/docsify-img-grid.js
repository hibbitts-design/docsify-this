// Original source plugin 'img-grid' by @gllmAR
// This code was developed with the assistance of ChatGPT, an AI language model by OpenAI
(function () {
    const DEFAULT_CONFIG = {
        columns: 3,
        minItems: 3,
        minWidth: 200
    };

    const config = Object.assign({}, DEFAULT_CONFIG, (window.$docsify && window.$docsify.imgGrid) || {});

    function createImageGrid(images, columns = config.columns, minWidth = config.minWidth) {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'img-grid';
        gridContainer.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin: 1rem 0;
        `;

        images.forEach(img => {
            const wrapper = document.createElement('div');
            wrapper.className = 'img-grid-item';
            wrapper.style.cssText = `
                flex: 0 1 calc(${100 / columns}% - 10px);
                min-width: ${minWidth}px;
            `;

            const parentAnchor = img.closest('a');
            if (parentAnchor) {
                const anchorClone = parentAnchor.cloneNode(false);
                const imgClone = img.cloneNode(true);
                imgClone.style.cssText = `
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                `;
                anchorClone.appendChild(imgClone);
                wrapper.appendChild(anchorClone);
            } else {
                const clone = img.cloneNode(true);
                clone.style.cssText = `
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                `;
                wrapper.appendChild(clone);
            }

            gridContainer.appendChild(wrapper);
        });

        return gridContainer;
    }

    function processImageLists(content) {
        const container = document.createElement('div');
        container.innerHTML = content;

        const lists = container.getElementsByTagName('ul');
        Array.from(lists).forEach(list => {
            const images = Array.from(list.getElementsByTagName('img'));

            if (images.length >= config.minItems && images.length === list.children.length) {
                const columns = list.getAttribute('data-columns') || config.columns;
                const minWidth = config.minWidth;
                const grid = createImageGrid(images, parseInt(columns), minWidth);
                list.parentNode.replaceChild(grid, list);
            }
        });

        return container.innerHTML;
    }

    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = (window.$docsify.plugins || []).concat(hook => {
        hook.afterEach((html, next) => {
            next(processImageLists(html));
        });
    });
})();
