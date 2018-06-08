$(document).ready(function(){  

    /*
    Simula o array das localizações recebidas da consulta do banco em certo intervalo de tempo
    
    Neste caso:
    datetime = 14/03/2018 das 09h31m00s00ms até 09h35m00s00ms
    car_id == car1
    */

    
    var carlocations = [
        {
            car_id: "car1",
            datetime: new Date(2018, 2, 14, 9, 31, 00, 00),
            location: {
                latitude: -25.459378, 
                longitude: -54.581445
            }
        },
        {
            car_id: "car1",
            datetime: new Date(2018, 2, 14, 9, 32, 00, 00),
            location: {
                latitude: -25.459355, 
                longitude: -54.579518 
            }
        },
        {
            car_id: "car1",
            datetime: new Date(2018, 2, 14, 9, 33, 00, 00),
            location: {
                latitude: -25.460254, 
                longitude: -54.579518 
            }
        },
        {
            car_id: "car1",
            datetime: new Date(2018, 2, 14, 9, 34, 00, 00),
            location: {
                latitude: -25.460185, 
                longitude: -54.581483
            }
        },
        {
            car_id: "car1",
            datetime: new Date(2018, 2, 14, 9, 35, 00, 00),
            location: {
                latitude: -25.461152, 
                longitude: -54.581419 
            }
        }
    ];

    console.log(carlocations);

    Math.radians = function(degrees) {
        return degrees * Math.PI / 180;
    };

    function calcDist(coord1, coord2){
        let earthRadiusKilometers = 6371;

        let calc = (
            earthRadiusKilometers * 
            Math.acos( 
                Math.cos(
                    Math.radians(coord1.location.latitude)
                ) * 
                Math.cos(
                    Math.radians(coord2.location.latitude)
                ) * 
                Math.cos(
                    Math.radians(coord2.location.longitude) - 
                    Math.radians(coord1.location.longitude)
                ) + 
                Math.sin(
                    Math.radians(coord1.location.latitude)
                ) * 
                Math.sin(
                    Math.radians(coord2.location.latitude)
                )
            ) 
        );

        return calc;
    }

    var coord0 = null;
    var coord1 = null;
    var dist = 0;

    carlocations.forEach(function(item, index){
        if(index == 0){
            coord0 = item;
        }
        else if(index == 1){
            coord1 = item;
            dist = dist + calcDist(coord0, coord1);
        }
        else{
            coord0 = coord1;
            coord1 = item;
            dist = dist + calcDist(coord0, coord1);
        }
    });

    console.log(dist);


});







