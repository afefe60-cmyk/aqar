// Mock Data for SudanZon Real Estate (سودان زون للعقارات والأراضي)

export const SUDAN_CITIES = [
  { id: "all", name: "كل المدن السودانية" },
  { id: "port-sudan", name: "بورتسودان", neighborhoods: ["ديم سواكن", "حي المطار", "الشاحنات", "حي الهدى", "الثورة", "ديم مدينة", "سوق السمك", "الولايات الشمالية"] },
  { id: "shendi", name: "شندي", neighborhoods: ["حي البرقيق", "حي الديم", "مربع 1", "مربع 8", "القليعة", "السوق الكبير", "مسيكت"] },
  { id: "atbara", name: "عطبرة والدامر", neighborhoods: ["حي المطار", "الداخلة", "حي السكة حديد", "الشرقي", "الحصايا", "الشمالي", "الدامر مربع 2"] },
  { id: "merowe", name: "مروي وكريمة", neighborhoods: ["مروي شرق", "حي السد", "مطار مروي", "البركل", "كريمة وسط", "القرير"] },
  { id: "khartoum", name: "الخرطوم وبحري وأم درمان", neighborhoods: ["حي الصفا", "الرياض", "العمارات", "كافوري", "المهندسين", "الثورات", "المعمورة"] },
  { id: "wad-madani", name: "ود مدني", neighborhoods: ["حي الأندلس", "الدباغة", "حي المطار", "حي مايو", "حي الجامعة"] },
  { id: "kassala", name: "كسلا", neighborhoods: ["حي الميرغنية", "بانت", "حي الختمية", "الحسن والحسين"] },
  { id: "gadaref", name: "القضارف", neighborhoods: ["حي الصوفي", "حي الجباراب", "ديم النور", "حي الميدان"] },
  { id: "kosti", name: "كوستي وربك", neighborhoods: ["حي النصر", "الأندلس", "حي المرابيع", "ربك حي الشاطئ"] },
];

export const PROPERTY_TYPES = [
  { id: "all", name: "كافة الأنواع", icon: "Home" },
  { id: "APARTMENT", name: "شقق سكنية", icon: "Building" },
  { id: "VILLA", name: "فلل وبيوت راقية", icon: "Home" },
  { id: "HOUSE", name: "بيوت شعبية وعادية", icon: "Home" },
  { id: "LAND", name: "أراضي ومخططات", icon: "Layers" },
  { id: "BUILDING", name: "عمارات وأبراج كاملة", icon: "Building2" },
  { id: "COMMERCIAL", name: "محلات ومكاتب تجارية", icon: "Briefcase" },
  { id: "FARM", name: "مزارع واستراحات", icon: "Tractor" },
];

export const PURPOSE_TABS = [
  { id: "ALL", label: "الكل" },
  { id: "SALE", label: "عقارات للبيع" },
  { id: "RENT", label: "عقارات للإيجار" },
  { id: "LANDS", label: "أراضي ومخططات" },
];

export const MOCK_AGENCIES = [
  {
    id: "agency-1",
    name: "مكتب البحر الأحمر للخدمات العقارية",
    city: "بورتسودان",
    address: "شارع علي عبد اللطيف، جوار بنك الخرطوم",
    phone: "+249912345678",
    whatsapp: "249912345678",
    logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=200&q=80",
    verified: true,
    propertiesCount: 42,
    rating: 4.9,
    description: "أكبر وكالة عقارية معتمدة في ولاية البحر الأحمر، إدارة أملاك، توثيق عقود وبيع وشراء الشقق والفلل."
  },
  {
    id: "agency-2",
    name: "شركة النيلين للتطوير والمخططات العقارية",
    city: "شندي",
    address: "طريق التحدي، مقابل جامعة شندي",
    phone: "+249123456789",
    whatsapp: "249123456789",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80",
    verified: true,
    propertiesCount: 28,
    rating: 4.8,
    description: "متخصصون في بيع المخططات السكنية والزراعية المعتمدة رسمياً في ولاية نهر النيل."
  },
  {
    id: "agency-3",
    name: "مؤسسة الأهرامات للاستثمار العقاري",
    city: "مروي",
    address: "الشارع الرئيسي، مروي شرق",
    phone: "+249900112233",
    whatsapp: "249900112233",
    logo: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=200&q=80",
    verified: true,
    propertiesCount: 19,
    rating: 4.7,
    description: "عقارات سياحية واستثمارية ومنازل عائلية في منطقة الشمالية مع تسهيلات في الدفع."
  },
  {
    id: "agency-4",
    name: "دار السكن للوساطة العقارية",
    city: "عطبرة",
    address: "السوق الكبير، عمارة الفيحاء",
    phone: "+249966554433",
    whatsapp: "249966554433",
    logo: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=200&q=80",
    verified: true,
    propertiesCount: 34,
    rating: 4.9,
    description: "شقق مفروشة، إيجارات سنوية وشهرية، وبيع منازل في عطبرة والدامر وبربر."
  }
];

