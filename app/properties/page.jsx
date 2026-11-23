"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  Layers, 
  SlidersHorizontal, 
  Home, 
  ArrowUpDown,
  X
} from "lucide-react";
import PropertyCard from "../../components/PropertyCard";
import { 
  MOCK_PROPERTIES, 
  SUDAN_CITIES, 
  PROPERTY_TYPES, 
  PURPOSE_TABS 
} from "../../lib/mock-data";

function PropertiesContent() {
  const searchParams = useSearchParams();

  const initialPurpose = searchParams?.get("purpose") || "ALL";
  const initialCity = searchParams?.get("city") || "all";
  const initialType = searchParams?.get("type") || "all";

  const [purpose, setPurpose] = useState(initialPurpose);
  const [city, setCity] = useState(initialCity);
  const [type, setType] = useState(initialType);
  const [sortBy, setSortBy] = useState("newest"); // newest, priceAsc, priceDesc

  const filteredProperties = useMemo(() => {
    let list = MOCK_PROPERTIES.filter((prop) => {
      // Purpose
      if (purpose === "SALE" && prop.purpose !== "SALE") return false;
      if (purpose === "RENT" && prop.purpose !== "RENT") return false;
      if (purpose === "LANDS" && prop.type !== "LAND") return false;

      // City
      if (city !== "all" && !prop.city.includes(city)) return false;

      // Type
      if (type !== "all" && prop.type !== type) return false;

      return true;
    });

    // Sorting
    if (sortBy === "priceAsc") {
      list.sort((a, b) => a.priceSDG - b.priceSDG);
    } else if (sortBy === "priceDesc") {
      list.sort((a, b) => b.priceSDG - a.priceSDG);
    }

    return list;
  }, [purpose, city, type, sortBy]);

  const resetFilters = () => {
    setPurpose("ALL");
    setCity("all");
    setType("all");
    setSortBy("newest");
  };

  const hasActiveFilters = purpose !== "ALL" || city !== "all" || type !== "all";

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header Banner */}
      <div className="bg-white border-b border-stone-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
              <Link href="/" className="hover:text-amber-800">الرئيسية</Link>
              <span>/</span>
              <span className="text-stone-800 font-bold">تصفح العقارات والأراضي</span>
            </div>
            <h1 className="text-2xl font-black text-stone-900">
              {purpose === "SALE" ? "عقارات معروضة للبيع في السودان" :
               purpose === "RENT" ? "شقق وعقارات للإيجار في السودان" :
               type === "LAND" ? "أراضي ومخططات سكنية واستثمارية" :
               "كافة العقارات والأراضي في السودان"}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1.5 rounded-full">
              {filteredProperties.length} عقار متاح
            </span>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-stone-500 hover:text-red-600 flex items-center gap-1 font-semibold px-2 py-1"
              >
                <X className="w-3.5 h-3.5" />
                مسح الفلاتر
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Purpose Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {PURPOSE_TABS.map((tab) => {
              const isActive = purpose === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setPurpose(tab.id);
                    if (tab.id === "LANDS") setType("LAND");
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-amber-700 text-white shadow-xs"
                      : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* City & Type & Sort Dropdowns */}
          <div className="grid grid-cols-3 gap-2 w-full md:w-auto">
            {/* City */}
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-stone-800 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            >
              <option value="all">كافة المدن</option>
              {SUDAN_CITIES.filter(c => c.id !== "all").map((c) => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>

            {/* Type */}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-stone-800 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            >
              <option value="all">كافة الأنواع</option>
              {PROPERTY_TYPES.filter(t => t.id !== "all").map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-stone-800 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            >
              <option value="newest">الأحدث إضافة</option>
              <option value="priceAsc">السعر: من الأقل</option>
              <option value="priceDesc">السعر: من الأعلى</option>
            </select>
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
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-md mx-auto my-12">
            <Home className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-stone-800 mb-1">
              لا توجد عقارات تطابق هذا البحث
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              جرّب تغيير المدينة أو اختيار نوع عقار آخر.
            </p>
            <button
              onClick={resetFilters}
              className="bg-amber-700 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-amber-800 transition-colors cursor-pointer"
            >
              عرض كافة العقارات
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center text-sm font-bold text-stone-500">
        جاري تحميل العقارات...
      </div>
    }>
      <PropertiesContent />
    </Suspense>
  );
}
