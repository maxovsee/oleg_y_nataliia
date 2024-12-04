// Function to load property data from subfolders
function loadProperties() {
  const propertiesFolder = "properties/";
  const propertiesContainer = document.getElementById("properties");

  console.log("Loading properties from:", propertiesFolder);

  // Get a list of subfolders in the properties folder
  fetch(propertiesFolder)
    .then(response => response.text())
    .then(data => {
      console.log("Subfolders:", data);

      const subfolders = data.match(/<a href="([^"]+)\/">/g);

      // Loop through each subfolder and load the property data
      subfolders.forEach(subfolder => {
        const subfolderName = subfolder.match(/<a href="([^"]+)\/">/)[1];
        const propertyDataUrl = propertiesFolder + subfolderName + "/index.json";

        console.log("Loading property data from:", propertyDataUrl);

        fetch(propertyDataUrl)
          .then(response => response.json())
          .then(propertyData => {
            console.log("Property data:", propertyData);

            // Load images from the subfolder
            const imagesUrl = propertiesFolder + subfolderName + "/";
            fetch(imagesUrl)
              .then(response => response.text())
              .then(data => {
                console.log("Images:", data);

                const images = data.match(/<a href="([^"]+\.jpg|[^"]+\.png|[^"]+\.jpeg)">/g);

                // Create an image gallery
                const imageGallery = images.map(image => {
                  const imageUrl = imagesUrl + image.match(/<a href="([^"]+\.jpg|[^"]+\.png|[^"]+\.jpeg)">/)[1];
                  return `<img src="${imageUrl}" alt="${propertyData.title}">`;
                }).join("");

                // Create the property HTML
                const propertyHTML = `
                  <div class="property">
                    <div class="image-gallery">${imageGallery}</div>
                    <h2>${propertyData.title}</h2>
                    <p>${propertyData.description}</p>
                    <p>Price: ${propertyData.price}</p>
                  </div>
                `;
                propertiesContainer.innerHTML += propertyHTML;
              })
              .catch(error => console.error("Error loading images:", error));
          })
          .catch(error => console.error("Error loading property data:", error));
      });
    })
    .catch(error => console.error("Error loading subfolders:", error));
}

// Load property data on page load
loadProperties();
