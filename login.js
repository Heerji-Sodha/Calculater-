function Calculation(name,id,sub1,sub2,sub3,sub4) {
    this.name = name;
    this.id = id;
    this.sub1 = sub1;
    this.sub2 = sub2;
    this.sub3 = sub3;
    this.sub4 = sub4;
   
}

var detailArray = [];
var deta1;


function btn1() {
  var   name1 = document.getElementById("name").value;
    var id1 = document.getElementById("id-no").value;
     sub11 = Number(document.getElementById("eng").value);
   
     sub12 =Number(document.getElementById("math").value);
      
     sub13 = Number(document.getElementById("phy").value);
  
     sub14 = Number(document.getElementById("chem").value);
   deta1 = new Calculation(name1,id1,sub11,sub12,sub13,sub14);
    detailArray.push(deta1);
    console.log(detailArray);}
function searchFun(){
var search1 = document.getElementById("seach1").value;
var flag = "NO"
for (var i =0; i < detailArray.length; i++){
if (search1 === detailArray[i].id) {
 flag = "yes"
alert("Your ID No Is Avalable Here");
var totalMark = (sub11 + sub12 + sub13 + sub14)*100/400;
 document.getElementById("td1").innerHTML = detailArray[i].name;
 document.getElementById("td2").innerHTML = detailArray[i].id;
 document.getElementById("td3").innerHTML = detailArray[i].sub1;
 document.getElementById("td4").innerHTML = detailArray[i].sub2;
 document.getElementById("td5").innerHTML = detailArray[i].sub3;
 document.getElementById("td6").innerHTML = detailArray[i].sub4;
 document.getElementById("total").innerHTML = totalMark;
 break;
 }
 }
if(flag === "NO"){
    alert("Oho Your Id Number Is Not Avalable Here ?")
}
}














