// docsify-spotlight.js
// Docsify plugin: Section Spotlight Mode
// Activate by adding &spotlight=true to any Docsify-This URL.
// Configure which headings are spotlight-aware with &spotlight-headings=h2,h3

(function() {
    'use strict';

    // Only run if the URL explicitly requests spotlight mode
    if (!location.search.includes('spotlight=true')) return;

    // --- HEADING CONFIGURATION ---
    // Parse spotlight-headings from URL, fallback to h2,h3
    function getSpotlightHeadings() {
        const match = location.search.match(/[?&]spotlight-headings=([^&]+)/);
        if (match) {
            return decodeURIComponent(match[1]).split(',').map(h => h.trim().toLowerCase());
        }
        return ['h2', 'h3'];
    }

    const HEADING_TAGS = getSpotlightHeadings();
    const HEADING_SELECTOR = HEADING_TAGS.join(',');

    let spotlightOn = true;
    const PADDING = 10;

    // --- STYLES ---
    const css = `
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

    const style = document.createElement('style');
    style.textContent = css;
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
        btn.classList.toggle('active', spotlightOn);
        btn.setAttribute('aria-pressed', spotlightOn);
        spotlightOn ? applySpotlight() : clearSpotlight();
    });

    // --- INSTANT NAVIGATION ---
    window.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href) return;

        let hash = href.replace(/^#/, '');
        const match = hash.match(/[?&]id=([^&]+)/);
        const id = match ? decodeURIComponent(match[1]) : hash.replace(/^\//, '').split(/[?&]/)[0];
        if (!id) return;

        const target = document.getElementById(id);
        if (!target || !HEADING_TAGS.includes(target.tagName.toLowerCase())) return;
        if (!hasAnchorLink(target)) return;

        e.preventDefault();
        e.stopPropagation();

        window.scrollTo(0, target.offsetTop - PADDING);
        history.replaceState(null, null, href);
        applySpotlight();
    }, true);

    // --- ANCHOR LINK DETECTION ---
    function hasAnchorLink(heading) {
        if (!heading.id) return false;
        if (heading.querySelector('a[href^="#"]')) return true;

        const prev = heading.previousElementSibling;
        if (prev && prev.tagName === 'A' && prev.getAttribute('href')?.includes(heading.id)) {
            return true;
        }
        return false;
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

    function findActive(headings, scrollPos) {
        for (let i = headings.length - 1; i >= 0; i--) {
            if (headings[i].offsetTop <= scrollPos) return headings[i];
        }
        return null;
    }

    function getHashHeading() {
        let hash = location.hash.replace(/^#/, '');
        if (!hash) return null;

        const match = hash.match(/[?&]id=([^&]+)/);
        let id = match ? decodeURIComponent(match[1]) : hash.replace(/^\//, '').split(/[?&]/)[0];

        const el = id && document.getElementById(id);
        if (el && HEADING_TAGS.includes(el.tagName.toLowerCase()) && hasAnchorLink(el)) return el;
        return null;
    }

    function getParentHeading(heading) {
        const myLevel = parseInt(heading.tagName[1]);
        let prev = heading.previousElementSibling;
        while (prev) {
            const prevLevel = parseInt(prev.tagName[1]);
            if (HEADING_TAGS.includes(prev.tagName.toLowerCase()) && prevLevel < myLevel && hasAnchorLink(prev)) {
                return prev;
            }
            prev = prev.previousElementSibling;
        }
        return null;
    }

    function getFirstChildHeading(heading) {
        const myLevel = parseInt(heading.tagName[1]);
        let next = heading.nextElementSibling;
        let paragraphs = 0;
        while (next && !HEADING_TAGS.includes(next.tagName.toLowerCase())) {
            if (next.tagName === 'P') paragraphs++;
            next = next.nextElementSibling;
        }
        if (next && HEADING_TAGS.includes(next.tagName.toLowerCase())) {
            const childLevel = parseInt(next.tagName[1]);
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

        const scrollPos = window.scrollY + window.innerHeight * 0.25;

        let active = getHashHeading();
        const scrollActive = findActive(allHeadings, scrollPos);

        if (active && scrollActive && active !== scrollActive) {
            active = null;
        }

        if (!active) {
            active = scrollActive;
        }

        if (!active) return;

        clearSpotlight();

        const sections = [];
        for (let i = 0; i < allHeadings.length; i++) {
            sections.push({
                heading: allHeadings[i],
                elements: collectUntil(allHeadings[i], allHeadings[i + 1] || null)
            });
        }

        let parentHeading = null;
        if (parseInt(active.tagName[1]) > 2) {
            parentHeading = getParentHeading(active);
        }

        let firstChild = null;
        const child = getFirstChildHeading(active);
        if (child) firstChild = child;

        sections.forEach(section => {
            const isActive = section.heading === active ||
                             section.heading === parentHeading ||
                             section.heading === firstChild;

            section.elements.forEach(el => {
                el.classList.add(isActive ? 'section-focus' : 'section-dim');
            });
        });
    }

    // --- SCROLL HANDLER ---
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

    // --- HASHCHANGE HANDLER ---
    window.addEventListener('hashchange', () => {
        setTimeout(applySpotlight, 50);
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
                const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
                if (brightness < 80) return true;
            }
        }

        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function updateTheme() {
        btn.classList.toggle('dark-mode', isDark());
    }

    // --- DOCSIFY PLUGIN HOOK ---
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = (window.$docsify.plugins || []).concat(function(hook, vm) {
        hook.doneEach(() => {
            if (!document.getElementById('spotlight-toggle')) {
                document.body.appendChild(btn);
            }
            applySpotlight();
            updateTheme();
        });
    });
})();