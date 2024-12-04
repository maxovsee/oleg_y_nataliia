// Property data array
const properties = [
    {
        id: 1,
        title: "Property 1",
        description: "This is a beautiful property",
        price: 100000,
        location: "New York"
    },
    {
        id: 2,
        title: "Property 2",
        description: "This is another beautiful property",
        price: 200000,
        location: "Los Angeles"
    },
    // Add more properties here
];

// Function to generate property listings
function generatePropertyListings() {
    const mainSection = document.querySelector("main");
    mainSection.innerHTML = "";

    properties.forEach((property) => {
        const propertyListing = document.createElement("div");
        propertyListing.innerHTML = `
            <h2>${property.title}</h2>
            <p>${property.description}</p>
            <p>Price: ${property.price}</p>
            <p>Location: ${property.location}</p>
        `;
        mainSection.appendChild(propertyListing);
    });
}

// Call the function to generate property listings
generatePropertyListings();
