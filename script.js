/**
 * for projects
 */
let value = 0;

const counter1 = setInterval(projectCounter, 10);

function projectCounter(){
    
    value++;
    
    if(value === 250){
        clearInterval(counter1);
    }
    
    document.getElementById('projects').innerHTML = value;
    
};
/**
 * for clients
 */


/**
 * for achievement
 */
