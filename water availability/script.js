const form = document.querySelector("form");
const availability = document.getElementById("availability");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = form.elements["location"].value;
  availability.innerHTML = `Water is ${getWaterAvailability(location)} in ${location}.`;
});

function getWaterAvailability(location) {

  return "available";
}