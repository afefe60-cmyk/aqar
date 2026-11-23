"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ArrowLeft, 
  PhoneCall, 
  Users, 
  TrendingUp, 
  CheckCircle2,
  SlidersHorizontal,
  Home,
  Hotel,
  BriefcaseBusiness,
  Star,
  Zap,
  Wifi,
  Wrench,
  FileCheck
} from "lucide-react";
import HeroSearch from "../components/HeroSearch";
import PropertyCard from "../components/PropertyCard";
import AgencyCard from "../components/AgencyCard";
import { 
  MOCK_PROPERTIES, 
  MOCK_AGENCIES, 
  PLATFORM_STATS, 
  PROPERTY_TYPES, 
  SUDAN_CITIES,
  MOCK_HOTELS 
} from "../lib/mock-data";

export default function HomePage() {
  const [filters, setFilters] = useState({
    purpose: "ALL",
    city: "",
    neighborhood: "",
    type: "all",
  });

  const [activeTypeTab, setActiveTypeTab] = useState("all");

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter((prop) => {
      // Purpose filter
      if (filters.purpose === "SALE" && prop.purpose !== "SALE") return false;
      if (filters.purpose === "RENT" && prop.purpose !== "RENT") return false;
      if (filters.purpose === "LANDS" && prop.type !== "LAND") return false;

      // City filter
      if (filters.city && !prop.city.includes(filters.city)) return false;

      // Neighborhood filter
      if (filters.neighborhood && !prop.neighborhood.includes(filters.neighborhood)) return false;

      // Type filter (from search or from pill tabs)
      const targetType = activeTypeTab !== "all" ? activeTypeTab : filters.type;
      if (targetType !== "all" && prop.type !== targetType) return false;

      return true;
    });
  }, [filters, activeTypeTab]);

  return (
    <div className="min-h-screen">
      {/* 1. Hero Showcase Section - Compact & Well Balanced Above The Fold */}
      <section className="relative bg-gradient-to-br from-[#1e3a2b] via-[#244634] to-[#14261c] text-white pt-5 pb-12 md:pt-7 md:pb-14 overflow-hidden">
        {/* Subtle architectural background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Ecosystem badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>منصة العقارات والأراضي الرسمية الأولى في السودان</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-normal leading-[1.4] sm:leading-[1.4] md:leading-[1.35] mb-2.5 max-w-4xl mx-auto">
            ابحث عن <span className="text-amber-400">بيتك، شقتك، أو قطعتك</span> بأمان وسهولة
          </h1>

          <p className="text-stone-200 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-3.5">
            تصفح آلاف العقارات المعروضة للبيع والإيجار في بورتسودان، شندي، مروي، عطبرة، الخرطوم وكافة المدن السودانية مع تواصل فوري مباشر عبر الواتساب والمكالمة.
          </p>

          {/* Key Advantages Pills */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-stone-300 flex-wrap pb-1">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              تواصل مباشر مع المالك والمكتب
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              أسعار واضحة ومحدثة بالجنيه السوداني
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              مخططات معتمدة وشهادات بحث موثقة
            </span>
          </div>
        </div>
      </section>

      {/* 2. Floating Interactive Search Box */}
      <section className="px-4 -mt-7 sm:-mt-8">
        <HeroSearch onFilterChange={(newFilters) => setFilters(prev => ({ ...prev, ...newFilters }))} />
      </section>

      {/* 3. Category Type Quick Selector */}
      <section className="max-w-7xl mx-auto px-4 mt-12 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-black text-stone-900 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-700" />
            تصفح حسب نوع العقار
          </h2>
          {activeTypeTab !== "all" && (
            <button
              onClick={() => setActiveTypeTab("all")}
              className="text-xs text-amber-700 font-bold hover:underline"
            >
              عرض كافة الأنواع
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {PROPERTY_TYPES.map((type) => {
            const isSelected = activeTypeTab === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setActiveTypeTab(type.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? "bg-amber-700 text-white border-amber-700 shadow-md scale-102"
                    : "bg-white hover:bg-stone-50 border-stone-200 text-stone-700 hover:border-amber-300"
                }`}
              >
                <span className="text-xs font-bold">{type.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. Property Listings Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              أحدث العقارات المضافة في السودان
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              يتم تحديث العروض على مدار الساعة بأسعار السوق الحقيقية
            </p>
          </div>

          {/* Quick counters / Results count */}
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full">
              {filteredProperties.length} عقار متاح
            </span>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-lg mx-auto">
            <Home className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-stone-800 mb-1">
              لا توجد نتائج تطابق معايير البحث الحالية
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              جرّب تغيير المدينة أو إزالة بعض الفلاتر لعرض عقارات أخرى.
            </p>
            <button
              onClick={() => {
                setFilters({ purpose: "ALL", city: "", neighborhood: "", type: "all" });
                setActiveTypeTab("all");
              }}
              className="bg-amber-700 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-amber-800 transition-colors cursor-pointer"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        )}
      </section>

      {/* 5. Verified Agencies & Brokers Section */}
      <section className="bg-stone-100/70 border-y border-stone-200 py-14 my-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  مكاتب معتمدة
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-stone-900 mt-2">
                دليل المكاتب والشركات العقارية
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-1">
                تواصل مع أشهر وأوثق الوكالات العقارية المرخصة في مختلف المدن السودانية
              </p>
            </div>

            <Link
              href="/agencies"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-900 group"
            >
              <span>عرض كافة المكاتب</span>
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MOCK_AGENCIES.map((agency) => (
              <AgencyCard key={agency.id} agency={agency} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Hotels & Daily Serviced Stays Showcase */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 w-fit mb-2">
              <Hotel className="w-3.5 h-3.5 text-amber-700" />
              حجز يومي وأسبوعي
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              فنادق وشقق فندقية مجهزة في المدن السودانية
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1">
              كهرباء مستمرة 24 ساعة بمولدات خاصة وإنترنت ستارلينك فائق السرعة
            </p>
          </div>

          <Link
            href="/hotels"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-900 group"
          >
            <span>استكشاف كافة الفنادق</span>
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MOCK_HOTELS.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 w-full bg-stone-100">
                  <Image
                    src={hotel.images[0]}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-amber-700 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                    {hotel.city}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-white/95 px-2.5 py-1 rounded-lg text-xs font-black text-amber-800 shadow-sm">
                    {new Intl.NumberFormat("ar-SD").format(hotel.pricePerNightSDG)} ج.س / ليلة
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-stone-900 text-sm mb-1 truncate">
                    {hotel.name}
                  </h4>
                  <p className="text-xs text-amber-800 font-semibold mb-2 truncate">
                    {hotel.roomType}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      {hotel.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-600" />
                      مولد 24س
                    </span>
                    <span className="flex items-center gap-1">
                      <Wifi className="w-3 h-3 text-cyan-600" />
                      ستارلينك
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <Link
                  href="/hotels"
                  className="w-full inline-flex items-center justify-center py-2 px-3 rounded-xl bg-stone-100 hover:bg-amber-50 text-stone-800 hover:text-amber-800 font-bold text-xs transition-colors"
                >
                  تفاصيل وحجز الغرفة
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Property Management Banner for Expats & Owners */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1e3a2b] via-[#284f39] to-[#14261c] text-white p-8 md:p-12 shadow-xl border border-emerald-900/40 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="bg-amber-400 text-stone-900 text-xs font-black px-3.5 py-1 rounded-full uppercase inline-block">
                خدمة جديدة لأصحاب الأملاك والمغتربين
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-[1.4] text-white">
                أدر عقارك في السودان وأنت في مكانك بأمان تام
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                خدمات شاملة تشمل تحصيل الإيجارات وإيداعها مباشرة في حسابك البنكي، الصيانة الدورية لمنظومات الطاقة الشمسية والمولدات، وتوثيق عقود قانونية رسمية مع تقارير شهرية موثقة.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/property-management"
                  className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105"
                >
                  تعرف على باقات إدارة الأملاك
                </Link>
                <Link
                  href="/property-management#request-form"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  تقديم طلب إدارة عقار
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3 text-xs">
              <div className="flex items-center gap-2.5 font-bold text-amber-300">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>عقود قانونية موثقة ومعتمدة</span>
              </div>
              <div className="flex items-center gap-2.5 font-bold text-emerald-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>تحويل بنكي فوري (بنكك / فوري)</span>
              </div>
              <div className="flex items-center gap-2.5 font-bold text-amber-300">
                <Wrench className="w-5 h-5 text-amber-400 shrink-0" />
                <span>صيانة دورية وطوارئ 24/7</span>
              </div>
              <div className="flex items-center gap-2.5 font-bold text-cyan-300">
                <FileCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>تقارير مالية وفنية شهرية مصورة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Platform Stats */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PLATFORM_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-stone-200/80 text-center shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-black text-amber-800 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-stone-600 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA: Add Your Property Banner */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-800 via-amber-700 to-[#1e3a2b] text-white p-8 md:p-12 shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="bg-amber-400 text-stone-900 text-xs font-black px-3 py-1 rounded-full uppercase mb-4 inline-block">
              أصحاب العقارات والمكاتب
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-[1.4] text-white">
              هل تمتلك عقاراً، شقة، أو قطعة أرض ترغب في بيعها أو تأجيرها؟
            </h2>
            <p className="text-amber-100 text-sm md:text-base leading-relaxed mb-6">
              انشر إعلانك الآن مجاناً وخلال دقيقة واحدة ليصل إلى آلاف الباحثين عن عقارات في مدينتك، مع استقبال الاستفسارات مباشرة على هاتفك وواتساب.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/add-property"
                className="bg-white hover:bg-stone-100 text-amber-900 font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                أضف عقارك الآن مجاناً
              </Link>
              <a
                href="https://wa.me/249912000000?text=استفسار%20عن%20إضافة%20عقار"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                تحدث مع مستشارنا العقاري
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
