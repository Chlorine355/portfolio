let underscore_elem = document.getElementById("underscore");
let write_here_elem = document.getElementById("writehere");

const jokes = [
  "Why is six afraid of seven? Because seven eight nine.",
  "Why do programmers prefer dark mode? Cause light attracts bugs.",
  "A programmer was arrested for writing unreadable code. He refused to comment.",
  "Why did the functions stop calling each other? Because they had too many arguments.",
  "As a programmer, I would make a UDP joke, but you might not get it.",
  'What would be written on my gravestone? console.log("Goodbye, world!")',
  "Why do Java Programmers wear glasses? Because they can't C#.",
  "Why did the programmer quit his job? Because he didn't get arrays.",
  'A programmer had a problem. He thought to himself, “I know, I’ll solve it with threads!” has Now problems. two he',
  "What does a programmer have during sex? An ||gasm.",
  "How many programmers does it take to screw in a lightbulb? None. We don't address hardware issues.",
  "I watched so many programming tutorial videos in college, my inner monologue started developing an Indian accent.",
  "How do you generate a random string? Put a first year Computer Science student in Vim and ask them to save and exit.",
  "Java: Write once, run away.",
  "What is Benoit B. Mandelbrot's middle name? Benoit B. Mandelbrot.",
  "Hardware: The part of a computer that you can kick. Software: The part of a computer that you can only curse at.",
  "To understand recursion you must first understand recursion.",
  "Why don't jokes work in octal? Because 7 10 11.",
];

function typewrite() {
  document.getElementById("joke").removeEventListener("click", typewrite);
  let text = jokes[Math.floor(Math.random()*jokes.length)];
  write_here_elem.innerHTML = "";
  let index = 0;
  let interval = setInterval(function () {
    write_here_elem.innerHTML += text[index];
    index++;
    if (write_here_elem.innerHTML.length == text.length) {
      clearInterval(interval);
      write_here_elem.appendChild(underscore_elem);
      document.getElementById("joke").addEventListener("click", typewrite);
    }
  }, 50)
}

document.getElementById("joke").addEventListener("click", typewrite);
