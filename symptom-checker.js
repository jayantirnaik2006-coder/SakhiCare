const emergencyTerms = [
  "severe chest pain", "difficulty breathing", "shortness of breath",
  "can't breathe", "cannot breathe", "fainting", "passed out",
  "unconscious", "severe bleeding", "heavy bleeding",
  "severe abdominal pain", "worst headache", "गंभीर सीने में दर्द",
  "सांस नहीं", "बेहोश", "बहुत ज्यादा खून", "तेज पेट दर्द",
  "ತೀವ್ರ ಎದೆ ನೋವು", "ಉಸಿರಾಡಲು ಕಷ್ಟ", "ಉಸಿರಾಡಲು ಕಷ್ಟವಾಗುತ್ತಿದೆ", "ಪ್ರಜ್ಞೆ ತಪ್ಪಿ",
  "ತೀವ್ರ ರಕ್ತಸ್ರಾವ", "ತೀವ್ರ ಹೊಟ್ಟೆ ನೋವು"
];

const concerningTerms = [
  "suicidal", "kill myself", "want to die", "self harm",
  "pregnant and bleeding", "pregnancy bleeding", "suicidio",
  "आत्महत्या", "खुद को मार", "ಆತ್ಮಹತ್ಯೆ", "ಸ್ವಯಂ ಹಾನಿ"
];

const periodTerms = [
  "irregular period", "irregular periods", "periods are irregular",
  "missed period", "missed my period", "late period", "period is late",
  "painful period", "heavy period", "period delay",
  "irregular menstruation", "अनियमित पीरियड", "पीरियड नहीं",
  "मासिक धर्म अनियमित", "ಮುಟ್ಟಿನ ಸಮಸ್ಯೆ", "ಅನಿಯಮಿತ ಮುಟ್ಟು",
  "ಮುಟ್ಟು ಆಗಿಲ್ಲ"
];

const cycleChangeTerms = [
  ...periodTerms,
  "irregular cycles", "cycle is irregular", "अनियमित मासिक चक्र",
  "ಅನಿಯಮಿತ ಋತುಚಕ್ರ"
];

const ovulatoryPatternTerms = [
  "irregular period", "irregular periods", "periods are irregular",
  "irregular cycles", "cycle is irregular", "missed period",
  "missed my period", "no period", "periods stopped",
  "periods have stopped", "absent periods", "amenorrhea",
  "अनियमित पीरियड", "पीरियड नहीं", "पीरियड्स नहीं आए",
  "मासिक धर्म अनियमित", "अनियमित मासिक चक्र",
  "ಮುಟ್ಟಿನ ಸಮಸ್ಯೆ", "ಅನಿಯಮಿತ ಮುಟ್ಟು", "ಮುಟ್ಟು ಆಗಿಲ್ಲ",
  "ಅನಿಯಮಿತ ಋತುಚಕ್ರ", "ಋತುಚಕ್ರ ಅನಿಯಮಿತ"
];

const unusuallyHeavyFlowTerms = [
  "unusually heavy flow", "unusually heavy flows", "very heavy period", "very heavy periods",
  "heavy period flow", "heavy menstrual flow", "heavy periods",
  "भारी पीरियड", "बहुत अधिक रक्तस्राव", "बहुत तेज़ पीरियड",
  "ಅತಿಯಾದ ಋತುಸ್ರಾವ", "ತುಂಬಾ ಹೆಚ್ಚು ರಕ್ತಸ್ರಾವ"
];

const hyperandrogenismTerms = [
  "hirsutism", "excess facial hair", "excess body hair",
  "unwanted facial hair", "unwanted body hair", "coarse facial hair",
  "severe cystic acne", "cystic acne", "nodular acne",
  "male pattern hair loss", "male pattern hair thinning",
  "thinning hair at the temples", "hair thinning at the crown",
  "चेहरे पर अधिक बाल", "शरीर पर अधिक बाल", "अनचाहे चेहरे के बाल",
  "गंभीर सिस्टिक मुंहासे", "सिस्टिक मुंहासे",
  "सिर के बालों का पुरुषों जैसा झड़ना",
  "ಮುಖದ ಮೇಲೆ ಹೆಚ್ಚು ಕೂದಲು", "ದೇಹದ ಮೇಲೆ ಹೆಚ್ಚು ಕೂದಲು",
  "ತೀವ್ರ ಸಿಸ್ಟಿಕ್ ಮೊಡವೆ", "ಗಡ್ಡೆಯಂತಹ ಮೊಡವೆ",
  "ತಲೆಯ ಮುಂಭಾಗದ ಕೂದಲು ತೆಳುವಾಗುವುದು"
];

const metabolicIndicatorTerms = [
  "rapid weight gain", "difficulty losing weight",
  "difficult to lose weight", "hard to lose weight",
  "dark patches of skin", "darkened skin patches",
  "dark patches on my neck", "dark skin patches on my neck",
  "dark patches in skin folds", "dark velvety skin",
  "acanthosis nigricans", "ಕಪ್ಪು ಚರ್ಮದ ಕಲೆಗಳು",
  "ಕುತ್ತಿಗೆಯ ಮೇಲೆ ಕಪ್ಪು ಕಲೆಗಳು", "ವೇಗವಾಗಿ ತೂಕ ಹೆಚ್ಚಳ",
  "ತೂಕ ಇಳಿಸಲು ಕಷ್ಟ", "त्वचा पर गहरे धब्बे",
  "गर्दन पर काले धब्बे", "तेजी से वजन बढ़ना",
  "वजन घटाने में कठिनाई", "अकैंथोसिस निग्रिकन्स"
];

