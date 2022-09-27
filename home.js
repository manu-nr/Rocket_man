var a = 1;
function displaylist(){
    
    if (a%2 == 0 ){
        document.getElementById("btn").style.transform="translateY(-100%)";
        document.getElementById("btn").style.opacity="0";
        document.getElementById("total").style.margin ="0px 0 0 0";


    }
    else{
        document.getElementById("btn").style.transform="translateY(0%)";
        document.getElementById("btn").style.opacity="1";
        document.getElementById("total").style.margin ="130px 0 0 0";
        // document.getElementById("total").style.transform ="0.5s";

    }
    // document.getElementById("btn").style.display="none";
    a = a+1;
    console.log(a)
}