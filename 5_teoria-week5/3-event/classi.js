class Car {
	constructor(name, doors, color, brand) {
		this.carName = name;
		this.carDoors = doors;
		this.carColor = color;
		this.carBrand = brand;
	}

	getCarInfo() {
		return `La mia macchina si chiama ${this.carName}, ha ${this.carDoors} porte, è di colore ${this.carColor} ed è una ${this.carBrand}`;
	}
}

const ford = new Car("Pippo", 5, "blue", "Ford");
const landRover = new Car("Defender", 5, "white", "Land Rover");
console.log(ford, landRover);

ford.getCarInfo();
