import FeedWindow from "./FeedWindow";
import CurrentData from "./CurrentData";
import axios from 'axios'
import {useState} from 'react'

const Feed = (props) => {
  const [data, setData] = useState({});

  const getUrl = async (search) => {
    try {
      const data = await axios.post("http://localhost:5000/add", {
        url: search,
      });
      setData(data.data);
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <div>
      <h1>volunteer Board</h1>
      <FeedWindow feed={props.feed} onClick={getUrl} />
      {data ? <CurrentData data={data} /> : null}
    </div>
  );
};

export default Feed;
