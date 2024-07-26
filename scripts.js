const riddles = [
  {
    question: {
      en: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
      bn: "আমি একটি কণ্ঠ ছাড়া কথা বলি এবং কান ছাড়া শুনি। আমার কোনো শরীর নেই, কিন্তু আমি বাতাসের সাথে জীবিত হয়ে উঠি। আমি কি?",
    },
    answer: "echo",
    discountCode: "SpSbd4445",
  },
  {
    question: {
      en: "The more you take, the more you leave behind. What am I?",
      bn: "আপনি যত বেশি নিয়ে যান, তত বেশি আপনি পিছনে রেখে যান। আমি কি?",
    },
    answer: "footsteps",
    discountCode: "93PS15",
  },
  {
    question: {
      en: "I have keys but open no locks. I have space but no room. You can enter, but you can't go outside. What am I?",
      bn: "আমার কীগুলি রয়েছে কিন্তু কোনো তালা খুলতে পারে না। আমার কাছে স্থান আছে কিন্তু কোনো ঘর নেই। আপনি প্রবেশ করতে পারেন, কিন্তু বাইরে যেতে পারবেন না। আমি কি?",
    },
    answer: "keyboard",
    discountCode: "Pryh20",
  },
  {
    question: {
      en: "What has to be broken before you can use it?",
      bn: "যে জিনিসটি ব্যবহার করার আগে ভাঙতে হয় তা কী?",
    },
    answer: "egg",
    discountCode: "Egg21",
  },
  {
    question: {
      en: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
      bn: "আমি তরুণ হলে লম্বা, এবং বৃদ্ধ হলে ছোট। আমি কি?",
    },
    answer: "candle",
    discountCode: "Cnd34",
  },
  {
    question: {
      en: "What has many keys but can’t open a single door?",
      bn: "যার অনেক কীগুলি আছে কিন্তু একটি দরজা খুলতে পারে না তা কী?",
    },
    answer: "piano",
    discountCode: "Pno45",
  },
  {
    question: {
      en: "What can travel around the world while staying in a corner?",
      bn: "যে জিনিসটি কোণে অবস্থান করে পৃথিবীজুড়ে ঘুরতে পারে তা কী?",
    },
    answer: "stamp",
    discountCode: "Stm56",
  },
  {
    question: {
      en: "What has a head, a tail, is brown, and has no legs?",
      bn: "যার একটি মাথা, একটি লেজ, বাদামী এবং কোনো পা নেই তা কী?",
    },
    answer: "penny",
    discountCode: "Pny67",
  },
  {
    question: {
      en: "What begins with T, ends with T, and has T in it?",
      bn: "যা T দিয়ে শুরু হয়, T দিয়ে শেষ হয় এবং এতে T থাকে তা কী?",
    },
    answer: "teapot",
    discountCode: "Tpt78",
  },
  {
    question: {
      en: "What is full of holes but still holds water?",
      bn: "যা গর্তে পূর্ণ কিন্তু এখনও পানি ধারণ করে তা কী?",
    },
    answer: "sponge",
    discountCode: "Spn89",
  },
  {
    question: {
      en: "What can you catch but not throw?",
      bn: "যা আপনি ধরতে পারেন কিন্তু ছুড়ে ফেলতে পারেন না তা কী?",
    },
    answer: "cold",
    discountCode: "Cld90",
  },
  // Additional riddles
  {
    question: {
      en: "What has a heart that doesn’t beat?",
      bn: "যার হৃদয় আছে কিন্তু তা বীট করে না?",
    },
    answer: "artichoke",
    discountCode: "Art101",
  },
  {
    question: {
      en: "I’m light as a feather, yet the strongest man can’t hold me for more than 5 minutes. What am I?",
      bn: "আমি পালকের মতো হালকা, তবুও সবচেয়ে শক্তিশালী মানুষ আমাকে ৫ মিনিটের বেশি ধরে রাখতে পারে না। আমি কি?",
    },
    answer: "breath",
    discountCode: "Brth112",
  },
  {
    question: {
      en: "I can be cracked, made, told, and played. What am I?",
      bn: "আমি ফাটতে পারি, তৈরি হতে পারি, বলা যেতে পারি এবং খেলা যেতে পারি। আমি কি?",
    },
    answer: "joke",
    discountCode: "Jke123",
  },
  {
    question: {
      en: "I have branches, but no fruit, trunk, or leaves. What am I?",
      bn: "আমার শাখা রয়েছে, কিন্তু কোনো ফল, কান্ড বা পাতা নেই। আমি কি?",
    },
    answer: "bank",
    discountCode: "Bnk134",
  },
  {
    question: {
      en: "The more of this there is, the less you see. What is it?",
      bn: "এটির যত বেশি থাকে, আপনি তত কম দেখতে পান। এটি কি?",
    },
    answer: "darkness",
    discountCode: "Drk145",
  },
  {
    question: {
      en: "I’m found in socks, scarves, and mittens; and often in the paws of playful kittens. What am I?",
      bn: "আমি মোজা, স্কার্ফ এবং মিটেনস এ পাওয়া যায়; এবং প্রায়ই খেলাধুলাপ্রবণ বিড়ালছানার থাবায় থাকে। আমি কি?",
    },
    answer: "yarn",
    discountCode: "Yrn156",
  },
  {
    question: {
      en: "What is always in front of you but can’t be seen?",
      bn: "যা আপনার সামনে সবসময় থাকে কিন্তু দেখা যায় না তা কী?",
    },
    answer: "future",
    discountCode: "Ftr167",
  },
  {
    question: {
      en: "I have cities, but no houses; forests, but no trees; and rivers, but no water. What am I?",
      bn: "আমার শহর আছে, কিন্তু কোনো ঘর নেই; বন আছে, কিন্তু কোনো গাছ নেই; এবং নদী আছে, কিন্তু কোনো পানি নেই। আমি কি?",
    },
    answer: "map",
    discountCode: "Map178",
  },
  {
    question: {
      en: "What goes up but never comes down?",
      bn: "যা উপরে যায় কিন্তু কখনও নিচে নামে না তা কী?",
    },
    answer: "age",
    discountCode: "Age189",
  },
];

