import MySingleton from './7.5_1-singleton.js';
import MyBadSingleton from './7.5_1-bad-singleton.js';

const singleA = new MySingleton();
const singleB = new MySingleton();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

const badSingleA = new MyBadSingleton();
const badSingleB = new MyBadSingleton();
console.log(badSingleA.getRandomNumber() === badSingleB.getRandomNumber()); // false
