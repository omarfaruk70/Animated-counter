/**
 * for projects
 */
let projectValue = 0;
const counter1 = setInterval(projectCounter, 20);
function projectCounter(){
    projectValue++;
    if(projectValue === 250){
        clearInterval(counter1);
    }    
    document.getElementById('projects').innerHTML = projectValue;  
};


/**
 * for clients
 */
let clientValue = 0 ;
const counter2 = setInterval(clientCounter, 10);
function clientCounter(){
    clientValue++;
    if(clientValue === 500 ){
        clearInterval(counter2)
    }
    document.getElementById('clients').innerHTML = clientValue;
};


/**
 * for achievement
 */
let achievedValue = 0;
let counter3 = setInterval(achievedCounter, 20);
function achievedCounter() {
    achievedValue++;
    if(achievedValue === 300){
        clearInterval(counter3)
    }
    document.getElementById('achieved').innerHTML = achievedValue;
};