// docsify-spotlight.js
// Docsify plugin: Section Spotlight Mode
// Assisted by Kimi (Moonshot AI)
// Activate by adding &spotlight=true to any Docsify-This URL
// Configure which headings are spotlight-aware with &spotlight-headings=h2,h3

(function() {
    'use strict';

    if (!location.search.includes('spotlight=true')) return;

    // --- CONFIG ---
    function getSpotlightHeadings() {
        const match = location.search.match(/[?&]spotlight-headings=([^&]+)/);
        if (match) {
            return decodeURIComponent(match[1]).split(',').map(h => h.trim().toLowerCase());
        }
        return ['h2', 'h3'];
    }

    const HEADING_TAGS = getSpotlightHeadings();
    const HEADING_SELECTOR = HEADING_TAGS.join(',');
    const PADDING = window.$docsify && window.$docsify.topMargin || 10;
    const STORAGE_KEY = 'docsify-spotlight-scroll';

    let spotlightOn = true;
    let activeSnapId = 0;

    // --- STYLES ---
    const style = document.createElement('style');
    style.textContent = `
        html, body { scroll-behavior: auto !important; }
        .section-dim {
            opacity: 0.25;
            filter: grayscale(0.4);
            transition: opacity 0.35s ease, filter 0.35s ease;
        }
        .section-focus {
            opacity: 1;
            filter: grayscale(0);
            transition: opacity 0.35s ease, filter 0.35s ease;
        }
        .section-dim h1, .section-dim h2, .section-dim h3,
        .section-dim h4, .section-dim h5, .section-dim h6 {
            opacity: 0.55;
        }
        .section-dim h2 { opacity: 0.45; }
        .section-dim h3 { opacity: 0.40; }

        #spotlight-toggle {
            position: fixed;
            top: 12px;
            right: 12px;
            z-index: 9999;
            padding: 4px 10px;
            font-size: 11px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.4;
            letter-spacing: 0.02em;
            border: none;
            border-radius: 4px;
            background: rgba(200, 200, 200, 0.4);
            color: #666;
            cursor: pointer;
            transition: all 0.25s ease;
            white-space: nowrap;
        }
        #spotlight-toggle:hover {
            background: rgba(180, 180, 180, 0.6);
            color: #444;
        }
        #spotlight-toggle.active {
            background: rgba(100, 100, 100, 0.25);
            color: #333;
        }
        #spotlight-toggle.dark-mode {
            background: rgba(80, 80, 80, 0.5);
            color: #bbb;
        }
        #spotlight-toggle.dark-mode:hover {
            background: rgba(120, 120, 120, 0.6);
            color: #eee;
        }
        #spotlight-toggle.dark-mode.active {
            background: rgba(200, 200, 200, 0.15);
            color: #fff;
        }
        @media (max-width: 480px) {
            #spotlight-toggle {
                top: 8px;
                right: 8px;
                padding: 3px 8px;
                font-size: 10px;
            }
        }
        @media (prefers-color-scheme: dark) {
            #spotlight-toggle {
                background: rgba(80, 80, 80, 0.5);
                color: #bbb;
            }
            #spotlight-toggle:hover {
                background: rgba(120, 120, 120, 0.6);
                color: #eee;
            }
            #spotlight-toggle.active {
                background: rgba(200, 200, 200, 0.15);
                color: #fff;
            }
        }
    `;
    document.head.appendChild(style);

    // --- TOGGLE BUTTON ---
    const btn = document.createElement('button');
    btn.id = 'spotlight-toggle';
    btn.textContent = 'Spotlight: On';
    btn.className = 'active';
    btn.setAttribute('aria-label', 'Toggle section spotlight mode');
    btn.setAttribute('aria-pressed', 'true');

    btn.addEventListener('click', () => {
        spotlightOn = !spotlightOn;
        btn.textContent = spotlightOn ? 'Spotlight: On' : 'Spotlight: Off';
        if (spotlightOn) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        btn.setAttribute('aria-pressed', spotlightOn);
        spotlightOn ? applySpotlight() : clearSpotlight();
    });

    // --- ID EXTRACTION ---
    // Pulls a heading ID from various href formats
    function extractId(href) {
        if (!href) return null;

        let id = null;

        if (href.startsWith('#')) {
            const hash = href.replace(/^#/, '');
            const match = hash.match(/[?&]id=([^&]+)/);
            id = match ? decodeURIComponent(match[1]) : hash.replace(/^\//, '').split(/[?&]/)[0];
        } else if (href.includes('?id=') || href.includes('&id=')) {
            const match = href.match(/[?&]id=([^&]+)/);
            if (match) id = decodeURIComponent(match[1]);
        }

        return id;
    }

    // --- INSTANT NAVIGATION ---
    // Intercepts heading clicks, prevents smooth scroll, jumps instantly.
    // Updates URL hash so reloads preserve position.
    document.addEventListener('click', (e) => {
        let id = null;
        let target = null;

        // Case 1: clicked an anchor link
        const link = e.target.closest('a');
        if (link) {
            id = extractId(link.getAttribute('href'));
        }

        // Case 2: clicked a heading directly
        if (!id) {
            const heading = e.target.closest(HEADING_SELECTOR);
            if (heading && heading.id && hasAnchorLink(heading)) {
                id = heading.id;
                target = heading;
            }
        }

        if (!id) return;

        if (!target) target = document.getElementById(id);
        if (!target) return;
        if (!HEADING_TAGS.includes(target.tagName.toLowerCase())) return;
        if (!hasAnchorLink(target)) return;

        const targetY = Math.round(target.getBoundingClientRect().top) + window.pageYOffset - PADDING;

        // Prevent default browser and Docsify scroll behavior
        e.preventDefault();
        e.stopPropagation();

        // Update URL hash for reload persistence (v1 format: #/?id=section)
        const currentHash = location.hash;
        if (currentHash.includes('?id=') || currentHash.includes('&id=')) {
            const newHash = currentHash.replace(/([?&])id=[^&]*/, '$1id=' + id);
            history.replaceState(null, '', location.href.split('#')[0] + newHash);
        }

        // Remember position as fallback
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
                id: id,
                y: targetY,
                url: location.href.split('?')[0].split('#')[0]
            }));
        } catch (e) {
            // Private mode — ignore
        }

        window.scrollTo(0, targetY);
        applySpotlight();
    }, true);

    // --- ANCHOR LINK DETECTION ---
    // Checks if a heading has an auto-generated anchor link (Docsify TOC behavior)
    function hasAnchorLink(heading) {
        if (!heading || !heading.id) return false;
        if (heading.querySelector('a[href^="#"]')) return true;

        const prev = heading.previousElementSibling;
        const href = prev && prev.tagName === 'A' && prev.getAttribute('href');
        return href && href.indexOf(heading.id) !== -1;
    }

    // --- SPOTLIGHT LOGIC ---

    function clearSpotlight() {
        document.querySelectorAll('.section-focus, .section-dim').forEach(el => {
            el.classList.remove('section-focus', 'section-dim');
        });
    }

    function collectUntil(start, end) {
        const list = [start];
        let next = start.nextElementSibling;
        while (next && next !== end) {
            list.push(next);
            next = next.nextElementSibling;
        }
        return list;
    }

    function findActive(headings) {
        const viewportTop = window.scrollY + 2;
        const viewportCenter = window.scrollY + (window.innerHeight * 0.25);

        for (let i = 0; i < headings.length; i++) {
            const h = headings[i];
            const hBottom = h.offsetTop + h.offsetHeight;
            if (h.offsetTop <= viewportTop + 50 && hBottom > viewportTop) {
                return h;
            }
        }

        for (let i = headings.length - 1; i >= 0; i--) {
            if (headings[i].offsetTop <= viewportCenter) {
                return headings[i];
            }
        }

        return null;
    }

    // Finds the element referenced by the current URL hash
    // requireAnchor: if true, only returns headings with anchor links
    function findTargetByHash(requireAnchor) {
        let id = null;

        // v1 format: #/?id=section
        const hash = location.hash.replace(/^#/, '');
        if (hash) {
            const match = hash.match(/[?&]id=([^&]+)/);
            if (match) id = decodeURIComponent(match[1]);
        }

        // v2 format: ?id=section
        if (!id) {
            const match = location.search.match(/[?&]id=([^&]+)/);
            if (match) id = decodeURIComponent(match[1]);
        }

        if (!id) return null;

        const el = document.getElementById(id);
        if (!el) return null;
        if (!HEADING_TAGS.includes(el.tagName.toLowerCase())) return null;
        if (requireAnchor && !hasAnchorLink(el)) return null;

        return el;
    }

    function getParentHeading(heading) {
        const myLevel = parseInt(heading.tagName[1], 10);
        let prev = heading.previousElementSibling;
        while (prev) {
            const prevLevel = parseInt(prev.tagName[1], 10);
            if (HEADING_TAGS.includes(prev.tagName.toLowerCase()) && prevLevel < myLevel && hasAnchorLink(prev)) {
                return prev;
            }
            prev = prev.previousElementSibling;
        }
        return null;
    }

    function getFirstChildHeading(heading) {
        const myLevel = parseInt(heading.tagName[1], 10);
        let next = heading.nextElementSibling;
        let paragraphs = 0;
        while (next && !HEADING_TAGS.includes(next.tagName.toLowerCase())) {
            if (next.tagName === 'P') paragraphs++;
            next = next.nextElementSibling;
        }
        if (next && HEADING_TAGS.includes(next.tagName.toLowerCase())) {
            const childLevel = parseInt(next.tagName[1], 10);
            if (childLevel > myLevel && paragraphs <= 1 && hasAnchorLink(next)) {
                return next;
            }
        }
        return null;
    }

    function applySpotlight() {
        if (!spotlightOn) return;

        const allHeadings = [...document.querySelectorAll(HEADING_SELECTOR)].filter(hasAnchorLink);
        if (allHeadings.length === 0) return;

        let active = findActive(allHeadings) || findTargetByHash(true);
        if (!active) return;

        clearSpotlight();

        const sections = [];
        for (let i = 0; i < allHeadings.length; i++) {
            sections.push({
                heading: allHeadings[i],
                elements: collectUntil(allHeadings[i], allHeadings[i + 1] || null)
            });
        }

        const activeLevel = parseInt(active.tagName[1], 10);
        const parentHeading = activeLevel > 2 ? getParentHeading(active) : null;
        const firstChild = getFirstChildHeading(active);

        sections.forEach(section => {
            const isActive = section.heading === active ||
                             section.heading === parentHeading ||
                             section.heading === firstChild;

            section.elements.forEach(el => {
                el.classList.add(isActive ? 'section-focus' : 'section-dim');
            });
        });
    }

    // --- SCROLL & HASH HANDLERS ---
    let waiting = false;
    window.addEventListener('scroll', () => {
        if (!waiting) {
            window.requestAnimationFrame(() => {
                applySpotlight();
                waiting = false;
            });
            waiting = true;
        }
    }, { passive: true });

    window.addEventListener('hashchange', () => {
        setTimeout(applySpotlight, 150);
    });

    // --- DARK MODE ---
    function isDark() {
        const url = location.href.toLowerCase();
        if (url.includes('dark-mode=on') || url.includes('dark-mode=true')) return true;

        const body = document.body.classList;
        const html = document.documentElement.classList;
        if (body.contains('dark') || body.contains('theme-dark') || body.contains('docsify-dark') ||
            html.contains('dark') || html.contains('theme-dark')) return true;

        if (document.body.getAttribute('data-theme') === 'dark' ||
            document.documentElement.getAttribute('data-theme') === 'dark') return true;

        const bg = window.getComputedStyle(document.body).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            const rgb = bg.match(/\d+/g);
            if (rgb) {
                const brightness = (parseInt(rgb[0], 10) * 299 + parseInt(rgb[1], 10) * 587 + parseInt(rgb[2], 10) * 114) / 1000;
                if (brightness < 80) return true;
            }
        }

        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function updateTheme() {
        if (isDark()) {
            btn.classList.add('dark-mode');
        } else {
            btn.classList.remove('dark-mode');
        }
    }

    // --- SNAP LOOP ---
    // Forces scroll position to override any smooth-scroll animation
    function snapToTarget(targetY, duration) {
        const thisSnapId = ++activeSnapId;
        const startTime = Date.now();
        function snap() {
            if (thisSnapId !== activeSnapId) return;
            if (Date.now() - startTime < duration) {
                if (Math.abs(window.scrollY - targetY) > 2) {
                    window.scrollTo(0, targetY);
                }
                requestAnimationFrame(snap);
            }
        }
        snap();
    }

    // --- SCROLL RESTORATION ---
    function restoreScrollPosition() {
        try {
            const stored = sessionStorage.getItem(STORAGE_KEY);
            if (!stored) return;

            const data = JSON.parse(stored);
            const currentUrl = location.href.split('?')[0].split('#')[0];
            if (data.url && data.url === currentUrl) {
                if (data.id) {
                    const target = document.getElementById(data.id);
                    if (target) {
                        const targetY = Math.round(target.getBoundingClientRect().top) + window.pageYOffset - PADDING;
                        window.scrollTo(0, targetY);
                        snapToTarget(targetY, 600);
                    }
                } else if (data.y !== undefined) {
                    window.scrollTo(0, data.y);
                    snapToTarget(data.y, 600);
                }
            }
        } catch (e) {
            // Private mode or invalid data — ignore
        }
    }

    // --- DOCSIFY HOOKS ---
    function initUI() {
        if (!document.getElementById('spotlight-toggle')) {
            document.body.appendChild(btn);
        }
        updateTheme();
    }

    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = (window.$docsify.plugins || []).concat(function(hook, vm) {
        hook.ready(() => {
            initUI();
            applySpotlight();
        });

        hook.doneEach(() => {
            initUI();
            setTimeout(() => {
                const hashTarget = findTargetByHash(false);
                if (hashTarget) {
                    const targetY = Math.round(hashTarget.getBoundingClientRect().top) + window.pageYOffset - PADDING;
                    window.scrollTo(0, targetY);
                    snapToTarget(targetY, 600);
                } else {
                    restoreScrollPosition();
                }
                applySpotlight();
            }, 100);
        });
    });
})();