// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilot = document.querySelector("input[name=pilotName]");
      let coPilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" ||
      cargoMass.value === "") {
         alert("All fields are required!!");
      }

      if (isNaN(fuelLevel.value)) {
         alert("Please enter number for Fuel Level")
      };

      if (isNaN(cargoMass.value)) {
         alert("Please enter number for Cargo Mass")
      };
         event.preventDefault();
      });

   
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
