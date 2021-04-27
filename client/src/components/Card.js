
const Card = ({ item, onClick }) => {
    console.log(item);
  return (
    <div className="card" onClick={onClick}>
      <img src={item.img} alt="img" />
      <p>{item.title.heb}</p>
    </div>
  );
};

export default Card;