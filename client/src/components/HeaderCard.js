const HeaderCard = (item) => {
  return (
    <div className="card" onClick={() => item.onClick(item.href)}>
      <img src={item.img} alt="img" />
      <p>{item.title}</p>
    </div>
  );
};

export default HeaderCard;
