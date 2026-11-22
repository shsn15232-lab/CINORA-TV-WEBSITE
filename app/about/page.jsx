
const APK_URL = 'https://github.com/shsn15232-lab/DramaTV-Data/releases/download/v3.0.0/DramaTV.apk';

export const metadata = {
  title: 'عن CINORA TV | عالمك للترفيه',
  description: 'تعرف على CINORA TV وتجربة الترفيه التي يقدمها.',
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-mark">C</span>
          <span>CINORA <b>TV</b></span>
        </a>
        <nav>
          <a href="/">الرئيسية</a>
          <a href="/#features">المميزات</a>
          <a className="nav-cta" href={APK_URL}>تحميل التطبيق ↓</a>
        </nav>
      </header>

      <section className="about-hero">
        <div className="section-kicker">CINORA TV — OUR STORY</div>
        <h1>أهلاً بك في<br /><span>عالم CINORA.</span></h1>
        <p>
          CINORA TV هو مشروع ترفيهي بهوية عصرية، يركز على تقديم تجربة
          استخدام واضحة وأنيقة، تجمع الأقسام المختلفة ضمن تطبيق واحد.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href={APK_URL}>تحميل التطبيق <span>↓</span></a>
          <a className="secondary-btn" href="/">العودة للرئيسية</a>
        </div>
      </section>

      <section className="about-content">
        <article className="about-panel">
          <h2>رؤيتنا</h2>
          <p>
            نؤمن أن تجربة الترفيه تبدأ من سهولة الوصول والتنظيم والاهتمام
            بالتفاصيل، لذلك جاءت هوية CINORA بتصميم داكن ولمسات حمراء واضحة.
          </p>
        </article>

        <article className="about-panel">
          <h2>تجربة متكاملة</h2>
          <p>
            يقدم التطبيق أقساماً للأفلام والمسلسلات والقنوات، مع واجهة
            تراعي الاستخدام على الهاتف والشاشات الكبيرة.
          </p>
        </article>
      </section>

      <div className="about-actions">
        <a className="primary-btn" href={APK_URL}>
          ابدأ مع CINORA TV <span>↓</span>
        </a>
      </div>

      <footer>
        <a className="brand" href="/">
          <span className="brand-mark">C</span>
          <span>CINORA <b>TV</b></span>
        </a>
        <span>© 2026 CINORA TV — جميع الحقوق محفوظة</span>
        <a href="/">الرئيسية ↑</a>
      </footer>

      <a className="floating-download" href={APK_URL}>
        ↓ <span>تحميل التطبيق</span>
      </a>
    </main>
  );
}
