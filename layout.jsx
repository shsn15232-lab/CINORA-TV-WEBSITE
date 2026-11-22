import './globals.css';

export const metadata = {
  title: 'CINORA TV | عالمك للترفيه',
  description: 'اكتشف عالم الأفلام والمسلسلات والقنوات مع CINORA TV.',
  applicationName: 'CINORA TV',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
