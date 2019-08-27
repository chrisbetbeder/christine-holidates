#!/usr/bin/env node

const countryList = require('country-list');
const axios = require('axios');
const readlineSync = require('readline-sync');


const uri = "https://date.nager.at/api/v2/PublicHolidays/";

// demander le nom du pays à l'utilisateur dans le terminal avec readline Sync

// transformer le nom du pays en code (ex : Belgique = BE) avec Country-list

// récuper l'année en cours avec javascript :p

// faire une requête à l'api des jours de vacances (https://date.nager.at) avec axios

// renvoyer à l'utilisateur une liste des noms des vacances avec leurs dates
// objet.name et objet.date

// bonus : lui demander s'il veut recommencer
