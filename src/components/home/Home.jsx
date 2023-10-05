import React from 'react'

import logo from '../../images/logo.jpg'

export default function Home() {
  return (
    <>
        <header className='min-w-full h-16 p-2 flex justify-between'>
            <img className='' src={logo} alt="logo" />
            <div>
                <ul>
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>icon</li>
                    <li>HotLine:**********</li>
                    <li>Trucking|Logistic</li>
                    <li>STORE</li>
                    <li>LOGIN</li>
                </ul>
            </div>
        </header>
        <body>
            BODY
        </body>
        <footer>FOOTER</footer>
    </>
  )
}
