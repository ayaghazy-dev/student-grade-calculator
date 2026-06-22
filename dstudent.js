function add(){
    let a= parseFloat(document.getElementById("d1").value);
    let b= parseFloat(document.getElementById("d2").value);
    let c= parseFloat(document.getElementById("d3").value);
    let d= parseFloat(document.getElementById("d4").value);
    let e= parseFloat(document.getElementById("d5").value);
    let x=a+b+c+d+e;
    let v=x/500*100;
    let grade=""
    if (v>=90){
        grade="ممتاز";
    }
    else if (v>=80){
        grade="جيد جدا";
    }
    else if (v>=70){
        grade="جيد";
    }
    else if (v>=60){
        grade="مقبول";
    }
    else{
        grade="ضعيف";
    }
    document.getElementById("result").innerHTML=
   "المجموع="+x+"<br>"+
   "المعدل="+v+"<br>"+
   "التقدير="+grade;
}