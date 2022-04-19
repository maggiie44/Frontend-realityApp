import { useEffect,useState } from "react";
import { getRecords } from "../api";

export const useUserRecords = () => {
    const [posts,setPosts] = useState([]);
  
    useEffect(() => {
      (async() => {
        const response = await getRecords();
  
        console.log(response.status);
        console.log(response.data);
  
        if (response.status === 200) {
          setPosts(response.data);
        }else {
          alert('Cannot connect to server')
        };
      })();
    }, []);
  
    return [posts, setPosts];
  };