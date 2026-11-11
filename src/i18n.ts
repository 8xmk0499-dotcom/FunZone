export type Lang = "mr" | "hi" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "mr", label: "मराठी" },
  { code: "hi", label: "हिंदी" },
  { code: "en", label: "English" },
];

export const T = {
  mr: {
    tagline: "मित्रांसोबत ऑनलाइन खेळा!",
    play: "खेळायला सुरू करा",
    chooseGame: "तुमचा खेळ निवडा",
    players: "खेळाडू",
    back: "मागे",
    soon: "हा खेळ पुढच्या टप्प्यात येत आहे",
    language: "भाषा",
  },
  hi: {
    tagline: "दोस्तों के साथ ऑनलाइन खेलो!",
    play: "खेलना शुरू करें",
    chooseGame: "अपना गेम चुनें",
    players: "खिलाड़ी",
    back: "वापस",
    soon: "यह गेम अगले चरण में आ रहा है",
    language: "भाषा",
  },
  en: {
    tagline: "Play online with your friends!",
    play: "Start Playing",
    chooseGame: "Choose your game",
    players: "players",
    back: "Back",
    soon: "This game is coming in a later phase",
    language: "Language",
  },
};

export const GAMES = [
  {
    id: "bomb",
    emoji: "💣",
    color: "from-orange-500 to-red-600",
    players: "3–15",
    name: { mr: "बॉम्ब पास चॅलेंज", hi: "बम पास चैलेंज", en: "Bomb Pass Challenge" },
    desc: {
      mr: "बॉम्ब पास करा, फुटण्याआधी!",
      hi: "बम पास करो, फटने से पहले!",
      en: "Pass the bomb before it explodes!",
    },
  },
  {
    id: "survive",
    emoji: "🏆",
    color: "from-purple-500 to-indigo-700",
    players: "4–15",
    name: { mr: "शेवटचा खेळाडू जिवंत", hi: "आखिरी खिलाड़ी बचेगा", en: "Last Player Survives" },
    desc: {
      mr: "मिनी-गेम्स जिंका, शेवटपर्यंत टिका!",
      hi: "मिनी-गेम जीतो, आखिर तक टिको!",
      en: "Win mini-games and outlast everyone!",
    },
  },
  {
    id: "emoji",
    emoji: "🤔",
    color: "from-yellow-400 to-pink-500",
    players: "2–15",
    name: { mr: "इमोजी डीकोड", hi: "इमोजी डिकोड", en: "Emoji Decode" },
    desc: {
      mr: "इमोजी बघून उत्तर ओळखा!",
      hi: "इमोजी देखकर जवाब पहचानो!",
      en: "Guess the answer from emojis!",
    },
  },
  {
    id: "race",
    emoji: "🏎️",
    color: "from-green-400 to-teal-600",
    players: "2–12",
    name: { mr: "क्रेझी रेस चॅलेंज", hi: "क्रेज़ी रेस चैलेंज", en: "Crazy Race Challenge" },
    desc: {
      mr: "अडथळे पार करा, पहिले या!",
      hi: "रुकावटें पार करो, पहले आओ!",
      en: "Dodge obstacles and finish first!",
    },
  },
];
