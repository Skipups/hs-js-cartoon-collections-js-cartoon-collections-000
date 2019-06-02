function dwarfRollCall(dwarves) {
let dwarvesArray= dwarves;
let numberedArray=[];
  for ( let i=0; i<dwarvesArray.length; i++){
    numberedArray +=`${i+1}. ${dwarvesArray[i]} `
  }
  return numberedArray;
}

function summonCaptainPlanet(planeteerCalls){
  let capitalArray= [];
  for ( let i=0; i< planeteerCalls.length; i++){
    let eachCall =
    capitalArray.push(`${planeteerCalls[i]}!`.toUpperCase());
  }
  return capitalArray;
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
