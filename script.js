// Fetch property data from JSON file
fetch('properties.json')
  .then(response => response.json())
  .then(data => {
    const propertyListings = document.getElementById('property-listings');
    data.forEach(property => {
      const propertyListing = document.createElement('div');
      propertyListing.innerHTML = `
        <h2>${property.title}</h2>
        <img src="${property.image}" alt="${property.title}">
        <p>${property.description}</p>
        <p>Price: ${property.price}</p>
        <p>Location: ${property.location}</p>
      `;
      propertyListings.appendChild(propertyListing);
    });
  })
  .catch(error => console.error('Error:', error));
