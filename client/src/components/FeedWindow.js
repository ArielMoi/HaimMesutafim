import HeaderCard from "./HeaderCard";
import { useEffect, useState } from "react";

const FeedWindow = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let a = [];
    if (props.feed !== {}) {
      console.log(props.feed);
      props.feed.forEach((title, [img, href]) =>
        a.push(
          <HeaderCard
            img={img}
            title={title}
            onClick={() => props.onClick(href)}
          />
        )
      );
    }

    setData(a);
  });

  return (
    <div>
      {/* {props.feed && props.feed.map((title, [img,  href]) => <HeaderCard img={img} title={title} onClick={() => props.onClick(href)}/>)} */}
      {data}
    </div>
  );
};

export default FeedWindow;
