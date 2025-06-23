const products = [
  { name: "Laptop", category: "electronics", price: 50000, rating: 4.5 },
  { name: "T-shirt", category: "clothing", price: 500, rating: 4.0 },
  { name: "Smartphone", category: "electronics", price: 30000, rating: 4.2 },
];

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.name}</h3><p>₹${p.price} | ⭐${p.rating}</p>`;
    container.appendChild(div);
  });
}

function filterAndSort() {
  let category = document.getElementById("category").value;
  let sort = document.getElementById("sort").value;
  let result = [...products];

  if (category) result = result.filter(p => p.category === category);
  if (sort === "price") result.sort((a, b) => a.price - b.price);
  if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

  displayProducts(result);
}

displayProducts(products);
