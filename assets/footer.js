(function () {
  var el = document.getElementById('site-footer');
  if (!el) return;

  var style = document.createElement('style');
  style.textContent = [
    '#site-footer footer{text-align:center;padding:2.5rem 2rem;border-top:1px solid #2d2d2d;color:#555;font-size:0.85rem;}',
    '#site-footer footer a{color:#777;text-decoration:none;}',
    '#site-footer footer a:hover{color:#aaa;}'
  ].join('');
  document.head.appendChild(style);

  el.innerHTML = '<footer><p>&copy; 2026 Qubi &mdash; <a href="/index.html">All Apps</a> &middot; <a href="/terms.html">Terms</a> &middot; <a href="/privacy-policy.html">Privacy</a> &middot; <a href="/support.html">Support</a></p></footer>';
})();
