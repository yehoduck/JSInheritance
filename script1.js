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
    applyDiscount(percent) {
        if (percent >= 0 && percent <= this.maxDiscountLimit) {
            this.currentDiscount = percent;
            return true;
        }
        return false
    }
    getFullInfo() {
        return `${super.getFullInfo()},
        Поточна знижка: ${this.currentDiscount}%,
        Максимальна знижка: ${this.maxDiscountLimit}%`;
    }
}

const milk = new FoodProduct(
    "Молоко 2.5%",
    "Молочка",
    "Яготинське",
    new Date("2026-11-15")
);
const cake = new DiscountedProduct(
    "Торт Світоч",
    "Випічка",
    "Світоч",
    new Date("2026-11-17"),
    50
);

console.log(milk.getFullInfo());

console.group("Discount check")
console.log(cake.applyDiscount(30)); // true
console.log(cake.getFullInfo());

console.log(cake.applyDiscount(70)); // false
console.log(cake.getFullInfo());
console.groupEnd()