export const MOCK_PROPERTIES = [
  {
    id: "prop-1",
    title: "شقة مفروشة سوبر لوكس بإطلالة بحرية",
    purpose: "RENT",
    type: "APARTMENT",
    priceSDG: 1800000,
    rentFrequency: "شهري",
    city: "بورتسودان",
    neighborhood: "حي المطار",
    area: 160,
    rooms: 3,
    bathrooms: 2,
    isFurnished: true,
    isFeatured: true,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
    ],
    agency: MOCK_AGENCIES[0],
    whatsapp: "249912345678",
    phone: "+249912345678",
    postedAt: "منذ ساعتين",
    description: "شقة راقية مؤثثة بأحدث الأثاث العصري، تكييف اسبليت كامل، مصعد، مولد كهربائي متواصل يعمل 24 ساعة، حراسة وموقف سيارات خاص."
  },
  {
    id: "prop-2",
    title: "فيلا طابقين جديدة بتشطيب فندقي فاخر",
    purpose: "SALE",
    type: "VILLA",
    priceSDG: 195000000,
    city: "شندي",
    neighborhood: "حي البرقيق",
    area: 450,
    rooms: 6,
    bathrooms: 5,
    isFurnished: false,
    isFeatured: true,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    agency: MOCK_AGENCIES[1],
    whatsapp: "249123456789",
    phone: "+249123456789",
    postedAt: "اليوم",
    description: "فيلا دورين مبنية حديثاً وفق أعلى المعايير الهندسية، حديقة خارجية، حوش واسع يتسع لـ 3 سيارات، شهادة بحث ملك حر جاهزة للتسجيل الفوري."
  },
  {
    id: "prop-3",
    title: "قطعة أرض سكنية ناصية بمخطط الفردوس المعتمد",
    purpose: "SALE",
    type: "LAND",
    priceSDG: 38000000,
    city: "عطبرة",
    neighborhood: "حي المطار",
    area: 500,
    rooms: 0,
    bathrooms: 0,
    isFurnished: false,
    isFeatured: false,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
    ],
    agency: MOCK_AGENCIES[3],
    whatsapp: "249966554433",
    phone: "+249966554433",
    postedAt: "أمس",
    description: "قطعة أرض مميزة تفتح على شارعين ناصية (شارع 20م وشارع 15م)، قريبة من الخدمات والكهرباء والمياه، شهادة بحث درجة أولى خالية من الموانع."
  },
  {
    id: "prop-4",
    title: "عمارة استثمارية 4 طوابق (8 شقق جاهزة للتأجير)",
    purpose: "SALE",
    type: "BUILDING",
    priceSDG: 450000000,
    city: "بورتسودان",
    neighborhood: "ديم سواكن",
    area: 600,
    rooms: 16,
    bathrooms: 12,
    isFurnished: false,
    isFeatured: true,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    ],
    agency: MOCK_AGENCIES[0],
    whatsapp: "249912345678",
    phone: "+249912345678",
    postedAt: "منذ 3 أيام",
    description: "فرصة استثمارية ذهبية بعائد دوري ممتاز، عمارة 4 طوابق تحتوي كل طابق على شقتين واسعتين، تقع على شارع تجاري رئيسي."
  },
  {
    id: "prop-5",
    title: "مزرعة منتجة ومسيجة على ضفاف النيل مباشرة",
    purpose: "SALE",
    type: "FARM",
    priceSDG: 95000000,
    city: "مروي",
    neighborhood: "القرير",
    area: 12000,
    rooms: 2,
    bathrooms: 1,
    isFurnished: false,
    isFeatured: false,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    ],
    agency: MOCK_AGENCIES[2],
    whatsapp: "249900112233",
    phone: "+249900112233",
    postedAt: "منذ 4 أيام",
    description: "مزرعة نيلية بها أشجار نخيل ومنقة مثمرة، طلمبة مياه بالطاقة الشمسية، استراحة عائلية وحضائر جاهزة، ملكية حرة مسجلة."
  },
  {
    id: "prop-6",
    title: "منزل أرضي حوش واسع موقع هادئ",
    purpose: "RENT",
    type: "HOUSE",
    priceSDG: 1200000,
    rentFrequency: "شهري",
    city: "شندي",
    neighborhood: "مربع 1",
    area: 320,
    rooms: 4,
    bathrooms: 2,
    isFurnished: false,
    isFeatured: false,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    agency: MOCK_AGENCIES[1],
    whatsapp: "249123456789",
    phone: "+249123456789",
    postedAt: "منذ أسبوع",
    description: "منزل عائلي نظيف في موقع هادئ وآمن، قريب من المدارس والمستشفى، خزان مياه علوي وأرضي مع مضخة."
  }
];

