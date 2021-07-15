const y = [];
const x = ["retta", "vern", "marica", "cyrus", "linette", "curt", "nichole", "jessica", "wynell", "michaele"];
var arraylength = x.length;
for (var i=0; i < arraylength; i++)
 {let temp = x.slice();
  y[i] = x.slice(i*3, (i+1)*3);}
 console.log(y);