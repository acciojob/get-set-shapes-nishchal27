//complete this code
class Rectangle {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	// Getter for width
	get width() {
		return this._width;
	}

	// Getter for height
	get height() {
		return this._height;
	}

	// Method to calculate area
	getArea() {
		return this.width * this.height;
	}
}

// Define the Square subclass
class Square extends Rectangle {
	constructor(side) {
		// Call the Rectangle constructor with both width and height as side
		super(side, side);
	}

	// Method to calculate perimeter
	getPerimeter() {
		return 4 * this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
