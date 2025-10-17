
 document.addEventListener('DOMContentLoaded', function() {
        // Hide all products-grid initially
        document.querySelectorAll('.products-grid').forEach(function(grid) {
            grid.classList.remove('open');
        });
        /* Optionally, open the first category by default:
        var firstGrid = document.querySelector('.category .products-grid');
        var firstHeader = document.querySelector('.category .category-header');
        if (firstGrid && firstHeader) {
            firstGrid.classList.add('open');
            firstHeader.classList.add('open');
        }
            */
        // Add click handlers
        document.querySelectorAll('.category').forEach(function(cat) {
            var header = cat.querySelector('.category-header');
            var grid = cat.querySelector('.products-grid');
            header.addEventListener('click', function() {
                    grid.classList.toggle('open');
                    header.classList.toggle('open');
                
            });
        });
    });
    
function searchProducts() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase()
    const categories = document.querySelectorAll(".category")
    const topProductsEl = document.getElementById("topProducts")
    const topdealsContainerEl = document.getElementById("topdeals-container")
    let anyMatch = false;

    categories.forEach(category => {
        const categoryTitle = category.querySelector(".category-title").textContent.toLowerCase()
        const products = category.querySelectorAll(".product-card")
        let hasVisibleProducts = false;

        products.forEach(product => {
            const productName = product.querySelector(".product-name").textContent.toLowerCase()
            if(productName.includes(searchValue) || categoryTitle.includes(searchValue)) {
                product.style.display = "flex"
                anyMatch = true
                hasVisibleProducts = true
            }
            else {
                product.style.display = "none"
                
            }
        })


        category.style.display = hasVisibleProducts || searchValue === '' ? 'block' : 'none';
    })
    if(searchValue === "" || !anyMatch) {
        topProductsEl.style.display = "flex"
        topdealsContainerEl.style.display = "flex"
    }
    else {
        topProductsEl.style.display = "none"
        topdealsContainerEl.style.display = "none"

    }
    }

