    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, { trigger: 'hover', placement: 'left' });
    });

    function handleFilter(productCategory) {
        let productCategories = document.querySelectorAll('.product-categories')
            productCategories.forEach((element) => {
                (productCategory == 'all') ? element.classList.remove('d-none') : element.classList.add('d-none');
            });

            if (productCategory != 'all') {
                let productCategoryItems = document.querySelectorAll(`[data-category=${productCategory}]`);
                console.log(productCategoryItems);
                productCategoryItems.forEach((element) => {
                    element.classList.remove('d-none');
                });
            }
        }
    
    