const pelvicDiscomfortTerms = [
  "pelvic discomfort", "pelvic pain", "pelvic ache",
  "पेल्विक दर्द", "पेल्विक असुविधा", "श्रोणि दर्द",
  "ಶ್ರೋಣಿಯ ನೋವು", "ಶ್ರೋಣಿಯ ಅಸ್ವಸ್ಥತೆ"
];

const pcosTerms = ["pcos", "pcod", "polycystic", "पीसीओएस", "ಪಿಸಿಒಎಸ್"];

const painTerms = [
  "pain", "cramp", "cramps", "ache", "fever", "दर्द", "बुखार",
  "ನೋವು", "ಜ್ವರ"
];

const negationPhrases = [
  "no", "not", "never", "without", "denies", "denied",
  "dont have", "do not have", "doesnt have", "does not have",
  "not having", "isnt experiencing", "am not experiencing",
  "नहीं", "नही", "ಇಲ್ಲ", "ಇಲ್ಲದೆ"
];
const trailingNegations = ["not", "नहीं", "नही", "ಇಲ್ಲ"];
const normalizedTrailingNegations = trailingNegations.map(normalizeText);

function normalizeText(value) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/['’]/g, "")
    .replace(/[\r\n.!?,;:]+/gu, " | ")
    .replace(/[^\p{L}\p{M}\p{N}|]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function isNegated(prefix, suffix) {
  const precedingWords = prefix.trim().split(/\s+/u).filter(Boolean);
  const normalizedSuffix = suffix.trimStart();
  for (const phrase of negationPhrases) {
    const phraseWords = phrase.split(" ");
    for (let extraWords = 0; extraWords <= 5; extraWords++) {
      const end = precedingWords.length - extraWords;
      const start = end - phraseWords.length;
      if (start >= 0 && precedingWords.slice(start, end).join(" ") === phrase) {
        return true;
      }
    }
  }
  if (normalizedTrailingNegations.some(term => normalizedSuffix === term ||
      normalizedSuffix.startsWith(`${term} `))) {
    return true;
  }
  return false;
}

function findUnnegatedTerm(text, terms) {
  for (const rawTerm of terms) {
    const term = normalizeText(rawTerm);
    const expression = new RegExp(
      `(^|[^\\p{L}\\p{M}\\p{N}])(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})(?=$|[^\\p{L}\\p{M}\\p{N}])`,
      "gu"
    );
    let match;
    while ((match = expression.exec(text))) {
      const start = match.index + match[1].length;
      const prefix = text.slice(0, start).split(/\||\b(?:but|however|although|yet)\b/u).pop();
      const suffix = text.slice(start + match[2].length);
      if (!isNegated(prefix, suffix)) {
        return true;
      }
      expression.lastIndex = start + match[2].length;
    }
  }
  return false;
}

function analyzeSymptomText(input) {
  if (typeof input !== "string") return { category: "unknown" };
  const text = normalizeText(input);
  if (!text) return { category: "empty" };

  if (findUnnegatedTerm(text, emergencyTerms) ||
      findUnnegatedTerm(text, concerningTerms)) {
    return { category: "urgent" };
  }

  const mentionsPcos = findUnnegatedTerm(text, pcosTerms);
  const cycleChange = findUnnegatedTerm(text, cycleChangeTerms);
  const noPeriodPain = findUnnegatedTerm(text, ["no period pain"]);
  const pcosSignals = {
    mentioned: mentionsPcos,
    ovulatoryPattern:
      findUnnegatedTerm(text, ovulatoryPatternTerms.filter(term => term !== "no period")) ||
      (!noPeriodPain && findUnnegatedTerm(text, ["no period"])),
    hyperandrogenism: findUnnegatedTerm(text, hyperandrogenismTerms),
    unusuallyHeavyFlow: findUnnegatedTerm(text, unusuallyHeavyFlowTerms),
    metabolicIndicators: findUnnegatedTerm(text, metabolicIndicatorTerms),
    pelvicDiscomfort: findUnnegatedTerm(text, pelvicDiscomfortTerms)
  };
  if (Object.values(pcosSignals).some(Boolean)) {
    const hasTwoClinicalPatterns =
      pcosSignals.ovulatoryPattern && pcosSignals.hyperandrogenism;
    return {
      category: mentionsPcos || hasTwoClinicalPatterns ? "pcos" : "pcos_pattern",
      pcosSignals
    };
  }
  if (cycleChange) return { category: "period" };
  if (findUnnegatedTerm(text, painTerms)) return { category: "pain" };
  return { category: "unknown" };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { analyzeSymptomText };
} else {
  window.SakhiSymptomChecker = { analyzeSymptomText };
}
