let all = 0;
let money = 0;
function toots(){
    let candy = document.getElementById("candy").value;
    let too = document.getElementById("too").value;
    if (candy="sneakers"){
            money = too * 2500;
            all = all + money;
        document.getElementById("hariu").innerHTML = all;
    }
    if (candy="bonobon"){
            money = too * 3000;
            all = all + money;
        document.getElementById("hariu").innerHTML = all;
    }
    if (candy = "alilabala") {
            money = too * 1500;
            all = all + money;
         document.getElementById("hariu").innerHTML = all;
    }
}