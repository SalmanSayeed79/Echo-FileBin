import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './styles/subject.css'
import Card from '../Components/card'

export default function SubjectPage(match) {
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
    
    useEffect(()=>{
        setData(match.location.data)
    },[])
    return (
        <div className="subjectPage">
            <div className="half-wall">
                <Link to='/'><h5>Go back</h5></Link>
                <h1>{match.match.params.id}</h1>
                <div className="text-bar">
                    {/*   //if data exists
                        
                            data.map(a=>(
                                <div>
                                    <p>{a[0]}</p>
                                    <p>{a[1]}</p>
                                </div>
                            )
                        )
                        
                        
                            */ }
                </div>
            </div>



            <div className="card-container">
                <Link style={{textDecoration:"none", color:"black"}}  to={`/lectures/${match.match.params.id}`}><Card title="Class Lectures" details="Class notes during the class have been stored here"/></Link>
                <Link style={{textDecoration:"none", color:"black"}}  to={`/slides/${match.match.params.id}`}><Card title="Slides" details="All the notes are curated here for our convinence "/></Link>
                <Link style={{textDecoration:"none", color:"black"}}  to={`/classes/${match.match.params.id}`}><Card title="Recorded Classes" details="Home to all the recorded class"/></Link>
                <Link style={{textDecoration:"none", color:"black"}}  to={`/questions/${match.match.params.id}`}><Card title="Question Papers" details="Homeworks and other important question papers can be found in this section"/></Link>
                
            </div>
            
        </div>
    )
}
