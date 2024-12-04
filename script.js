const properties = [
  { id: 1, title: "Property 1", price: "$100,000", location: "New York" },
  { id: 2, title: "Property 2", price: "$200,000", location: "Los Angeles" },
  { id: 3, title: "Property 3", price: "$300,000", location: "Chicago" },
];

const mainElement = document.querySelector("main");

properties.forEach((property) => {
  const listingElement = document.createElement("div");
  listingElement.classList.add("property-listing");
  listingElement.innerHTML = `
    <h2>${property.title}</h2>
    <p>Price: ${property.price}</p>
    <p>Location: ${property.location}</p>
  `;
  mainElement.appendChild(listingElement);
});
