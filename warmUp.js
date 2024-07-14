function calculateScore(performance, penalty, fitness, isPlayerOfTheMatch) {
    let finalScore = (performance + penalty + fitness) / 3;
  
    // bonus 1
    if (isPlayerOfTheMatch) {
      finalScore = finalScore * 1.25;
    }
  
    // bonus 2
    let currentDay = new Date().getDay();
    if (currentDay === 0 || currentDay === 6) {
      finalScore = finalScore * 1.1;
    }
    return finalScore.toFixed(2);
  }
  
  let finalScore = calculateScore(5, 3, 8, true);
  console.log(finalScore);

  