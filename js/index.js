const getBeersAPI = () => fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let data = response;
        let beer = "";
       
        for (let i = 0; i < data.length; i++) {
            beer += "<b>Name : </b>" + data[i].name +
                "<br> <b>Tagline : </b>" + data[i].tagline +
                "<br> <b>PH : </b>" + data[i].ph +
                "<br> <b>Yeast : </b>" + data[i].ingredients.yeast +
                "<br> <b>First Brewed : </b>" + data[i].first_brewed +
                "<br> <b>Description : </b>" + data[i].description +
                "<br><hr>" 
               
        }
        document.getElementById('result').innerHTML = beer
      }
)

const getBeerAPIByName = (name) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let data = response;
        let beer = "";
        for (let i = 0; i < data.length; i++) {
            beer += "<b>Name : </b>" + data[i].name +
                "<br> <b>Tagline : </b>" + data[i].tagline +
                "<br> <b>PH : </b>" + data[i].ph +
                "<br> <b>Yeast : </b>" + data[i].ingredients.yeast +
                "<br> <b>First Brewed : </b>" + data[i].first_brewed +
                "<br> <b>Description : </b>" + data[i].description +
                "<br><hr>" 
        }
        document.getElementById('result').innerHTML = beer
    })

const getBeerAPIByYeast = (yeast) => fetch(`https://api.punkapi.com/v2/beers/?yeast=${yeast}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let data = response;
        let beer = "";
        for (let i = 0; i < data.length; i++) {
            beer += "<b>Name : </b>" + data[i].name +
                "<br> <b>Tagline : </b>" + data[i].tagline +
                "<br> <b>PH : </b>" + data[i].ph +
                "<br> <b>Yeast : </b>" + data[i].ingredients.yeast +
                "<br> <b>First Brewed : </b>" + data[i].first_brewed +
                "<br> <b>Description : </b>" + data[i].description +
                "<br><hr>" 
        }
        document.getElementById('result').innerHTML = beer
    })

const getBeerAPIByNameAndYeast = (name,yeast) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}&?yeast=${yeast}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let data = response;
        let beer = "";
        for (let i = 0; i < data.length; i++) {
        beer += "<b>Name : </b>" + data[i].name +
                "<br> <b>Tagline : </b>" + data[i].tagline +
                "<br> <b>PH : </b>" + data[i].ph +
                "<br> <b>Yeast : </b>" + data[i].ingredients.yeast +
                "<br> <b>First Brewed : </b>" + data[i].first_brewed +
                "<br> <b>Description : </b>" + data[i].description +
                "<br><hr>" 
        }
        document.getElementById('result').innerHTML = beer
    })

getBeersAPI()

const toSearch = (name, yeast) => {
    if (yeast != "" && name != "") {
        getBeerAPIByNameAndYeast(name,yeast)
    } else if (yeast != "") {
        getBeerAPIByYeast(yeast)
    } else if (name != "") {
        getBeerAPIByName(name)
    } else {
        getBeersAPI()
    }
}