// docsify-spotlight.js
// Docsify plugin: Section Spotlight Mode
// Assisted by Kimi (Moonshot AI)
// Activate by adding &spotlight=true to any Docsify-This URL
// Configure which headings are spotlight-aware with &spotlight-headings=h2,h3

(function() {
    'use strict';

    if (!location.search.includes('spotlight=true')) return;

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
    const PADDING = 0;
    const STORAGE_KEY = 'docsify-spotlight-scroll';
    let activeSnapId = null;

    // --- STYLES ---
    const css = `
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
        if (spotlightOn) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        btn.setAttribute('aria-pressed', spotlightOn);
        spotlightOn ? applySpotlight() : clearSpotlight();
    });

    // --- INSTANT NAVIGATION ---
    // Intercepts heading anchor clicks for instant scroll without animation.
    // Updates URL hash's ?id= parameter for reload persistence in v1.
    document.addEventListener('click', (e) => {
        let link = e.target.closest('a');
        let heading = null;
        let id = null;

        // Case 1: Click on an anchor link
        if (link) {
            const href = link.getAttribute('href');
            if (!href) return;

            if (href.startsWith('#')) {
                let hash = href.replace(/^#/, '');
                const match = hash.match(/[?&]id=([^&]+)/);
                id = match ? decodeURIComponent(match[1]) : hash.replace(/^\//, '').split(/[?&]/)[0];
            } else if (href.includes('?id=') || href.includes('&id=')) {
                const match = href.match(/[?&]id=([^&]+)/);
                if (match) id = decodeURIComponent(match[1]);
            }
        }

        // Case 2: Click on a heading element itself
        if (!id) {
            heading = e.target.closest(HEADING_SELECTOR);
            if (heading && heading.id) {
                id = heading.id;
                if (!hasAnchorLink(heading)) return;
            }
        }

        if (!id) return;

        const target = document.getElementById(id);
        if (!target) return;
        if (!HEADING_TAGS.includes(target.tagName.toLowerCase())) return;
        if (heading !== target && !hasAnchorLink(target)) return;

        const targetY = Math.round(target.getBoundingClientRect().top) + window.pageYOffset - PADDING;

        // Stop browser default AND Docsify's handler
        e.preventDefault();
        e.stopPropagation();

        // Update URL hash's ?id= parameter for reload persistence (v1)
        const currentHash = location.hash;
        if (currentHash.includes('?id=') || currentHash.includes('&id=')) {
            const newHash = currentHash.replace(/([?&])id=[^&]*/, '$1id=' + id);
            const newUrl = location.href.split('#')[0] + newHash;
            history.replaceState(null, '', newUrl);
        }

        // Store in sessionStorage as fallback
        try {
            const strippedUrl = location.href.split('?')[0].split('#')[0];
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
                id: id,
                y: targetY,
                url: strippedUrl
            }));
        } catch (e) {
            // Storage may be unavailable
        }

        // Instant scroll to target
        window.scrollTo(0, targetY);

        applySpotlight();
    }, true);

    // --- ANCHOR LINK DETECTION ---
    function hasAnchorLink(heading) {
        if (!heading || !heading.id) return false;
        if (heading.querySelector('a[href^="#"]')) return true;

        const prev = heading.previousElementSibling;
        const href = prev && prev.tagName === 'A' && prev.getAttribute('href');
        if (href && href.indexOf(heading.id) !== -1) {
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

    function getHashHeading() {
        let id = null;

        // Check hash first (v1 format: #/?id=section)
        let hash = location.hash.replace(/^#/, '');
        if (hash) {
            const match = hash.match(/[?&]id=([^&]+)/);
            if (match) id = decodeURIComponent(match[1]);
        }

        // Check query parameter if no hash id (v2 or other)
        if (!id) {
            const searchMatch = location.search.match(/[?&]id=([^&]+)/);
            if (searchMatch) id = decodeURIComponent(searchMatch[1]);
        }

        if (!id) return null;

        const el = document.getElementById(id);
        if (el && HEADING_TAGS.includes(el.tagName.toLowerCase()) && hasAnchorLink(el)) return el;
        return null;
    }

    // Get hash target without hasAnchorLink check (for scroll restoration)
    function getHashTarget() {
        let id = null;

        let hash = location.hash.replace(/^#/, '');
        if (hash) {
            const match = hash.match(/[?&]id=([^&]+)/);
            if (match) id = decodeURIComponent(match[1]);
        }

        if (!id) {
            const searchMatch = location.search.match(/[?&]id=([^&]+)/);
            if (searchMatch) id = decodeURIComponent(searchMatch[1]);
        }

        if (!id) return null;
        return document.getElementById(id);
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

        let active = findActive(allHeadings);

        if (!active) {
            active = getHashHeading();
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

        let firstChild = getFirstChildHeading(active);

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
                const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
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

    // --- SNAP TO TARGET ---
    // Forces scroll position to target for a short duration to override
    // any smooth-scroll animation that may be running.
    function snapToTarget(targetY, duration) {
        const thisSnapId = ++activeSnapId;
        const startTime = Date.now();
        function snap() {
            if (thisSnapId !== activeSnapId) return; // Cancelled by newer snap
            const elapsed = Date.now() - startTime;
            if (elapsed < duration) {
                if (Math.abs(window.scrollY - targetY) > 2) {
                    window.scrollTo(0, targetY);
                }
                requestAnimationFrame(snap);
            }
        }
        snap();
    }

    // --- RESTORE SCROLL POSITION ---
    // Restores scroll position from sessionStorage after page load/reload.
    function restoreScrollPosition() {
        try {
            const stored = sessionStorage.getItem(STORAGE_KEY);
            if (!stored) return;

            const data = JSON.parse(stored);
            const currentUrl = location.href.split('?')[0].split('#')[0];
            // Only restore if URL pathname matches (ignores query parameters and hash)
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
            // Storage may be unavailable or data invalid
        }
    }

    // --- DOCSIFY PLUGIN HOOK ---
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = (window.$docsify.plugins || []).concat(function(hook, vm) {
        hook.ready(() => {
            if (!document.getElementById('spotlight-toggle')) {
                document.body.appendChild(btn);
            }
            updateTheme();
            applySpotlight();
        });

        hook.doneEach(() => {
            if (!document.getElementById('spotlight-toggle')) {
                document.body.appendChild(btn);
            }
            updateTheme();

            // Delayed scroll restoration to ensure content is fully rendered
            setTimeout(() => {
                // First, try to scroll to hash target (v1)
                const hashTarget = getHashTarget();
                if (hashTarget) {
                    const targetY = Math.round(hashTarget.getBoundingClientRect().top) + window.pageYOffset - PADDING;
                    window.scrollTo(0, targetY);
                    snapToTarget(targetY, 600);
                } else {
                    // Fall back to sessionStorage
                    restoreScrollPosition();
                }
                applySpotlight();
            }, 100);
        });
    });
})();