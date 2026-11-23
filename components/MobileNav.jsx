"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Key, PlusCircle, Building, Heart, User } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "الرئيسية", href: "/", icon: Home },
    { label: "للبيع", href: "/properties?purpose=SALE", icon: Building },
    { label: "أضف عقار", href: "/add-property", icon: PlusCircle, isCta: true },
    { label: "للإيجار", href: "/properties?purpose=RENT", icon: Key },
    { label: "حسابي", href: "/account", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-stone-200 px-2 py-1 shadow-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.isCta) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center -mt-5 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-700 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-800/30 group-active:scale-90 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-amber-800 mt-1">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-1 px-2 rounded-lg transition-colors ${
                isActive ? "text-amber-700 font-bold" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[10px]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
