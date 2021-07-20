import React,{useState,useEffect} from 'react'
import './styles/base.css'
import './styles/home.css'
import homeImg from '../images/home-main.png'
import {Link,Redirect} from 'react-router-dom'


import ListItems from '../Components/listItems'
import { auth } from '../firebase'

export default function Home() {

    const [loggedIn, setLoggedIn]=useState(true)
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


    const showNavbar=()=>{
        const burger=document.querySelector("#burger")
        const drawer=document.querySelector(".navbar ul")
        burger.addEventListener('click',()=>{
            //console.log('clicked')
            drawer.classList.toggle('move-in')
      })

    }
    const hideNavbar=()=>{
        const drawer=document.querySelector(".navbar ul")
        drawer.classList.remove('move-in')
    }
    useEffect(()=>isLoggedIn(),[])



    if(!loggedIn){
        //console.log("ran")
        return(<Redirect to="/login"/>)
    }

    console.log("ran")
        return (
            
            <div>
                <div className="home">
                    <div className="navbar" id="navbar">
                        <h1>Echo FileBin</h1>
                        <ul>
                            <a href="#navbar" onClick={hideNavbar}><li>Home</li></a>
                            <a href='#courses' onClick={hideNavbar}><li>Courses</li></a>
                            <a href='#questions' onClick={hideNavbar}><li>Questions</li></a>
                            <a href='#links' onClick={hideNavbar}><li>Links</li></a>
                        </ul>
                        <i className="material-icons" id="burger" onClick={showNavbar} >menu</i>
                    </div>
                    
    
                    <div className="main-home" id="home">
                        <div className="home-title">
                            <h2>All echo files</h2>
                            <h3>Stored In one place</h3>
                        </div>
                        <img src={homeImg}/>
                        <a href='#navbar'><i class="material-icons">arrow_upward</i></a>
                    </div>
                    
                </div>
                <div className="courses" id="courses">
                    <h1>Courses</h1>
                    
                    <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/Physics-Paper-I', data:[]}}><ListItems title="Physics Paper I" sub="Instructor: Salman Sayeed"/></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/Physics-Paper-II', data:[]}}><ListItems title="Physics Paper II" sub="Instructor: Salman Sayeed"/></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/Maths-Paper-I', data:[]}}><ListItems title="Maths Paper I" sub="Instructor: Salman Sayeed"/></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/Maths-Paper-II', data:[]}}><ListItems title="Maths Paper II" sub="Instructor: Zarif Ikram"/></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/Chemistry-Paper-I', data:[]}}><ListItems title="Chemistry Paper I" sub="Instructor: Zarif Ikram"/></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/Chemistry-Paper-II', data:[]}}><ListItems title="Chemistry Paper II" sub="Instructor: Zarif Ikram"/></Link>
                    
                    
                    
                </div>
             
                <div className="questions" id="questions">
                    <h1>Questions</h1>

                    <Link style={{textDecoration:"none", color:"black"}} to="/questions/Physics-Paper-I"><ListItems title="Physics Paper I" sub="Instructor: Salman Sayeed"/></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to="/questions/Physics-Paper-II"><ListItems title="Physics Paper II" sub="Instructor: Salman Sayeed"/></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to="/questions/Maths-Paper-I"><ListItems title="Maths Paper I" sub="Instructor: Salman Sayeed"/></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to="/questions/Maths-Paper-II"><ListItems title="Maths Paper II" sub="Instructor: Zarif Ikram"/></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to="/questions/Chemistry-Paper-I"><ListItems title="Chemistry Paper I" sub="Instructor: Zarif Ikram"/></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to="/questions/Chemistry-Paper-II"><ListItems title="Chemistry Paper II" sub="Instructor: Zarif Ikram"/></Link>
                    
                    
                </div>
                <div className="links" id="links">
                    <h1>Links</h1>
                    <table>
                        <tr><th>Subject</th><th>Day</th><th>Topic</th><th>Link</th></tr>
                        <tr><td>Admission Form</td><td> - </td><td> - </td><td><a target="blank" href="https://forms.gle/z9eL44ufKrWgxP416">Admission Form</a></td></tr>
                        <tr><td>Zarif Permanent Link</td><td> Sundays And Tuesdays </td><td> Chemistry And Maths </td><td><a target="blank" href="https://meet.google.com/wsc-ters-pga">Meet</a></td></tr>
                        <tr><td>Salman Permanent Link</td><td> Thursdays And Fridays </td><td> Physics And Maths </td><td><a target="blank" href="https://meet.google.com/tey-ubqh-kcz">Meet</a></td></tr>
                    </table>
    
                </div>
                <div className="notice"><a onClick={()=>auth.signOut()}>Log Out</a></div>
                <div className="footer">
                    <h5>Copyright - 2020</h5>
                    <p>All rights reserved - Echo Online Classes</p>
                </div>
            </div>
        )




    
    
}
