// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides

    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let initial_per = 0
        for (const side of this.sides) {
            initial_per += side
        }
        return initial_per
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            if (this.sides[0] + this.sides[1] > this.sides[2] &&
                this.sides[1] + this.sides[2] > this.sides[0] &&
                this.sides[2] + this.sides[0] > this.sides[1]) {
                return true
            }

            else {
                return false
            }

        }

        else {
            return false
        }
    }

}

class Square extends Polygon {
    get isValid() {
        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3] && this.sides[3] === this.sides[0]) {
            return true
        }
        else {
            return false
        }
    }


    get area() {
        return this.sides[0] ** 2
    }
}
