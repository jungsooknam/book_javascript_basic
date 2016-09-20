var Person = function (living, age, gender)
{
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function (){return this.gender;}
};

var cody = new Person(true, 33, 'male');
var lisa = new Person(true, 34, 'female');

console.log(cody);
console.log(lisa);


console.log(typeof cody);   // object
console.log(cody.constructor)   // function
/**
 * 컨스럭터 : 건설자
 * @type {String}
 */
