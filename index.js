class Polygon{
    constructor(integers) {
        this.integers = integers
    }
    get countSides() {
        return this.integers.length
    }
    get perimeter() {
        return this.integers.reduce((sum,int) => sum+int)
    }

}

class Triangle extends Polygon{
    get isValid() {
        if (this.countSides !== 3) {
            return false
        } else if (this.integers[0]+this.integers[1] < this.integers[2]) {
            return false
        } else if (this.integers[1]+this.integers[2] < this.integers[0]) {
            return false
        } else if (this.integers[0]+this.integers[2] < this.integers[1]) {
            return false
        }
        return true
    }
}

class Square extends Polygon{
    get isValid() {
        return this.integers.filter(int => int === this.integers[0]).length === 4
    }
    get area() {
        return this.integers[0]**2
    }
}