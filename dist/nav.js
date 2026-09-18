(() => {
  const host = document.querySelector('#site-nav');
  if (!host) return;
  const onAssets = location.pathname.endsWith('/assets.html');
  host.innerHTML = `<div class="top"><div class="wrap"><a class="brand" href="index.html" aria-label="Zao Studio 首页"><img src="zao-studio-logo-white.png" alt="Zao Studio"></a><nav class="nav" aria-label="主导航"><a class="${onAssets ? '' : 'active'}" href="index.html">创作者合作详情</a><a class="${onAssets ? 'active' : ''}" href="assets.html">水印物料</a></nav></div></div>`;
})();
