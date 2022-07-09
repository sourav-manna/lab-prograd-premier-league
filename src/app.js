//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(name,age,team,won){
  return [name, age, team, won]
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(arr){
  var rs = {}
  if(arr.length == 0){
    return null
  }
  else{
    rs.defender=arr[0]
    rs.midfield=arr[1]
    rs.forward=arr[2]
    return rs
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let arr = players.filter(players => players.debut == year);
  return arr;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(pos){
  let arr = players.filter(players => players.position == pos);
  return arr;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(award){
  var result=[]
  for(let index=0;index<players.length;index++){
    for(let index1=0;index1<players[index].awards.length;index1++){
      if(players[index].awards[index1].name==award){
        result.push(players[index])
        break;
      }
    }
  }
  return result;
}
//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(award,time){
  var result=[]
  for(let index=0;index<players.length;index++){
    let count = 0
    for(let index1=0;index1<players[index].awards.length;index1++){
      if(players[index].awards[index1].name==award){
        count++;
      }
    }
    if(count == time){
      result.push(players[index])
    }
  }
  return result;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(award, country){
  var result=[]
  for(let index=0;index<players.length;index++){
    if (players[index].country == country){
    for(let index1=0;index1<players[index].awards.length;index1++){
      if(players[index].awards[index1].name==award){
        result.push(players[index])
        break;
      }
    }}
  }
  return result;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var result=[]
  for(let i=0;i<players.length;i++){
    if (players[i].team == team && players[i].age < age && players[i].awards.length >= noOfAwards){
        result.push(players[i])
    }
  }
  return result;
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
