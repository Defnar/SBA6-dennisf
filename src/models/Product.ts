import calculateDiscount from "../utils/discountCalculator";


//product class.  Readonly on properties for easier use. Shortened to data needed only
export default class Product {
    readonly title: string;
    readonly category: string;
    readonly price: number;
    readonly discountPercentage: number;

    constructor(
        title: string,
        category: string,
        price: number,
        discountPercentage: number
    )
        {
            this.title = title;
            this.category = category;
            this.price = price;
            this.discountPercentage = discountPercentage;
            
    }


    displayDetails() {
        console.log(this);
    }

    getPriceWithDiscount() {
        return (this.price - calculateDiscount(this)).toFixed(2);
    }
}