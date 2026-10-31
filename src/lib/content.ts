export type Locale = "en" | "ar";

export const copy = {
  en: {
    nav: { about: "About", work: "Selected work", expertise: "Expertise", contact: "Contact" },
    eyebrow: "SOFTWARE ENGINEER · BACKEND-LEANING FULL STACK",
    title: "I build software that solves real problems.",
    intro: "I’m Abdulbasit — a developer focused on thoughtful web experiences, reliable backend systems, and turning complex requirements into useful products.",
    cta: "Explore my work", contact: "Let’s talk",
    availability: "Open to opportunities & freelance projects",
    section: { about: "A little about me", work: "Selected work", expertise: "What I work with", process: "How I work", contact: "Have a project in mind?" },
    aboutTitle: "Practical engineering, from interface to database.",
    aboutText: "I enjoy working across the stack: understanding the real-world problem, shaping a clear system design, and building an interface that makes the solution easy to use. My strongest interests are backend engineering, data-driven applications, and business software.",
    aboutNote: "Currently deepening my skills in .NET, modern web development, and software architecture.",
    projects: [
      { n:"01", type:"BUSINESS SOFTWARE · .NET", title:"Point of Sale System", desc:"An MVP concept for a desktop point-of-sale product, with a focus on fast cashier workflows, inventory, and accounting foundations.", stack:["C#","WPF","PostgreSQL"], status:"In development" },
      { n:"02", type:"PUBLIC SECTOR · SYSTEM DESIGN", title:"Worker Registration Platform", desc:"Analysis and design of a municipal system for registering workers, managing records, issuing cards, and supporting operational reporting.", stack:["Blazor Server","EF Core","PostgreSQL"], status:"Academic project" },
      { n:"03", type:"WEB · CLIENT PROJECT", title:"Business Landing Page", desc:"A responsive business website designed to present services clearly, build trust, and make customer enquiries straightforward.", stack:["Next.js","React","Tailwind CSS"], status:"Client work" }
    ],
    skills: [{title:"Backend & data",items:"C# · .NET · ASP.NET Core · PostgreSQL · EF Core"},{title:"Frontend",items:"React · Next.js · TypeScript · Tailwind CSS"},{title:"Engineering",items:"REST APIs · OOP · SOLID · DI · System Design"},{title:"Tools & workflow",items:"Git · GitHub · Linux · Agile · Figma"}],
    steps:[["01","Understand","Clarify the problem, users, constraints, and what success means."],["02","Design","Shape the data model, architecture, and a focused user experience."],["03","Build","Deliver in small iterations with readable, maintainable code."],["04","Improve","Test, learn from feedback, and refine the product."]],
    contactText:"Whether you’re building a product, improving an existing system, or need a website for your business, I’d be glad to hear about it.",
    emailLabel:"EMAIL", email:"hello@abdulbasit.dev", footer:"Designed and built with care."
  },
  ar: {
    nav: { about: "نبذة عني", work: "أعمال مختارة", expertise: "الخبرات", contact: "تواصل" },
    eyebrow: "مهندس برمجيات · متخصص في الأنظمة الخلفية",
    title: "أبني برمجيات تحل مشكلات حقيقية.",
    intro: "أنا عبدالباسط، مطور برمجيات أهتم ببناء تجارب ويب مدروسة، وأنظمة خلفية موثوقة، وتحويل المتطلبات المعقدة إلى منتجات عملية.",
    cta: "اكتشف أعمالي", contact: "لنتحدث",
    availability: "متاح للفرص المهنية ومشاريع العمل الحر",
    section: { about: "نبذة مختصرة", work: "أعمال مختارة", expertise: "مجالات عملي", process: "منهجية عملي", contact: "هل لديك مشروع؟" },
    aboutTitle: "هندسة عملية، من واجهة المستخدم إلى قاعدة البيانات.",
    aboutText: "أستمتع بالعمل عبر مختلف طبقات النظام: فهم المشكلة الواقعية، ووضع تصميم واضح للحل، ثم بناء واجهة تجعل استخدامه سهلًا. تتركز اهتماماتي في تطوير الأنظمة الخلفية، والتطبيقات المعتمدة على البيانات، وبرمجيات الأعمال.",
    aboutNote: "أعمل حاليًا على تطوير مهاراتي في .NET وتطوير الويب الحديث وهندسة البرمجيات.",
    projects: [
      { n:"01", type:"برمجيات الأعمال · .NET", title:"نظام نقاط البيع", desc:"تصور لنظام نقاط بيع مكتبي، يركز على سرعة عمليات الكاشير وإدارة المخزون وتأسيس المعالجة المحاسبية.", stack:["C#","WPF","PostgreSQL"], status:"قيد التطوير" },
      { n:"02", type:"القطاع العام · تحليل الأنظمة", title:"منصة تسجيل العمالة", desc:"تحليل وتصميم نظام بلدي لتسجيل العمالة وإدارة بياناتها وإصدار البطاقات ودعم التقارير التشغيلية.", stack:["Blazor Server","EF Core","PostgreSQL"], status:"مشروع أكاديمي" },
      { n:"03", type:"ويب · مشروع عميل", title:"موقع تعريفي لشركة", desc:"موقع أعمال متجاوب يعرض الخدمات بوضوح، ويعزز الثقة، ويسهّل تواصل العملاء والاستفسار.", stack:["Next.js","React","Tailwind CSS"], status:"عمل لعميل" }
    ],
    skills: [{title:"الخلفية والبيانات",items:"C# · .NET · ASP.NET Core · PostgreSQL · EF Core"},{title:"الواجهات",items:"React · Next.js · TypeScript · Tailwind CSS"},{title:"هندسة البرمجيات",items:"REST APIs · OOP · SOLID · DI · تصميم الأنظمة"},{title:"الأدوات وسير العمل",items:"Git · GitHub · Linux · Agile · Figma"}],
    steps:[["01","الفهم","تحديد المشكلة والمستخدمين والقيود ومعايير النجاح."],["02","التصميم","بناء نموذج البيانات والمعمارية وتجربة استخدام واضحة."],["03","التنفيذ","التطوير على مراحل صغيرة بشيفرة واضحة وقابلة للصيانة."],["04","التحسين","الاختبار والاستفادة من الملاحظات وتطوير المنتج."]],
    contactText:"سواء كنت تعمل على منتج جديد، أو تطور نظامًا قائمًا، أو تحتاج إلى موقع إلكتروني لنشاطك التجاري، يسعدني معرفة المزيد.",
    emailLabel:"البريد الإلكتروني", email:"hello@abdulbasit.dev", footer:"صُمم وطُوّر بعناية."
  }
} as const;