const fs = require('fs');
const fetch = require('cross-fetch');
const FormData = require('form-data');

const form = new FormData();
const fileStream = fs.createReadStream('1.json');
const fileStream2 = fs.createReadStream('2.json');
form.append('metadata_files', fileStream);
form.append('metadata_files', fileStream2);

const options = {
  method: 'POST',
  body: form,
  headers: {
    "Authorization": "ABCDE",
  },
};

if (options.headers.Authorization == "ABCDE") {
  throw new Error("Authorization header is missing: replace 'ABCDE' with your API key.");
}

fetch("https://api.nftport.xyz/v0/metadata/directory", options)
  .then(response => {
      console.log("response", response);
    return response.json()
  })
  .then(responseJson => {
    // Handle the response
    console.log(responseJson);
  })
  .catch(error => {
    console.error(error);
  })