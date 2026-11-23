"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  MapPin, 
  Building, 
  Layers, 
  Check
} from "lucide-react";
import { SUDAN_CITIES, PROPERTY_TYPES, PURPOSE_TABS } from "../lib/mock-data";

export default function HeroSearch({ onFilterChange }) {
  const router = useRouter();
  const [selectedPurpose, setSelectedPurpose] = useState("ALL");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const activeCityObj = SUDAN_CITIES.find((c) => c.id === selectedCity);
  const neighborhoods = activeCityObj && activeCityObj.neighborhoods ? activeCityObj.neighborhoods : [];

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedPurpose !== "ALL") params.append("purpose", selectedPurpose);
    if (selectedCity !== "all") params.append("city", activeCityObj?.name || "");
    if (selectedNeighborhood !== "all") params.append("neighborhood", selectedNeighborhood);
    if (selectedType !== "all") params.append("type", selectedType);

    if (onFilterChange) {
      onFilterChange({
        purpose: selectedPurpose,
        city: selectedCity === "all" ? "" : activeCityObj?.name,
        neighborhood: selectedNeighborhood === "all" ? "" : selectedNeighborhood,
        type: selectedType,
      });
    } else {
      router.push(`/properties?${params.toString()}`);
    }
  };

  return (
    <div className="relative rounded-2xl bg-white shadow-xl border border-stone-200/90 p-3 sm:p-4 max-w-4xl mx-auto z-20">
      {/* Purpose Tabs Switcher */}
      <div className="flex items-center justify-between border-b border-stone-100 pb-2.5 mb-3 gap-2">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {PURPOSE_TABS.map((tab) => {
            const isActive = selectedPurpose === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSelectedPurpose(tab.id);
                  if (tab.id === "LANDS") {
                    setSelectedType("LAND");
                  }
                  if (onFilterChange) {
                    onFilterChange({ purpose: tab.id });
                  }
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

        <span className="hidden sm:inline-block text-[11px] font-bold text-stone-500 bg-stone-50 px-2.5 py-1 rounded-md border border-stone-200/60">
          العملة: الجنيه السوداني (SDG)
        </span>
      </div>

      {/* Main Filter Form */}
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {/* City Filter */}
        <div>
          <label className="block text-[11px] font-bold text-stone-600 mb-1 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-700" />
            المدينة أو الولاية
          </label>
          <select
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setSelectedNeighborhood("all");
            }}
            className="w-full bg-stone-50 hover:bg-stone-100/80 border border-stone-200 rounded-xl px-3 py-2 text-xs font-semibold text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
          >
            {SUDAN_CITIES.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* Neighborhood Filter */}
        <div>
          <label className="block text-[11px] font-bold text-stone-600 mb-1 flex items-center gap-1">
            <Layers className="w-3 h-3 text-amber-700" />
            الحي / المنطقة
          </label>
          <select
            value={selectedNeighborhood}
            onChange={(e) => setSelectedNeighborhood(e.target.value)}
            disabled={neighborhoods.length === 0}
            className="w-full bg-stone-50 hover:bg-stone-100/80 border border-stone-200 rounded-xl px-3 py-2 text-xs font-semibold text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white disabled:opacity-50 transition-colors"
          >
            <option value="all">كافة الأحياء</option>
            {neighborhoods.map((n, i) => (
              <option key={i} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div>
          <label className="block text-[11px] font-bold text-stone-600 mb-1 flex items-center gap-1">
            <Building className="w-3 h-3 text-amber-700" />
            نوع العقار
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full bg-stone-50 hover:bg-stone-100/80 border border-stone-200 rounded-xl px-3 py-2 text-xs font-semibold text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
          >
            {PROPERTY_TYPES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search Submit Button */}
        <div className="flex flex-col justify-end">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold py-2 px-4 rounded-xl shadow-sm hover:shadow flex items-center justify-center gap-1.5 transition-all text-xs cursor-pointer active:scale-95"
          >
            <Search className="w-3.5 h-3.5" />
            <span>بحث في العقارات</span>
          </button>
        </div>
      </form>

      {/* Quick City Tags */}
      <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-stone-500 flex-wrap">
        <span className="font-bold text-stone-700">الأكثر طلباً:</span>
        {[
          { label: "شقق بورتسودان", city: "port-sudan", type: "APARTMENT" },
          { label: "أراضي عطبرة", city: "atbara", type: "LAND" },
          { label: "منازل شندي", city: "shendi", type: "VILLA" },
          { label: "مزارع مروي", city: "merowe", type: "FARM" },
        ].map((tag, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setSelectedCity(tag.city);
              setSelectedType(tag.type);
              if (onFilterChange) {
                const targetCity = SUDAN_CITIES.find(c => c.id === tag.city);
                onFilterChange({
                  city: targetCity ? targetCity.name : "",
                  type: tag.type,
                });
              }
            }}
            className="bg-stone-100 hover:bg-amber-50 hover:text-amber-800 px-2 py-0.5 rounded-md transition-colors"
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
}
