(function (global) {
  'use strict';
  function select(robots, { query = '', year = '', page = 1, pageSize = 12 } = {}) {
    const term = String(query).trim().toLocaleLowerCase();
    const size = Math.max(1, Math.floor(Number(pageSize) || 12));
    const matches = robots.filter(r => (!year || String(r.year) === String(year)) &&
      (!term || [r.model, r.brand, r.country, r.year].some(value => String(value).toLocaleLowerCase().includes(term)) ||
        (/^\d+$/.test(term) && Number(term) === Number(r.no))));
    matches.sort((a, b) => a.year - b.year || Number(a.no) - Number(b.no));
    const pages = Math.max(1, Math.ceil(matches.length / size));
    const current = Math.min(pages, Math.max(1, Math.floor(Number(page) || 1)));
    return { items: matches.slice((current - 1) * size, current * size), total: matches.length, pages, page: current };
  }

  function create({ robots, enter, navigate, start }) {
    let frame = null;
    const targetOrigin = location.origin === 'null' ? '*' : location.origin;
    const ids = new Set(robots.map(r => r.no));
    function show(no = null) {
      if (no !== null && !ids.has(no)) { navigate('#archive', true); return; }
      if (!frame || !frame.isConnected) {
        enter('<iframe id="original-archive" title="人形机器人档案" src="archive.html?v=restore-1' + (no ? '&id=' + encodeURIComponent(no) : '') + '"></iframe>', no ? 'robot' : 'archive', false);
        frame = document.getElementById('original-archive');
        frame.addEventListener('load', () => frame.contentWindow.postMessage({type:'archive-navigate', no}, targetOrigin));
      } else {
        document.getElementById('main').dataset.screen = no ? 'robot' : 'archive';
        frame.contentWindow.postMessage({type:'archive-navigate', no}, targetOrigin);
      }
    }
    window.addEventListener('message', event => {
      if (!frame || !frame.isConnected || event.source !== frame.contentWindow || event.origin !== location.origin) return;
      const message = event.data || {};
      if (message.type === 'archive-route') {
        if (message.no === null) navigate('#archive');
        else if (ids.has(String(message.no))) navigate('#robot/' + message.no);
      }
      if (message.type === 'archive-home') navigate('#home');
      if (message.type === 'archive-start') start();
    });
    return { list: () => show(), detail: show };
  }
  const Archive = { select, create };
  if (typeof module !== 'undefined' && module.exports) module.exports = Archive;
  global.RobotArchive = Archive;
})(typeof window !== 'undefined' ? window : this);
