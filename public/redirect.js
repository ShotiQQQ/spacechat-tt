const { pathname, hostname, href } = window.location;

if (pathname.startsWith('/z')) {
  window.location.href = href.replace('/z', '/a');
}

if (
  (hostname === 'weba.spacechat.org' || hostname === 'webz.spacechat.org') && !localStorage.getItem('tt-global-state')
) {
  window.location.href = 'https://web.t.spacechat.org/a';
}
