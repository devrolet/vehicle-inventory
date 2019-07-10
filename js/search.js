// crear los años
const years = document.createElement('option');
const  maxyear = new Date().getFullYear();
let  minyear = maxyear - 70;

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
            carmodel: '3 Series',
            year: 2012,
            price: 30000,
            doors: 4,
            color: 'White',
            transmission: 'Automatic'
        },
        { 
            make: 'Audi', 
            carmodel: 'A4', 
            year: 2018, 
            price: 40000, 
            doors: 4, 
            color: 'Black', 
            transmission: 'Automatic' 
        },
        {
            make: 'Ford',
            carmodel: 'Mustang',
            year: 2015,
            price: 20000,
            doors: 2,
            color: 'White',
            transmission: 'Automatic'
        },
        { 
            make: 'Audi', 
            carmodel: 'A6', 
            year: 2010, 
            price: 35000, 
            doors: 4, 
            color: 'Black', 
            transmission: 'Automatic' },
        {
            make: 'BMW',
            carmodel: '5 Series',
            year: 2016,
            price: 70000,
            doors: 4,
            color: 'Red',
            transmission: 'Automatic'
        },
        {
            make: 'Mercedes Benz',
            carmodel: 'C Class',
            year: 2015,
            price: 25000,
            doors: 4,
            color: 'White',
            transmission: 'Automatic'
        },
        {
            make: 'Chevrolet',
            carmodel: 'Camaro',
            year: 2018,
            price: 60000,
            doors: 2,
            color: 'Red',
            transmission: 'Manual'
        },
        { 
            make: 'Ford', 
            carmodel: 'Mustang', 
            year: 2019, 
            price: 80000, 
            doors: 2, 
            color: 'Red', 
            transmission: 'Manual' },
        {
            make: 'Dodge',
            carmodel: 'Challenger',
            year: 2017,
            price: 40000,
            doors: 4,
            color: 'White',
            transmission: 'Automatic'
        },
        { 
            make: 'Audi', 
            carmodel: 'A3', 
            year: 2017, 
            price: 55000, 
            doors: 2, 
            color: 'Black', 
            transmission: 'Manual' 
        },
        {
            make: 'Dodge',
            carmodel: 'Challenger',
            year: 2012,
            price: 25000,
            doors: 2,
            color: 'Red',
            transmission: 'Manual'
        },
        {
            make: 'Mercedes Benz',
            carmodel: 'C Class',
            year: 2018,
            price: 45000,
            doors: 4,
            color: 'Blue',
            transmission: 'Automatic'
        },
        {
            make: 'BMW',
            carmodel: '5 Series',
            year: 2019,
            price: 90000,
            doors: 4,
            color: 'White',
            transmission: 'Automatic'
        },
        { 
            make: 'Ford',
            carmodel: 'Mustang',
            year: 2017,
            price: 60000,
            doors: 2,
            color: 'Black',
            transmission: 'Manual' 
        },
        {
            make: 'Dodge',
            carmodel: 'Challenger',
            year: 2015,
            price: 35000,
            doors: 2,
            color: 'Blue',
            transmission: 'Automatic'
        },
        {
            make: 'BMW',
            carmodel: '3 Series',
            year: 2018,
            price: 50000,
            doors: 4,
            color: 'White',
            transmission: 'Automatic'
        },
        {
            make: 'BMW',
            carmodel: '5 Series',
            year: 2017,
            price: 80000,
            doors: 4,
            color: 'Black',
            transmission: 'Automatic'
        },
        {
            make: 'Mercedes Benz',
            carmodel: 'C Class',
            year: 2018,
            price: 40000,
            doors: 4,
            color: 'White',
            transmission: 'Automatic'
        },
        {
            make: 'Mercedes Benz',
            carmodel: 'S Class',
            year: 2016,
            price: 45000,
            doors: 4,
            color: 'Black',
            transmission: 'Automatic'
        },
        { 
            make: 'Audi', 
            carmodel: 'A4', 
            year: 2016, 
            price: 30000, 
            doors: 4, 
            color: 'Blue', 
            transmission: 'Automatic'
        }
    ];
}

// Search terms object
let searchFields = {
    make: '', 
    carmodel: '', 
    year: '', 
    min: '',
    max: '', 
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

const min = document.querySelector('#min');
min.addEventListener('input', e => {
    searchFields.min = Number(e.target.value);
    // execute the filter cars based on the items in the search fields object
    filterCars();
});

const max = document.querySelector('#max');
max.addEventListener('input', e => {
    searchFields.max = Number(e.target.value);
    // execute the filter cars based on the items in the search fields object
    filterCars();
});

const doors = document.querySelector('#doors');
doors.addEventListener('input', e => {
    searchFields.doors = Number(e.target.value);
    // execute the filter cars based on the items in the search fields object
    filterCars();
});

const transmission = document.querySelector('#transmission');
transmission.addEventListener('input', e => {
    searchFields.transmission = e.target.value;
    // execute the filter cars based on the items in the search fields object
    filterCars();
});

const color = document.querySelector('#color');
color.addEventListener('input', e => {
    searchFields.color = e.target.value;
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

function noResults() {
    clearHTML();

    // build the alert
    const noResults = document.createElement('div');
    noResults.classList.add('alert', 'error');
    noResults.appendChild(document.createTextNode('No Results Found'));
    document.querySelector('#result').appendChild(noResults);
}

function filterCars() {
    const result = getCars().filter(filterMake).filter(filterYear).filter(filterMinPrice).filter(filterMaxPrice).filter(filterDoors).filter(filterTransmission).filter(filterColor);

    if(result.length) {
        showCars(result);
    } else {
        noResults();
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

function filterMinPrice(car) {
    if(searchFields.min) {
        return car.price >= searchFields.min;
    } else {
        return car;
    }
}

function filterMaxPrice(car) {
    if(searchFields.max) {
        return car.price <= searchFields.max;
    } else {
        return car;
    }
}

function filterDoors(car) {
    if(searchFields.doors) {
        return car.doors === searchFields.doors;
    } else {
        return car;
    }
}

function filterTransmission(car) {
    if(searchFields.transmission) {
        return car.transmission === searchFields.transmission;
    } else {
        return car;
    }
}

function filterColor(car) {
    if(searchFields.color) {
        return car.color === searchFields.color;
    } else {
        return car;
    }
}


