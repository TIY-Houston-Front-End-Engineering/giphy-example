"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
var Backbone = require('backbone')
require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
var Pace = require("../bower_components/pace/pace.js")

///---- start ze program!

var form = document.querySelector('.toolbar form'),
    images = document.querySelector('.images'),
    input = form.querySelector('input'),
    apikey = 'dc6zaTOxFJmzC',
    query = 'kung fury'

function searchGiphy(query){
    var url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apikey}`

    fetch(url).then((r) => r.json()).then((json) => {
        images.innerHTML = json.data.map((image) => `<img src="${image.images.downsized.url}">`).join('')
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    searchGiphy(input.value)
})
searchGiphy(query)












