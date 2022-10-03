import React from 'react'
import "./Posts.css"
import Axios from 'axios'
import Post from '../../components/Post/Post' 
import ScrollTop from '../../hooks/useScrollTop';

// const baseURL = 'socialmediaserver-env.eba-3v5vf2qa.us-east-1.elasticbeanstalk.com'
// const baseURL = 'localhost:3001'
const baseURL=""

export default function Posts({sort, filter}) {
  const [posts, setPosts] = React.useState([])
  
  React.useEffect(()=> {
    ScrollTop()
    Axios.get(`${baseURL}/posts`)
    .then(res => setPosts(res.data))
    .catch(err => console.log("test1", err))
  },[])

  function deletePost(postId) {
    Axios.delete(`http://localhost:3001/delete/${postId}`)                        
        .then(res => {
          console.log("delete", postId)
          Axios.get("http://localhost:3001/posts")
            .then(res => setPosts(res.data))
        })  
  }

  function filterPosts(posts, filter) {
    if (filter) {
    return posts.filter(post => post.author === filter)
    } else {
      return posts
    }
  }

  function sortPosts(posts, sort) {
    if (sort === "dateAscending") {
      return posts.sort(function(a,b){
        return a.date.localeCompare(b.date);
      })
    } else if (sort === "dateDescending") {
      return posts.sort(function(a,b){
        return b.date.localeCompare(a.date);
      })
    } else if (sort === "likesAscending") {
      return posts.sort(function(a,b){
        return a.likes- b.likes
      })
    } else if (sort === "likesDescending") {
      return posts.sort(function(a,b){
        return b.likes - a.likes
      })
    } else {
      return posts
    }
  }

  const filteredPosts = filterPosts(posts, filter)
  const sortedFilteredPosts = sortPosts(filteredPosts, sort)

  const postElements = sortedFilteredPosts.map(post => {
    return <Post key={post.id} post={post} deletePost={deletePost} />
  })

  return (
    <div className='posts'>
        {postElements}
    </div>
  )
}
