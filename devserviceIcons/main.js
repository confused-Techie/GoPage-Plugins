init();

async function init() {
  console.log('Dev Service Icons Started...');

  var elements = pluginAPI.ReturnItems('devserviceIcons');

  var data = getJSON();

  for (var i = 0; i < elements.length; i++) {
    var rawOptions = elements[i].getAttribute('data-options');

    var parseOptions = pluginAPI.ParseConfig(rawOptions);


    await mainLogic(parseOptions, data)
      .then(res => {
        elements[i].innerHTML = res;
      })
      .catch(err => {
        elements[i].innerHTML = err;
      });
  }
}

function mainLogic(options, iconsArray) {
  return new Promise(function (resolve, reject) {

    var imageOption = options.icon;

    for (var i = 0; i < iconsArray.length; i++) {
      if (imageOption == iconsArray[i].id) {
        resolve(`<img src="${iconsArray[i].loc}" alt="${iconsArray[i].alt}" title="${iconsArray[i].alt}" width="32">`);
      }
    }
    reject('☹');
  });
}

function getJSON() {
  fetch("/pluins/devserviceIcons/devservices.json")
    .then(response => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}
