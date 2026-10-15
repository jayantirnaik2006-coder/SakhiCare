const featurePages = new Set([
  "home",
  "symptoms",
  "journal",
  "cycle",
  "pcos",
  "care",
  "library",
  "tips",
  "hospital",
  "emergency",
  "privacy",
  "account",
  "dashboard",
  "profile"
]);

const navigationCopy = {
  en: {
    explore: "Explore features",
    home: "Home",
    symptoms: "Symptom checker",
    journal: "Symptom journal",
    cycle: "Cycle tracker & reminders",
    pcos: "PCOS guide",
    care: "Care guidance",
    library: "Health library",
    tips: "Women’s health tips",
    hospital: "Nearby hospitals",
    emergency: "Emergency help",
    privacy: "Privacy controls",
    account: "Account & data transfer",
    dashboard: "My dashboard",
    profile: "My profile",
    profileLabel: "Profile",
    directoryEyebrow: "YOUR HEALTH, YOUR WAY",
    directoryTitle: "Explore SakhiCare",
    directoryDescription: "Choose a feature to open it on its own page.",
    featurePagesLabel: "Feature pages",
    pageTitles: {
      home: "Women's Health Companion",
      symptoms: "Symptom Checker",
      journal: "Symptom Journal",
      cycle: "Cycle Tracker & Reminders",
      pcos: "PCOS Guide",
      care: "Care Guidance",
      library: "Health Library",
      tips: "Women's Health Tips",
      hospital: "Nearby Hospitals",
      emergency: "Emergency Help",
      privacy: "Privacy Controls",
      account: "Account & Data Transfer",
      dashboard: "My Dashboard",
      profile: "My Profile"
    }
  },
  hi: {
    explore: "सुविधाएँ देखें",
    home: "होम",
    symptoms: "लक्षण जाँच",
    journal: "लक्षण डायरी",
    cycle: "चक्र ट्रैकर और रिमाइंडर",
    pcos: "PCOS मार्गदर्शिका",
    care: "देखभाल मार्गदर्शन",
    library: "स्वास्थ्य जानकारी",
    tips: "महिला स्वास्थ्य सुझाव",
    hospital: "पास के अस्पताल",
    emergency: "आपातकालीन सहायता",
    privacy: "गोपनीयता नियंत्रण",
    account: "खाता और डेटा स्थानांतरण",
    dashboard: "मेरा डैशबोर्ड",
    profile: "मेरी प्रोफ़ाइल",
    profileLabel: "प्रोफ़ाइल",
    directoryEyebrow: "आपका स्वास्थ्य, आपकी पसंद",
    directoryTitle: "SakhiCare देखें",
    directoryDescription: "किसी सुविधा को उसके अलग पेज पर खोलने के लिए चुनें।",
    featurePagesLabel: "सुविधा पेज",
    pageTitles: {
      home: "महिला स्वास्थ्य साथी",
      symptoms: "लक्षण जाँच",
      journal: "लक्षण डायरी",
      cycle: "चक्र ट्रैकर और रिमाइंडर",
      pcos: "PCOS मार्गदर्शिका",
      care: "देखभाल मार्गदर्शन",
      library: "स्वास्थ्य जानकारी",
      tips: "महिला स्वास्थ्य सुझाव",
      hospital: "पास के अस्पताल",
      emergency: "आपातकालीन सहायता",
      privacy: "गोपनीयता नियंत्रण",
      account: "खाता और डेटा स्थानांतरण",
      dashboard: "मेरा डैशबोर्ड",
      profile: "मेरी प्रोफ़ाइल"
    }
  },
  kn: {
    explore: "ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನೋಡಿ",
    home: "ಮುಖಪುಟ",
    symptoms: "ಲಕ್ಷಣ ಪರಿಶೀಲನೆ",
    journal: "ಲಕ್ಷಣ ದಿನಚರಿ",
    cycle: "ಋತುಚಕ್ರ ಟ್ರ್ಯಾಕರ್ ಮತ್ತು ಜ್ಞಾಪನೆಗಳು",
    pcos: "PCOS ಮಾರ್ಗದರ್ಶಿ",
    care: "ಆರೈಕೆ ಮಾರ್ಗದರ್ಶನ",
    library: "ಆರೋಗ್ಯ ಮಾಹಿತಿ",
    tips: "ಮಹಿಳಾ ಆರೋಗ್ಯ ಸಲಹೆಗಳು",
    hospital: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು",
    emergency: "ತುರ್ತು ಸಹಾಯ",
    privacy: "ಗೌಪ್ಯತೆ ನಿಯಂತ್ರಣಗಳು",
    account: "ಖಾತೆ ಮತ್ತು ಡೇಟಾ ವರ್ಗಾವಣೆ",
    dashboard: "ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    profile: "ನನ್ನ ಪ್ರೊಫೈಲ್",
    profileLabel: "ಪ್ರೊಫೈಲ್",
    directoryEyebrow: "ನಿಮ್ಮ ಆರೋಗ್ಯ, ನಿಮ್ಮ ಆಯ್ಕೆ",
    directoryTitle: "SakhiCare ಅನ್ವೇಷಿಸಿ",
    directoryDescription: "ಪ್ರತ್ಯೇಕ ಪುಟದಲ್ಲಿ ತೆರೆಯಲು ವೈಶಿಷ್ಟ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    featurePagesLabel: "ವೈಶಿಷ್ಟ್ಯ ಪುಟಗಳು",
    pageTitles: {
      home: "ಮಹಿಳಾ ಆರೋಗ್ಯ ಸಂಗಾತಿ",
      symptoms: "ಲಕ್ಷಣ ಪರಿಶೀಲನೆ",
      journal: "ಲಕ್ಷಣ ದಿನಚರಿ",
      cycle: "ಋತುಚಕ್ರ ಟ್ರ್ಯಾಕರ್ ಮತ್ತು ಜ್ಞಾಪನೆಗಳು",
      pcos: "PCOS ಮಾರ್ಗದರ್ಶಿ",
      care: "ಆರೈಕೆ ಮಾರ್ಗದರ್ಶನ",
      library: "ಆರೋಗ್ಯ ಮಾಹಿತಿ",
      tips: "ಮಹಿಳಾ ಆರೋಗ್ಯ ಸಲಹೆಗಳು",
      hospital: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು",
      emergency: "ತುರ್ತು ಸಹಾಯ",
      privacy: "ಗೌಪ್ಯತೆ ನಿಯಂತ್ರಣಗಳು",
      account: "ಖಾತೆ ಮತ್ತು ಡೇಟಾ ವರ್ಗಾವಣೆ",
      dashboard: "ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      profile: "ನನ್ನ ಪ್ರೊಫೈಲ್"
    }
  }
};

const requestedPage = new URLSearchParams(window.location.search).get("page");
const currentPage = featurePages.has(requestedPage) ? requestedPage : "home";

document.documentElement.dataset.page = currentPage;

document.querySelectorAll("[data-page-container], [data-page-feature]").forEach(element => {
  const availablePages = element.dataset.pageContainer || element.dataset.pageFeature;
  element.hidden = !availablePages.split(/\s+/).includes(currentPage);
});

document.querySelectorAll("[data-page-link]").forEach(link => {
  if (link.dataset.pageLink === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

function updateNavigationLanguage(language) {
  const copy = navigationCopy[language] || navigationCopy.en;
  document.querySelectorAll("[data-navigation-copy]").forEach(element => {
    element.textContent = copy[element.dataset.navigationCopy];
  });
  document.querySelector(".page-menu-links").setAttribute("aria-label", copy.featurePagesLabel);
  document.querySelector(".directory-grid").setAttribute("aria-label", copy.featurePagesLabel);
  document.title = `${copy.pageTitles[currentPage]} | SakhiCare AI`;
}
