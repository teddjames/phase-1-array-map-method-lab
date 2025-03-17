const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "what is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map((title) => {
    return title
      .split(" ")
      .map((word) => {
        // Capitalize only the first letter and leave the rest as is.
        if (word.length === 0) return word;
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
}
