import React, { useState } from 'react'
import axios from 'axios';

function Input() {
    const [search, setSearch] = useState('')

    const getUrl = async () => {
        try {
            const data = await axios.post('http://localhost:5000/add', {
                url: search
            })
            console.log(data);
        } catch (e) {
            console.log('error')
        }
    }

    //foad alhsasagd
    // useEffect(() => {
    //     getUrl()
    // }, [search])

    return (
        <div className="Input-contianer">
            <input type="text" placeholder="Enter volunteer link here" onChange={volunteer => { setSearch(volunteer.target.value) }} />
            <input type="button" value="search" onClick={getUrl} />
        </div>
    )
}

export default Input;