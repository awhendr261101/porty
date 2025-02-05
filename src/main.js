import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import "font-awesome/css/font-awesome.min.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App).use(store).use(router).mount('#app')

// class Factory {

//     constructor(partsService) {
//         this.partsService = partsService;
//     }
//     buildRobot(robotType) {
//         //I optimized this logic by adding the existing robots in a list and also splitting the robot type from "Robotic"
//         let parts = this.getRobotPartsFor(robotType);
//         let type = robotType.split('Robotic').join('')
//         let robots = ['RoboticDog', 'RoboticCat', 'RoboticDrone', 'RoboticCar'];

//         if(robots.includes(robotType)){
//             return `Built a Robotic ${type} with ${parts.join(', ')}`;
//         } else {
//             return "Oops we don't have that robot type, please try again🔎"
//         }
//     }


//     buildCar(carType) {
//         //I optimized this logic by adding the existing cars in a list
//         let parts = this.getCarPartsFor(carType);
//         let cars = ['Toyota', 'Ford', 'Opel', 'Honda']

//         if(cars.includes(carType)){
//             return `Built a car with ${parts.join(', ')}`;
//         }else {
//             return "Oops we don't have that car type, please try again🔎";
//         }
//     }
//     getRobotPartsFor(robotType) {
//         return this.partsService.getParts(robotType);
//     }
//     getCarPartsFor(carType) {
//         return this.partsService.getParts(carType);
//     }
// }

// class PartsService {
//     getParts(type) {
//         // this is where we get the parts for the different robots and cars 
//         if (type == "RoboticDog"){
//             return ['Legs', 'Body', 'Head', 'Sensors'];
//         } else if (type == "RoboticCat"){
//             return ['Paws', 'Body', 'Whiskers', 'Camera'];
//         } else if (type == "RobotDrone"){
//             return ['Propellers', 'Body', 'Camera', 'Sensors'];
//         } else if (type == "RoboticCar"){
//             return ['Wheels', 'Body', 'Engine', 'Sensors'];
//         } else if (type == "Toyota"){
//             return ['Chassis', 'Engine', 'Wheels', 'Seats'];
//         } else if (type == "Ford"){
//             return ['Frame', 'Engine', 'Wheels', 'Doors'];
//         } else if (type == "Opel"){
//             return ['Chassis', 'Engine', 'Wheels', 'Interior'];
//         } else if(type == "Honda"){
//             return ['Chassis', 'Motor', 'Wheels', 'Seats'];
//         } else {
//             return 'Unknown type🔎'
//         }
//     }
// }

// const partsService = new PartsService();

// const factory = new Factory(partsService);

// //This is an example of how you would build your robots and/or cars 

// console.log(factory.buildRobot('RoboticDog'));  
// console.log(factory.buildRobot('RoboticCar'));  

// console.log("================================================================")

// console.log(factory.buildCar('Toyota'));  
// console.log(factory.buildCar('Ford'));    
// console.log(factory.buildCar('Mustang'));



// let week1 = []

// let names = ['Awodwa', 'Chella', 'Erry', 'Kerry', 'Lerry', 'Merry', 'Marry', 'Onge', 'Mbarry', 'yarry', 'Morry', 'jerry', 'karry', 'darry']

// // Math.floor(Math.random() * 11);


//     do {
//         for (let index = 0; index < names.length; index++) {
//             let person1 = Math.floor(Math.random() * names.length )
//             let person2 = Math.floor(Math.random() * names.length )

//             week1.push([names[person1], names[person2]])

//             names.splice(person1, 1)
//             names.splice(person2, 1)
//         }

//         console.log(week1);

//     } while (names.length > 0);

        




