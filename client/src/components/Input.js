
import React, { useState } from 'react'
<<<<<<< Updated upstream
import 'axios' from 'axios'
=======
import axios from 'axios';
import CurrentVol from './components/CurrentVol'
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
             <input type="text" placeholder="Enter volunteer link here" onChange={volunteer => { setSearch(volunteer.target.value)}}/>
             <input type="button" value="search" onClick={getNewQuery}/>
=======
            <input type="text" placeholder="Enter volunteer link here" onChange={volunteer => { setSearch(volunteer.target.value) }} />
            <input type="button" value="search" onClick={getUrl} />

            <div>
                <CurrentVol data={data} key={data.id}/>
            </div>
>>>>>>> Stashed changes
        </div>
    )
}

export default Input
