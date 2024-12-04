// script.js
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

// Function to generate property links
function generatePropertyLinks() {
    const mainSection = document.querySelector("main");
    mainSection.innerHTML = "";

    properties.forEach((property) => {
        const propertyLink = document.createElement("a");
        propertyLink.href = `property${property.id}.html`;
        propertyLink.textContent = property.title;
        mainSection.appendChild(propertyLink);
        mainSection.appendChild(document.createElement("br"));
    });
}

// Call the function to generate property links
generatePropertyLinks();
