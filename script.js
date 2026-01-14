// Language data
const translations = {
  en: {
    siteTitle: "Sobol Al Khair Humanitarian Foundation",
    aboutTitle: "About Us",
    aboutText: "Our staff consists of a group of academic competencies and practical experience. Our members hold specialized university degrees, qualifying them to provide the best services. We work tirelessly for aspiring children and youth with needs such as amputations and limb deficiencies, and the elderly who need care.",
    visionTitle: "Our Vision",
    visionText: "At Sobol Al Khair Humanitarian Foundation, we aspire to be a leading beacon in building a world that embraces people with disabilities, where They are considered active and influential partners in society. We strive to provide a comprehensive and integrated environment that enables them to regain their physical abilities and develop their psychological and social potential. We believe in the importance of opening doors to education, work, and creativity for them, so that together we can shape a more humane future where dignity is preserved and will flourishes. We are committed to promoting awareness and community participation, creating a society that celebrates diversity and enhances opportunities for all without exception.",
    achievementsTitle: "Our Achievements",
    proj1Title: "The Fajr Al-Amal Foundation Project",
    proj1Text: "300 prosthetic limbs of various types were fitted, significantly improving the mobility and independence of beneficiaries. The project was licensed by the Free Daraa Governorate Council.",
    proj2Title: "The Hayat Team Project",
    proj2Text: "250 prosthetic limbs were provided along with physical therapy and psychological support programs, helping beneficiaries regain their self-confidence and their standing in society. This project was licensed by the Union of Civil Society Organizations in Turkey.",
    docTitle: "Get to know us better",
    articlesTitle: "Articles about the team's work",
    article1: "Akhbar Alaan: Life Project",
    article2: "Al Khaleej Online: Fajr Al Amal",
    article3: "Iqtisad.net: Hayat Project",
    mediaTitle: "Media Reports",
    pdfButton: "Get to Know Us"
  },
  ar: {
    siteTitle: "مؤسسة سبل الخير الإنسانية",
    aboutTitle: "من نحن",
    aboutText: "يتكون طاقمنا من مجموعة من الكفاءات الأكاديمية والخبرة العملية. يحمل أعضاؤنا شهادات جامعية متخصصة، مما يؤهلهم لتقديم أفضل الخدمات. نعمل بلا كلل من أجل الأطفال والشباب الطموحين ذوي الاحتياجات الخاصة مثل البتر ونقص الأطراف، وكبار السن الذين يحتاجون إلى رعاية.",
    visionTitle: "رؤيتنا",
    visionText: "في مؤسسة سبل الخير الإنسانية، نطمح لأن نكون منارة رائدة في بناء عالم يحتضن الأشخاص ذوي الإعاقة، حيث يُعتبرون شركاء فاعلين ومؤثرين في المجتمع. نسعى لتوفير بيئة شاملة ومتكاملة تمكنهم من استعادة قدراتهم الجسدية وتنمية إمكاناتهم النفسية والاجتماعية. نؤمن بأهمية فتح الأبواب أمامهم في التعليم والعمل والإبداع، لنصنع معاً مستقبلاً أكثر إنسانية تحفظ فيه الكرامة ويزدهر فيه الإرادة. ونحن ملتزمون بتعزيز الوعي والمشاركة المجتمعية، وبناء مجتمع يحتفي بالتنوع ويوفر الفرص للجميع دون استثناء.",
    achievementsTitle: "إنجازاتنا",
    proj1Title: "مشروع مؤسسة فجر الأمل",
    proj1Text: "تم تركيب 300 طرف صناعي بأنواع مختلفة، مما حسّن بشكل كبير من حركة واعتماد المستفيدين على أنفسهم. تم ترخيص المشروع من قبل مجلس محافظة درعا الحرة.",
    proj2Title: "مشروع فريق حياة",
    proj2Text: "تم توفير 250 طرفًا صناعيًا مع برامج العلاج الطبيعي والدعم النفسي، مما ساعد المستفيدين على استعادة ثقتهم بأنفسهم ومكانتهم في المجتمع. تم ترخيص هذا المشروع من قبل اتحاد منظمات المجتمع المدني في تركيا.",
    docTitle: "تعرف علينا أكثر",
    articlesTitle: "مقالات عن عمل الفريق",
    article1: "أخبار الآن: مشروع حياة",
    article2: "الخليج أونلاين: فجر الأمل",
    article3: "اقتصاد نت: مشروع حياة",
    mediaTitle: "تقارير إعلامية",
    pdfButton: "تعرف علينا أكثر"
  }
};

let currentLang = 'en';

// DOM Elements
const langToggle = document.getElementById('langToggle');
const htmlTag = document.getElementById('htmlTag');
const siteTitle = document.getElementById('siteTitle');
const aboutTitle = document.getElementById('aboutTitle');
const aboutText = document.getElementById('aboutText');
const visionTitle = document.getElementById('visionTitle');
const visionText = document.getElementById('visionText');
const achievementsTitle = document.getElementById('achievementsTitle');
const proj1Title = document.getElementById('proj1Title');
const proj1Text = document.getElementById('proj1Text');
const proj2Title = document.getElementById('proj2Title');
const proj2Text = document.getElementById('proj2Text');
const docTitle = document.getElementById('docTitle');
const articlesTitle = document.getElementById('articlesTitle');
const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');
const article3 = document.getElementById('article3');
const mediaTitle = document.getElementById('mediaTitle');
const pdfButton = document.getElementById('pdfButton');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

// Update content based on language
function updateLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  siteTitle.textContent = t.siteTitle;
  aboutTitle.textContent = t.aboutTitle;
  aboutText.textContent = t.aboutText;
  visionTitle.textContent = t.visionTitle;
  visionText.textContent = t.visionText;
  achievementsTitle.textContent = t.achievementsTitle;
  proj1Title.textContent = t.proj1Title;
  proj1Text.textContent = t.proj1Text;
  proj2Title.textContent = t.proj2Title;
  proj2Text.textContent = t.proj2Text;
  docTitle.textContent = t.docTitle;
  articlesTitle.textContent = t.articlesTitle;
  article1.textContent = t.article1;
  article2.textContent = t.article2;
  article3.textContent = t.article3;
  mediaTitle.textContent = t.mediaTitle;
  pdfButton.textContent = t.pdfButton;

  if (lang === 'ar') {
    htmlTag.setAttribute('lang', 'ar');
    htmlTag.setAttribute('dir', 'rtl');
    langToggle.textContent = 'English';
  } else {
    htmlTag.setAttribute('lang', 'en');
    htmlTag.setAttribute('dir', 'ltr');
    langToggle.textContent = 'العربية';
  }
}

// Toggle language
langToggle.addEventListener('click', () => {
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  updateLanguage(newLang);
});

// Copy contact info
phone.addEventListener('click', () => {
  navigator.clipboard.writeText(phone.textContent).then(() => {
    alert('Phone number copied to clipboard');
  });
});

email.addEventListener('click', () => {
  navigator.clipboard.writeText(email.textContent).then(() => {
    alert('Email copied to clipboard');
  });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Initialize
updateLanguage('en');