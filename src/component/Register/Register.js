import React, {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'

import "../../component/App1.css"


export default function SignUpPage() {

    let navigate = useNavigate();
 

   const [credentials , setCredentials] = useState({name: " " ,email: "" , password : "", cpassword : ""})

    const handleSubmit =  async (e) =>{
        e.preventDefault();
        const { name, email , password} = credentials
        const response = await fetch("/api/user/cal" , {
            method: "POST" ,
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({name , email , password})
    
        });
        const json = await response.json()
        console.log("hello!!! " + json)
        console.log(json.sucess)
        if(json.sucess){
            //save the autheotkem and redirect
            localStorage.setItem('token' , json.authtoken)
            alert("User Register Sucessfully!! please login")
            navigate("/login")

        }
        else{
            alert("Invalid credential")
        }
    
    }

    const onChange =(e)=>{
        setCredentials({...credentials , [e.target.name] : e.target.value})

    }





    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form method= "POST" action="/home" onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/> 
                    <input type="text" name="name"   onChange={onChange}/>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email"  onChange={onChange}/>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password"  onChange={onChange} required minLength={5} />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="cpassword"  onChange={onChange} required minLength={5} />
                </p>
                {/* <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p> */}
              <Link to="/dashboard">
                <button className="primary-button"  onClick={handleSubmit}  >Register</button>
            </Link>
            </form>
            <footer>
                <p><Link to="/"><button>Back to homepage</button></Link>.</p>
            </footer>
        </div>
    )

}
