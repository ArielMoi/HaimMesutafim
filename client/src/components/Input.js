<<<<<<< Updated upstream
=======
  
>>>>>>> Stashed changes
import React, { useState } from 'react'

function Input() {
    const [search, setSearch] = useState('')

    return (
        <div className="Input-contianer">
             <input type="text" placeholder="Enter volunteer link here" onChange={volunteer => { setSearch(volunteer.target.value)}}/>
        </div>
    )
}

<<<<<<< Updated upstream
export default Input
=======
export default Input
>>>>>>> Stashed changes
