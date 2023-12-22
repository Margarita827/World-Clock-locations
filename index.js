function updateTime() {
  let canberra = document.querySelector("#canberra");
  let canberraDate = canberra.querySelector(".date");
  let canberraTime = canberra.querySelector(".time");
  let canberraCurrentTime = moment().tz("Australia/Canberra");

  canberraDate.innerHTML = moment().format("MMMM Do YYYY");
  canberraTime.innerHTML = canberraCurrentTime.format("H:mm:ss");

  //

  let montreal = document.querySelector("#montreal");
  let montrealDate = montreal.querySelector(".date");
  let montrealTime = montreal.querySelector(".time");
  let montrealCurrentTime = moment().tz("America/Montreal");

  montrealDate.innerHTML = moment().format("MMMM Do YYYY");
  montrealTime.innerHTML = montrealCurrentTime.format("H:mm:ss");
}

setInterval(updateTime, 1000);
//
