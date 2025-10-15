function searchProducts() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase()
    const categories = document.querySelectorAll(".category")

    categories.forEach(category => {
        const categoryTitle = category.querySelector(".category-title").textContent.toLowerCase()
        const products = category.querySelectorAll(".product-card")
        let hasVisibleProducts = false;

        products.forEach(product => {
            const productName = product.querySelector(".product-name").textContent.toLowerCase()

            if(productName.includes(searchValue) || categoryTitle.includes(searchValue)) {
                product.style.display = "block"
                hasVisibleProducts = true
            }
            else {
                product.style.display = "none"
            }
        })

        category.style.display = hasVisibleProducts || searchValue === '' ? 'block' : 'none';
    })

}