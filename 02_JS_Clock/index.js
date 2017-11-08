// Ensure the clock is able to function like a clock


// references to the html I wish to transform
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

// for time changes and to apply style
function setDate(){
    const now = new Date();


    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;


  console.log(hours);
  console.log(minutes);
  console.log(seconds);


if (seconds === 0) { // Set transition to 0s so hands don't jump
        secondHand.style.transition = 'all 0s';
        minuteHand.style.transition = 'all 0s';
        hourHand.style.transition = 'all 0s';
    } else { // Reapply original duration and timing function
        secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
        minuteHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
        hourHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }


    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // runs the function passed to it every interval specified
setDate();
