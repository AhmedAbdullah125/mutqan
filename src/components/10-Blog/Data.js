export const blogCategories = [
    { id: 'programming', name: 'البرمجة والتطوير' },
    { id: 'design', name: 'التصميم والواجهات' },
    { id: 'marketing', name: 'التسويق الرقمي' },
    { id: 'business', name: 'حلول الأعمال' },
    { id: 'ai', name: 'الذكاء الاصطناعي' },
    { id: 'tutorials', name: 'الدروس التعليمية' }
  ];
  
  export const blogTags = [
    'تطوير الويب',
    'تطبيقات الموبايل',
    'تجربة المستخدم',
    'التسويق الإلكتروني',
    'الأعمال الرقمية',
    'برمجة',
    'تصميم',
    'ذكاء اصطناعي',
    'SEO',
    'استراتيجيات رقمية'
  ];
  
  export const articles = [
    {
      id: 1,
      title: "كيف تبني هوية رقمية قوية لشركتك؟",
      excerpt: "دليل شامل لبناء هوية رقمية مميزة تساعد شركتك على النمو في العالم الرقمي...",
      date: "2024-01-15",
      readTime: "7 دقائق",
      category: "marketing",
      tags: ["التسويق الإلكتروني", "الأعمال الرقمية"],
      thumbnail: "/images/blog/digital-identity.jpg",
      slug: "building-strong-digital-identity"
    },
    {
      id: 2,
      title: "أحدث تقنيات الذكاء الاصطناعي في تطوير الأعمال",
      excerpt: "استكشف كيف يمكن للذكاء الاصطناعي تحسين كفاءة عملك وزيادة الإنتاجية...",
      date: "2024-01-12",
      readTime: "5 دقائق",
      category: "ai",
      tags: ["ذكاء اصطناعي", "تطوير الأعمال"],
      thumbnail: "/images/blog/ai-business.jpg",
      slug: "ai-in-business-development"
    },
    {
      id: 3,
      title: "تصميم واجهات المستخدم المتجاوبة",
      excerpt: "دليل شامل لتصميم واجهات مستخدم جذابة وسهلة الاستخدام لمختلف الأجهزة...",
      date: "2024-01-10",
      readTime: "6 دقائق",
      category: "design",
      tags: ["تصميم", "تجربة المستخدم"],
      thumbnail: "/images/blog/responsive-design.jpg",
      slug: "responsive-ui-design"
    },
    // Add more articles...
  ];
  
  export const featuredArticles = articles.slice(0,6);
  