
const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} />
            <p>{props.title}</p>
        </div>
    )
}

export default Card;