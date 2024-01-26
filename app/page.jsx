import React from 'react'
import Feed from'@components/Feed'
const page = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>discover & share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI-powered prompts</span>
        </h1>
        <p className='desc text-center'>
            al is a open source ai prompting tool for modern  and stone and advanced age world to discover ,create and share creative prompts 
        </p>
        <Feed />
    </section>
  )
}

export default page