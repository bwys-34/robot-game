// Keep the original archive local, with navigation owned by the exploration station.
(function () {
  'use strict';
  let synchronizing = false;
  function send(message) {
    if (window.parent !== window) window.parent.postMessage(message, location.origin === 'null' ? '*' : location.origin);
  }
  window.archiveRoute = function (no) {
    if (synchronizing) return;
    if (window.parent !== window) send({type:'archive-route', no:no == null ? null : String(no)});
    else history.pushState(null, '', 'archive.html' + (no == null ? '' : '?id=' + encodeURIComponent(no)));
  };
  window.archiveAction = function (action) {
    if (window.parent !== window) send({type:'archive-' + action});
    else location.href = 'index.html#home';
  };
  window.addEventListener('message', function (event) {
    if (event.source !== window.parent || event.origin !== location.origin || event.data?.type !== 'archive-navigate') return;
    if (typeof window.archiveNavigate !== 'function') return;
    const current = new URLSearchParams(location.search).get('id');
    const next = event.data.no == null ? null : String(event.data.no);
    history.replaceState(null, '', 'archive.html?v=restore-1' + (next ? '&id=' + encodeURIComponent(next) : ''));
    synchronizing = true;
    try { if (current !== next) window.archiveNavigate(next); }
    finally { synchronizing = false; }
  });
})();
