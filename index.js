function scuberGreetingForFeet(numberFeet){
  // Write your code here!
  if (numberFeet <= 400) {
  return 'This one is on me!'
  } else if (numberFeet >= 2500) {
    return 'No can do.'
} else 
   return 'I will gladly take your thirty bucks.'
}

function ternaryCheckCity(cityName){
  return (cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}
function switchOnCharmFromTip(theTip){
  // Write your code here!
  switch (true) {
    case 'generous':
      return 'Thank you so much.'
      break;    
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
  }
}