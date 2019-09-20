// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass{
    //constructor
    constructor(attributes) {
        this.length = attributes.length,
        this.width = attributes.width,
        this.height = attributes.height
    }

    //methods
    volume() {
        return (this.length * this.width * this.height);
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMakerClass {
    //constructor
    constructor(attributes) {
        super(attributes);
    }

    //methods

    volume() {
        return (Math.pow(this.length, 3));
    }

    surfaceArea() {
        return 6 * (Math.pow(this.length, 2));
    }
}

const newCuboid = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes
// and create those methods using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.

const newCube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3
})

console.log(newCube.volume()); // 27
console.log(newCube.surfaceArea()); // 54
