import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.css'

function Home() {

    const [notes, setNotes] = useState([]);
    const [token, setToken] = useState('')

    const getNotes = async (token) => {
        console.log(token)
        const res = await axios.get('my-simpre-project.vercel.app/api/notes', {
            headers: { Authorization: token }
        })
        console.log(res)
        setNotes(res.data)
      
    }

    useEffect(() => {
        const token = localStorage.getItem('tokenStore')
       
        setToken(token)
        if (token) {
            getNotes(token)
        }

    }, [])

const deleteNote = async(id)=>{
    try {
        if(token){
            await axios.delete(`my-simpre-project.vercel.app/api/notes/${id}`,{
                headers:{Authorization:token}
            })
            getNotes(token)
        }
        
    } catch (err) {
        window.location.href = '/';
    }

}

function formatDate(dateStr) {
    const date = new Date(dateStr);
  
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    return formattedDate;
  }
    return (
        <div className="notes-wrapper">
            {
                notes.map(note => (
                    <div className="card" key={note._id}>
                        <h4 title={note.title}>{note.title}</h4>
                        <div className="text-wrapper">
                            <p>{note.content}</p>

                        </div>
          
                        <div className="card-footer">
                            {formatDate(note.date)}
                            <Link to={`edit/${note._id}`}> Edit</Link>
                        </div>
                        <button className='close' onClick={()=>deleteNote(note._id)} >X</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Home