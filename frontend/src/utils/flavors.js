import Parser from "papaparse"

function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/[^\w]+/g, '');
}

export async function loadFlavors() {
    const cached = localStorage.getItem("flavors");
    if (cached) {
        return JSON.parse(cached);
    }

    const response = await fetch('/flavors.csv');
    const csvText = await response.text();

    const parsed = Parser.parse(csvText, {
        header: false,
        skipEmptyLines: true
    });

    const flavors = parsed.data.map(row => {
        const [id, category, flavor] = row.map(cell => cell.replace(/"/g, "").trim());
        return {
            id: parseInt(id),
            category,
            categorySlug: slugify(category),
            flavor,
            flavorSlug: slugify(flavor)
        };
    });

    localStorage.setItem('flavors', JSON.stringify(flavors));
    return flavors;
}

export async function getCategories() {
    const flavors = await loadFlavors();
    const unique = {};
    flavors.forEach(f => {
        unique[f.categorySlug] = {name: f.category, slug: f.categorySlug};
    })
    return Object.values(unique);
}

export async function getFlavorsByCategory(categorySlug) {
    const flavors = await loadFlavors();
    return flavors.filter(f => f.categorySlug === categorySlug)
}