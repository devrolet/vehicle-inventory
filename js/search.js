// crear los años
const years = document.createElement('option');
const  maxyear = new Date().getFullYear();
let  minyear = maxyear - 10;

for(let i = maxyear; i >  minyear; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function getCars() {
    return [
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
}

// Search terms object
let searchFields = {
    make: '', 
    carmodel: '', 
    year: '', 
    price: '', 
    doors: '',
    transmission: '',
    color: ''
}

// Event Listener for DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    const cars = getCars();
    showCars(cars);
});

// Event listeners for the form elements
const make = document.querySelector('#make');
make.addEventListener('input', e => {
    searchFields.make = e.target.value;
    // execute the filter cars based on the items in the search fields object
    filterCars();
});

const year = document.querySelector('#year');
year.addEventListener('input', e => {
    searchFields.year = Number(e.target.value);
    // execute the filter cars based on the items in the search fields object
    filterCars();
});

function clearHTML() {
    // select the container
    const container = document.querySelector('#result');

    // clear the HTML
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function showCars(cars) {
    // get the container
    const container = document.querySelector('#result');

    // clear previous HTML
    clearHTML();
    
    // build the HTML and print the data in the container
    cars.forEach(car => {
        const carHTML = document.createElement('p');
        carHTML.innerHTML = `
        ${car.year} ${car.make} ${car.carmodel} - ${car.doors} Doors - Transmission: ${car.transmission} - Price ${car.price} - Color: ${car.color}
        `;
        container.appendChild(carHTML);
    })
}

function filterCars() {
    const result = getCars().filter(filterMake).filter(filterYear);

    if(result.length) {
        showCars(result);
    } else {
        alert('No Results Found');
    }
}

function filterMake(car) {
    if(searchFields.make) {
        return car.make === searchFields.make;
    } else {
        return car;
    }
}

function filterYear(car) {
    if(searchFields.year) {
        return car.year === searchFields.year;
    } else {
        return car;
    }
}


