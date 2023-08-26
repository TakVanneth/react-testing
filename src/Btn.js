import { useState } from "react";

function Btn(){
    const [AppOn, setAppOn] = useState(true);
    const app = <h1><a href="https://flutter.dev/learn?gclid=CjwKCAjwoqGnBhAcEiwAwK-OkRzlKWYyON2R2imT0ss6pKdUuQ8eheKuzfUR24PJEuDA78MIaKsG_BoC2MsQAvD_BwE&gclsrc=aw.ds" 
    target="_blank"
    rel="noopener noreferrer"
    >You learn more about app</a></h1>
    const web = <h1>You learn more about web</h1>

    const clickHeadler = () =>{
        const choice = window.confirm("Do you want to learn about app?")
        setAppOn(choice)
    }
    // const clickheadler = () => console.log('clicked');
    return(
        // <button onClick={clickheadler}>
        //     click me
        // </button>
        <div>
            <button onClick={clickHeadler}>
            web or app?
            </button>
            {AppOn ? app : web}
        </div>
    );
};

export default Btn;