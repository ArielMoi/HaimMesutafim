
const Card = ({item}) => {
    return (
        <div className='card'>
            <img src={item.img} alt="img"/>
            <p>{item.title}</p>
        </div>
    )
}

export default Card;