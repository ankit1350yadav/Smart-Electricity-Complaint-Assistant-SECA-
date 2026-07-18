export const locales=['en','hi','ta','te','bn','mr','kn','ml','gu','pa'] as const;export type Locale=typeof locales[number];
export const localeNames:Record<Locale,string>={en:'English',hi:'हिन्दी',ta:'தமிழ்',te:'తెలుగు',bn:'বাংলা',mr:'मराठी',kn:'ಕನ್ನಡ',ml:'മലയാളം',gu:'ગુજરાતી',pa:'ਪੰਜਾਬੀ'};
export const dictionaries:Record<Locale,Record<string,string>>={
en:{hero:'Report electricity problems safely with AI.',newComplaint:'New complaint',speak:'Speak complaint',offline:'Offline complaint saved. It will sync automatically.',chat:'Ask SECA'},
hi:{hero:'AI की मदद से बिजली समस्याएँ सुरक्षित रूप से रिपोर्ट करें।',newComplaint:'नई शिकायत',speak:'शिकायत बोलें',offline:'ऑफलाइन शिकायत सहेजी गई। यह स्वतः सिंक होगी।',chat:'SECA से पूछें'},
ta:{hero:'AI உதவியுடன் மின்சார பிரச்சினைகளை பாதுகாப்பாக புகாரளிக்கவும்.',newComplaint:'புதிய புகார்',speak:'புகாரை பேசுங்கள்',offline:'ஆஃப்லைன் புகார் சேமிக்கப்பட்டது. தானாக ஒத்திசைக்கும்.',chat:'SECA-விடம் கேளுங்கள்'},
te:{hero:'AI సహాయంతో విద్యుత్ సమస్యలను సురక్షితంగా నివేదించండి.',newComplaint:'కొత్త ఫిర్యాదు',speak:'ఫిర్యాదును మాట్లాడండి',offline:'ఆఫ్‌లైన్ ఫిర్యాదు సేవ్ అయింది. స్వయంచాలకంగా సింక్ అవుతుంది.',chat:'SECAని అడగండి'},
bn:{hero:'AI সহায়তায় বিদ্যুৎ সমস্যা নিরাপদে রিপোর্ট করুন।',newComplaint:'নতুন অভিযোগ',speak:'অভিযোগ বলুন',offline:'অফলাইন অভিযোগ সংরক্ষিত হয়েছে। এটি স্বয়ংক্রিয়ভাবে সিঙ্ক হবে।',chat:'SECA-কে জিজ্ঞাসা করুন'},
mr:{hero:'AI च्या मदतीने वीज समस्या सुरक्षितपणे नोंदवा.',newComplaint:'नवी तक्रार',speak:'तक्रार बोला',offline:'ऑफलाइन तक्रार जतन झाली. ती आपोआप सिंक होईल.',chat:'SECA ला विचारा'},
kn:{hero:'AI ಸಹಾಯದಿಂದ ವಿದ್ಯುತ್ ಸಮಸ್ಯೆಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ವರದಿ ಮಾಡಿ.',newComplaint:'ಹೊಸ ದೂರು',speak:'ದೂರು ಮಾತನಾಡಿ',offline:'ಆಫ್‌ಲೈನ್ ದೂರು ಉಳಿಸಲಾಗಿದೆ. ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಿಂಕ್ ಆಗುತ್ತದೆ.',chat:'SECA ಅನ್ನು ಕೇಳಿ'},
ml:{hero:'AI സഹായത്തോടെ വൈദ്യുതി പ്രശ്നങ്ങൾ സുരക്ഷിതമായി റിപ്പോർട്ട് ചെയ്യുക.',newComplaint:'പുതിയ പരാതി',speak:'പരാതി പറയുക',offline:'ഓഫ്‌ലൈൻ പരാതി സംരക്ഷിച്ചു. സ്വയം സിങ്ക് ചെയ്യും.',chat:'SECAയോട് ചോദിക്കുക'},
gu:{hero:'AI ની મદદથી વીજળી સમસ્યાઓ સુરક્ષિત રીતે રિપોર્ટ કરો.',newComplaint:'નવી ફરિયાદ',speak:'ફરિયાદ બોલો',offline:'ઑફલાઇન ફરિયાદ સાચવાઈ. તે આપમેળે સિંક થશે.',chat:'SECA ને પૂછો'},
pa:{hero:'AI ਦੀ ਮਦਦ ਨਾਲ ਬਿਜਲੀ ਸਮੱਸਿਆਵਾਂ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਰਿਪੋਰਟ ਕਰੋ।',newComplaint:'ਨਵੀਂ ਸ਼ਿਕਾਇਤ',speak:'ਸ਼ਿਕਾਇਤ ਬੋਲੋ',offline:'ਆਫਲਾਈਨ ਸ਼ਿਕਾਇਤ ਸੰਭਾਲੀ ਗਈ। ਇਹ ਆਪਣੇ ਆਪ ਸਿੰਕ ਹੋਵੇਗੀ।',chat:'SECA ਨੂੰ ਪੁੱਛੋ'}};
export function t(locale:Locale,key:string){return dictionaries[locale]?.[key]||dictionaries.en[key]||key}
