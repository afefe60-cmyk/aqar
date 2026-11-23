import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

export const metadata = {
  metadataBase: new URL("https://aqar.sudanzon.com"),
  title: {
    default: "سودان زون للعقارات والأراضي | عقار السودان - بيع، شراء وتأجير في كافة الولايات",
    template: "%s | سودان زون للعقارات",
  },
  description: "المنصة العقارية الرسمية الأولى في السودان لبيع وشراء وتأجير المنازل، الشقق، الفلل، والأراضي في بورتسودان، شندي، عطبرة، مروي، الخرطوم. أسعار محدثة بالجنيه السوداني وتواصل مباشر عبر الواتساب والمكالمة.",
  keywords: [
    "عقارات السودان",
    "عقار سودان زون",
    "عقارات بورتسودان",
    "شقق للايجار بورتسودان",
    "شقق للبيع شندي",
    "اراضي للبيع عطبرة",
    "فلل للبيع مروي",
    "سوق العقارات السوداني",
    "فنادق بورتسودان",
    "ادارة املاك السودان",
    "مخططات سكنية الخرطوم",
    "اسعار العقارات بالجنيه السوداني",
    "SudanZon Aqar",
    "SudanZon Real Estate"
  ],
  authors: [{ name: "SudanZon Aqar", url: "https://aqar.sudanzon.com" }],
  creator: "SudanZon",
  publisher: "SudanZon Platform",
  alternates: {
    canonical: "https://aqar.sudanzon.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    url: "https://aqar.sudanzon.com",
    siteName: "سودان زون للعقارات | SudanZon Aqar",
    title: "سودان زون للعقارات والأراضي | المنصة العقارية الأولى في السودان",
    description: "ابحث عن شقتك، منزلك، أو قطعتك الاستثمارية في كبرى المدن السودانية مع تواصل مباشر مع أصحاب العقارات والوسطاء المعتمدين.",
    images: [
      {
        url: "/brand-logo.jpg",
        width: 1200,
        height: 630,
        alt: "سودان زون للعقارات والأراضي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سودان زون للعقارات والأراضي | SudanZon Aqar",
    description: "المنصة العقارية الأولى في السودان لبيع وشراء وتأجير العقارات والأراضي والفنادق.",
    images: ["/brand-logo.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://aqar.sudanzon.com/#website",
                  "url": "https://aqar.sudanzon.com",
                  "name": "سودان زون للعقارات والأراضي | SudanZon Aqar",
                  "description": "المنصة العقارية الرسمية الأولى في السودان لبيع وشراء وتأجير العقارات والأراضي والفنادق",
                  "inLanguage": "ar-SD",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://aqar.sudanzon.com/properties?city={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "RealEstateAgent",
                  "@id": "https://aqar.sudanzon.com/#organization",
                  "name": "SudanZon Real Estate - عقار سودان زون",
                  "url": "https://aqar.sudanzon.com",
                  "logo": "https://aqar.sudanzon.com/brand-logo.jpg",
                  "image": "https://aqar.sudanzon.com/brand-logo.jpg",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "SD",
                    "addressLocality": "Port Sudan"
                  },
                  "currenciesAccepted": "SDG",
                  "paymentAccepted": "Bankak, Cash, Bank Transfer"
                }
              ]
            })
          }}
        />
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
