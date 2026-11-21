class FoodProduct {
    constructor(title, category, brand, manufactureDate = new Date()) {
        this.title = title;
        this.category = category;
        this.brand = brand;
        this.manufactureDate = new Date(manufactureDate);
    }
    get ageInDays() {
        const difference = new Date() - this.manufactureDate; 
        return Math.floor(difference / (1000 * 60 * 60 * 24));
    }
    getFullInfo() {
        return `Назва: ${this.title},
        Категорія: ${this.category},
        Бренд: ${this.brand},
        Вік товару: ${this.ageInDays} днів`;
    }
}
class DiscountedProduct extends FoodProduct {
    constructor(title, category, brand, manufactureDate, maxDiscountLimit) {
        super(title, category, brand, manufactureDate);
        this.maxDiscountLimit = maxDiscountLimit;
        this.currentDiscount = 0;
    }
}