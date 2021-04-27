import React from 'react'


function CurrentVol({data}) {
    
    return (
        <div className="CurrentVol-contianer">
            <img src={data.img} alt="img"/>
            <div className="CurrentVol_eng">
                <h1>{data.title.heb}</h1>
                <p>{data.description.heb}</p>
                <a href={data.url} target="_blank" rel="noreferrer">לפרטים נוספים</a>
            </div>
            {/* <div className="CurrentVol_arb">
                <h1>{data.title.arb}</h1>
                <p>{data.description.arb}</p>
            </div>
            <div className="CurrentVol_eng">
                <h1>{data.title.eng}</h1>
                <p>{data.description.eng}</p>
            </div>
            <div className="CurrentVol_heb">
                <h1>{data.title.heb}</h1>
                <p>{data.description.heb}</p>
            </div> */}
        </div>
    )
}

export default CurrentVol;