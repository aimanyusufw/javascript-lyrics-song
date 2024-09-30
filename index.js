const lyrics = [
  "And then you leave me all behind",
  'And you say, "Don\'t come back again"',
  "And I said",
  "Why would I come back to you",
  "If you don't need me to?",
  "I'll be losing you",
  "And you'll be losing me",
];

const timings = [0, 1000, 4000, 5000, 1000, 2000, 4000];

const delayPerLetter = 100;

function displayLine(line, callback) {
  let letterIndex = 0;

  const interval = setInterval(() => {
    process.stdout.write(line[letterIndex]);
    letterIndex++;

    if (letterIndex === line.length) {
      clearInterval(interval);
      process.stdout.write("\n");
      if (callback) callback();
    }
  }, delayPerLetter);
}

function displayLyrics(index = 0) {
  if (index < lyrics.length) {
    const nextLineDelay = timings[index + 1]
      ? timings[index + 1] - timings[index]
      : 0;

    setTimeout(() => {
      displayLine(lyrics[index], () => displayLyrics(index + 1));
    }, nextLineDelay);
  }
}

console.log("Losing us By Raissa Aggiani:\n");
displayLyrics();
