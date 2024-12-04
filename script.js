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
              <p>${propertyInfo.description}</p>
              <div class="image-gallery">
              </div>
            </div>
          `;

          // Add the advert to the page
          const mainElement = document.querySelector('main');
          mainElement.innerHTML += advertHtml;

          // Add the images to the page
          const imageGallery = document.querySelector('.image-gallery');
          const imagesFolder = path.join(propertyFolder, 'images');

          fs.readdir(imagesFolder, (err, images) => {
            if (err) {
              console.error(err);
            } else {
              images.forEach((image) => {
                const imgElement = document.createElement('img');
                imgElement.src = `properties/${folder}/images/${image}`;
                imgElement.alt = `${propertyInfo.title} - ${image}`;

                imageGallery.appendChild(imgElement);
              });
            }
          });
        }
      });
    });
  }
});
