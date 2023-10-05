import React, {useEffect, useRef} from 'react'

import '../../styles/Home.css'
import logo from '../../images/logo.jpg'
import video from '../videos/video.mp4'

export default function Home() {
    
    const liPages = ['HOME', 'SERVICE', 'CONTACT US']
    const liHotLine = ['icon', 'HotLine:**********', 'Trucking|Logistic', 'STORE', 'LOGIN']

    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {
      attemptPlay();
    }, []);
  
  return (
    <>
        <header className='min-w-full h-20 p-2 flex justify-between'>
            <div className='w-2/12 h-full'><img className='w-35 h-14' src={logo} alt="logo" /></div>
            <div className=' w-5/12'>
                <ul className=''>
                    {liPages.map(li => <li key={li}>{li}</li>)}
                </ul>
            </div>
            <div className='w-5/12'>
                <ul>
                    {liHotLine.map(li => <li key={li}>{li}</li>)}
                </ul>
            </div>
        </header>
        <body>
            <video className='min-w-full grayscale-[50%]' 
                playsInline
                loop
                muted
                src={video} 
                ref={videoEl}>
                </video>
            <p className='text-white font-[600] text-4xl absolute top-[40%] left-[35%]'>TECHNOLOGY SOLUTIONS</p>
        </body>
        <footer className='min-w-full h-72 bg-black mt-2 text-white'>
            <div className='w-3/4 flex p-12'>
                <table className='w-[50%]'>
                    <tr>
                        <th></th>
                        <th>chào</th>
                    </tr>
                    <tr>
                        <td>hello</td>
                        <td>chào</td>
                    </tr>
                    <tr>
                        <td>hello</td>
                        <td>chào</td>
                    </tr>
                    <tr>
                        <td>hello</td>
                        <td>chào</td>
                    </tr>
                    <tr>
                        <td>hello</td>
                        <td>chào</td>
                    </tr>
                </table>
                <table className='w-[50%]'>
                    <tr>
                        <th></th>
                        <th>chào</th>
                    </tr>
                    <tr>
                        <td>hello</td>
                        <td>chào</td>
                    </tr>
                    <tr>
                        <td>hello</td>
                        <td>chào</td>
                    </tr>
                    <tr>
                        <td>hello</td>
                        <td>chào</td>
                    </tr>
                    <tr>
                        <td>hello</td>
                        <td>chào</td>
                    </tr>
                </table>
            </div>
        </footer>
    </>
  )
}
