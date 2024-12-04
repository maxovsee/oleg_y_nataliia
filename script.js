const fs = require('fs');
const path = require('path');

const propertiesFolder = 'properties';

fs.readdir(propertiesFolder, (err, folders) => {
  if (err) {
    console.error(err);
  } else {
    folders.forEach((folder) => {
      const propertyFolder = path.join(propertiesFolder, folder);
      const infoFile = path.join(propertyFolder, 'info.json');

      fs.readFile(infoFile, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const propertyInfo = JSON.parse(data);
          const advertHtml = `
            <div class="property-listing">
              <h2>${propertyInfo.title}</h2>
              <p>Price: ${propertyInfo.price}</p>
              <p>Location: ${propertyInfo.location}</p>
            </div>
          `;

          // Add the advert to the page
          const mainElement = document.querySelector('main');
          mainElement.innerHTML += advertHtml;
        }
      });
    });
  }
});
