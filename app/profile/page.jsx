'use client'

import { useState,useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'
import React from 'react'

const Myprofile = () => {
const router = useRouter()
  const {data:session} = useSession();
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    const fetchPosts = async () =>{
   const response = await fetch('/api/users/'+session?.user.id+'/posts');
   const data = await response.json()
   setPosts(data);
    }
    if(session?.user.id)
    fetchPosts();
   },[])
  const handleEdit =(post) =>{
   router.push('/update-prompt?id='+post._id)
  }

  const handleDelete =async (post) =>{
    const hasConfirmed = confirm('do want to delete the post')
    if(hasConfirmed)
    try{
   await fetch('/api/prompt/'+post._id.toString(),{
    method:'DELETE'
   });

   const filteredPosts = posts.filter((p) => p._id !== post._id)
   setPosts(filteredPosts)
    }
    catch(error){
    console.log(error)
    }

    
  }
  return (
    <Profile name="my" desc="welcome to your personalized 
    profile page" data={posts} handleEdit ={handleEdit} handleDelete={handleDelete} />
  )
}

export default Myprofile