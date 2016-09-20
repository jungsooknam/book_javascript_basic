/**
 * Created by NAVER on 2016. 9. 20..
 */

var Person = function (liveing, age, gender){
    this.living = liveing;
    this.age = age;
    this.gender = gender;
    this.getGender = function (){
        return this.gender;
    }
};

var
