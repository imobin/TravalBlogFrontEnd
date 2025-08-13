import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useParams } from "react-router";


const AppContext = createContext()

export const AppProvider = ({ children }) => {

  const [postList, setpostList] = useState([]) 
  const [selectedPost, setselectedPost] = useState(
        {id: "",
        author: "",
        title: "",
        content: "",
        cover: "",
        date: ""})

  useEffect(() => {
    axios
      .get("http://localhost:3333/post/")
      .then((i) => {
        setpostList(i.data)
        // console.log(postList);
      })
      .catch((i) => {
      console.log(i)
      });
  }, []);

    return (
        <AppContext.Provider value={{ postList, setpostList, 
        selectedPost,  setselectedPost
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}
