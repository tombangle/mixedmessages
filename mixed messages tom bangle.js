const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;
  
  const favoriteMotivation = {
    mood: ['happy', 'sad', 'angry', 'excited', 'calm', 'anxious', 'grateful', 'bored', 'hopeful', 'lonely'],
    motivation: ['you will never have this day again, so make it count!', 'wake up and be awesome.', 'stop waiting and start doing.', 'have faith, your best days are on their way.', 'overthinking is the quickest way to ruin something good.', 'skill is only developed by hours and hours of work.', 'asking for help reveals wisdom, not weakness.', 'hold the vision, trust the process', 'act without expectation', 'listen to many, speak to few.'],
  }
  
  // Store the 'motivation' as an array
  let personalMotivation = []
