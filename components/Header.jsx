"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { 
  Building2, 
  PlusCircle, 
  Heart, 
  User, 
  MapPin, 
  Home, 
  Layers, 
  Hotel,
  BriefcaseBusiness,
  Menu,
  X
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200/90 shadow-xs">
      {/* 1. Slim Ecosystem Topbar */}
      <div className="bg-[#1e3a2b] text-white text-[11px] py-1.5 px-4 border-b border-[#2d523e]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-amber-400 font-bold">منظومة سودان زون:</span>
            <div className="flex items-center gap-2 text-stone-200">
              <a href="https://sudanzon.com" className="hover:text-amber-300 transition-colors">السوق المفتوح</a>
              <span className="text-stone-500">•</span>
              <a href="https://cars.sudanzon.com" className="hover:text-amber-300 transition-colors">سودان زون للسيارات</a>
              <span className="text-stone-500">•</span>
              <span className="text-amber-300 font-bold bg-white/10 px-2 py-0.5 rounded-md">العقارات والأراضي</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-stone-300">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>السوق العقاري الأول في كافة ولايات السودان</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between gap-4">
          {/* Official Brand Logo */}
          <div className="flex items-center shrink-0">
            <BrandLogo size="default" />
          </div>

          {/* Desktop Nav Links - Clean & Well Balanced */}
          <nav className="hidden xl:flex items-center gap-5 text-[13px] font-bold text-stone-700">
            <Link 
              href="/" 
              className="hover:text-amber-800 transition-colors py-1 text-stone-900"
            >
              الرئيسية
            </Link>
            <Link 
              href="/properties?purpose=SALE" 
              className="hover:text-amber-800 transition-colors py-1"
            >
              عقارات للبيع
            </Link>
            <Link 
              href="/properties?purpose=RENT" 
              className="hover:text-amber-800 transition-colors py-1"
            >
              عقارات للإيجار
            </Link>
            <Link 
              href="/properties?type=LAND" 
              className="hover:text-amber-800 transition-colors py-1"
            >
              أراضي ومخططات
            </Link>
            <Link 
              href="/hotels" 
              className="hover:text-amber-800 transition-colors py-1"
            >
              فنادق وشقق فندقية
            </Link>
            <Link 
              href="/property-management" 
              className="hover:text-amber-800 transition-colors py-1"
            >
              إدارة الأملاك
            </Link>
            <Link 
              href="/agencies" 
              className="hover:text-amber-800 transition-colors py-1"
            >
              المكاتب العقارية
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/favorites"
              className="p-2 text-stone-600 hover:text-red-500 hover:bg-stone-100 rounded-xl transition-colors hidden sm:inline-flex"
              title="المفضلة"
            >
              <Heart className="w-4 h-4" />
            </Link>

            <Link
              href="/auth/login"
              className="hidden sm:inline-flex items-center gap-1.5 text-stone-700 hover:text-amber-800 text-xs font-bold px-3 py-2 rounded-xl hover:bg-stone-100 transition-colors"
            >
              <User className="w-3.5 h-3.5 text-amber-700" />
              <span>تسجيل الدخول</span>
            </Link>

            <Link
              href="/add-property"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all transform active:scale-95"
            >
              <PlusCircle className="w-4 h-4 text-amber-200" />
              <span>أضف عقارك مجاناً</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-xl"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-stone-200 bg-white px-4 py-3 space-y-1 text-sm font-bold shadow-lg">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-stone-800 border-b border-stone-100"
          >
            <Home className="w-4 h-4 text-amber-700" />
            الرئيسية
          </Link>
          <Link 
            href="/properties?purpose=SALE" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-stone-800 border-b border-stone-100"
          >
            <Building2 className="w-4 h-4 text-amber-700" />
            عقارات للبيع
          </Link>
          <Link 
            href="/properties?purpose=RENT" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-stone-800 border-b border-stone-100"
          >
            <Home className="w-4 h-4 text-amber-700" />
            عقارات للإيجار
          </Link>
          <Link 
            href="/properties?type=LAND" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-stone-800 border-b border-stone-100"
          >
            <Layers className="w-4 h-4 text-emerald-700" />
            أراضي ومخططات
          </Link>
          <Link 
            href="/hotels" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-stone-800 border-b border-stone-100"
          >
            <Hotel className="w-4 h-4 text-amber-600" />
            فنادق وشقق فندقية (حجز يومي)
          </Link>
          <Link 
            href="/property-management" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-amber-800 bg-amber-50/70 px-2 rounded-lg border-b border-stone-100"
          >
            <BriefcaseBusiness className="w-4 h-4 text-amber-700" />
            خدمة إدارة الأملاك (للمغتربين والملاك)
          </Link>
          <Link 
            href="/agencies" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-stone-800 border-b border-stone-100"
          >
            <Building2 className="w-4 h-4 text-amber-700" />
            المكاتب والشركات العقارية
          </Link>
          <div className="pt-2 flex items-center justify-between text-xs">
            <Link 
              href="/favorites" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 text-stone-700 py-1.5"
            >
              <Heart className="w-4 h-4 text-red-500" />
              المفضلة
            </Link>
            <Link 
              href="/auth/login" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 text-stone-700 py-1.5"
            >
              <User className="w-4 h-4 text-amber-700" />
              تسجيل الدخول
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
