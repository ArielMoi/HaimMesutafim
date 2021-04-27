import React, { useState } from 'react'
import axios from 'axios';

function Input( {states} ) {
  const [search, setSearch] = useState("");
  const { setCurrentData, addToSaved } = states;
  const getUrl = async () => {
    try {
      await setCurrentData(null);
      const data = await axios.post("http://localhost:5000/add", {
        url: search,
      });
      setCurrentData(data.data);
      addToSaved(data.data);

    } catch (e) {
      console.log("error");
    }
  };

  return (
    <div className="Input-contianer">
      <input
        type="text"
        placeholder="Enter volunteer link here"
        onChange={(volunteer) => {
          setSearch(volunteer.target.value);
        }}
      />
      <button onClick={getUrl}>
        Search
      </button>
    </div>
  );
}

export default Input;