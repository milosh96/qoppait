(function () {
  var el = document.getElementById('blog-cta');
  if (!el) return;

  // ── Styles ──────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    '.blog-cta-section{border-top:1px solid #2d2d2d;padding:4rem 2rem;}',
    '.blog-cta-inner{max-width:420px;margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center;gap:1rem;}',
    '.blog-cta-icon{width:72px;height:72px;border-radius:16px;object-fit:cover;box-shadow:0 8px 24px rgba(0,0,0,0.4);}',
    '.blog-cta-eyebrow{font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;color:#e07820;font-weight:600;}',
    '.blog-cta-title{font-size:1.5rem;font-weight:800;color:#ffffff;line-height:1.2;}',
    '.blog-cta-desc{font-size:0.95rem;color:#909090;line-height:1.65;}',
    '.blog-cta-form{display:flex;flex-direction:column;gap:0.6rem;width:100%;margin-top:0.5rem;}',
    '.blog-cta-form input[type="email"]{background:#1a1a1a;border:1px solid #333;border-radius:10px;padding:0.75rem 1rem;color:#e0e0e0;font-size:0.95rem;outline:none;transition:border-color 0.2s;font-family:inherit;}',
    '.blog-cta-form input[type="email"]::placeholder{color:#555;}',
    '.blog-cta-form input[type="email"]:focus{border-color:#555;}',
    '.blog-cta-form button{background:#e0e0e0;color:#1a1a1a;border:none;border-radius:10px;padding:0.75rem 1rem;font-size:0.95rem;font-weight:600;cursor:pointer;transition:background 0.2s;font-family:inherit;}',
    '.blog-cta-form button:hover{background:#ffffff;}'
  ].join('');
  document.head.appendChild(style);

  // ── Botpoison ────────────────────────────────────────────────────────────
  if (!document.querySelector('script[src*="botpoison"]')) {
    var bp = document.createElement('script');
    bp.src = 'https://unpkg.com/@botpoison/browser';
    bp.async = true;
    document.head.appendChild(bp);
  }

  // ── HTML ─────────────────────────────────────────────────────────────────
  el.innerHTML = [
    '<section class="blog-cta-section">',
    '  <div class="blog-cta-inner">',
    '    <img class="blog-cta-icon" src="/assets/shutterfox.jpeg" alt="ShutterFox">',
    '    <p class="blog-cta-eyebrow">ShutterFox &mdash; Photo Guide</p>',
    '    <h2 class="blog-cta-title">Take your photography further</h2>',
    '    <p class="blog-cta-desc">10-minute daily lessons, cheat sheets for every scene, and a learning path built for every level. Leave your email and we\'ll let you know when the app is ready.</p>',
    '    <form class="blog-cta-form"',
    '          action="https://submit-form.com/DUXOCZMnM"',
    '          target="_blank"',
    '          data-botpoison-public-key="pk_673c31a7-17d7-4597-a218-ae476e4cf65c">',
    '      <input type="email" name="email" placeholder="your@email.com" required>',
    '      <button type="submit">Join the waitlist</button>',
    '    </form>',
    '  </div>',
    '</section>'
  ].join('');
})();
