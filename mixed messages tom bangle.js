const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;
  
  const favoriteMotivation = {
   mood: ['happy', 'sad', 'angry', 'excited', 'calm', 'anxious', 'grateful', 'bored', 'hopeful', 'lonely'],
   motivation: [
      'You will never have this day again, so make it count!', 
      'Wake up and be awesome.', 
      'Stop waiting and start doing.', 
      'Have faith, your best days are on their way.', 
      'Overthinking is the quickest way to ruin something good.', 
      'Skill is only developed by hours and hours of work.', 
      'Asking for help reveals wisdom, not weakness.', 
      'Hold the vision, trust the process.', 
      'Act without expectation.', 
      'Listen to many, speak to few.'
    ],
  };
  
  // Store the 'motivation' as an array
  let personalMotivation = []
