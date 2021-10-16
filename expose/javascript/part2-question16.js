let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (car in statistics) {
    const num = statistics[car];
    if (car[0] == 'r' || num % 2 == 1) {
        console.log(num);
    }
}