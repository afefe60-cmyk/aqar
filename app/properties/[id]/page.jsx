"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Phone, 
  MessageCircle, 
  Heart, 
  Share2, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Layers, 
  ArrowRight,
  Info,
  Check,
  Zap,
  Home,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { MOCK_PROPERTIES } from "../../../lib/mock-data";
import PropertyCard from "../../../components/PropertyCard";

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params?.id;

  // Find property or fallback to first
  const property = MOCK_PROPERTIES.find((p) => p.id === propertyId) || MOCK_PROPERTIES[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);

  const images = property.images && property.images.length > 0
    ? property.images
    : ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"];

  const formatPrice = (num) => new Intl.NumberFormat("ar-SD").format(num);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `عقار مميز على سودان زون: ${property.title} في ${property.city} بسعر ${formatPrice(property.priceSDG)} جنيه سوداني`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappUrl = `https://wa.me/${property.whatsapp}?text=${encodeURIComponent(
    `السلام عليكم، أستفسر بخصوص عقار: ${property.title} (كود: ${property.id}) في ${property.city} - المعروض على سودان زون للعقارات`
  )}`;

  // Similar properties (excluding current)
  const similarProperties = MOCK_PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Property JSON-LD Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": property.title,
            "image": images,
            "description": property.description,
            "offers": {
              "@type": "Offer",
              "priceCurrency": "SDG",
              "price": property.priceSDG,
              "availability": "https://schema.org/InStock",
              "url": `https://aqar.sudanzon.com/properties/${property.id}`,
              "seller": {
                "@type": "Organization",
                "name": property.agency?.name || "سودان زون للعقارات"
              }
            }
          })
        }}
      />

      {/* 1. Breadcrumb navigation */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-stone-500 overflow-x-auto no-scrollbar">
          <Link href="/" className="hover:text-amber-800 transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-amber-800 transition-colors">عقارات السودان</Link>
          <span>/</span>
          <Link href={`/properties?city=${encodeURIComponent(property.city)}`} className="hover:text-amber-800 transition-colors">
            {property.city}
          </Link>
          <span>/</span>
          <span className="text-stone-800 font-bold truncate max-w-[200px] sm:max-w-none">
            {property.title}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery Section - Spacious & High Quality */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm">
              {/* Main Preview Image Stage */}
              <div className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] bg-stone-900 group">
                <Image
                  src={images[activeImageIndex]}
                  alt={property.title}
                  fill
                  priority
                  className="object-cover transition-opacity duration-300"
                />

                {/* Subtle dark gradient on top for badge contrast */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                {/* Purpose Badge & Featured */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                  <span className={`text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md ${
                    property.purpose === "SALE" 
                      ? "bg-amber-700 text-white" 
                      : "bg-[#1e3a2b] text-white"
                  }`}>
                    {property.purpose === "SALE" ? "معروض للبيع" : "معروض للإيجار"}
                  </span>
                  {property.isFeatured && (
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-900 shadow-md flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      عقار مميز
                    </span>
                  )}
                </div>

                {/* Share & Favorite Buttons */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ${
                      isFavorite 
                        ? "bg-red-500 text-white" 
                        : "bg-white/90 hover:bg-white text-stone-800"
                    }`}
                    title="حفظ في المفضلة"
                  >
                    <Heart className={`w-4 h-4 ${isFavorite ? "fill-white" : ""}`} />
                  </button>

                  <button
                    onClick={handleShare}
                    className="p-2.5 rounded-full bg-white/90 hover:bg-white text-stone-800 backdrop-blur-md shadow-md transition-all"
                    title="مشاركة العقار"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Interactive Prev/Next Navigation Controls */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 z-10"
                      aria-label="الصورة السابقة"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 z-10"
                      aria-label="الصورة التالية"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Counter */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full z-10">
                  صورة {activeImageIndex + 1} من {images.length}
                </div>
              </div>

              {/* Thumbnails row - Generous & Clear */}
              {images.length > 1 && (
                <div className="p-4 bg-stone-50 border-t border-stone-200/80">
                  <div className="text-xs font-bold text-stone-600 mb-2.5">
                    معرض صور العقار ({images.length} صور):
                  </div>
                  <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-28 h-20 sm:w-36 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                          activeImageIndex === idx
                            ? "border-amber-600 ring-4 ring-amber-500/25 scale-102 shadow-md"
                            : "border-stone-200 opacity-75 hover:opacity-100 hover:border-stone-400"
                        }`}
                      >
                        <Image src={img} alt={`صورة ${idx + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Core Details & Specs Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div>
                <div className="flex items-center gap-2 text-stone-500 text-xs font-semibold mb-2.5">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>{property.city} - {property.neighborhood}</span>
                  <span>•</span>
                  <span>أُضيف {property.postedAt}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 leading-[1.4] tracking-normal mb-3">
                  {property.title}
                </h1>
              </div>

              {/* Price display in SDG */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/80 to-stone-50 border border-amber-200/60 flex items-baseline justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs text-stone-500 font-semibold block mb-0.5">
                    السعر المطلوب:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-amber-800">
                      {formatPrice(property.priceSDG)}
                    </span>
                    <span className="text-sm font-bold text-stone-700">جنيه سوداني</span>
                    {property.rentFrequency && (
                      <span className="text-xs text-stone-500">/ {property.rentFrequency}</span>
                    )}
                  </div>
                </div>

                <div className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>سعر معتمد ومحدث</span>
                </div>
              </div>

              {/* Specs Grid */}
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-3">
                  المواصفات الفنية للعقار
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200/70 text-center">
                    <Maximize2 className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                    <span className="text-[11px] text-stone-500 block">المساحة</span>
                    <span className="text-sm font-black text-stone-900">{property.area} م²</span>
                  </div>

                  <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200/70 text-center">
                    <Bed className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                    <span className="text-[11px] text-stone-500 block">الغرف</span>
                    <span className="text-sm font-black text-stone-900">{property.rooms || "غير محدد"}</span>
                  </div>

                  <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200/70 text-center">
                    <Bath className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                    <span className="text-[11px] text-stone-500 block">دورات المياه</span>
                    <span className="text-sm font-black text-stone-900">{property.bathrooms || "غير محدد"}</span>
                  </div>

                  <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200/70 text-center">
                    <Building2 className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                    <span className="text-[11px] text-stone-500 block">نوع العقار</span>
                    <span className="text-sm font-black text-stone-900">
                      {property.type === "APARTMENT" ? "شقة سكنية" :
                       property.type === "VILLA" ? "فيلا راقية" :
                       property.type === "LAND" ? "أرض ومخطط" :
                       property.type === "BUILDING" ? "عمارة كاملة" : "منزل"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-2">
                  تفاصيل ووصف العقار
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line bg-stone-50/50 p-4 rounded-2xl border border-stone-100">
                  {property.description}
                </p>
              </div>

              {/* Key Features & Amenities checklist */}
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-3">
                  المميزات والتجهيزات
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                  {[
                    "شهادة بحث ملك حر جاهزة وخالية من أي موانع",
                    "خزان مياه علوي وأرضي مع مضخة كهربائية",
                    "جاهزية تركيب منظومة طاقة شمسية",
                    "شبكة كهرباء ومياه حكومية متصلة ومستقرة",
                    "موقع قريب من المرافق الخدمية والمدارس والأسواق",
                    "شارع واسع مع سهولة الدخول والخروج ومواقف سيارات"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Advertiser Contact & Safe Tips (1 col) */}
          <div className="space-y-6">
            {/* Contact Advertiser Card */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-md sticky top-20">
              <div className="flex items-center gap-3.5 pb-4 border-b border-stone-100 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-black text-lg">
                  {property.agency?.name ? property.agency.name[0] : "س"}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    {property.agency?.name || "المعلن / صاحب العقار"}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {property.agency?.city || property.city} • معلن موثق
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تواصل فوري عبر واتساب</span>
                </a>

                <a
                  href={`tel:${property.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال هاتفي مباشر</span>
                </a>
              </div>

              {/* Safety notice for Sudan Real Estate */}
              <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200/60 text-xs text-stone-700 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-900">
                  <Info className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>إرشادات التعامل العقاري الآمن</span>
                </div>
                <ul className="space-y-1.5 text-[11px] text-stone-600 list-disc list-inside">
                  <li>قم بمعاينة العقار بنفسك على أرض الواقع.</li>
                  <li>تأكد من مطابقة شهادة البحث الرسمية لدى مصلحة الأراضي.</li>
                  <li>لا تقم بتحويل أي عربون قبل توثيق العقد لدى جهة قانونية.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mt-16 pt-10 border-t border-stone-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-stone-900">
                عقارات مشابهة قد تهمك
              </h2>
              <Link href="/properties" className="text-xs font-bold text-amber-800 hover:underline">
                عرض المزيد من العقارات
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
