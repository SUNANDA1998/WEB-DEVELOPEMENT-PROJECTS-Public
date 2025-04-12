// Fetching juice data from JSON (you can replace with a direct JSON object)
const juices = [
    {
      "id": 1,
      "name": "Orange Juice",
      "image": "https://cdn.pixabay.com/photo/2017/01/20/14/59/orange-1995044_960_720.jpg",
      "description": "Freshly squeezed orange juice packed with Vitamin C."
    },
    {
      "id": 2,
      "name": "Green Juice",
      "image": "https://cdn.pixabay.com/photo/2024/06/10/15/14/ai-generated-8820898_960_720.png",
      // "image": "https://cdn.pixabay.com/photo/2017/08/08/13/37/green-smoothie-2611408_1280.jpg",
      "description": "A healthy mix of kale, spinach, and apple for a refreshing taste."
    },
    {
      "id": 3,
      "name": "Carrot Juice",
      "image": "https://cdn.pixabay.com/photo/2016/08/26/20/40/carrot-juice-1623079_1280.jpg",
      // "image": "https://cdn.pixabay.com/photo/2017/08/08/08/58/carrot-2610757_1280.jpg",
      "description": "Sweet and smooth carrot juice, great for vision and skin."
    }
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    const juiceList = document.getElementById("juice-list");
    const juiceSelect = document.getElementById("juice");
  
    juices.forEach(juice => {
      // Add juice to the list
      const juiceCard = document.createElement("div");
      juiceCard.classList.add("col-md-4");
  
      juiceCard.innerHTML = `
        <div class="card">
          <img src="${juice.image}" class="card-img-top" alt="${juice.name}">
          <div class="card-body">
            <h5 class="card-title">${juice.name}</h5>
            <p class="card-text">${juice.description}</p>
          </div>
        </div>
      `;
      juiceList.appendChild(juiceCard);
  
      // Add juice to the dropdown options
      const option = document.createElement("option");
      option.value = juice.id;
      option.textContent = juice.name;
      juiceSelect.appendChild(option);
    });
  
    // Handle form submission
    const form = document.getElementById("order-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const selectedJuiceId = parseInt(juiceSelect.value);
      const quantity = document.getElementById("quantity").value;
  
      const selectedJuice = juices.find(juice => juice.id === selectedJuiceId);
      const orderSummary = document.getElementById("order-summary");
      const summaryText = `You ordered ${quantity} x ${selectedJuice.name}.`;
  
      document.getElementById("summary").textContent = summaryText;
      orderSummary.style.display = "block";
    });
  });
  