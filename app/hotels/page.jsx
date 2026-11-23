"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Hotel, 
  MapPin, 
  Star, 
  Wifi, 
  Zap, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Coffee,
  CheckCircle2,
  Calendar,
  Search
} from "lucide-react";
import { MOCK_HOTELS, SUDAN_CITIES } from "../../lib/mock-data";

export default function HotelsPage() {
  const [selectedCity, setSelectedCity] = useState("all");
  const [filterGenerator, setFilterGenerator] = useState(false);
  const [filterStarlink, setFilterStarlink] = useState(false);

  const filteredHotels = useMemo(() => {
    return MOCK_HOTELS.filter((hotel) => {
      if (selectedCity !== "all" && hotel.city !== selectedCity) return false;
      if (filterGenerator && !hotel.hasGenerator24h) return false;
      if (filterStarlink && !hotel.hasStarlinkWifi) return false;
      return true;
    });
  }, [selectedCity, filterGenerator, filterStarlink]);

  const formatPrice = (num) => {
    return new Intl.NumberFormat("ar-SD").format(num);
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* 1. Header Hero */}
      <section className="relative bg-gradient-to-br from-[#1e3a2b] via-[#244634] to-[#14261c] text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
            <Hotel className="w-4 h-4 text-amber-400" />
            <span>فنادق وشقق فندقية مجهزة للإيجار اليومي والأسبوعي في السودان</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-normal leading-[1.45] sm:leading-[1.4] md:leading-[1.35]">
            إقامة فندقية مريحة ومستقرة <br className="hidden sm:block" />
            <span className="text-amber-400">بكهرباء 24 ساعة وإنترنت فائق السرعة</span>
          </h1>

          <p className="text-stone-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            اختر غرفتك أو شقتك الفندقية المفروشة في بورتسودان، عطبرة، شندي، مروي مع خدمات متكاملة وتواصل مباشر مع الاستقبال للحجز الفوري بالجنيه السوداني.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-stone-300 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-yellow-400" />
              مولدات كهربائية تعمل على مدار الساعة
            </span>
            <span className="flex items-center gap-1.5">
              <Wifi className="w-4 h-4 text-cyan-400" />
              إنترنت فضائي ستارلينك متواصل
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              أماكن إقامة آمنة وموثقة
            </span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filters Bar */}
      <section className="max-w-6xl mx-auto px-4 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200/80 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* City selector pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <span className="text-xs font-bold text-stone-500 whitespace-nowrap ml-2">
              المدينة:
            </span>
            {[
              { id: "all", name: "الكل" },
              { id: "بورتسودان", name: "بورتسودان" },
              { id: "عطبرة", name: "عطبرة" },
              { id: "شندي", name: "شندي" },
              { id: "مروي", name: "مروي" },
            ].map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCity === city.id
                    ? "bg-amber-700 text-white shadow-sm"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>

          {/* Quick Features toggles */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => setFilterGenerator(!filterGenerator)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                filterGenerator
                  ? "bg-amber-50 border-amber-500 text-amber-800"
                  : "bg-white border-stone-200 text-stone-600 hover:border-amber-300"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>مولد 24 ساعة</span>
            </button>

            <button
              onClick={() => setFilterStarlink(!filterStarlink)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                filterStarlink
                  ? "bg-cyan-50 border-cyan-500 text-cyan-800"
                  : "bg-white border-stone-200 text-stone-600 hover:border-cyan-300"
              }`}
            >
              <Wifi className="w-3.5 h-3.5 text-cyan-600" />
              <span>إنترنت ستارلينك</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Hotels Grid */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-stone-900 flex items-center gap-2">
            <Hotel className="w-5 h-5 text-amber-700" />
            الفنادق والشقق الفندقية المتاحة
          </h2>
          <span className="text-xs font-bold text-stone-500 bg-stone-100 px-3 py-1.5 rounded-full">
            {filteredHotels.length} أماكن إقامة
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredHotels.map((hotel) => {
            const whatsappBookingUrl = `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(
              `السلام عليكم فندق ${hotel.name}، استفسر عن توفر حجز إقامة لـ (${hotel.roomType}) المعروض على منصة سودان زون للعقارات`
            )}`;

            return (
              <div
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Carousel Thumbnail */}
                  <div className="relative h-60 sm:h-64 w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={hotel.images[0]}
                      alt={hotel.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 right-3 left-3 flex items-center justify-between">
                      <span className="bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {hotel.city}
                      </span>
                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md text-amber-400 px-2.5 py-1 rounded-full text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{hotel.rating}</span>
                        <span className="text-stone-300 text-[10px]">({hotel.reviewsCount} تقييم)</span>
                      </div>
                    </div>

                    {/* Nightly Price Tag */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md">
                      <span className="text-base font-black text-amber-800">
                        {formatPrice(hotel.pricePerNightSDG)}
                      </span>
                      <span className="text-[11px] font-bold text-stone-600 mr-1">
                        جنيه سوداني / ليلة
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-black text-stone-900 leading-[1.4] mb-1.5">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-stone-500 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{hotel.address}</span>
                    </div>

                    <div className="bg-amber-50/70 border border-amber-200/50 rounded-xl p-2.5 text-xs font-bold text-amber-900 mb-4">
                      {hotel.roomType}
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-2">
                      {hotel.description}
                    </p>

                    {/* Amenities list */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {hotel.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking & Contact Footer */}
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-stone-100">
                    <a
                      href={whatsappBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm hover:shadow transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>حجز عبر واتساب</span>
                    </a>

                    <a
                      href={`tel:${hotel.phone}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs shadow-sm hover:shadow transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>اتصال بالاستقبال</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
