function takeShower () {
  return 'Showering!'
}

function eatBreakfast () {
  const meal = cookFood
  return `Eating ${meal}`
}

function cookFood () {
  const items = ['Oatmeal', 'Eggs', 'Protein Shake']
  return items[Math.floor(Math.random() * items.length)]
}

function wakeup () {
  takeShower()
  eatBreakfast()
  console.log('Ok ready to go to work!')
}

wakeup()