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
  "What does a programmer have during sex? An ||gasm."];

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
