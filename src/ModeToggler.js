import { useState } from "react";

function ModeToggler(){ // perent component
    const [darkModeOn, setdarkModeOn] = useState(true)
    // let darkModeOn = true;
    // const darkMode = <h1>Dark Mode is on </h1>
    // const lightMode = <h1>light Mode is on </h1>

    function headleClick(){ 
        setdarkModeOn(!darkModeOn)
    //     darkModeOn = !darkModeOn;
        if(darkModeOn === true){
            console.log("Dark mode is on");
        }else{
            console.log("Light mode is on");
        }
    }

    const containerClassName = darkModeOn ? "dark-mode" : "light-mode";

    return(
        // child component
        <div className={`container ${containerClassName}`}> 
             <h1>{darkModeOn ? 'Dark Mode is on' : 'Light Mode is on'}</h1>
            <button onClick={headleClick}>
                turn on darkMode
                {darkModeOn ? 'Turn on lightMode' : 'Turn on darkMode'}
            </button>
        </div>
    );
};

export default ModeToggler;