class FoodProduct {
    constructor(title, category, brand, manufactureDate = new Date()) {
        this.title = title;
        this.category = category;
        this.brand = brand;
        this.manufactureDate = new Date(manufactureDate);
    }
}