const translations = {
  title: "ধাঁধা গেম",
  placeholder: "আপনার উত্তর লিখুন",
  submitButton: "উত্তর জমা দিন",
  translateButton: "বাংলায় অনুবাদ করুন",
  correctMessage: "সঠিক! ভাল কাজ হয়েছে!",
  incorrectMessage: "ভুল। আবার চেষ্টা করুন!",
  discountMessage: "আপনি একটি ডিসকাউন্ট কোড পেয়েছেন: ",
};

const originalTexts = {
  title: "Riddle Game",
  placeholder: "Enter your answer",
  submitButton: "Submit Answer",
  translateButton: "Translate to Bangla",
  correctMessage: "Correct! Well done!",
  incorrectMessage: "Incorrect. Try again!",
  discountMessage: "Yaa!! have received a discount code: ",
};

let currentRiddleIndex = Math.floor(Math.random() * riddles.length);
let isBangla = false;
let hasSolvedRiddle = false;

document.addEventListener("DOMContentLoaded", () => {
  // Check if the user has solved a riddle before
  hasSolvedRiddle = localStorage.getItem("hasSolvedRiddle") === "true";
  if (hasSolvedRiddle) {
    document.getElementById("riddle").innerText =
      "You have already solved a riddle. you can't try again.";
    document.getElementById("submitAnswer").disabled = true;
  } else {
    loadRiddle();
  }

  document
    .getElementById("submitAnswer")
    .addEventListener("click", checkAnswer);
  document
    .getElementById("translateButton")
    .addEventListener("click", toggleLanguage);
});

function loadRiddle() {
  const riddle = riddles[currentRiddleIndex];
  const questionText = isBangla ? riddle.question.bn : riddle.question.en;
  document.getElementById("riddle").innerText = questionText;
  document.getElementById("resultMessage").innerText = "";
}

function checkAnswer() {
  const userAnswer = document
    .getElementById("answer")
    .value.trim()
    .toLowerCase();
  const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();
  const discountCode = riddles[currentRiddleIndex].discountCode;

  let resultMessage;
  if (userAnswer === correctAnswer) {
    resultMessage = isBangla
      ? `${translations.correctMessage} ${translations.discountMessage} ${discountCode}`
      : `${originalTexts.correctMessage} ${originalTexts.discountMessage} ${discountCode}`;

    // Set the flag and disable the answer button
    localStorage.setItem("hasSolvedRiddle", "true");
    hasSolvedRiddle = true;
    document.getElementById("submitAnswer").disabled = true;
  } else {
    resultMessage = isBangla
      ? translations.incorrectMessage
      : originalTexts.incorrectMessage;
  }

  document.getElementById("resultMessage").innerText = resultMessage;

  // Disable the submit button after first attempt
  document.getElementById("submitAnswer").disabled = true;
}

function toggleLanguage() {
  isBangla = !isBangla;
  document.querySelector("h1").innerText = isBangla
    ? translations.title
    : originalTexts.title;
  document.querySelector("input").placeholder = isBangla
    ? translations.placeholder
    : originalTexts.placeholder;
  document.querySelector("#submitAnswer").innerText = isBangla
    ? translations.submitButton
    : originalTexts.submitButton;
  document.querySelector("#translateButton").innerText = isBangla
    ? "Translate to English"
    : translations.translateButton;
  loadRiddle(); // Update riddle text as well
}
