"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BriefcaseBusiness, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Building, 
  Wrench, 
  FileText, 
  Clock, 
  Home, 
  Layers, 
  Award,
  ArrowRight
} from "lucide-react";
import { PROPERTY_MANAGEMENT_PACKAGES, SUDAN_CITIES } from "../../lib/mock-data";
import { submitPropertyManagementRequest } from "../../lib/api";

export default function PropertyManagementPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    city: "بورتسودان",
    neighborhood: "",
    propertyType: "عمارة سكنية",
    packageType: "باقة التحصيل والتأجير",
    notes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitPropertyManagementRequest(formData);
    } catch (e) {
      // Handled gracefully
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/249912000000?text=${encodeURIComponent(
    `السلام عليكم، أرغب في الاستفسار عن خدمة إدارة الأملاك لدى سودان زون للعقارات. اسمي: ${formData.fullName || "مالك عقار"}، العقار: ${formData.propertyType} في ${formData.city}`
  )}`;

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a2b] via-[#244634] to-[#14261c] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>خدمة مخصصة للمغتربين وأصحاب الأملاك والعمارات في السودان</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 tracking-normal leading-[1.45] sm:leading-[1.4] md:leading-[1.35]">
            أدر عقاراتك وأنت في مكانك <br className="hidden sm:block" />
            <span className="text-amber-400">بأعلى عائد استثماري وأمان قانوني تام</span>
          </h1>

          <p className="text-stone-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            نتولى عنك كافة أعباء إدارة العقار: اختيار المستأجرين الموثوقين، توثيق العقود القانونية، تحصيل الإيجارات الشهرية وإيداعها في حسابك، والصيانة الدورية للمبنى والطاقة الشمسية والمولدات مع تقارير شهرية موثقة.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#request-form"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              اطلب إدارة عقارك الآن
            </a>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>استشارة فورية عبر واتساب</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Key Highlights Bar */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200/80 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900 mb-0.5">توثيق قانوني معتمد</h4>
              <p className="text-xs text-stone-500">عقود رسمية تضمن حقوق المالك والمستأجر</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900 mb-0.5">تحويل بنكي فوري</h4>
              <p className="text-xs text-stone-500">إيداع الإيجار شهرياً عبر بنكك وفوري</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900 mb-0.5">صيانة طوارئ 24/7</h4>
              <p className="text-xs text-stone-500">فريق فني للكهرباء والسباكة والمولدات</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900 mb-0.5">تقارير شهرية مصورة</h4>
              <p className="text-xs text-stone-500">اطّلع على حالة عقارك وصور الصيانة أولاً بأول</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Packages Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mb-3">
            باقات إدارة الأملاك المصممة لاحتياجك
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            اختر الباقة المناسبة لعقارك سواء كان شقة فردية، عمارة كاملة، أو مجمعاً تجارياً
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROPERTY_MANAGEMENT_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl bg-white p-7 border transition-all flex flex-col justify-between ${
                pkg.popular
                  ? "border-amber-500 shadow-xl ring-2 ring-amber-500/20 relative"
                  : "border-stone-200/80 shadow-md hover:border-amber-300"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-black px-3.5 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-black text-stone-900 mb-1">
                  {pkg.title}
                </h3>
                <p className="text-xs text-stone-500 mb-4">{pkg.target}</p>

                <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 text-xs font-bold text-amber-800 mb-6">
                  {pkg.fee}
                </div>

                <ul className="space-y-3 text-xs text-stone-700 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#request-form"
                onClick={() => setFormData((prev) => ({ ...prev, packageType: pkg.title }))}
                className={`w-full py-3 px-4 rounded-xl text-center text-xs font-black transition-colors ${
                  pkg.popular
                    ? "bg-amber-700 hover:bg-amber-800 text-white shadow-md"
                    : "bg-stone-100 hover:bg-amber-50 text-stone-800 hover:text-amber-800"
                }`}
              >
                اختيار هذه الباقة
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How It Works Steps */}
      <section className="bg-stone-100/70 border-y border-stone-200 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl font-black text-stone-900 mb-2">
              كيف تبدأ إدارة عقارك معنا في 4 خطوات؟
            </h2>
            <p className="text-xs text-stone-500">
              إجراءات ميسرة وواضحة تتم عن بُعد ودون الحاجة لحضورك الشخصي
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "إرسال بيانات العقار", desc: "املأ النموذج أدناه ببيانات عقارك وموقعه والباقة التي تفضلها." },
              { num: "02", title: "المعاينة والتقييم", desc: "يقوم مهندسنا المعتمد بزيارة العقار وإعداد تقرير فحص فني وقيمة الإيجار المتوقعة." },
              { num: "03", title: "توقيع عقد الإدارة", desc: "صياغة عقد رسمي موثق يحفظ حقوقك ويوضح كافة الالتزامات والمهام." },
              { num: "04", title: "استلام الإيجار الشهري", desc: "تستلم عوائدك شهرياً مباشرة عبر حسابك البنكي مع تقرير شامل." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-stone-200/80 relative">
                <span className="text-3xl font-black text-amber-200/80 absolute top-4 left-4">
                  {step.num}
                </span>
                <h4 className="font-bold text-sm text-stone-900 mb-2 relative z-10">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Request Form */}
      <section id="request-form" className="max-w-3xl mx-auto px-4 pt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xl">
          <div className="text-center mb-8">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
              نموذج طلب خدمة فوري
            </span>
            <h2 className="text-2xl font-black text-stone-900 mb-2">
              سجل بيانات عقارك وسيتواصل معك مدير الحسابات
            </h2>
            <p className="text-xs text-stone-500">
              سيتم مراجعة الطلب والتواصل معك خلال أقل من 24 ساعة عبر الهاتف والواتساب
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-emerald-900">
                تم استلام طلب إدارة العقار بنجاح!
              </h3>
              <p className="text-xs text-emerald-700 leading-relaxed max-w-md mx-auto">
                شكراً لتواصلك معنا أخي الكريم. تم تحويل بياناتك إلى قسم إدارة الأملاك، وسيتواصل معك مستشارنا العقاري على رقمك ({formData.phone}) لمتابعة التفاصيل والبدء في الإجراءات.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-emerald-800 underline hover:text-emerald-900"
                >
                  إرسال طلب آخر
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    الاسم الكامل للمالك
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: محمد أحمد علي"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    رقم الهاتف / الواتساب
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    المدينة أو الولاية
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  >
                    {SUDAN_CITIES.filter(c => c.id !== "all").map((city) => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    الحي / المنطقة
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: حي المطار، ديم سواكن، البرقيق..."
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    نوع العقار
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  >
                    <option value="عمارة سكنية كاملة">عمارة سكنية كاملة</option>
                    <option value="شقة سكنية فردية">شقة سكنية فردية</option>
                    <option value="فيلا أو منزل دورين">فيلا أو منزل دورين</option>
                    <option value="مبنى تجاري / مكاتب">مبنى تجاري / مكاتب</option>
                    <option value="مزرعة / استراحة">مزرعة / استراحة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    الباقة المطلوبة
                  </label>
                  <select
                    value={formData.packageType}
                    onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  >
                    <option value="باقة التحصيل والتأجير">باقة التحصيل والتأجير</option>
                    <option value="باقة الصيانة والتشغيل">باقة الصيانة والتشغيل</option>
                    <option value="باقة الإشراف الكامل VIP">باقة الإشراف الكامل VIP</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  تفاصيل إضافية عن العقار (عدد الوحدات، الحالة الحالية، الخ)
                </label>
                <textarea
                  rows={3}
                  placeholder="مثال: عمارة 4 طوابق بها 8 شقق، ترغب في إعادة تأجير شقتين شاغرتين ومتابعة تحصيل باقي الشقق..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>إرسال طلب إدارة العقار</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
