import { Room,Cancel } from "@material-ui/icons";
import "./login.css";
import { useState,useRef } from "react";
import axios from "axios";
export default function Login({setShowLogin, myStorage, setCurrentUser}) {
  
    const [error,setError] = useState(false);
    const nameRef=useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const user = {
            username:nameRef.current.value,
            password:passwordRef.current.value,
        };

        try{

        const res= await axios.post("https://travel-map-ch6g.onrender.com/api/users/login", user);
        myStorage.setItem("user", res.data.username);
        setCurrentUser=(res.data.username);
        setShowLogin(false);
        
        
        setError(false);

        }
        catch(error)
        {
            setError(true);
        }
    };

return (
<div className="loginContainer"> 
<div className="logoo">
    <Room/>
    Rishu's Pin
</div>
<form onSubmit={handleSubmit}>
<input type="text" placeholder="username" ref={nameRef} />
<input type="password" placeholder="password"  ref={passwordRef}/>
<button className="loginBtn" >Login</button>
 
{error && <span className="failure">Something went wrong!</span>}
</form>
<Cancel className="loginCancel" onClick={() => setShowLogin(false)}/>
</div>
);
}
