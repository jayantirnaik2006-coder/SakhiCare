const $ = (id) => document.getElementById(id);

const translations = {
  en: {
    eyebrow: "YOUR PERSONAL HEALTH COMPANION",
    heroTitle: 'Your health.<br><span>Your voice.</span>',
    heroDesc: "A safe, supportive space to understand symptoms, learn about PCOS, and track your cycle.",
    heroButton: "Explore your health →",
    notice: "SakhiCare provides educational guidance, not a diagnosis. Your symptoms deserve care and attention.",
    symptomEyebrow: "LET'S TALK",
    symptomTitle: "How are you feeling today?",
    symptomDesc: "Describe what you are experiencing in your own words.",
    symptomLabel: "Tell us about your symptoms",
    placeholder: "Example: My periods are irregular and I have acne...",
    privacy: "🔒 Typed text is not saved by SakhiCare. Voice recognition may use your browser’s online service.",
    analyze: "Understand my symptoms →",
    learnEyebrow: "LEARN & UNDERSTAND",
    learnTitle: "Knowledge is self-care.",
    learnDesc: "Small steps towards understanding your body.",
    pcosTitle: "Understanding PCOS",
    pcosDesc: "Learn about common symptoms, what PCOS means, and when to talk to a healthcare professional.",
    pcosButton: "Explore PCOS ↗",
    cycleTitle: "Your cycle calendar",
    cycleDesc: "Record the first day of your last period and keep a simple personal record.",
    dateLabel: "First day of last period",
    lengthLabel: "Usual cycle length (days)",
    saveCycle: "Save cycle details",
    careTitle: "When to seek help",
    careDesc: "Know which warning signs need prompt medical attention. You deserve to be heard.",
    careButton: "View care guidance ↗",
    closingTitle: "Your body deserves understanding, not silence.",
    closingDesc: "Take things one step at a time. Asking for help is strength.",
    footer: "An educational hackathon prototype. Not a substitute for professional medical care."
  },
  kn: {
    eyebrow: "ನಿಮ್ಮ ಆರೋಗ್ಯದ ಸಂಗಾತಿ",
    heroTitle: 'ನಿಮ್ಮ ಆರೋಗ್ಯ.<br><span>ನಿಮ್ಮ ಧ್ವನಿ.</span>',
    heroDesc: "ಲಕ್ಷಣಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು, PCOS ಬಗ್ಗೆ ತಿಳಿಯಲು ಮತ್ತು ಋತುಚಕ್ರವನ್ನು ದಾಖಲಿಸಲು ಸಹಾಯಕ ಸ್ಥಳ.",
    heroButton: "ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ತಿಳಿಯಿರಿ →",
    notice: "SakhiCare ಶೈಕ್ಷಣಿಕ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ; ರೋಗನಿರ್ಣಯ ಮಾಡುವುದಿಲ್ಲ. ನಿಮ್ಮ ಲಕ್ಷಣಗಳಿಗೆ ಸೂಕ್ತ ಗಮನ ಮತ್ತು ಆರೈಕೆ ಅಗತ್ಯ.",
    symptomEyebrow: "ಮಾತನಾಡೋಣ",
    symptomTitle: "ಇಂದು ನಿಮಗೆ ಹೇಗನಿಸುತ್ತಿದೆ?",
    symptomDesc: "ನಿಮಗೆ ಆಗುತ್ತಿರುವುದನ್ನು ನಿಮ್ಮದೇ ಪದಗಳಲ್ಲಿ ಬರೆಯಿರಿ.",
    symptomLabel: "ನಿಮ್ಮ ಲಕ್ಷಣಗಳನ್ನು ತಿಳಿಸಿ",
    placeholder: "ಉದಾಹರಣೆ: ನನ್ನ ಋತುಚಕ್ರ ಅನಿಯಮಿತವಾಗಿದೆ...",
    privacy: "🔒 ನೀವು ಟೈಪ್ ಮಾಡಿದ ಪಠ್ಯವನ್ನು SakhiCare ಉಳಿಸುವುದಿಲ್ಲ. ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಬ್ರೌಸರ್‌ನ ಆನ್‌ಲೈನ್ ಸೇವೆಯನ್ನು ಬಳಸಬಹುದು.",
    analyze: "ಲಕ್ಷಣಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ →",
    learnEyebrow: "ತಿಳಿಯಿರಿ ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
    learnTitle: "ಜ್ಞಾನವೇ ಸ್ವಯಂ ಆರೈಕೆ.",
    learnDesc: "ನಿಮ್ಮ ದೇಹವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಣ್ಣ ಹೆಜ್ಜೆಗಳು.",
    pcosTitle: "PCOS ಬಗ್ಗೆ ತಿಳಿಯಿರಿ",
    pcosDesc: "PCOS ನ ಸಾಮಾನ್ಯ ಲಕ್ಷಣಗಳು ಮತ್ತು ವೈದ್ಯರನ್ನು ಯಾವಾಗ ಸಂಪರ್ಕಿಸಬೇಕು ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.",
    pcosButton: "PCOS ಬಗ್ಗೆ ತಿಳಿಯಿರಿ ↗",
    cycleTitle: "ನಿಮ್ಮ ಋತುಚಕ್ರದ ಕ್ಯಾಲೆಂಡರ್",
    cycleDesc: "ಕೊನೆಯ ಋತುಚಕ್ರದ ಮೊದಲ ದಿನವನ್ನು ದಾಖಲಿಸಿ.",
    dateLabel: "ಕೊನೆಯ ಋತುಚಕ್ರದ ಮೊದಲ ದಿನ",
    lengthLabel: "ಸಾಮಾನ್ಯ ಋತುಚಕ್ರದ ಅವಧಿ (ದಿನಗಳು)",
    saveCycle: "ವಿವರಗಳನ್ನು ಉಳಿಸಿ",
    careTitle: "ವೈದ್ಯಕೀಯ ಸಹಾಯ ಯಾವಾಗ ಬೇಕು?",
    careDesc: "ತಕ್ಷಣ ವೈದ್ಯಕೀಯ ಗಮನ ಅಗತ್ಯವಿರುವ ಎಚ್ಚರಿಕೆಯ ಲಕ್ಷಣಗಳನ್ನು ತಿಳಿಯಿರಿ.",
    careButton: "ಆರೈಕೆ ಮಾರ್ಗದರ್ಶನ ನೋಡಿ ↗",
    closingTitle: "ನಿಮ್ಮ ದೇಹಕ್ಕೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವಿಕೆ ಬೇಕು, ಮೌನವಲ್ಲ.",
    closingDesc: "ಒಂದು ಹೆಜ್ಜೆಯಂತೆ ಮುಂದುವರಿಯಿರಿ. ಸಹಾಯ ಕೇಳುವುದು ಧೈರ್ಯ.",
    footer: "ಶೈಕ್ಷಣಿಕ ಹ್ಯಾಕಥಾನ್ ಮಾದರಿ. ವೈದ್ಯಕೀಯ ಆರೈಕೆಗೆ ಪರ್ಯಾಯವಲ್ಲ."
  },
  hi: {
    eyebrow: "आपकी स्वास्थ्य साथी",
    heroTitle: 'आपका स्वास्थ्य।<br><span>आपकी आवाज़।</span>',
    heroDesc: "लक्षणों को समझने, PCOS के बारे में जानने और मासिक चक्र का रिकॉर्ड रखने के लिए एक सहयोगी जगह।",
    heroButton: "अपने स्वास्थ्य को समझें →",
    notice: "SakhiCare शैक्षिक जानकारी देता है, निदान नहीं करता। आपके लक्षण उचित देखभाल के योग्य हैं।",
    symptomEyebrow: "आइए बात करें",
    symptomTitle: "आज आप कैसा महसूस कर रही हैं?",
    symptomDesc: "आप जो अनुभव कर रही हैं, उसे अपने शब्दों में लिखें।",
    symptomLabel: "अपने लक्षण बताएं",
    placeholder: "उदाहरण: मेरे पीरियड्स अनियमित हैं और मुंहासे हैं...",
    privacy: "🔒 SakhiCare आपके लिखे टेक्स्ट को सहेजता नहीं है। वॉइस पहचान ब्राउज़र की ऑनलाइन सेवा का उपयोग कर सकती है।",
    analyze: "लक्षणों को समझें →",
    learnEyebrow: "जानें और समझें",
    learnTitle: "जानकारी ही आत्म-देखभाल है।",
    learnDesc: "अपने शरीर को समझने की दिशा में छोटे कदम।",
    pcosTitle: "PCOS को समझें",
    pcosDesc: "PCOS के सामान्य लक्षणों और डॉक्टर से कब संपर्क करना चाहिए, यह जानें।",
    pcosButton: "PCOS के बारे में जानें ↗",
    cycleTitle: "आपका चक्र कैलेंडर",
    cycleDesc: "अपने पिछले पीरियड्स के पहले दिन का रिकॉर्ड रखें।",
    dateLabel: "पिछले पीरियड्स का पहला दिन",
    lengthLabel: "सामान्य चक्र की अवधि (दिन)",
    saveCycle: "चक्र का विवरण सहेजें",
    careTitle: "मदद कब लें?",
    careDesc: "जानें कि किन चेतावनी संकेतों में तुरंत चिकित्सा सहायता लेनी चाहिए।",
    careButton: "देखभाल की जानकारी देखें ↗",
    closingTitle: "आपके शरीर को समझ की ज़रूरत है, चुप्पी की नहीं।",
    closingDesc: "एक-एक कदम आगे बढ़ें। मदद मांगना साहस है।",
    footer: "शैक्षिक हैकाथॉन प्रोटोटाइप। पेशेवर चिकित्सा देखभाल का विकल्प नहीं।"
  }
};

