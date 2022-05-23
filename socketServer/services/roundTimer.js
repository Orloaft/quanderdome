const roundTimer = (io, room, time) => {
  // Set the date we're counting down to
  const countDownDate = new Date().getTime() + time * 1000;

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    io.to(room).emit("tick", Math.floor(distance / 1000));

    // If the count down is finished, write some text
    if (distance < 0) {
      io.emit("time_up", room);
      clearInterval(x);
    }
  }, 1000);
};
module.exports = roundTimer;
