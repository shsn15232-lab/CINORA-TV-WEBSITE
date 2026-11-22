const features = [
  { number: '01', title: 'مكتبة متنوعة', text: 'تصفح عالماً من الأفلام والمسلسلات ضمن تجربة مرتبة وسهلة.' },
  { number: '02', title: 'واجهة سهلة', text: 'تصميم واضح وسلس يمنحك وصولاً أسرع إلى الأقسام التي تحبها.' },
  { number: '03', title: 'تجربة على شاشتك', text: 'واجهة مصممة لتناسب الهاتف والشاشات الكبيرة.' },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="CINORA TV الرئيسية"><span className="brand-mark">C</span><span>CINORA <b>TV</b></span></a>
        <nav><a href="#features">المميزات</a><a href="#about">عن التطبيق</a><a className="nav-cta" href="#download">تحميل التطبيق</a></nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="eyebrow"><span /> عالمك للترفيه</div>
          <h1>كل ما تحبّه<br /><em>في مكان واحد.</em></h1>
          <p className="hero-copy">اكتشف تجربة CINORA TV، واجهة تجمع الأفلام والمسلسلات والقنوات في عالم ترفيهي واحد.</p>
          <div className="hero-actions"><a className="primary-btn" href="#download">اكتشف التطبيق <span>←</span></a><a className="secondary-btn" href="#features">تعرّف على المميزات</a></div>
          <div className="hero-note"><span className="live-dot" /> تجربة ترفيهية بواجهة عصرية</div>
        </div>
        <div className="visual" aria-label="تصميم فني تجريدي">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="poster poster-back"><span> CINEMA </span></div>
          <div className="poster poster-mid"><span>YOUR<br/>NEXT<br/>STORY</span></div>
          <div className="poster poster-front"><div className="poster-symbol">C</div><small>CINORA ORIGINAL</small></div>
          <div className="visual-caption"><b>قصة جديدة بانتظارك</b><span>ENTER YOUR ENTERTAINMENT WORLD</span></div>
        </div>
        <div className="hero-bottom"><span>01 / 03</span><span className="line"/><span>اكتشف عالم CINORA</span></div>
      </section>

      <section className="intro" id="about">
        <div className="section-kicker">01 — عن CINORA</div>
        <div><h2>الترفيه،<br/><span>بأسلوب أبسط.</span></h2><p>صُمم CINORA TV ليضع عالم الترفيه أمامك بتجربة استخدام أنيقة، وتنقل سهل بين الأقسام، واهتمام بالتفاصيل على مختلف الشاشات.</p></div>
      </section>

      <section className="features" id="features">
        <div className="features-heading"><div><div className="section-kicker">02 — لماذا CINORA؟</div><h2>تفاصيل تصنع<br/><span>التجربة.</span></h2></div><p>كل شيء يبدأ من واجهة مريحة وتجربة واضحة.</p></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><span className="feature-number">{feature.number}</span><div className="feature-icon">✳</div><h3>{feature.title}</h3><p>{feature.text}</p><span className="card-arrow">↙</span></article>)}</div>
      </section>

      <section className="download" id="download"><div className="download-orb"/><div className="section-kicker">03 — ابدأ المشاهدة</div><h2>عالمك القادم<br/><span>يبدأ من هنا.</span></h2><p>تابع آخر أخبار وتحديثات CINORA TV من خلال قنواتنا الرسمية.</p><a className="primary-btn" href="https://github.com/shsn15232-lab" target="_blank" rel="noreferrer">تابعنا على GitHub <span>↗</span></a><small>سيتم إضافة رابط تحميل التطبيق هنا قريباً.</small></section>

      <footer><a className="brand" href="#home"><span className="brand-mark">C</span><span>CINORA <b>TV</b></span></a><span>© 2026 CINORA TV — جميع الحقوق محفوظة</span><a href="#home">العودة للأعلى ↑</a></footer>
    </main>
  );
}
