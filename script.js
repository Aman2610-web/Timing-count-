function timing(){
    const timer=document.getElementById('root');
    const now =new Date();
    const IndiaTime =now.toLocaleTimeString();
    timer.innerHTML=IndiaTime;
    
}

setInterval(timing,1000);

const timer=document.getElementById("root");
timer.style.fontSize="200px";
timer.style.display="flex";
timer.style.height="100vh";
timer.style.justifyContent="center";
timer.style.alignItems="center";






// Style ko JavaScript se apply karna
// const body = document.body;
// body.style.backgroundColor = "black";
// body.style.color = "white";
// body.style.margin = "0";

// const timer = document.getElementById("root");
// timer.style.fontSize = "200px";
// timer.style.display = "flex";
// timer.style.height = "100vh";
// timer.style.justifyContent = "center";
// timer.style.alignItems = "center";

// function timing() {
//   const now = new Date();
//   const indiaTime = now.toLocaleTimeString("en-IN", { hour12: true });
//   timer.innerHTML = indiaTime;
// }

// all time second change the code
// setInterval(timing, 1000);

// call the timing function
// timing();
