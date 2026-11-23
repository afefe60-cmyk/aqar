import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

export const metadata = {
  metadataBase: new URL("https://realestate.sudanzon.com"),
  title: {
    default: "سودان زون للعقارات والأراضي | SudanZon Real Estate - بيع وشراء وتأجير العقارات في السودان",
    template: "%s | سودان زون للعقارات",
  },
  description: "المنصة العقارية الرقمية الأولى في السودان لبيع وشراء وتأجير المنازل، الشقق، الفلل، الأراضي والمخططات السكنية والزراعية في بورتسودان، شندي، مروي، عطبرة، الخرطوم وكافة الولايات. أسعار محدثة وتواصل فوري عبر الواتساب والمكالمة.",
  keywords: [
    "عقارات السودان",
    "شقق للبيع في بورتسودان",
    "شقق للإيجار في شندي",
    "اراضي للبيع في عطبرة",
    "فلل للبيع في مروي",
    "سوق العقارات السوداني",
    "مكاتب عقارية السودان",
    "مخططات سكنية السودان",
    "اسعار العقارات بالجنيه السوداني",
    "عقارات الخرطوم",
    "SudanZon Real Estate"
  ],
  authors: [{ name: "SudanZon Real Estate", url: "https://realestate.sudanzon.com" }],
  creator: "SudanZon",
  publisher: "SudanZon Platform",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/app-icon.jpg" }
    ],
    shortcut: "/favicon.ico",
    apple: "/app-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_SD",
    url: "https://realestate.sudanzon.com",
    siteName: "سودان زون للعقارات | SudanZon Real Estate",
    title: "سودان زون للعقارات والأراضي | المنصة العقارية الأولى في السودان",
    description: "ابحث عن شقتك، منزلك، أو قطعتك الاستثمارية في كبرى المدن السودانية مع تواصل مباشر مع أصحاب العقارات والوسطاء المعتمدين.",
    images: [
      {
        url: "/brand-logo.jpg",
        width: 1200,
        height: 630,
        alt: "سودان زون للعقارات",
      },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#b45309",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/app-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Tajawal:wght@400;500;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
