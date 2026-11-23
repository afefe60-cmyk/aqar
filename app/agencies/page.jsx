"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Star, 
  Phone, 
  MessageCircle, 
  Search,
  CheckCircle2,
  Users
} from "lucide-react";
import AgencyCard from "../../components/AgencyCard";
import { MOCK_AGENCIES, SUDAN_CITIES } from "../../lib/mock-data";

export default function AgenciesPage() {
  const [selectedCity, setSelectedCity] = useState("all");

  const filteredAgencies = MOCK_AGENCIES.filter((agency) => {
    if (selectedCity !== "all" && agency.city !== selectedCity) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#1e3a2b] via-[#244634] to-[#14261c] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">
            دليل المكاتب المعتمدة
          </span>
          <h1 className="text-2xl sm:text-4xl font-black mb-2">
            المكاتب والشركات العقارية في السودان
          </h1>
          <p className="text-xs sm:text-sm text-stone-200 max-w-xl mx-auto">
            تواصل مع نخبة من أفضل الوسطاء والشركات العقارية المرخصة في مختلف المدن، لإتمام صفقات البيع والشراء وتوثيق العقود بكل أمان.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* City Filter Pills */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-stone-500 whitespace-nowrap ml-1">
              المدينة:
            </span>
            {["all", "بورتسودان", "شندي", "عطبرة", "مروي"].map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCity === city
                    ? "bg-amber-700 text-white shadow-xs"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                }`}
              >
                {city === "all" ? "كافة المدن" : city}
              </button>
            ))}
          </div>

          <span className="text-xs font-bold text-stone-500 bg-stone-50 px-3 py-1 rounded-md border border-stone-100">
            {filteredAgencies.length} مكاتب معتمدة
          </span>
        </div>

        {/* Agencies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgencies.map((agency) => (
            <AgencyCard key={agency.id} agency={agency} />
          ))}
        </div>

        {/* Partner with SudanZon Banner */}
        <div className="mt-14 rounded-3xl bg-white border border-stone-200 p-8 text-center max-w-2xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mx-auto mb-3">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-stone-900 mb-2">
            هل تمتلك مكتباً أو شركة عقارية في السودان؟
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed mb-5 max-w-md mx-auto">
            انضم إلى شبكة سودان زون للعقارات المعتمدة واعرض عقاراتك ومخططاتك لآلاف المشترين داخل وخارج السودان مع توثيق رسمي.
          </p>
          <a
            href="https://wa.me/249912000000?text=طلب%20اعتماد%20مكتب%20عقاري%20على%20سودان%20زون"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>طلب اعتماد وانضمام للمنظومة</span>
          </a>
        </div>
      </div>
    </div>
  );
}
