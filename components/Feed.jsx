'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data,handleTagClick}) =>{
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post)=>(

        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
     ) )}

    </div>
  )
}
const Feed = () => {
  const [searchText, setsearchText] = useState('')
  const [posts,setPosts] = useState([])

  const filterPosts = (data) => {
    return data.filter(
      (p) =>
        p.creator.includes(searchText) ||
        p.tag.includes(searchText) ||
        p.prompt.includes(searchText)
    );
  };


 const handleSearchChange =(e)=> {
  setsearchText(e.target.value)
  const fetchPosts = async () =>{
    const response = await fetch('/api/prompt');
    const data = await response.json()
    setPosts(data);
   // const filteredPosts = data.filter((p) => p.creator.includes(searchText) || p.tag.includes(searchText) || p.prompt.includes(searchText))
   const filteredPosts = filterPosts(data);
  console.log(filteredPosts);
  setPosts(filteredPosts);
     }
     fetchPosts();
 }

 useEffect(()=>{
  const fetchPosts = async () =>{
 const response = await fetch('/api/prompt');
 const data = await response.json()
 setPosts(data);
  }
  fetchPosts();
 },[])
  return (
    <section className='feed'>
    <form className='relative w-full flex-center'>
     <input type='text' placeholder='search for a tag or a username'
     value={searchText} onChange={handleSearchChange} required className='search_input peer'/>
     {console.log(searchText)}
     

    </form>
    <PromptCardList data={posts} handleTagClick ={() =>{}} />
    </section>
  )
}

export default Feed