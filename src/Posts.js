import {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Posts() {
   const {id} =useParams()
    const[listOfPosts,setListOfPosts]=useState([])
    useEffect(()=>{
      const fetchData =async()=>{
        const res =await axios.get("https://jsonplaceholder.typicode.com/posts")
        setListOfPosts(res.data)
      }
  
      fetchData()
    },[])
   
  return (
    
    <div>{listOfPosts?.filter(post=>post.userId===Number(id)).map(post=>(<li key={post.id}>{post.title}</li>))}</div>
  )
}
