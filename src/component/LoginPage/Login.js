import React , {useState , useEffect} from 'react'
// var fetch = require("fetch");

import { Link , useNavigate } from 'react-router-dom'

import "../../component/App1.css"



export default function LoginPage() {
    const navigate = useNavigate();
 

    const [credentials , setCredentials] = useState({email: "" , password : ""})

    const handleSubmit =  async (e) =>{
      
        // console.log(e)   
        e.preventDefault();
        const response = await fetch("/api/user/login" , {
            method: "POST" ,
            headers :{  
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email:  credentials.email , password : credentials.password})
    
        });
        const json = await response.json()
        console.log("hello!!!" + json)
        if(json.sucess){
            localStorage.setItem('token' , json.authtoken)
            alert("User Login Successfully Welcome to dashboard!!")
            navigate("/dashboard")

        }
        else{   
            alert("Invalid credential") 
        }
    
    }

    const onChange =(e)=>{
        setCredentials({...credentials , [e.target.name] : e.target.value})

    }


    
    return (
        <div className="text-center m-5-auto" >
            <h2 >Sign in to us</h2>
            <form  method="POST" onSubmit={handleSubmit} >
               
                 <p> 
                    <label>email address </label><br/>
                    <input type="text" name="email" value={credentials.email } onChange={onChange}  />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" value={credentials.password} required onChange={onChange}/>
                </p>
                <Link to="/dashboard">
                <button className="primary-button" onClick={handleSubmit} >Log in</button>
            </Link>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/" className='primary-button'>Homepage</Link>.</p>
            </footer>
        </div>
    )
}















