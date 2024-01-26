'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname,useRouter } from 'next/navigation'

import React from 'react'

const PromptCard = ({post , handleTagClick,handleEdit, handleDelete}) => {
    const {data:session} = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const [copied, setcopied] = useState("")
    const handleCopy=  () =>{
        setcopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setcopied(""),50000)


    }
  return (
    <div className='prompt_card'>
        <div className='flex justify-between items-start gap-5'>

            <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                <Image 
                src={post.creator.image} 
                alt="user_image"
                 width={40} 
                 height={40}
                  className='rounded-full object-cont' 
                />
                 <div className='flex flex-col'>

                    <h3 className='font-satoshi font-semibold text-gray-500'>
                        {post.creator.username}
                    </h3>
                    <p className='font-inter text-sm text-gray-500'>
                        {post.creator.email}
                    </p>
                 </div>


            </div>

            <button type='button' className='copy_btn' onClick={() => {handleCopy}}>
               
              <Image src={copied === post.prompt ? '/assets/icons/tick.svg':'/assets/icons/copy.svg'}
               width={12} height={15}/>

            </button>
        </div>
        <p className='my-4 font-mono text-sm text-gray-500 '>{post.prompt}</p>
        <p className='font-inter text-sm bule_gradient cursor-pointer' onClick={() => handleTagClick && handleTagClick}>{post.tag}</p>

        {session?.user.id === post.creator._id && pathName ==='/profile' && (
            <div className='mt-5 flex-center gap-4 broder-t border-green-300 pt-3'>
                <p className='font-inter text-sm green_gradient cursor-pointer
                ' onClick={handleEdit}>Edit</p> 
                <p className='font-inter text-sm green_gradient cursor-pointer
                ' onClick={handleDelete}>Delete</p> 
                
                
                </div>
        )}
    </div>
  )
}

export default PromptCard