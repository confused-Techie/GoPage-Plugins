const axios = require("axios");
const fs = require('fs');

async function run(rawArguments) {
  //first lets get the devicons file

  let res = await axios.get('https://raw.githubusercontent.com/devicons/devicon/master/devicon.json');

  var locArray = [];

  for (var i = 0; i < res.data.length; i++) {

    for (var y = 0; y < res.data[i].versions.svg.length; y++) {

      var itemName = `${res.data[i].name}-${res.data[i].versions.svg[y]}`;
      var itemLink = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${res.data[i].name}/${itemName}.svg`;
      var itemAlt = res.data[i].name;

      var itemToAdd = {
        loc: itemLink,
        id: itemName,
        alt: itemAlt
      };

      locArray.push(itemToAdd);
    }
  }

  fs.writeFile("devservices.json", JSON.stringify(locArray, null, "\t"), function(err) {
    if (err) {
      console.log(err);
    }
  });
  console.log(`${locArray.length} Icons found.`);
  console.log('File Updated.');

}

module.exports = {
  run,
};