export const PLATFORM_STATS = [
  { label: "عقار معروض للبيع والإيجار", value: "2,450+", icon: "Building" },
  { label: "مخطط وأرض سكنية موثقة", value: "1,180+", icon: "Layers" },
  { label: "مكتب عقاري معتمد", value: "185+", icon: "ShieldCheck" },
  { label: "عملية تواصل يومية", value: "8,900+", icon: "PhoneCall" },
];

export const PROPERTY_MANAGEMENT_PACKAGES = [
  {
    id: "pkg-rental",
    title: "باقة التحصيل والتأجير",
    target: "لأصحاب الشقق والمنازل الاستثمارية",
    badge: "الأكثر طلباً للمغتربين",
    fee: "نسبة رمزية من الإيجار الشهري (7% - 10%)",
    features: [
      "إيجاد وتدقيق بيانات المستأجرين والتأكد من هويتهم",
      "صياغة وتوثيق عقود الإيجار القانونية المعتمدة",
      "تحصيل الإيجار شهرياً وإيداعه مباشرة في حسابك (بنكك / فوري)",
      "متابعة سداد فواتير الكهرباء والمياه والرسوم المحلية",
      "إعادة تأجير العقار فور إخلائه بأسرع وقت لضمان استمرار الدخل"
    ],
    popular: true,
  },
  {
    id: "pkg-maintenance",
    title: "باقة الصيانة والتشغيل",
    target: "لأصحاب العمارات والمباني السكنية",
    badge: "حماية وحفظ قيمة العقار",
    fee: "حسب حجم المبنى وعدد الوحدات",
    features: [
      "فحص دوري شهري للتمديدات الكهربائية والصرف الصحي",
      "صيانة دورية للمصاعد والمولدات الكهربائية المركزية",
      "إشراف كامل على منظومات الطاقة الشمسية وتنظيف الألواح",
      "فريق طوارئ سريع للأعطال المفاجئة على مدار 24 ساعة",
      "تقارير صيانة مصورة ترسل للمالك مع فواتير الشراء المعتمدة"
    ],
    popular: false,
  },
  {
    id: "pkg-full",
    title: "باقة الإشراف الكامل VIP",
    target: "للمغتربين ورجال الأعمال وأصحاب المجمعات",
    badge: "راحة بال مطلقة",
    fee: "إدارة شاملة بعقد سنوي متكامل",
    features: [
      "تشمل كافة مزايا باقتي التحصيل والصيانة بالكامل",
      "حراسة أمنية ونظافة عامة دورية للمداخل والممرات",
      "سداد الضرائب والرسوم الحكومية وتجديد شهادات البحث",
      "تقرير مالي شهري مفصل بالأرباح والمصروفات وصافي الدخل",
      "مدير حساب عقاري مخصص متاح على مدار الساعة للتواصل المباشر"
    ],
    popular: false,
  }
];

