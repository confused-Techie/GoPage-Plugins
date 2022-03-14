init();

async function init() {
  console.log('Self Hosted Icons Started...');

  var elements = pluginAPI.ReturnItems('selfHostedIcons');

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
        "iconLocation": "icons/jellyfin/icon-transparent.svg",
        "iconIdentifier": "jellyfin",
        "iconText": "Jellyfin",
        "iconAlt": "Jellyfin Brand Icon"
      },
      {
        "iconLocation": "icons/bookstack/logo.png",
        "iconIdentifier": "bookstack",
        "iconText": "BookStack",
        "iconAlt": "BookStack Brand Icon"
      },
      {
        "iconLocation": "icons/pihole/icon.png",
        "iconIdentifier": "pihole",
        "iconText": "Pi-hole",
        "iconAlt": "Pi-hole Brand Icon"
      },
      {
        "iconLocation": "icons/freenas/logo.png",
        "iconIdentifier": "freenas",
        "iconText": "FreeNas",
        "iconAlt": "FreeNas Brand Icon"
      },
      {
        "iconLocation": "icons/omada/icon.png",
        "iconIdentifier": "omada",
        "iconText": "Omada Controller",
        "iconAlt": "Omada Controller Brand Icon"
      },
      {
        "iconLocation": "icons/opnsense/icon.png",
        "iconIdentifier": "opnsense",
        "iconText": "OpnSense",
        "iconAlt": "OpnSense Brand Icon"
      },
      {
        "iconLocation": "icons/adguard/icon.png",
        "iconIdentifier": "adguard",
        "iconText": "AdGuard: Network-wide ads & trackers blocking DNS server.",
        "iconAlt": "AdGuard Brand Icon"
      },
      {
        "iconLocation": "icons/plex/icon.png",
        "iconIdentifier": "plex",
        "iconText": "Plex: Media Server that allows you to aggregate all your personal media and access it anywhere you go.",
        "iconAlt": "Plex Media Server Brand Icon"
      },
      {
        "iconLocation": "icons/portainer/icon.png",
        "iconIdentifier": "portainer",
        "iconText": "Portainer: Simple Management solution for Docker.",
        "iconAlt": "Portainer Brand Icon"
      }
    ];

    var imageOption = options.icon;

    // TODO: Later it would be cool to support additional options like dark mode or light mode or colour.

    for (var i = 0; i < iconsArray.length; i++) {
      if (imageOption == iconsArray[i].iconIdentifier) {
        resolve(`<img src="plugins/selfHostedIcons/${iconsArray[i].iconLocation}" alt="${iconsArray[i].iconAlt}" title="${iconsArray[i].iconText}" width="32">`);
      }
    }
    reject('☹');
  });
}
