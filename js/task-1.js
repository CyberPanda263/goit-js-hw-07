function getCategories () {
    const catecories = document.querySelectorAll(".item");
    const categoryList = [];
    categoryList.push(`Number of categories: ${catecories.length}`);
    const category = catecories.forEach(category => {
        const categoryNames = category.querySelector("h2");
        const categoryItem = category.querySelector("ul");
        categoryList.push(`Category: ${categoryNames.textContent}`, `Elements: ${categoryItem.children.length}`)
    })
    categoryList.forEach(element => console.log(element));
}

getCategories();