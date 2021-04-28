import FeedWindow from "./FeedWindow";
import CurrentData from "./CurrentData";
import axios from 'axios'
import {useState, useEffect} from 'react'

const Feed = () => {
  const [data, setData] = useState({});
  const [feed, setFeed] = useState({})

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

  const getHeaders = async () => {
    try {
      let {data} = await axios.get("http://localhost:5000/get");
      // console.log();
      data=Object.entries(data)
      console.log(data);
      setFeed(data);
    } catch (e) {
      console.log("error");
    }
  }

  useEffect(() => {
    getHeaders()
  }, [])

  return (
    <div>
      <h1>volunteer Board</h1>
      {feed ? <FeedWindow feed={feed} onClick={getUrl} /> : null}
      {data ? <CurrentData data={data} /> : null}
    </div>
  );
};

export default Feed;
