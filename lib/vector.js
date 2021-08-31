/** 
 * Two dimensional euclidean vector implementation.
 * @class Vector
 * @param {Number} x - vector x coord (start point x coord)
 * @param {Number} y - vector y coord (start point y coord)
 * @example
 * let v1 = new Vector(1, 1);
 */
class Vector {
  constructor(x, y) {
    this.x = x; // vector x coord
    this.y = y; // vector y coord
  }
  // normalizes the vector
  normalize() {
    const ang = this.calcAng();
    this.x = Math.cos(ang);
    this.y = Math.sin(ang);
    return this;
  }
  // returns a copy of the vector
  copy() {
    return new Vector(this.x, this.y);
  }
  // calculates and returns the heading angle of the vector
  calcAng() {
    return Math.atan2(this.y, this.x);
  }
  // vector addition
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }
  static add(vectorA, vectorB) {
    const newx = vectorA.x + vectorB.x;
    const newy = vectorA.y + vectorB.y;
    return new Vector(newx, newy);
  }
  // vector subtraction
  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }
  static sub(vectorA, vectorB) {
    const newx = vectorA.x - vectorB.x;
    const newy = vectorA.y - vectorB.y;
    return new Vector(newx, newy);
  }
  // calculates the dot product
  dot(vector) {
    return this.x * vector.x + this.y * vector.y;
  }
  static dot(vectorA, vectorB) {
    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
  }
  // multiples the relative coord values by a scalar value
  multiply(n) {
    this.x *= n;
    this.y *= n;
    return this;
  }
  // returns magnitude of the vector
  getMag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  // returns squared magnitude of the vector (faster)
  getMagSq() {
    return this.x * this.x + this.y * this.y;
  }
  // sets the magnitude of the vector
  setMag(mag) {
    this.normalize();
    this.multiply(mag);
    return this;
  }
  // limits the magnitude of the vector
  limit(max) {
    if (this.getMagSq() > max * max) {
      this.setMag(max);
    }
    return this;
  }
  // sets the vector's heading angle
  setAng(ang) {
    this.x = Math.cos(ang);
    this.y = Math.sin(ang);
    return this;
  }
  // sets the vector's coords
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
}