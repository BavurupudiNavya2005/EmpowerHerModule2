
let seconds = parseInt(prompt("Enter seconds to count down:"));


let countdown = setInterval(() => {
  console.log(`Time remaining: ${seconds} seconds`);
  seconds--;

  
  if (seconds < 0) {
    clearInterval(countdown);
    console.log("Countdown Complete!");
  }
}, 1000);


setTimeout(() => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "s") {
      clearInterval(countdown);
      console.log("Countdown Stopped by User!");
    }
  });
}, 2000);
