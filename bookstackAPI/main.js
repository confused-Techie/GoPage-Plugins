apiInit();

async function apiInit() {
  console.log('BookStack API Started...');

  var elements = pluginAPI.ReturnItems('bookstackAPI');
  for (var i=0; i<elements.length; i++) {
    var itemURL = elements[i].getAttribute('data-url');

    // now we need to retrieve our config data for this item, via the attribute
    var rawOptions = elements[i].getAttribute('data-options');

    // once we have the raw config, we can use the built in API to parse it
    var parseOptions = pluginAPI.ParseConfig(rawOptions);

    await bookstackApiLogic(itemURL, parseOptions)
      .then(res => {
        elements[i].innerHTML = res;
      })
      .catch(err => {
        elements[i].innerHTML = err;
      });
  }
}

function bookstackApiLogic(url, options) {
  return new Promise(function (resolve, reject) {

    var bookstackTokenId = options.token_id;
    var bookstackTokenSecret = options.token_secret;

    console.log(`URL: ${url}; Options: ${options}; ID: ${bookstackTokenId}; Key: ${bookstackTokenSecret}`);
    try {

      var newHeader = new Headers();
      //newHeader.append("Authorization", `"Token ${bookstackTokenId}:${bookstackTokenSecret}"`);
      newHeader.append("Authorization", "Token iBDnEo79CdZpPbOZ7Ec8t50AjfnaOkzU:hXZVlDPr7ekwMy3aTcnS2ggRDDpq9wp4");

      var requestOptions = {
        method: 'GET',
        headers: newHeader,
        redirect: 'follow',
        mode: 'no-cors'
      };


      // then we want to fetch all the data we want and concoct it.

    fetch(`${url}/api/books`, requestOptions)
      .then(response => response.json())
      .then(bookData => {
        // with the book data we want to grab the other data points
        var totalBooks = bookData.total;

        // thent o grab the next value we care about
        fetch(`${url}/api/chapters`, requestOptions)
          .then(responseChap => responseChap.json())
          .then(chapterData => {
            var totalChapters = chapterData.total;

            fetch(`${url}/api/pages`, requestOptions)
              .then(responsePage => responsePage.json())
              .then(pageData => {
                var totalPages = pageData.total;

                var returnData = `<p>Books: ${totalBooks}</p><p>Chapters: ${totalChapters}</p><p>Pages: ${totalPages}</p>`;

                resolve(returnData);
              });
          });
      });
    } catch(err) {
      reject(err);
    }
  });
}
