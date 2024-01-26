import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import React, { Children } from 'react'
export const metadata ={
  title:"venkys a",
  description:'discover new  things'
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
      <Provider>
      <div className='main'>
        <div className='gradient'></div>
      </div>
      <main className='app'>
        <Nav />
        {children}
      </main>
      </Provider>
    </body>
    </html>
  )
}

export default RootLayout