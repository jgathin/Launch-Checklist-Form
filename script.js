// Write your JavaScript code here!
let ran = Math.floor(Math.random() * 6);

window.addEventListener("load", function() {
   
   fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then(function(response) {
         response.json().then(function(json){
            let div = document.getElementById("missionTarget")

            div.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[ran].name}</li>
                  <li>Diameter: ${json[ran].diameter}</li>
                  <li>Star: ${json[ran].star}</li>
                  <li>Distance from Earth: ${json[ran].distance}</li>
                  <li>Number of Moons: ${json[ran].moons}</li>
               </ol>
               <img src="${json[ran].image}">`
               
         });
      });
   let form = document.querySelector("form");
   
   form.addEventListener("submit", function(event) {
      
   let pilot = document.querySelector("input[name=pilotName]");
   let coPilot = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
      

      if (pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" ||
      cargoMass.value === "") {
         alert("All fields are required!!");
         event.preventDefault();
      }

      if (isNaN(fuelLevel.value)) {
         alert("Please enter number for Fuel Level");
         event.preventDefault();
      };

      if (isNaN(cargoMass.value)) {
         alert("Please enter number for Cargo Mass");
         event.preventDefault();
      };

      let faultPilot = document.getElementById("pilotStatus");
      faultPilot.innerHTML = `Pilot: "${pilot.value}" Ready`;

      let faultCoPilot = document.getElementById("copilotStatus");
      faultCoPilot.innerHTML = `Co-pilot: "${coPilot.value}" Ready`;

      let faultFuel = document.getElementById("fuelStatus");

      let faultCargo = document.getElementById("cargoStatus");

      let faultyItems = document.getElementById("faultyItems");

      let launchStatus = document.getElementById("launchStatus");

      if (fuelLevel.value <10000) {
         faultyItems.style.visibility = "visible";
         faultFuel.style.color = "red";
         faultFuel.innerHTML = `"${fuelLevel.value}(L)" Not enough fuel for the journey`
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color = "red"
         event.preventDefault()
         } 
      if (cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         faultCargo.style.color = "red";
         faultCargo.innerHTML = `"${cargoMass.value}(kg)" There is too much mass for the shuttle to take off`;
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color = "red"
         event.preventDefault()
         }  
      if (cargoMass.value <= 10000 && fuelLevel.value >= 10000)  {
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Is Ready For Launch";
         launchStatus.style.color = "green";
         faultFuel.innerHTML = "Fuel level high enough for launch";
         faultCargo.innerHTML = "Cargo mass low enough for launch";
         faultCargo.style.color = "black";
         faultFuel.style.color = "black";

         event.preventDefault()
         
      }

      
      
      
      

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
