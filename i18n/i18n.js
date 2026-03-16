/**
 * D&A Website i18n Engine
 * Vanilla JS, no dependencies
 * Supports: English (en), Thai (th), Simplified Chinese (zh-CN)
 *
 * Note: data-i18n-html uses innerHTML for trusted, owner-controlled
 * translation JSON files only (not user input). This is safe because
 * the translation files are part of the site's source code.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'th', 'zh-CN'];
  var DEFAULT = 'en';
  var KEY = 'da-lang';
  var cache = {};
  var current = DEFAULT;

  function basePath() {
    var s = document.querySelector('script[src*="i18n.js"]');
    return s ? s.src.replace('i18n.js', '') : 'i18n/';
  }

  function load(lang) {
    if (cache[lang]) return Promise.resolve(cache[lang]);
    return fetch(basePath() + lang + '.json')
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (d) { cache[lang] = d; return d; });
  }

  function t(key) {
    var tr = cache[current];
    if (tr && tr[key] != null) return tr[key];
    var en = cache[DEFAULT];
    if (en && en[key] != null) return en[key];
    return null;
  }

  function apply() {
    // 1. Text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v !== null) el.textContent = v;
    });

    // 2. HTML content — ONLY used for trusted translation strings
    // containing markup like <em>, <br>, <strong> from our own JSON files
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-html'));
      if (v !== null) el.innerHTML = v;
    });

    // 3. Attribute translations
    var attrs = ['placeholder', 'aria-label', 'title', 'alt', 'data-title'];
    attrs.forEach(function (attr) {
      document.querySelectorAll('[data-i18n-' + attr + ']').forEach(function (el) {
        var v = t(el.getAttribute('data-i18n-' + attr));
        if (v !== null) el.setAttribute(attr, v);
      });
    });

    // 4. Update html lang
    document.documentElement.setAttribute('lang', current);

    // 5. Page title & meta description
    var titleKey = document.body.getAttribute('data-i18n-title');
    if (titleKey) { var tv = t(titleKey); if (tv) document.title = tv; }
    var descKey = document.body.getAttribute('data-i18n-desc');
    if (descKey) {
      var dv = t(descKey);
      var meta = document.querySelector('meta[name="description"]');
      if (dv && meta) meta.setAttribute('content', dv);
    }

    // 6. Body language class (for fonts)
    document.body.classList.remove('lang-en', 'lang-th', 'lang-zh');
    if (current === 'th') document.body.classList.add('lang-th');
    else if (current === 'zh-CN') document.body.classList.add('lang-zh');
    else document.body.classList.add('lang-en');

    // 7. Update switcher UI
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === current);
    });

    // 8. Dispatch event
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: current } }));
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT;
    current = lang;
    localStorage.setItem(KEY, lang);
    load(lang).then(apply);
  }

  function init() {
    // Determine language
    var saved = localStorage.getItem(KEY);
    if (saved && SUPPORTED.indexOf(saved) !== -1) {
      current = saved;
    } else {
      var bl = (navigator.language || '').toLowerCase();
      if (bl.indexOf('th') === 0) current = 'th';
      else if (bl.indexOf('zh') === 0) current = 'zh-CN';
      else current = DEFAULT;
    }

    // Load English fallback, then current
    load(DEFAULT).then(function () {
      if (current !== DEFAULT) return load(current);
    }).then(function () {
      apply();
      // Reveal body (anti-FOUC)
      document.body.style.opacity = '1';
    });

    // Bind switcher clicks
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-option');
      if (btn) setLang(btn.getAttribute('data-lang'));
    });
  }

  // Expose API
  window.i18n = { setLang: setLang, t: t, getLang: function () { return current; } };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