export const MOCK_HOTELS = [
  {
    id: "hotel-1",
    name: "أجنحة البحر الأحمر الفندقية",
    city: "بورتسودان",
    address: "حي المطار، شارع الكورنيش الرئيسي",
    pricePerNightSDG: 120000,
    roomType: "جناح ديلوكس مفروش بالكامل (غرفة وصالة)",
    rating: 4.9,
    reviewsCount: 86,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "مولد كهربائي 24 ساعة",
      "إنترنت ستارلينك فائق السرعة",
      "تكييف اسبليت هادئ",
      "شاشة ذكية وخدمة غرف",
      "موقف سيارات مظلل ومحروس",
      "مطبخ تحضيري متكامل"
    ],
    hasGenerator24h: true,
    hasStarlinkWifi: true,
    phone: "+249912345678",
    whatsapp: "249912345678",
    description: "إقامة فندقية فاخرة ومستقرة في قلب بورتسودان، تيار كهربائي متواصل 24 ساعة وإنترنت ستارلينك عالي السرعة لإنجاز أعمالك براحة وأمان."
  },
  {
    id: "hotel-2",
    name: "فندق وأجنحة السلام بالاس",
    city: "عطبرة",
    address: "عطبرة، حي الداخلة، بالقرب من شارع النيل",
    pricePerNightSDG: 95000,
    roomType: "غرفة كينغ تنفيذية + بوفيه إفطار",
    rating: 4.8,
    reviewsCount: 64,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "مولد كهربائي 24 ساعة",
      "إنترنت واي فاي سريع",
      "إفطار صباحي مشمول",
      "مغسلة ملابس سريعة",
      "أمن وحراسة 24/7"
    ],
    hasGenerator24h: true,
    hasStarlinkWifi: true,
    phone: "+249966554433",
    whatsapp: "249966554433",
    description: "أحد أرقى الفنادق في ولاية نهر النيل، خدمات فندقية 4 نجوم ومطعم متميز مع أجواء هادئة للعائلات والزوار ورجال الأعمال."
  },
  {
    id: "hotel-3",
    name: "شقق النخبة الفندقية المفروشة",
    city: "شندي",
    address: "شندي، حي الديم، مقابل مستشفى المك نمر",
    pricePerNightSDG: 85000,
    roomType: "شقة فندقية عائلية (غرفتين + صالة + مطبخ)",
    rating: 4.7,
    reviewsCount: 52,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "طاقة شمسية ومولد احتياطي",
      "إنترنت ستارلينك مفتوح",
      "مطبخ عائلي مجهز بالكامل",
      "غسالة ملابس وثلاجة",
      "خزانات مياه ومضخات"
    ],
    hasGenerator24h: true,
    hasStarlinkWifi: true,
    phone: "+249123456789",
    whatsapp: "249123456789",
    description: "شقق فندقية واسعة ومؤثثة بأحدث التجهيزات للعائلات القادمة لمدينة شندي، موقع متميز وقريب من جميع الخدمات."
  },
  {
    id: "hotel-4",
    name: "منتجع وفندق البركل السياحي",
    city: "مروي",
    address: "مروي، سفح جبل البركل، بجوار نهر النيل",
    pricePerNightSDG: 110000,
    roomType: "شاليه سياحي بإطلالة على النيل وجبل البركل",
    rating: 4.9,
    reviewsCount: 94,
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "مولد كهربائي متواصل 24 ساعة",
      "إنترنت فضائي سريع",
      "مطعم يقدم أشهى الأطباق السودانية",
      "جلسات نيلية ساحرة",
      "تنظيم جولات سياحية للأهرامات"
    ],
    hasGenerator24h: true,
    hasStarlinkWifi: true,
    phone: "+249900112233",
    whatsapp: "249900112233",
    description: "أفضل وجهة للإقامة والسياحة والاسترخاء في الولاية الشمالية بجوار الأهرامات والنيل الخالد، خدمات فندقية راقية ومريحة."
  }
];
