"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Phone, 
  MessageCircle, 
  Heart, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

export default function PropertyCard({ property }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const images = property.images && property.images.length > 0 
    ? property.images 
    : ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"];

  const formatPrice = (num) => {
    return new Intl.NumberFormat("ar-SD").format(num);
  };

  const getPurposeBadge = (purpose) => {
    switch (purpose) {
      case "SALE":
        return { text: "للبيع", bg: "bg-amber-700 text-white" };
      case "RENT":
        return { text: "للإيجار", bg: "bg-[#1e3a2b] text-white" };
      default:
        return { text: "عقار", bg: "bg-stone-800 text-white" };
    }
  };

  const badge = getPurposeBadge(property.purpose);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const whatsappUrl = `https://wa.me/${property.whatsapp}?text=${encodeURIComponent(
    `السلام عليكم، استفسر بخصوص عقار: ${property.title} في ${property.city} - المعروض على سودان زون للعقارات`
  )}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image Carousel / Thumbnail */}
      <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-stone-100">
        <Link href={`/properties/${property.id}`} className="block w-full h-full">
          <Image
            src={images[currentImgIndex]}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        {/* Subtle top & bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 right-3 left-3 flex items-center justify-between pointer-events-auto z-10">
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-bold px-3 py-1 rounded-full shadow-md ${badge.bg}`}>
              {badge.text}
            </span>
            {property.isFeatured && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-900 shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                مميز
              </span>
            )}
          </div>

          <button
            onClick={toggleFavorite}
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${
              isFavorite 
                ? "bg-red-500 text-white" 
                : "bg-black/30 hover:bg-black/50 text-white"
            }`}
            title="حفظ في المفضلة"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-white" : ""}`} />
          </button>
        </div>

        {/* Image navigation controls if multiple */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="الصورة السابقة"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="الصورة التالية"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Image counter pill */}
            <div className="absolute bottom-2.5 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-full z-10">
              {currentImgIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Location & Tag line */}
          <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span className="truncate">{property.city} - {property.neighborhood}</span>
          </div>

          {/* Property Title */}
          <Link href={`/properties/${property.id}`} className="block mb-2">
            <h3 className="font-extrabold text-stone-900 text-base leading-[1.4] line-clamp-1 group-hover:text-amber-800 transition-colors">
              {property.title}
            </h3>
          </Link>

          {/* Price Header */}
          <div className="mb-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-black text-amber-800">
                {formatPrice(property.priceSDG)}
              </span>
              <span className="text-xs font-bold text-stone-700">جنيه سوداني</span>
              {property.rentFrequency && (
                <span className="text-xs text-stone-500 font-normal">/ {property.rentFrequency}</span>
              )}
            </div>
          </div>

          {/* Specs Bar (Area, Rooms, Baths) */}
          <div className="flex items-center gap-3 py-2 border-y border-stone-100 text-stone-600 text-xs mb-3">
            <div className="flex items-center gap-1" title="المساحة">
              <Maximize2 className="w-3.5 h-3.5 text-amber-700" />
              <span>{property.area} م²</span>
            </div>

            {property.rooms > 0 && (
              <div className="flex items-center gap-1" title="عدد الغرف">
                <Bed className="w-3.5 h-3.5 text-amber-700" />
                <span>{property.rooms} غرف</span>
              </div>
            )}

            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1" title="دورات المياه">
                <Bath className="w-3.5 h-3.5 text-amber-700" />
                <span>{property.bathrooms} حمام</span>
              </div>
            )}

            {property.verified && (
              <div className="mr-auto flex items-center gap-0.5 text-emerald-700 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>معتمد</span>
              </div>
            )}
          </div>
        </div>

        {/* Agency / Seller & Direct Contact CTA */}
        <div>
          {property.agency && (
            <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
              <span className="truncate max-w-[170px] font-semibold">{property.agency.name}</span>
              <span className="text-[11px] text-stone-400">{property.postedAt}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب</span>
            </a>

            <a
              href={`tel:${property.phone}`}
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>اتصال</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
