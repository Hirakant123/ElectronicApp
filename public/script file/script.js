

document.addEventListener("DOMContentLoaded", function () {



    let url = "http://localhost:3000/products"

    async function getData(url) {
        try {
            let res = await fetch(url)
            let data = await res.json()
            console.log(data)
            displaydata(data)
        } catch (error) {

        }
    }

    getData(url)

    let container = document.getElementById("container5");
    // displaydata(products)

    function displaydata(products) {

        let spanTexts = ["25% OFF", "45% OFF", "52% OFF", "33% OFF", "22% OFF", "22% OFF", "33% OFF", "22% OFF", "34% OFF", "33% OFF", "12% OFF", "27% OFF"];

        products.forEach((ele, i) => {


            let card = document.createElement("div");
            card.classList.add("card")


            let image = document.createElement("img");
            image.src = ele.image
            image.classList.add("card-img")

            let devider = document.createElement("span");
            devider.classList.add("devider5")

            let name = document.createElement("h5");
            name.textContent = ele.name
            name.classList.add("name")

            let mrp = document.createElement("p")
            mrp.innerText = `MRP ₹${ele.mrp.toLocaleString("en-IN")}`;
            mrp.classList.add("mrp")

            let span = document.createElement("span");
            span.textContent = ` ${spanTexts[i % spanTexts.length]}`;
            span.classList.add("span-text")

            let price = document.createElement("h2")
            price.textContent = `₹${ele.price.toLocaleString("en-IN")}`;

            let btn = document.createElement("button");
            btn.textContent = "Add to Cart"
            btn.classList.add("AddToCart")

            let offer = document.createElement("p")
            offer.innerText = ele.offers
            offer.classList.add("offer")

            btn.addEventListener("click", function () {
                addtocart(ele)
            })

            // Redirect specific products to different HTML files

            card.addEventListener("click", function () {
                console.log(`Card clicked: ${ele.name}`); // Log which card was clicked

                if (ele.name.includes("Refrigerator")) {
                    window.location.href = "refrigerator.html";
                } else if (ele.name.includes("Microwave")) {
                    window.location.href = "micro.html";
                } else if (ele.name.includes("Washing Machine")) {
                    window.location.href = "Wmachine.html";
                } else {
                    console.log("No matching category found. Staying on the same page.");
                }
            });


            btn.addEventListener("click", function (event) {
                event.stopPropagation();
            });



            card.append(image, devider, name, mrp, span, price, offer, btn)

            container.append(card)


        })
    }

    let cartdata = JSON.parse(localStorage.getItem("cart-data")) || []

    function addtocart(ele) {
        cartdata.push(ele)
        console.log(cartdata)
        localStorage.setItem("cart-data", JSON.stringify(cartdata))

    }





    // navbar

    let navToggler = document.querySelector(".nav-toggler");
    let navMenu = document.querySelector(".navbar ul");

    if (navToggler && navMenu) {
        allEventListner();
    }

    function allEventListner() {
        navToggler.addEventListener("click", togglerClick);
    }

    function togglerClick() {
        navToggler.classList.toggle("toggle-open");
        navMenu.classList.toggle("open");
        console.log("hello")
    }



















});


