
const APK_URL = 'https://github.com/shsn15232-lab/DramaTV-Data/releases/download/v3.0.0/DramaTV.apk';

const features = [
  { number: '01', title: 'مكتبة ترفيهية', text: 'اكتشف عالماً من الأفلام والمسلسلات ضمن تجربة مرتبة وسهلة.' },
  { number: '02', title: 'واجهة عصرية', text: 'تنقّل واضح وسلس مع تصميم أنيق يهتم بأدق التفاصيل.' },
  { number: '03', title: 'للهاتف والشاشة', text: 'تجربة مرنة بتصميم يراعي أحجام الشاشات المختلفة.' },
];

const categories = [
  { number: '01', title: 'الأفلام', subtitle: 'MOVIES', style: 'showcase-movie' },
  { number: '02', title: 'المسلسلات', subtitle: 'SERIES', style: 'showcase-series' },
  { number: '03', title: 'القنوات', subtitle: 'LIVE CHANNELS', style: 'showcase-live' },
];

export default function Home() {
  return (
    <main id="home">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="CINORA TV الرئيسية">
          <span className="brand-mark">C</span>
          <span>CINORA <b>TV</b></span>
        </a>
        <nav>
          <a href="#discover">اكتشف</a>
          <a href="#features">المميزات</a>
          <a href="/about">عن CINORA</a>
          <a className="nav-cta" href={APK_URL}>تحميل التطبيق ↓</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="eyebrow"><span /> عالمك للترفيه</div>
          <h1>كل ما تحبّه<br /><em>في مكان واحد.</em></h1>
          <p className="hero-copy">
            اكتشف تجربة CINORA TV، واجهة تجمع عالم الأفلام والمسلسلات والقنوات في تجربة ترفيهية واحدة.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href={APK_URL}>تحميل CINORA TV <span>↓</span></a>
            <a className="secondary-btn" href="#discover">اكتشف التجربة</a>
          </div>
          <div className="hero-note"><span className="live-dot" /> تجربة ترفيهية بواجهة عصرية</div>
        </div>

        <div className="visual" aria-label="تصميم فني لهوية CINORA">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="poster poster-back"><span>CINEMA</span></div>
          <div className="poster poster-mid"><span>YOUR<br />NEXT<br />STORY</span></div>
          <div className="poster poster-front">
            <div className="poster-symbol">C</div>
            <small>CINORA ORIGINAL</small>
          </div>
          <div className="visual-caption">
            <b>قصة جديدة بانتظارك</b>
            <span>ENTER YOUR ENTERTAINMENT WORLD</span>
          </div>
        </div>
        <div className="hero-bottom">
          <span>01 / 03</span><span className="line" /><span>اكتشف عالم CINORA</span>
        </div>
      </section>

      <section className="intro" id="about">
        <div className="section-kicker">01 — عن CINORA</div>
        <div>
          <h2>الترفيه،<br /><span>بأسلوب أبسط.</span></h2>
          <p>
            صُمم CINORA TV ليضع عالم الترفيه أمامك بتجربة استخدام أنيقة،
            وتنقل سهل بين الأقسام، واهتمام بالتفاصيل على مختلف الشاشات.
          </p>
        </div>
      </section>

      <section className="discover" id="discover">
        <div className="discover-heading">
          <div>
            <div className="section-kicker">02 — اكتشف عالمك</div>
            <h2>مساحتك<br /><span>الترفيهية.</span></h2>
          </div>
          <p>أقسام متنوعة تجمعها تجربة واحدة، بتصميم يمنح كل تفصيل مساحته.</p>
        </div>

        <div className="showcase-grid">
          {categories.map((item) => (
            <article className={`showcase-card ${item.style}`} key={item.number}>
              <div className="showcase-art">
                <span>{item.number}</span>
                <i>{item.subtitle}</i>
              </div>
              <div className="showcase-info">
                <div>
                  <h3>{item.title}</h3>
                  <small>{item.subtitle}</small>
                </div>
                <span className="showcase-arrow">↙</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="features" id="features">
        <div className="features-heading">
          <div>
            <div className="section-kicker">03 — لماذا CINORA؟</div>
            <h2>تفاصيل تصنع<br /><span>التجربة.</span></h2>
          </div>
          <p>كل شيء يبدأ من واجهة مريحة وتجربة واضحة.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <div className="feature-icon">✳</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className="card-arrow">↙</span>
            </article>
          ))}
        </div>
      </section>

      <section className="app-preview">
        <div className="preview-copy">
          <div className="section-kicker">04 — CINORA على جهازك</div>
          <h2>تصميم يليق<br /><span>بشاشتك.</span></h2>
          <p>
            واجهة داكنة أنيقة وتفاصيل واضحة، لتكون تجربتك مرتبة أينما استخدمت التطبيق.
          </p>
          <a className="text-link" href={APK_URL}>احصل على التطبيق <span>←</span></a>
        </div>

        <div className="device-stage">
          <div className="device-glow" />
          <div className="device">
            <div className="device-camera" />
            <div className="device-top">
              <b>CINORA <i>TV</i></b>
              <span>عالمك للترفيه</span>
            </div>
            <div className="device-hero">
              <small>اختيارات CINORA</small>
              <strong>عالم من<br />الحكايات</strong>
              <span>اكتشف المزيد ←</span>
            </div>
            <div className="device-section-title">استكشف الأقسام</div>
            <div className="device-tiles">
              <span>الأفلام</span>
              <span>المسلسلات</span>
              <span>القنوات</span>
            </div>
            <div className="device-bottom">
              <i /><i /><i /><i />
            </div>
          </div>
          <div className="preview-orbit" />
        </div>
      </section>

      <section className="download" id="download">
        <div className="download-orb" />
        <div className="section-kicker">05 — ابدأ المشاهدة</div>
        <h2>عالمك القادم<br /><span>يبدأ من هنا.</span></h2>
        <p>حمّل CINORA TV وابدأ اكتشاف عالمك الترفيهي من هاتفك أو شاشتك.</p>
        <a className="primary-btn" href={APK_URL}>
          تحميل التطبيق الآن <span>↓</span>
        </a>
        <small>الإصدار 3.0.0 · ملف APK · أجهزة Android</small>
      </section>

      <footer>
        <a className="brand" href="#home">
          <span className="brand-mark">C</span>
          <span>CINORA <b>TV</b></span>
        </a>
        <span>© 2026 CINORA TV — جميع الحقوق محفوظة</span>
        <div className="footer-links">
          <a href="/about">عن التطبيق</a>
          <a href="#home">العودة للأعلى ↑</a>
        </div>
      </footer>

      <a className="floating-download" href={APK_URL} aria-label="تحميل CINORA TV">
        ↓ <span>تحميل التطبيق</span>
      </a>
    </main>
  );
}
