const propertiesFolder = 'properties';

fetch(`${propertiesFolder}/folders.json`)
  .then(response => response.json())
  .then(folders => {
    folders.forEach(folder => {
      const propertyFolder = `${propertiesFolder}/${folder}`;
      const infoFile = `${propertyFolder}/info.json`;

      fetch(infoFile)
        .then(response => response.json())
        .then(propertyInfo => {
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
          const imagesFolder = `${propertyFolder}/images`;

          fetch(`${imagesFolder}/images.json`)
            .then(response => response.json())
            .then(images => {
              images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `${imagesFolder}/${image}`;
                imgElement.alt = `${propertyInfo.title} - ${image}`;

                imageGallery.appendChild(imgElement);
              });
            });
        });
    });
  });
