'use strict';

var getBeersAPI = function getBeersAPI() {
    return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var data = response;
        var beer = "";

        for (var i = 0; i < data.length; i++) {
            beer += "<b>Name : </b>" + data[i].name + "<br> <b>Tagline : </b>" + data[i].tagline + "<br> <b>PH : </b>" + data[i].ph + "<br> <b>Yeast : </b>" + data[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + data[i].first_brewed + "<br> <b>Description : </b>" + data[i].description + "<br><hr>";
        }
        document.getElementById('result').innerHTML = beer;
    });
};

var getBeerAPIByName = function getBeerAPIByName(name) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var data = response;
        var beer = "";
        for (var i = 0; i < data.length; i++) {
            beer += "<b>Name : </b>" + data[i].name + "<br> <b>Tagline : </b>" + data[i].tagline + "<br> <b>PH : </b>" + data[i].ph + "<br> <b>Yeast : </b>" + data[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + data[i].first_brewed + "<br> <b>Description : </b>" + data[i].description + "<br><hr>";
        }
        document.getElementById('result').innerHTML = beer;
    });
};

var getBeerAPIByYeast = function getBeerAPIByYeast(yeast) {
    return fetch('https://api.punkapi.com/v2/beers/?yeast=' + yeast).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var data = response;
        var beer = "";
        for (var i = 0; i < data.length; i++) {
            beer += "<b>Name : </b>" + data[i].name + "<br> <b>Tagline : </b>" + data[i].tagline + "<br> <b>PH : </b>" + data[i].ph + "<br> <b>Yeast : </b>" + data[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + data[i].first_brewed + "<br> <b>Description : </b>" + data[i].description + "<br><hr>";
        }
        document.getElementById('result').innerHTML = beer;
    });
};

var getBeerAPIByNameAndYeast = function getBeerAPIByNameAndYeast(name, yeast) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name + '&?yeast=' + yeast).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var data = response;
        var beer = "";
        for (var i = 0; i < data.length; i++) {
            beer += "<b>Name : </b>" + data[i].name + "<br> <b>Tagline : </b>" + data[i].tagline + "<br> <b>PH : </b>" + data[i].ph + "<br> <b>Yeast : </b>" + data[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + data[i].first_brewed + "<br> <b>Description : </b>" + data[i].description + "<br><hr>";
        }
        document.getElementById('result').innerHTML = beer;
    });
};

getBeersAPI();

var toSearch = function toSearch(name, yeast) {
    if (yeast != "" && name != "") {
        getBeerAPIByNameAndYeast(name, yeast);
    } else if (yeast != "") {
        getBeerAPIByYeast(yeast);
    } else if (name != "") {
        getBeerAPIByName(name);
    } else {
        getBeersAPI();
    }
};
