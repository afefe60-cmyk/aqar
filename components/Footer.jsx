import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a2b] text-stone-300 pt-16 pb-24 md:pb-12 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-700/50">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/95 rounded-2xl p-3 inline-block shadow-md">
              <BrandLogo size="default" />
            </div>
            <p className="text-sm leading-relaxed text-stone-300 max-w-md">
              المنصة العقارية الرقمية الأولى في السودان لبيع وشراء وتأجير العقارات، الشقق، الفلل، المزارع والأراضي والمخططات السكنية مع تواصل مباشر وموثوق بين المشتري والمالك والمكاتب المعتمدة.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                عقارات موثقة ومحدثة يومياً
              </span>
            </div>
          </div>

          {/* Quick Real Estate Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              العقارات حسب الغرض
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/properties?purpose=SALE" className="hover:text-amber-300 transition-colors">
                  منازل وفلل للبيع
                </Link>
              </li>
              <li>
                <Link href="/properties?purpose=RENT" className="hover:text-amber-300 transition-colors">
                  شقق للإيجار الشهري والسنوي
                </Link>
              </li>
              <li>
                <Link href="/properties?type=LAND" className="hover:text-amber-300 transition-colors">
                  أراضي ومخططات سكنية
                </Link>
              </li>
              <li>
                <Link href="/properties?type=COMMERCIAL" className="hover:text-amber-300 transition-colors">
                  عقارات ومحلات تجارية
                </Link>
              </li>
              <li>
                <Link href="/agencies" className="hover:text-amber-300 transition-colors">
                  دليل المكاتب العقارية
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              أهم المدن
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/properties?city=بورتسودان" className="hover:text-amber-300 transition-colors">
                  عقارات بورتسودان
                </Link>
              </li>
              <li>
                <Link href="/properties?city=شندي" className="hover:text-amber-300 transition-colors">
                  عقارات شندي
                </Link>
              </li>
              <li>
                <Link href="/properties?city=عطبرة" className="hover:text-amber-300 transition-colors">
                  عقارات عطبرة والدامر
                </Link>
              </li>
              <li>
                <Link href="/properties?city=مروي" className="hover:text-amber-300 transition-colors">
                  عقارات مروي وكريمة
                </Link>
              </li>
              <li>
                <Link href="/properties?city=الخرطوم" className="hover:text-amber-300 transition-colors">
                  عقارات ولاية الخرطوم
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              خدمة العملاء
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span dir="ltr">+249 912 000 000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>realestate@sudanzon.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>السودان، بورتسودان / الخرطوم</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} منظومة سودان زون الرقمية (SudanZon Real Estate). جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-amber-300 transition-colors">
              الشروط والأحكام
            </Link>
            <Link href="/privacy" className="hover:text-amber-300 transition-colors">
              سياسة الخصوصية
            </Link>
            <a href="https://sudanzon.com" className="hover:text-amber-300 transition-colors">
              منظومة سودان زون
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
