import React,{useState, useEffect} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {db,auth} from '../firebase'
import ListItems from '../Components/listItems'

export default function Books(match) {
    //console.log(match.match.url.split('/')[1])
    const subject=match.match.params.id 
    const page=match.match.url.split('/')[1]

    const [loading,setLoading]=useState(false)
    const [items, setItems]=useState([])

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

    //=============================================================================
    //
    //  Getting data from database
    //
    //=============================================================================
    const getData=()=>{
        setLoading(true)
        db.collection(subject).doc(subject).collection(page).get()
            .then(res=>{
                res.forEach(a=>{
                   // console.log(a.data())
                    setItems(prevItems=>[...prevItems,a.data()])
                })
            })
            .then(()=>{
                //console.log(items)
                setLoading(false)})
    }
    //=============================================================================
    //
    //  Adding data to the database
    //
    //=============================================================================
    const addData=(e)=>{
        e.preventDefault()
        let form=document.querySelector("#add-form")
        const name=(form.name.value)
        const writer=(form.writer.value)
        const url=(form.url.value)
        if(!name||!writer||!url){
            alert("Enter elements correctly")
        }else{
        db.collection(subject).doc(subject).collection(page).doc(name+writer).set({
            name:name,
            writer:writer,
            url:url
        })
        //alert('slide added')
        //reloading the page
        .then(()=>window.location.reload())
        }
    }


    useEffect(()=>{
        getData(subject,page,loading)
        isLoggedIn()
    },[])




    if(loading){
        return(
            <h4 id='loading'>Loading..........</h4>
        )
    }
    if(!loggedIn){
        return(<Redirect to='/login'/>)
    }else{
        return (
        
        <div className="subjectPage">
            <div className="half-wall">
                <Link to='/' style={{textDecoration:"none"}}><h5>Go Home</h5></Link>
                <h1>{subject}</h1>
                <div className="text-bar-files">
                   <p>{match.match.url.split('/')[1]}</p>
                </div>
            </div>
    
    
            <div className="file-container">
                <p>Click any file to download</p>
                {items.map((a)=>(
                    <a href={a.url} style={{textDecoration:"none", color:"black"}}><ListItems key={a.name} title={a.name} sub={a.writer}/></a>
                ))}
            
            </div>
            <div className="add-file">
                    <h2>Add Slides</h2>
                    <form id="add-form">
                        <input type="text" name="name" placeholder="Slide Topic"/>
                        <input type="text" name="writer" placeholder="Slide Author"/>
                        <input type="text" name="url" placeholder="Enter the url"/>
                        <button onClick={e=>addData(e)}>Add Slide</button>
                    
                    </form>
            </div>
    
        </div>
        )
    }

   
}
