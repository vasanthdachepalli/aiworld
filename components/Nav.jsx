
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import {signIn,signOut,useSession,getProviders} from'next-auth/react'
const Nav = () => {

    const {data:session} = useSession();
    const isUserLoggedIn = false;
    const [providers, setproviders] = useState(null);
    useEffect( () =>{
        const setProviders = async() =>{
        const response = await getProviders();
        setproviders(response)
        }
        setProviders();
    },[])
  return (
    <>
    <nav className='flex-between  w-full mb-16 pt-3'>
    <Link href="/" className='flex gap-2 flex-center'></Link>
    <Image src="assets/images/logo.svg" alt="Promptopia logo" width={30} height={30} className='object-contain' />
    <p className='logo_text'>Promptopia</p>
    <div className='sm:flex hidden'>
        {session?.user ? (
            <div className='flex gap-3 md:gap-5'>
                <Link href='/create-prompt' className='black_btn'>Create post</Link>
                <button type='button' onClick={signOut} className='outline_btn'>sign out</button>
                <Link href="/profile">
                    <Image src={session?.user.image} width={37} height={37} className='rounded-full' alt='images'/>
                </Link>
                </div>
        ):(<>
        {providers && Object.values(providers).map((providers)=> (
         <button type='button' key={providers.name} onClick={() => signIn(providers.id)} className='black_btn'>sign in</button>

        )

        )}
        </>)}
    </div>
    </nav>
    
    </>
  )
}

export default Nav