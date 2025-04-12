// Pizza menu data in JSON format
const pizzaMenu = [
    {
        "name": "Margherita Pizza",
        "ingredients": "Fresh tomato sauce, Mozzarella cheese, Fresh basil leaves, Olive oil drizzle",
        "price": "$10.99",
        "image": "https://cdn.pixabay.com/photo/2015/08/26/16/47/dessert-908746_960_720.jpg",
        "description": "A classic favorite with a simple yet flavorful combination of mozzarella and fresh basil."
    },
    {
        "name": "Pepperoni Pizza",
        "ingredients": "Tomato sauce, Mozzarella cheese, Pepperoni slices",
        "price": "$12.99",
        "image": "https://cdn.pixabay.com/photo/2023/04/30/21/34/pizza-7961604_1280.jpg",
        "description": "A timeless choice for pepperoni lovers, featuring crispy crust and pepperoni slices."
    },
    {
        "name": "Vegetarian Supreme Pizza",
        "ingredients": "Tomato sauce, Mozzarella cheese, Red onions, Bell peppers, Olives, Mushrooms, Spinach, Cherry tomatoes",
        "price": "$13.49",
        "image": "https://cdn.pixabay.com/photo/2021/04/06/14/38/pizza-6156566_960_720.jpg",
       "description": "Loaded with fresh vegetables, this pizza is perfect for those who prefer a plant-based meal."
    },
    {
        "name": "BBQ Chicken Pizza",
        "ingredients": "BBQ sauce, Grilled chicken, Red onions, Mozzarella cheese, Cilantro",
        "price": "$14.49",
        "image": "https://cdn.pixabay.com/photo/2022/10/17/12/51/pizza-7527524_960_720.jpg",
        "description": "A smoky BBQ sauce pairs perfectly with grilled chicken and mozzarella."
    },
    {
        "name": "Hawaiian Pizza",
        "ingredients": "Tomato sauce, Mozzarella cheese, Ham, Pineapple chunks",
        "price": "$12.49",
        "image": "https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg",
        "description": "A tropical twist on a classic, combining sweet pineapple and savory ham."
    },
    {
        "name": "Meat Lovers Pizza",
        "ingredients": "Tomato sauce, Mozzarella cheese, Pepperoni, Sausage, Bacon, Ground beef",
        "price": "$15.99",
        "image": "https://cdn.pixabay.com/photo/2019/05/15/18/56/pizza-4205701_1280.jpg",
        "description": "Packed with all your favorite meats, this pizza satisfies even the hungriest appetite."
    },
    {
        "name": "Four Cheese Pizza",
        "ingredients": "Tomato sauce, Mozzarella, Cheddar, Parmesan, Ricotta cheese",
        "price": "$13.99",
        "image": "https://cdn.pixabay.com/photo/2019/09/24/08/49/pizza-4500771_1280.jpg",
        "description": "A creamy blend of four different cheeses creates a rich and indulgent pizza."
    },
    {
        "name": "Buffalo Chicken Pizza",
        "ingredients": "Buffalo sauce, Grilled chicken, Mozzarella cheese, Blue cheese crumbles, Celery",
        "price": "$14.99",
        "image": "https://cdn.pixabay.com/photo/2020/05/12/15/22/pizza-5163575_960_720.jpg",
        "description": "A spicy and tangy delight with buffalo sauce, grilled chicken, and blue cheese."
    },
    {
        "name": "White Pizza",
        "ingredients": "Olive oil, Garlic base, Ricotta cheese, Mozzarella cheese, Spinach, Parmesan",
        "price": "$12.99",
        "image": "https://cdn.pixabay.com/photo/2020/08/19/14/43/pizza-5501065_1280.jpg",
        "description": "A creamy and aromatic pizza with ricotta and mozzarella cheese."
    },
    {
        "name": "Seafood Pizza",
        "ingredients": "Tomato sauce, Mozzarella cheese, Shrimp, Calamari, Scallops, Fresh herbs",
        "price": "$17.49",
        "image": "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg",
        "description": "A seafood lover’s dream, featuring shrimp, calamari, and scallops."
    },
    {
        "name": "Pesto Chicken Pizza",
        "ingredients": "Pesto sauce, Grilled chicken, Mozzarella cheese, Sun-dried tomatoes",
        "price": "$14.99",
        "image": "https://cdn.pixabay.com/photo/2017/09/02/15/49/pizza-2707694_1280.jpg",
        "description": "A fresh and aromatic pizza with pesto sauce, grilled chicken, and sun-dried tomatoes."
    },
    {
        "name": "Truffle Mushroom Pizza",
        "ingredients": "White truffle oil, Mushrooms, Mozzarella, Parmesan cheese",
        "price": "$16.49",
        "image": "https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903773_960_720.jpg",
        "description": "A gourmet pizza with earthy mushrooms and a luxurious truffle oil drizzle."
    },
    {
        "name": "Philly Cheesesteak Pizza",
        "ingredients": "Alfredo sauce, Grilled steak, Onions, Green peppers, Mushrooms, Mozzarella",
        "price": "$15.49",
        "image": "https://cdn.pixabay.com/photo/2023/03/20/04/09/pizza-7863713_1280.jpg",
        "description": "Inspired by the famous Philly cheesesteak sandwich with grilled steak, peppers, and mushrooms."
    }
];

// Function to render pizza menu
function renderMenu() {
    const menuContainer = document.getElementById("pizzaMenu");
    pizzaMenu.forEach(pizza => {
        const pizzaCard = document.createElement("div");
        pizzaCard.classList.add("col-md-4");

        pizzaCard.innerHTML = `
            <div class="card">
                <img src="${pizza.image}" class="card-img-top" alt="${pizza.name}">
                <div class="card-body">
                    <h5 class="card-title">${pizza.name}</h5>
                    <p class="card-description">${pizza.description}</p>
                    <p class="card-price">${pizza.price}</p>
                    <button class="btn btn-primary">Order Now</button>
                </div>
            </div>
        `;

        menuContainer.appendChild(pizzaCard);
    });
}

// Call renderMenu to display the pizza menu
renderMenu();



