const endDate = "19 June 2024 09:11:43 PM"


document.getElementById("enddate").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock (){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;
    if (diff < 0) return;
    inputs[0].value = Math.floor(diff/3600/24)
    // convert into days
    inputs[1].value= Math.floor(diff/3600) % 24;
    inputs[2].value = Math.floor(diff/60) % 60
    inputs[3].value = Math.floor(diff) % 60
};

// intital call 
clock()


setInterval (() =>{
    clock()
} ,1000);

/**
 * 1 day = 24 hrs
 * 1 hr = 60 min
 * 60 min = 3600 sec
 */