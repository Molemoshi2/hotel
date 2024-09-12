import { useState } from "react"
import { app } from "../firebase/firebase"
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function LoginAdmin(){
    const [data,setData] = useState({email:'',password:''})
    let redirect = useNavigate()
    let auth = getAuth()
    // const handlesubmit = ()=>{
    //     createUserWithEmailAndPassword(auth,data.email,data.password)
    //     .then((res)=>{
    //         console.log(res.user) 
    //     })
    //     .catch((err)=>{
    //         alert(err.message   )
    //     })
    // }
    const handlesubmit = ()=>{
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then((res)=>{
            console.log(res.user)
            redirect("/")
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
        return(

            <div className="container d-flex justify-content-center" >
                <div className="card mb-3 d-flex w-100 h-50 p-6 mx-100 bg-transparent p-5 border" style={{marginTop:"14rem" , filter : "none" }}>
                    <div className="row g-0">
                        <div className="col-md-12">
                        <div className="card-body" style={{filter:"none"}}>
                        <div className="text-center">
                            <h1 className="mb-2">Welcome Back {name}!</h1><br /><br />
                            <label>Email: </label><br />
                            <input className="w-50 " type="email"  placeholder="Enter your Email" onChange={(event)=>setData({...data,email: event.target.value})}/><br /><br />
                            <label>Password: </label><br />
                            <input className="w-50" type="password" placeholder="Enter your password"  onChange={(event)=>setData({...data,password: event.target.value})}/>
                            <br /><br />
                            <button className="btn btn-primary" type="submit" onClick={handlesubmit}>Login</button>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
    )
}
export default LoginAdmin