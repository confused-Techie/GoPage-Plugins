apiInit();

async function apiInit() {
  console.log('Pihole API Started...');

  var elements = pluginAPI.ReturnItems('piholeAPI');
  for (var i=0; i<elements.length; i++) {
    var itemURL = elements[i].getAttribute('data-url');

    await piholeApiLogic(itemURL)
      .then(res => {
        elements[i].innerHTML = res;
      })
      .catch(err => {
        elements[i].innerHTML = err;
      });
  }
}

function piholeApiLogic(url) {
  return new Promise(function (resolve, reject) {
    console.log(`piholeApiLogic called with: ${url}`);
    try {
      var piholeAPIURL;
      // Since the admin page needs the /admin, but some may just save the address we will
      // check for that here
      if (url.includes('/admin')) {
        piholeAPIURL = `${url}/api.php/stats/summary`;
      } else {
        piholeAPIURL = `${url}/admin/api.php/stats/summary`;
      }



      fetch(piholeAPIURL)
        .then(response => response.json())
        .then(data => {
          var adsPercentageToday = parseFloat(data.ads_percentage_today).toFixed(2);
          var returnData = `<p>Ads Blocked: ${data.ads_blocked_today}</p><p>Ads Percentage: ${adsPercentageToday}</p>`;
          resolve(returnData);
        });
    } catch(err) {
      reject(err);
    }
  });
}