function setText(id, value) {
  $(id).textContent = value;
}

function setHTML(id, value) {
  $(id).innerHTML = value;
}

function changeLanguage() {
  const lang = $("language").value;
  const t = translations[lang];

  setText("eyebrow", t.eyebrow);
  setHTML("heroTitle", t.heroTitle);
  setText("heroDesc", t.heroDesc);
  setText("heroButton", t.heroButton);
  setText("noticeText", t.notice);
  setText("symptomEyebrow", t.symptomEyebrow);
  setText("symptomTitle", t.symptomTitle);
  setText("symptomDesc", t.symptomDesc);
  setText("symptomLabel", t.symptomLabel);
  $("symptomInput").placeholder = t.placeholder;
  setText("privacyHint", t.privacy);
  setText("analyzeButton", t.analyze);
  setText("learnEyebrow", t.learnEyebrow);
  setText("learnTitle", t.learnTitle);
  setText("learnDesc", t.learnDesc);
  setText("pcosTitle", t.pcosTitle);
  setText("pcosDesc", t.pcosDesc);
  setText("pcosButton", t.pcosButton);
  setText("cycleTitle", t.cycleTitle);
  setText("cycleDesc", t.cycleDesc);
  setText("dateLabel", t.dateLabel);
  setText("lengthLabel", t.lengthLabel);
  setText("saveCycle", t.saveCycle);
  setText("careTitle", t.careTitle);
  setText("careDesc", t.careDesc);
  setText("careButton", t.careButton);
  setText("closingTitle", t.closingTitle);
  setText("closingDesc", t.closingDesc);
  setText("footerText", t.footer);

  $("result").classList.add("hidden");
  $("pcosInfo").classList.add("hidden");
  $("careInfo").classList.add("hidden");
  $("cycleResult").classList.add("hidden");

  try {
    localStorage.setItem("sakhiLanguage", lang);
  } catch (error) {
    console.error("SakhiCare could not save the language preference:", error);
  }
  updateNavigationLanguage(lang);
}

