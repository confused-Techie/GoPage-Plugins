init();

async function init() {
  console.log('Dev Service Icons Started...');

  var elements = pluginAPI.ReturnItems('devserviceIcons');

  for (var i = 0; i < elements.length; i++) {
    var rawOptions = elements[i].getAttribute('data-options');

    var parseOptions = pluginAPI.ParseConfig(rawOptions);

    await mainLogic(parseOptions)
      .then(res => {
        elements[i].innerHTML = res;
      })
      .catch(err => {
        elements[i].innerHTML = err;
      });
  }
}

function mainLogic(options) {
  return new Promise(function (resolve, reject) {
    var iconsArray = [
      {
        "loc": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        "id": "android-original",
        "alt": "Android Icon"
      },
      {
        "loc": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg",
        "id": "android-original-wordmark",
        "alt": "Android Icon"
      },
      {
        "loc": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg",
        "id": "android-plain",
        "alt": "Android Icon"
      },
      {
        "loc": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain-wordmark.svg",
        "id": "android-plain-wordmark",
        "alt": "Android Icon"
      },
      {
        "loc": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "id": "github-original",
        "alt": "Github Icon"
      },
      {
        "loc": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
        "id": "github-original-wordmark",
        "alt": "Github Icon"
      }
    ];

    var imageOption = options.icon;

    for (var i = 0; i < iconsArray.length; i++) {
      if (imageOption == iconsArray[i].id) {
        resolve(`<img src="${iconsArray[i].loc}" alt="${iconsArray[i].alt}" title="${iconsArray[i].alt}" width="32">`);
      }
    }
    reject('☹');
  });
}
