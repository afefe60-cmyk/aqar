"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  PlusCircle, 
  Upload, 
  MapPin, 
  Building2, 
  Layers, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Info, 
  Image as ImageIcon,
  ArrowRight,
  Eye
} from "lucide-react";
import { SUDAN_CITIES, PROPERTY_TYPES } from "../../lib/mock-data";

export default function AddPropertyPage() {
  const [formData, setFormData] = useState({
    title: "",
    purpose: "SALE",
    type: "APARTMENT",
    priceSDG: "",
    rentFrequency: "شهري",
    city: "بورتسودان",
    neighborhood: "",
    area: "",
    rooms: "3",
    bathrooms: "2",
    deedStatus: "شهادة بحث ملك حر جاهزة",
    description: "",
    advertiserName: "",
    phone: "",
    whatsapp: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("http://localhost:3001/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          purpose: formData.purpose,
          propertyType: formData.type,
          priceSdg: formData.priceSDG,
          rentFrequency: formData.purpose === "RENT" ? formData.rentFrequency : null,
          city: formData.city,
          neighborhood: formData.neighborhood,
          area: formData.area,
          rooms: formData.rooms,
          bathrooms: formData.bathrooms,
          deedStatus: formData.deedStatus,
          description: formData.description,
          sellerName: formData.advertiserName,
          sellerPhone: formData.phone,
          sellerWhatsapp: formData.whatsapp || formData.phone,
        }),
      });
    } catch (err) {
      console.warn("Backend submit error:", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a2b] via-[#244634] to-[#14261c] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-amber-400 text-stone-900 text-xs font-black px-3 py-1 rounded-full uppercase mb-3 inline-block">
            نشر إعلان مجاني
          </span>
          <h1 className="text-2xl sm:text-4xl font-black mb-2">
            أضف عقارك أو أرضك في سودان زون
          </h1>
          <p className="text-xs sm:text-sm text-stone-200 max-w-xl mx-auto">
            انشر إعلانك خلال دقائق ليصل إلى آلاف المشترين والمستأجرين في ولايتك، واستقبل الاتصالات مباشرة دون وسيط.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h2 className="text-2xl font-black text-stone-900">
                تم نشر إعلان عقارك بنجاح!
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                عقارك ({formData.title}) أصبح متاحاً الآن في قسم عقارات {formData.city} بسعر {new Intl.NumberFormat("ar-SD").format(formData.priceSDG || 0)} جنيه سوداني.
              </p>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 max-w-md mx-auto text-xs text-stone-700 text-right space-y-1.5">
                <div><span className="font-bold">الغرض:</span> {formData.purpose === "SALE" ? "للبيع" : "للإيجار"}</div>
                <div><span className="font-bold">الموقع:</span> {formData.city} - {formData.neighborhood || "وسط المدينة"}</div>
                <div><span className="font-bold">المساحة:</span> {formData.area} م²</div>
                <div><span className="font-bold">رقم التواصل:</span> {formData.phone}</div>
              </div>

              <div className="pt-4 flex items-center justify-center gap-3">
                <Link
                  href="/properties"
                  className="bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
                >
                  تصفح كافة العقارات
                </Link>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                >
                  إضافة إعلان آخر
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. Purpose & Title */}
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  المعلومات الأساسية
                </h3>

                <div className="space-y-4">
                  {/* Purpose Selector */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      الغرض من الإعلان
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, purpose: "SALE" })}
                        className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          formData.purpose === "SALE"
                            ? "bg-amber-700 text-white border-amber-700 shadow-sm"
                            : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        عقار معروض للبيع
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, purpose: "RENT" })}
                        className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          formData.purpose === "RENT"
                            ? "bg-[#1e3a2b] text-white border-[#1e3a2b] shadow-sm"
                            : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        عقار معروض للإيجار
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      عنوان الإعلان المختصر
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: شقة سوبر لوكس 3 غرف حي المطار بورتسودان"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  {/* Type */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      نوع العقار
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      <option value="APARTMENT">شقة سكنية</option>
                      <option value="VILLA">فيلا / بيت دورين</option>
                      <option value="HOUSE">منزل شعبي / أرضي</option>
                      <option value="LAND">أرض سكنية / مخطط</option>
                      <option value="BUILDING">عمارة كاملة</option>
                      <option value="COMMERCIAL">محل تجاري / مكتب</option>
                      <option value="FARM">مزرعة / استراحة</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 2. Location */}
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  الموقع الجغرافي
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      المدينة أو الولاية
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      {SUDAN_CITIES.filter(c => c.id !== "all").map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      الحي / المنطقة أو المربع
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: ديم سواكن، البرقيق، مربع 1..."
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Price & Specs */}
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  السعر والمواصفات
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      السعر المطلوب (بالجنيه السوداني)
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="مثال: 45000000"
                      value={formData.priceSDG}
                      onChange={(e) => setFormData({ ...formData, priceSDG: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      المساحة بالمتر المربع (م²)
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="مثال: 300"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      عدد الغرف
                    </label>
                    <select
                      value={formData.rooms}
                      onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      <option value="1">غرفة واحدة</option>
                      <option value="2">غرفتان</option>
                      <option value="3">3 غرف</option>
                      <option value="4">4 غرف</option>
                      <option value="5+">5 غرف فأكثر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      عدد دورات المياه
                    </label>
                    <select
                      value={formData.bathrooms}
                      onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      <option value="1">حمام واحد</option>
                      <option value="2">حمامان</option>
                      <option value="3">3 حمامات</option>
                      <option value="4+">4 حمامات فأكثر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      حالة شهادة البحث / التوثيق
                    </label>
                    <select
                      value={formData.deedStatus}
                      onChange={(e) => setFormData({ ...formData, deedStatus: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      <option value="شهادة بحث ملك حر جاهزة">شهادة بحث ملك حر جاهزة</option>
                      <option value="شهادة حيازة رسمية">شهادة حيازة رسمية</option>
                      <option value="عقد انتفاع موثق">عقد انتفاع موثق</option>
                      <option value="توكيل شرعي جاهز للتسجيل">توكيل شرعي جاهز للتسجيل</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 4. Description */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  الوصف الكامل للعقار والمميزات
                </label>
                <textarea
                  rows={4}
                  placeholder="اكتب تفاصيل إضافية مثل: توفر بئر أو خزان ماء، طاقة شمسية، قرب من المسجد أو الشارع الرئيسي..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                />
              </div>

              {/* 5. Contact Info */}
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  بيانات التواصل مع صاحب العقار
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      اسم المعلن
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="اسمك الكامل"
                      value={formData.advertiserName}
                      onChange={(e) => setFormData({ ...formData, advertiserName: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="+249..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      رقم الواتساب
                    </label>
                    <input
                      type="tel"
                      dir="ltr"
                      placeholder="249..."
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white text-right"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer text-sm active:scale-95"
              >
                <PlusCircle className="w-4 h-4" />
                <span>نشر العقار الآن مجاناً</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
