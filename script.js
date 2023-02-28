//https://superheroapi.com/api/731207251994263/245


const newHeroButtonDiv = document.getElementById('hero_button')
const SUPERHERO_TOKEN = 731207251994263
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const heroImageDiv  = document.getElementById('heroImage')
const searchButtonDiv  = document.getElementById('searchButton')
const searchInputDiv = document.getElementById('searchInput')

const getSuperHero = (id, name) => {

  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => {
  console.log(json.powerstats)
  const superHero = json
  showHeroInfo(superHero)

})
}

const statToEmoji = {
  intelligence: '🧠',
  speed: '⚡',
  strength: '💪',
  durability: '🏋️‍♂️',
  power: '📈',
  combat: '⚔️',

}

const showHeroInfo = (character) => {
const name = `<h2>${character.name}</h2>`
const img = `<img src="${character.image.url}" height= 200 width= 200/>`
const stats = Object.keys(character.powerstats).map(stat => {
  return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
}).join('')

heroImageDiv.innerHTML = `${name}${img}${stats}`
}



const getSearchSuperHero = (name) => {

  console.log(searchInputDiv.value)

  fetch(`${BASE_URL}/search/${name}`)
  
  .then(response => response.json())
  .then(json => {
  console.log(json.powerstats)
  const hero = json.results[0]
  showHeroInfo(hero)
})

}


// random hero selction 
const randomHero = () => {
  const numberOfHeros = 731
  return Math.floor(Math.random()* numberOfHeros) + 1
}

newHeroButtonDiv.onclick = () => getSuperHero(randomHero())

searchButtonDiv.onclick = () => getSearchSuperHero(searchInputDiv.value)









