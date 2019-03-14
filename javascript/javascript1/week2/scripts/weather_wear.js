function suggestClothes(temperature) {
    if (temperature >= 22) {
        return "Shorts and T-shirt";
    }
    else if (temperature < 22 && temperature >= 15) {
        return "Jeans and Shirt";
    }
    else if (temperature < 15 && temperature >= 8) {
        return "Jeans, Shirt and Light jacket";
    }
    else if (temperature < 8 && temperature >= 0) {
        return "Jeans, Shirt and Winter jacket";
    }
    else {
        return "Jeans, Shirt, Winter jacket, Scarf and Hand gloves";
    }
}
const clothesToWear = suggestClothes(-2);
console.log(clothesToWear); 