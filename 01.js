/**
 * Created by NAVER on 2016. 9. 20..
 */




// cody 객체 만들기.
var cody = new Object();
//            cody 객체를 속성으로 채우기
cody.living = true;
cody.age = 33;
cody.gender = 'males';
cody.getGender = function (){
    return cody.gender;
}
console.log(cody.getGender());