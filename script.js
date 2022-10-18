/**
 * for projects
 */
let value = 0;
const counter1 = setInterval(projectCounter, 10);
function projectCounter(){
    // value++;
    document.getElementById('projects').innerHTML = value;
    if(value == 250){
        clearInterval(projectCounter);
    }      
};
/**
 * for clients
 */


/**
 * for achievement
 */