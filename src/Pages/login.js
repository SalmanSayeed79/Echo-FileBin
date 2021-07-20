import React,{useState,useEffect} from 'react'
import './styles/login.css'
import homeImg from '../images/home-main.png'
import {Link, Redirect} from 'react-router-dom'


import ListItems from '../Components/listItems'
import { auth } from '../firebase'

export default function Login() {

    const [loggedIn, setLoggedIn]=useState(false)




    //=======================================================================

    //      CREATING FUNCTION FOR LOG in

    //=======================================================================
    const login =(e)=>{
        e.preventDefault()
        let email=document.querySelector("#email").value
        let password=document.querySelector("#password").value
        auth.signInWithEmailAndPassword(email, password)
        console.log(email)
        console.log(password)
    }
    //===================================================

    //      Creating an auth function

    //===================================================
    const isLoggedIn =() =>{
        auth.onAuthStateChanged(user=>{
            if(user){
                setLoggedIn(true)
            }
            else{
                setLoggedIn(false)
            }
        })
    }

    useEffect(()=>isLoggedIn(),[])



    if(loggedIn){
        return(<Redirect to="/"/>)
    }
    else{
    return (
        <div>
            <div className="home">
                <div className="navbar" id="navbar">
                    <h1>Echo FileBin</h1>
                    
                </div>
                

                <div className="main-home" id="home">
                    <div className="login-form">
                        <h1>Login</h1>
                        <form action="">
                            <input type="text" name="email" id="email"  placeholder="Email" />
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <button onClick={(e)=>login(e)}>Submit</button>
                        
                        </form>

                    </div>
                    <img src={homeImg}/>
                    
                </div>     
            </div>     
        </div>)}




    }