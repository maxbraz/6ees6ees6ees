class Bee extends Grub {
  constructor () {
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}


// class Car {
//   constructor () {
//     this.fuel = 0
//     this.distance = 0
//   }
//   move () {
//     if (this.fuel < 1) {
//       throw new RangeError('Fuel tank is depleted')
//     }
//     this.fuel--
//     this.distance += 2
//   }
//   addFuel () {
//     if (this.fuel >= 60) {
//       throw new RangeError('Fuel tank is full')
//     }
//     this.fuel++
//   }
// }