import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, ShieldCheck, Star, Building2 } from "lucide-react";

export default function AgencyCard({ agency }) {
  const whatsappUrl = `https://wa.me/${agency.whatsapp}?text=${encodeURIComponent(
    `السلام عليكم مكتب ${agency.name}، استفسر بخصوص العقارات المعروضة لديكم على منصة سودان زون للعقارات`
  )}`;

  return (
    <div className="bg-white rounded-2xl p-5 border border-stone-200/80 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
            <Image
              src={agency.logo}
              alt={agency.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <h4 className="font-bold text-stone-900 text-sm truncate">
                {agency.name}
              </h4>
              {agency.verified && (
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" title="مكتب معتمد" />
              )}
            </div>

            <div className="flex items-center gap-1 text-xs text-stone-500 mb-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="truncate">{agency.city} - {agency.address}</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {agency.rating}
              </span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-600 font-medium">
                {agency.propertiesCount} عقار معروض
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
          {agency.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>واتساب</span>
        </a>

        <a
          href={`tel:${agency.phone}`}
          className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>اتصال</span>
        </a>
      </div>
    </div>
  );
}
