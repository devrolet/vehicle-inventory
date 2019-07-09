const cars = [
	{
		make: 'BMW',
		carmodel: 'Serie 3',
		year: 2012,
		price: 30000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		make: 'Audi', 
		carmodel: 'A4', 
		year: 2018, 
		price: 40000, 
		doors: 4, 
		color: 'Black', 
		transmission: 'automatic' 
	},
	{
		make: 'Ford',
		carmodel: 'Mustang',
		year: 2015,
		price: 20000,
		doors: 2,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		make: 'Audi', 
		carmodel: 'A6', 
		year: 2010, 
		price: 35000, 
		doors: 4, 
		color: 'Black', 
		transmission: 'automatic' },
	{
		make: 'BMW',
		carmodel: 'Serie 5',
		year: 2016,
		price: 70000,
		doors: 4,
		color: 'Red',
		transmission: 'automatic'
	},
	{
		make: 'Mercedes Benz',
		carmodel: 'Clase C',
		year: 2015,
		price: 25000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{
		make: 'Chevrolet',
		carmodel: 'Camaro',
		year: 2018,
		price: 60000,
		doors: 2,
		color: 'Red',
		transmission: 'manual'
	},
	{ 
		make: 'Ford', 
		carmodel: 'Mustang', 
		year: 2019, 
		price: 80000, 
		doors: 2, 
		color: 'Red', 
		transmission: 'manual' },
	{
		make: 'Dodge',
		carmodel: 'Challenger',
		year: 2017,
		price: 40000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		make: 'Audi', 
		carmodel: 'A3', 
		year: 2017, 
		price: 55000, 
		doors: 2, 
		color: 'Black', 
		transmission: 'manual' 
	},
	{
		make: 'Dodge',
		carmodel: 'Challenger',
		year: 2012,
		price: 25000,
		doors: 2,
		color: 'Red',
		transmission: 'manual'
	},
	{
		make: 'Mercedes Benz',
		carmodel: 'Clase C',
		year: 2018,
		price: 45000,
		doors: 4,
		color: 'Blue',
		transmission: 'automatic'
	},
	{
		make: 'BMW',
		carmodel: 'Serie 5',
		year: 2019,
		price: 90000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		make: 'Ford',
		carmodel: 'Mustang',
		year: 2017,
		price: 60000,
		doors: 2,
		color: 'Black',
		transmission: 'manual' 
	},
	{
		make: 'Dodge',
		carmodel: 'Challenger',
		year: 2015,
		price: 35000,
		doors: 2,
		color: 'Blue',
		transmission: 'automatic'
	},
	{
		make: 'BMW',
		carmodel: 'Serie 3',
		year: 2018,
		price: 50000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{
		make: 'BMW',
		carmodel: 'Serie 5',
		year: 2017,
		price: 80000,
		doors: 4,
		color: 'Black',
		transmission: 'automatic'
	},
	{
		make: 'Mercedes Benz',
		carmodel: 'Clase C',
		year: 2018,
		price: 40000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		make: 'Audi', 
		carmodel: 'A4', 
		year: 2016, 
		price: 30000, 
		doors: 4, 
		color: 'Blue', 
		transmission: 'automatic'
	}
];

// Array Methods

// FOREACH METHOD
// cars.forEach(car => console.log(car));

// MAP METHOD
// cars.map(car => {
// 	console.log(car)
// });

// let result = cars.map(car => car);

// console.log(result);


// difference between foreach and map. map creates a new array
// let result = cars.map(car => car);
// console.log(result);
// let result2 = cars.forEach(car => car);
// console.log(result2);

// FILTER METHOD returns all elements that match criteria
// let result = cars.filter(car => car.make === 'Mercedes Benz');
// let result = cars.filter(car => car.color === 'Red');
// let result = cars.filter(car => car.make === 'Dodge');
// let result = cars.filter(car => car.year <= 2015 && car.make === 'BMW');
// let result = cars.filter(car => car.price <=50000 && car.make === 'Mercedes Benz');

// console.log(result);


// FIND METHOD returns first item in array that meets criteria
// let result = cars.find(car => car.price <=50000 && car.make === 'Mercedes Benz');

// console.log(result);


// REDUCE METHOD - Outputs one single value
// takes two params 1. accumulator 2. current object
// let result = cars.reduce((total, car) => total + car.price, 0 );

// const numbers = [1100,2250,400];
// let result = numbers.reduce((total, number) => total + number, 0);

// console.log(result);

// SOME METHOD - returns true or false
let result = cars.some(car => car.make === 'Chevrolet');

console.log(result);

// End Array Methods




// the old way
// for(let i = 0; i < cars.length; i++) {
// 	// console.log(cars[i]);
// }

// // Filter black cars
// let result = [];
// for(let i = 0; i < cars.length; i++) {
// 	if(cars[i].color === 'Black') {
// 		result.push(cars[i]);
// 	}
// }

// console.log(result);
