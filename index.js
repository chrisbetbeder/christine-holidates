#!/usr/bin/env node

const countryList = require('country-list');
const axios = require('axios');
const readlineSync = require('readline-sync');


const uri = "https://date.nager.at/api/v2/PublicHolidays/";

// demander le nom du pays à l'utilisateur dans le terminal avec readline Sync
var countryName = readlineSync.question('Entrez un nom de pays...');


// transformer le nom du pays en code (ex : Belgique = BE) avec Country-list
var countryCode = countryList.getCode(countryName);  // on transforme le pays en code



// récuper l'année en cours avec javascript :p
var date1 = new Date();  // on crée un objet avec la date de quand l'objet
var annee = date1.getFullYear(); // var annee = 2019



// faire une requête à l'api des jours de vacances (https://date.nager.at) avec axios
axios.get(`${uri}/${annee}/${countryCode}`)  // pour contacter l'api 
    .then(function(response){  // response = tableau qui contient toutes les infos
        response.data.forEach(el => {
            var date2 = new Date(el.date);
            var jour2 = date2.getDate();
            var mois2 = date2.getMonth();
            var annee2 = date2.getFullYear();
            console.log(`${el.name} / ${jour2} - ${mois2} - ${annee2}`);
        });
    })




// renvoyer à l'utilisateur une liste des noms des vacances avec leurs dates
// objet.name et objet.date

// bonus : lui demander s'il veut recommencer
