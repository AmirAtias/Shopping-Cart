var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpCqcUrPqZ-dH01LHwqNPA3Vh0PjX5npfkF4HbK0G95tdA6U2mA',
        title: 'Fitz Roy ',
        description: 'Take a 10-hour trek from El Chalten, to discover Piedras Blancas glacier and the imposing Fitz Roy mountain, assisted by a mountain guide.',
        price: 25
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofiFhyz1zKpfg4_4tmjin-8QfZbI0twpwPikSFPj_jaDKvUaZ',
        title: 'Uyuni Salt Flats',
        description: 'Experience unforgettable moments, while enjoying an extraordinary view of the Milky Way on the Uyuni Salt Flats!',
        price: 20
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQsR9ulH6kZ2CuOIDP4poXXmFOb7GVznU8yrWghBCjGJP_hCznQ',
        title: 'Torres del Paine',
        description: 'Enjoy a full-day tour to the stunning Torres del Paine National Park, just 2-hours away from Puerto Natales.',
        price: 19
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BkhAliioISmrqkHg8-srZ7mIhObPQX33xifcPJgJO-81adsCXQ',
        title: 'Machu Picchu',
        description: 'Take in the breathtaking landscape of the Andes and enjoy a guided tour of one of the most mysterious sights.',
        price: 40
    }),

    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKLpsqJNCo4dBl46ZGlc4rsDC6RZwTZyELDh7kbflbZgNGQCM',
        title: 'The Mountain of 7 Colors',
        description: 'A fantastic day tour (with trekking) to the 7 Color mountain, through an undiscovered land of wild desert landscapes.',
        price: 15
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVKDNU5zFD_uljsEXTZhc3jOrdIKt2_xxDDuiQUEHC-guIeJK',
        title: 'Christ the Redeemer Statue (Rio de Janeiro)',
        description: 'Book your Corcovado Official Train Ticket in advance and make sure you get an up-close view of one of the Seven Wonders of the Modern World.',
        price: 30
    })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done == products.length) {
           console.log(done);
           
           exit();
        }
    });
}


function exit(){
    mongoose.disconnect();
}