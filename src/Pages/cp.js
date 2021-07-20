import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './styles/subject.css'
import Card from '../Components/card'

export default function Cp(match) {
    //console.log(match)

                // <div>
                //     <p>{match.location.data[0][0]}</p>
                //     <p>{match.location.data[0][1]}</p>
                // </div>
                // <div>
                //     <p>{match.location.data[1][0]}</p>
                //     <p>{match.location.data[1][1]}</p>
                // </div>
    const [data,setData]=useState([])
    
    useEffect(()=>setData(match.location.data),[])
    return (
        <div className="subjectPage">
            <div className="half-wall">
                <Link to='/'><h5>Go back</h5></Link>
                <h1>{match.match.params.id}</h1>
                <div className="text-bar">
                    {   //if data exists
                        
                            data.map(a=>(
                                <div>
                                    <p>{a[0]}</p>
                                    <p>{a[1]}</p>
                                </div>
                            )
                        )
                        
                        
                        }
                </div>
            </div>



            <div className="card-container">
                <Link style={{textDecoration:"none", color:"black"}}  to={`/books/${match.match.params.id}`}><Card title="Books" details="Necessary books for different topics of Competitve Programming have been added here"/></Link>
                <Link style={{textDecoration:"none", color:"black"}}  to={`/links/${match.match.params.id}`}><Card title="Links" details="Links to different websites and editorials are added here."/></Link>
                <Link style={{textDecoration:"none", color:"black"}}  to={`/problem-blogs/${match.match.params.id}`}><Card title="Editorials" details="Contains all the editorial blogs created by BUETians of CSE-19"/></Link>
                
            </div>
            
        </div>
    )
}
