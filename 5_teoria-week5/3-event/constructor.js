function CarTwo(doors, brand, color) {
	this.carDoors = doors;
	this.carBrand = brand;
	this.carColor = color;

	this.getCarInfo = function () {
		return `La mia macchina è una ${this.carBrand} ed è ${this.carColor}`;
	};
}

const ford2 = new CarTwo(5, "Ford", "black");
console.log(ford2);
ford2.getCarInfo();