try {
  const savedLanguage = localStorage.getItem("sakhiLanguage");
  if (translations[savedLanguage]) $("language").value = savedLanguage;
} catch (error) {
  console.error("SakhiCare could not restore the language preference:", error);
}

$("language").addEventListener("change", changeLanguage);
changeLanguage();

function showResult(title, message, urgent = false, tips = [], pcosSignals = null) {
  const result = $("result");
  result.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent = title;
  result.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  result.appendChild(paragraph);

  if (tips.length) {
    const list = document.createElement("ul");

    tips.forEach((tip) => {
      const item = document.createElement("li");
      item.textContent = tip;
      list.appendChild(item);
    });

    result.appendChild(list);
  }

  if (pcosSignals) {
    const mappingHeading = document.createElement("h4");
    mappingHeading.textContent = featureText("pcosMappingTitle");
    result.appendChild(mappingHeading);

    const mappingItems = [
      ["ovulatoryPattern", "pcosMappingOvulatory"],
      ["hyperandrogenism", "pcosMappingAndrogen"],
      ["unusuallyHeavyFlow", "pcosMappingHeavyFlow"],
      ["metabolicIndicators", "pcosMappingMetabolic"],
      ["pelvicDiscomfort", "pcosMappingPelvic"]
    ];
    const mappingList = document.createElement("ul");
    let hasMappedSignal = false;

    mappingItems.forEach(([signal, copyKey]) => {
      if (!pcosSignals[signal]) return;
      hasMappedSignal = true;
      const item = document.createElement("li");
      item.textContent = featureText(copyKey);
      mappingList.appendChild(item);
    });

    if (hasMappedSignal) {
      result.appendChild(mappingList);
    } else {
      const noSignal = document.createElement("p");
      noSignal.textContent = featureText("pcosMappingNone");
      result.appendChild(noSignal);
    }

    const ovarianNote = document.createElement("p");
    ovarianNote.textContent = featureText("pcosMappingOvarian");
    result.appendChild(ovarianNote);

    const criteriaNote = document.createElement("p");
    criteriaNote.textContent = featureText("pcosMappingCriteria");
    result.appendChild(criteriaNote);
  }

  const disclaimer = document.createElement("p");
  disclaimer.textContent = featureText("symptomDisclaimer");
  result.appendChild(disclaimer);

  result.classList.remove("hidden", "urgent", "safe");
  result.classList.add(urgent ? "urgent" : "safe");
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

$("analyzeButton").addEventListener("click", analyzeSymptoms);

function analyzeSymptoms() {
  const text = $("symptomInput").value.trim().toLowerCase();
  const lang = $("language").value;

  if (!text) {
    showResult(
      lang === "kn" ? "ದಯವಿಟ್ಟು ಲಕ್ಷಣಗಳನ್ನು ಬರೆಯಿರಿ" :
      lang === "hi" ? "कृपया अपने लक्षण लिखें" :
      "Tell us a little more",
      lang === "kn" ? "ನಿಮಗೆ ಆಗುತ್ತಿರುವುದನ್ನು ಬರೆಯಿರಿ." :
      lang === "hi" ? "आप जो अनुभव कर रही हैं, उसे लिखें।" :
      "Describe what you are experiencing so you can explore educational guidance."
    );
    return;
  }

  const assessment = window.SakhiSymptomChecker.analyzeSymptomText(text);
  if (assessment.category === "urgent") {
    const title = lang === "kn" ? "ತಕ್ಷಣ ಸಹಾಯ ಪಡೆಯಿರಿ" :
      lang === "hi" ? "तुरंत सहायता लें" :
      "Please seek help now";

    const message = lang === "kn"
      ? "ನೀವು ವಿವರಿಸಿದ ಲಕ್ಷಣಗಳಿಗೆ ತಕ್ಷಣದ ಸಹಾಯ ಅಗತ್ಯವಿರಬಹುದು. ಸ್ಥಳೀಯ ತುರ್ತು ಸೇವೆ ಅಥವಾ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ."
      : lang === "hi"
      ? "आपके बताए लक्षणों में तत्काल सहायता की आवश्यकता हो सकती है। स्थानीय आपातकालीन सेवा या नज़दीकी अस्पताल से संपर्क करें।"
      : "Your description may involve an urgent concern. Contact local emergency services or go to the nearest emergency department. Do not rely on this tool to determine how serious it is.";

    showResult(title, message, true);
    return;
  }

  if (assessment.category === "pcos" || assessment.category === "pcos_pattern") {
    showResult(
      featureText("pcosPatternTitle"),
      featureText("pcosPatternMessage"),
      false,
      [
        featureText("pcosMappingRecord"),
        featureText("pcosMappingClinician")
      ],
      assessment.pcosSignals
    );

    return;
  }

  if (assessment.category === "period") {
    const title = lang === "kn" ? "ಋತುಚಕ್ರದ ಬಗ್ಗೆ ಮಾರ್ಗದರ್ಶನ" :
      lang === "hi" ? "मासिक चक्र के बारे में जानकारी" :
      "Menstrual health guidance";

    const message = lang === "kn"
      ? "ಋತುಚಕ್ರದ ಬದಲಾವಣೆಗಳಿಗೆ ಹಲವು ಕಾರಣಗಳಿರಬಹುದು. ಮರುಮರು ಅನಿಯಮಿತವಾಗಿದ್ದರೆ ಅಥವಾ ನಿಮಗೆ ಚಿಂತೆ ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ."
      : lang === "hi"
      ? "मासिक चक्र में बदलाव के कई कारण हो सकते हैं। यदि अनियमितता बार-बार होती है या चिंता है, तो डॉक्टर से बात करें।"
      : "Changes in menstrual cycles can have several causes. If irregularity keeps happening or concerns you, consider speaking with a healthcare professional.";

    showResult(title, message, false, [
      featureText("symptomRecordTip"),
      featureText("symptomPersistentTip")
    ]);
    return;
  }

  if (assessment.category === "pain") {
    const title = lang === "kn" ? "ನಿಮ್ಮ ಲಕ್ಷಣಗಳಿಗೆ ಗಮನ ಕೊಡಿ" :
      lang === "hi" ? "अपने लक्षणों पर ध्यान दें" :
      "Pay attention to your symptoms";

    const message = lang === "kn"
      ? "ನೋವು ಅಥವಾ ಜ್ವರಕ್ಕೆ ಹಲವು ಕಾರಣಗಳಿರಬಹುದು. ನೋವು ತೀವ್ರವಾಗಿದ್ದರೆ, ಹೆಚ್ಚಾಗುತ್ತಿದ್ದರೆ ಅಥವಾ ನಿಮಗೆ ಚಿಂತೆ ಇದ್ದರೆ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಪಡೆಯಿರಿ."
      : lang === "hi"
      ? "दर्द या बुखार के कई कारण हो सकते हैं। दर्द तेज़ हो, बढ़ रहा हो या चिंता हो तो चिकित्सा सहायता लें।"
      : "Pain or fever can have many causes. Seek medical care if symptoms are severe, worsening, persistent, or worrying.";

    showResult(title, message, false, [
      featureText("symptomOnsetTip"),
      featureText("symptomAssessmentTip")
    ]);
    return;
  }

  const title = lang === "kn" ? "ಮುಂದಿನ ಹೆಜ್ಜೆ" :
    lang === "hi" ? "अगला कदम" :
    "Let's take the next step";

  const message = lang === "kn"
    ? "ಈ ಸರಳ ಮಾದರಿಯು ನಿಮ್ಮ ವಿವರಣೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಗುರುತಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಇದು ನಿಮ್ಮ ಲಕ್ಷಣಗಳು ಮುಖ್ಯವಲ್ಲ ಎಂದರ್ಥವಲ್ಲ."
    : lang === "hi"
    ? "यह सरल प्रोटोटाइप आपके विवरण को स्पष्ट रूप से पहचान नहीं पाया। इसका मतलब यह नहीं कि आपके लक्षण महत्वपूर्ण नहीं हैं।"
    : "This simple prototype could not confidently match your description to its limited keyword rules. That does not mean your symptoms are unimportant.";

  showResult(title, message, false, [
    featureText("symptomDescribeTip"),
    featureText("symptomCareTip")
  ]);
}

// PCOS learning section
$("pcosButton").addEventListener("click", () => {
  const box = $("pcosInfo");

  if (!box.classList.contains("hidden")) {
    box.classList.add("hidden");
    return;
  }

  box.replaceChildren();

  const heading = document.createElement("strong");
  heading.textContent = featureText("pcosInfoTitle");
  box.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.textContent = featureText("pcosInfoParagraph");
  box.appendChild(paragraph);

  const list = document.createElement("ul");

  featureText("pcosSymptoms").forEach(text => {
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  });

  box.appendChild(list);

  const advice = document.createElement("p");
  advice.textContent = featureText("pcosAdvice");
  box.appendChild(advice);

  const link = document.createElement("a");
  link.href = "https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = featureText("pcosSource");
  box.appendChild(link);

  box.classList.remove("hidden");
});

// Care guidance section
$("careButton").addEventListener("click", () => {
  const box = $("careInfo");

  if (!box.classList.contains("hidden")) {
    box.classList.add("hidden");
    return;
  }

  box.replaceChildren();

  const heading = document.createElement("strong");
  heading.textContent = featureText("careHeading");
  box.appendChild(heading);

  const list = document.createElement("ul");

  featureText("careItems").forEach(text => {
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  });

  box.appendChild(list);

  const note = document.createElement("p");
  note.textContent = featureText("careNote");
  box.appendChild(note);

  box.classList.remove("hidden");
});

// Cycle tracker: saves only in this browser
$("saveCycle").addEventListener("click", saveCycle);

function saveCycle() {
  const dateValue = $("periodDate").value;
  const length = Number($("cycleLength").value);
  const lang = $("language").value;
  const box = $("cycleResult");

  box.replaceChildren();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!dateValue || !Number.isInteger(length) || length < 15 || length > 60) {
    box.textContent = lang === "kn"
      ? "ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು 15–60 ನಡುವಿನ ಚಕ್ರದ ಅವಧಿಯನ್ನು ನಮೂದಿಸಿ."
      : lang === "hi"
      ? "तारीख चुनें और 15–60 दिनों के बीच चक्र की अवधि दर्ज करें।"
      : "Choose a date and enter a cycle length between 15 and 60 days.";

    box.classList.remove("hidden");
    return;
  }

  const start = new Date(dateValue + "T00:00:00");

  if (Number.isNaN(start.getTime()) || start > today) {
    box.textContent = lang === "kn"
      ? "ಹಿಂದಿನ ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ."
      : lang === "hi"
      ? "कृपया बीते हुए दिन की तारीख चुनें।"
      : "Please choose a date in the past or today.";

    box.classList.remove("hidden");
    return;
  }

  const daysSince = Math.floor((today - start) / 86400000);
  const cyclesPassed = Math.floor(daysSince / length);
  const nextDate = new Date(start);
  nextDate.setDate(start.getDate() + (cyclesPassed + 1) * length);

  let cycleSaved = true;
  try {
    localStorage.setItem("sakhiCycle", JSON.stringify({
      date: dateValue,
      length: length
    }));
  } catch (error) {
    console.error("SakhiCare could not save cycle details:", error);
    cycleSaved = false;
  }

  const heading = document.createElement("strong");
  heading.textContent = featureText(cycleSaved ? "cycleSaved" : "cycleNotSaved");
  if (!cycleSaved) heading.classList.add("error-message");

  box.appendChild(heading);

  const detail = document.createElement("p");
  detail.textContent = lang === "kn"
    ? `ಕೊನೆಯ ದಾಖಲಾದ ದಿನ: ${start.toLocaleDateString()}`
    : lang === "hi"
    ? `दर्ज की गई तारीख: ${start.toLocaleDateString()}`
    : `Recorded start date: ${start.toLocaleDateString()}`;

  box.appendChild(detail);

  const estimate = document.createElement("p");
  estimate.textContent = lang === "kn"
    ? `ನಿಮ್ಮ ನಮೂದಿಸಿದ ಚಕ್ರದ ಆಧಾರದ ಅಂದಾಜು ಮುಂದಿನ ದಿನಾಂಕ: ${nextDate.toLocaleDateString()}`
    : lang === "hi"
    ? `आपके दर्ज चक्र के आधार पर अगली अनुमानित तारीख: ${nextDate.toLocaleDateString()}`
    : `Estimated next period date based on your entered cycle: ${nextDate.toLocaleDateString()}`;

  box.appendChild(estimate);

  const disclaimer = document.createElement("p");
  disclaimer.textContent = lang === "kn"
    ? "ಇದು ಕೇವಲ ಅಂದಾಜು. ನಿಜವಾದ ಋತುಚಕ್ರದ ದಿನಾಂಕ ಬದಲಾಗಬಹುದು."
    : lang === "hi"
    ? "यह केवल अनुमान है। वास्तविक तारीख अलग हो सकती है।"
    : "This is only an estimate. Actual cycle dates can vary.";

  box.appendChild(disclaimer);
  box.classList.remove("hidden");
}

