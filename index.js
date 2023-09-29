//the three parts of the message stored as arrays inside a message object
const message = {
    advice: [
        "The best way to predict the future is to invent it.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Believe you can and you're halfway there.",
        "Life is what happens when you're busy making other plans.",
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "Do not wait for leaders; do it alone, person to person.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Your time is limited, don’t waste it living someone else’s life.",
        "The only way to do great work is to love what you do.",
        "It always seems impossible until it is done.",
        "Life is really simple, but we insist on making it complicated.",
        "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        "It is during our darkest moments that we must focus to see the light.",
        "Be yourself; everyone else is already taken.",
        "I have not failed. I've just found 10,000 ways that won't work.",
        "You miss 100% of the shots you don't take.",
        "The way to get started is to quit talking and begin doing.",
        "Strive not to be a success, but rather to be of value.",
        "I attribute my success to this: I never gave or took an excuse.",
        "The best revenge is to be unlike him who performed the injustice.",
        "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Act as if what you do makes a difference. It does.",
        "In the middle of every difficulty lies opportunity.",
        "The best preparation for tomorrow is doing your best today.",
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The purpose of our lives is to be happy.",
        "You have power over your mind - not outside events. Realize this, and you will find strength.",
        "Good things happen to those who hustle.",
        "Your life does not get better by chance, it gets better by change.",
        "Life is 10% what happens to us and 90% how we react to it.",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "The future depends on what you do today.",
        "The only person you are destined to become is the person you decide to be.",
        "The purpose of our lives is to add value to the people of this generation and those that follow.",
        "You can’t use up creativity. The more you use, the more you have.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "Don't cry because it's over, smile because it happened.",
        "Life is short, and it is up to you to make it sweet.",
        "A journey of a thousand miles begins with a single step.",
        "You are never too old to set another goal or to dream a new dream.",
        "Change your thoughts and you change your world.",
        "The best way out is always through.",
        "The best dreams happen when you're awake.",
        "The purpose of our lives is to be happy.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."
    ]
    ,
  };
  
  //iterate over array and return random element
  function returnRandom(array) {
    for (key in array) {
      let response = array[Math.floor(Math.random() * array.length)];
      return response;
    }
  }
  
  //combine the 3 random outputs with some text as the final random response
  function generateMessage() {
    let randomWise = returnRandom(message.advice);

  
    document.getElementById("h1").innerHTML=randomWise;
  }
  
  //call the function
document.getElementById("btn").onclick=generateMessage;