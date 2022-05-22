let roomsWithTimer = [];
const clearTimer = (roomId) => {
  roomsWithTimer.push(roomId);
};
const roundTimer = (io, room) => {
  // Set the date we're counting down to
  const countDownDate = new Date().getTime() + 60000;

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (roomsWithTimer.includes(room)) {
      clearInterval(x);
    }
    // Display the result in the element with id="demo"
    io.to(room).emit("tick", seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
      io.to(room).emit("game_end");
      clearInterval(x);
    }
  }, 1000);
};
module.exports = roundTimer;
module.exports = clearTimer;
