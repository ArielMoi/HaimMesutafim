
import React, { useState } from 'react'
import 'axios' from 'axios'

function Input() {
    const [search, setSearch] = useState('')
    
    const getUrl = async() =>{
        try{
            const data = await axios.get(`${search}`)
            setRequest(data.data.hits)
        } catch(e){
             console.log('error')
        }
     }
 
     useEffect(() =>{
        getUrl()
     }, [search])

    return (
        <div className="Input-contianer">
             <input type="text" placeholder="Enter volunteer link here" onChange={volunteer => { setSearch(volunteer.target.value)}}/>
             <input type="button" value="search" onClick={getNewQuery}/>
        </div>
    )
}

export default Input
