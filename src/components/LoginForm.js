import { useState } from "react";
import axios from 'axios';

const Loginform = () => {
    const [username,setUsername]=useState(' ');
    const [password,setPassword]=useState(' ');
    const [error,setError]=useState(' ');
    const handleSubmit=async (e)=>{
            e.preventDefault();

            const authObject={ 'Project-Id':"8f7308f8-20b0-447f-860f-b31addf236be", 'User-Name':username,'User-Secret':password };
            try{
                await axios.get('https://api.chatengine.io/chats ', { headers: authObject } );//since this is asynchronous axios we use await
                // here we use localstorage in order to store the username and password once the user logs in he doesn't need to log in  everytime with his password
                localStorage.setItem('username',username);
                localStorage.setItem('password',password);
                

                window.location.reload();
                setError('');
               
            }
            catch(error){
                setError('oops try again')
            }
    };
    return ( 
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat App</h1>
                <form onSubmit ={handleSubmit}>
                    <input 
                    type ="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    className=" input"
                    placeholder=" Username.."
                    />
                     <input 
                    type ="text"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className=" input"
                    placeholder=" Password.."
                    />
                    <div allign="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
     );
};
 
export default Loginform;