// Restore saved cycle details on this browser
try {
  const saved = JSON.parse(localStorage.getItem("sakhiCycle"));

  if (saved && saved.date && saved.length) {
    $("periodDate").value = saved.date;
    $("cycleLength").value = saved.length;
  }
} catch (error) {
  console.error("SakhiCare could not restore cycle details:", error);
  $("cycleResult").textContent =
    "Saved cycle details could not be read from this browser.";
  $("cycleResult").classList.remove("hidden");
}

const voiceButton = document.getElementById("voiceButton");
const voiceStatus = document.getElementById("voiceStatus");
const symptomInput = document.getElementById("symptomInput");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = null;
let isListening = false;

if (!SpeechRecognition) {
  voiceButton.disabled = true;
  voiceButton.textContent = "🎙️ Voice input unavailable";
  voiceStatus.textContent =
    "Try the latest Google Chrome browser for speech recognition.";
} else {
  recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.interimResults = true;

  voiceButton.addEventListener("click", () => {
    if (isListening) {
      recognition.stop();
      return;
    }

    const language = document.getElementById("language").value;

    const speechLanguages = {
      en: "en-IN",
      kn: "kn-IN",
      hi: "hi-IN"
    };

    recognition.lang = speechLanguages[language] || "en-IN";

    try {
      recognition.start();
    } catch (error) {
      voiceStatus.textContent = featureText("voiceStartError");
    }
  });

  recognition.onstart = () => {
    isListening = true;
    voiceButton.classList.add("listening");
    voiceButton.textContent = "⏹ " + featureText("voiceStop");
    voiceStatus.textContent = featureText("voiceListening");
  };

  recognition.onresult = (event) => {
    let finalText = "";
    let interimText = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;

      if (event.results[i].isFinal) {
        finalText += transcript;
      } else {
        interimText += transcript;
      }
    }

    if (finalText) {
      const existingText = symptomInput.value.trim();

      symptomInput.value = existingText
        ? existingText + " " + finalText
        : finalText;

      voiceStatus.textContent = featureText("voiceSpeechAdded");
    } else if (interimText) {
      voiceStatus.textContent = featureText("voiceHearing") + interimText;
    }
  };

  recognition.onerror = (event) => {
    voiceStatus.textContent =
      featureText("voiceErrors")[event.error] || featureText("voiceFailed");
  };

  recognition.onend = () => {
    isListening = false;
    voiceButton.classList.remove("listening");
    voiceButton.textContent = `🎙️ ${featureText("voiceButton")}`;
  };
}
