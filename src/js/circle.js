/*
함수 표현식 인데 앞에 export를 붙이면 named export가 된다
named export : 여러개 사용가능
*/

export var area = function(r) {

  return Math.PI * r * r;
}


export  var circumference = function(r) {
  return 2 * Math.PI * 2;
}
