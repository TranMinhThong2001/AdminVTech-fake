import React, {useEffect, useRef} from 'react'
import { 
    FaShippingFast, 
    FaLaptopCode, 
    FaNetworkWired, 
    FaWarehouse,
    FaFlagCheckered, } from 'react-icons/fa';
import { BiSolidShip } from 'react-icons/bi';
import { GrDiamond } from 'react-icons/gr';
import { BsFillFileEarmarkCodeFill, BsCheck, BsStarHalf } from 'react-icons/bs';

import '../../styles/Home.css'

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
        <header className='min-w-full h-20 p-2 bg-white flex justify-between fixed top-0 left-0 z-20'>
            <div className='w-2/12 h-full'><img className='w-35 h-14' src={require('../../images/logo.jpg')} alt="logo" /></div>
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
            <video className='mt-5 min-w-full grayscale-[50%] ' 
                playsInline
                loop
                muted
                src={require('../../videos/video.mp4')} 
                ref={videoEl}>
                </video>
            <p className='textGradient text-white font-bold text-[50px] absolute top-[40%] left-[30%]'>TECHNOLOGY SOLUTIONS</p>
            <div className='backgroupImg text-center min-w-full h-[1050px] bg-slate-800 p-5'>
                <div className='my-5 text-xl font-[600] text-gray-600'>
                    <h1 className='text-3xl font-[700]'>WHAT WE <span className='font-[900] text-blue-600'>OFFER</span></h1>
                    <h4>Lorem Ipsum Is Simply Dummy Text</h4>
                </div>
                <div className='grid grid-cols-3 gap-8 w-[70%] h-[300px] mt-5 text-white'>
                    <div className='items'>
                        <i><BiSolidShip /></i>
                        <h3>Logistic</h3>
                        <p>Transportation, storage and supply of goods. In non-military terms, this activity can be described as cargo storage, possibly using Chinese loanwords such as storage or transport.</p>
                    </div>
                    <div className='items'>
                        <i><FaShippingFast /></i>
                        <h3>Trucsking</h3>
                        <p>Trucking is a type of transport using land instead of using other modes of transport such as AIR, or sea. Goods when being transported...</p>
                    </div>
                    <div className='items'>
                        <i><FaLaptopCode /></i>
                        <h3>Design WebSite</h3>
                        <p>Web design or website design is simply the work of creating a website for an individual, company, business or organization. There are two main methods for Web design: static Web design and dynamic Web design.</p>
                    </div>
                    <div className='items'>
                        <i><FaNetworkWired /></i>
                        <h3>NetWork System</h3>
                        <p>A network operating system is an operating system designed specifically for network devices such as routers, switches or firewalls.Share files and printers over the local network.</p>
                    </div>
                    <div className='items'>
                        <i><BsFillFileEarmarkCodeFill /></i>
                        <h3>Template</h3>
                        <p>Overall management of the business from purchasing, sales, distribution, warehouse, finance and accounting, human resources, CRM, DMS...</p>
                    </div>
                    <div className='items'>
                        <i><FaWarehouse /></i>
                        <h3> Sale and WareHouse</h3>
                        <p>Warehouse in logistics means warehouse or warehouse of goods. This is a real estate facility used for the storage and preservation of goods.</p>
                    </div>
               </div>
            </div>
            <div className='skills min-w-full h-96 flex'>
                <div className='items'>
                    <div className='icons'><FaFlagCheckered /></div>
                    <h3>FOR COMMUNITY</h3>
                    <p>Every project we undertake is geared towards serving the community.</p>
                </div>
                <div className='items'>
                    <div className='icons'><BsCheck /></div>
                    <h3>EFFECTIVE</h3>
                    <p>We always put the effectiveness of the product first</p>
                </div>
                <div className='items'>
                    <div className='icons'><GrDiamond /></div>
                    <h3>TRANSPARENT</h3>
                    <p>The solutions we create are all about financial market transparency.</p>
                </div>
                <div className='items'>
                    <div className='icons'><BsStarHalf /></div>
                    <h3>CREATIVE</h3>
                    <p>We always encourage and promote creativity in learning, using new technology in work.</p>
                </div>
            </div>
            <div className='min-w-full min-h-full text-center bg-gradient-to-r from-white via-[#00918c61] to-white'>
                <h3 className='text-3xl font-[600] text-[#00918d]'>GALLERY</h3>
                
                <div className='container relative grid grid-cols-5 gap-6 w-[1400px] h-[600px]  transition-all-[400ms]'>
                    <div className='box box-1' data-text='details'><img src={require('../../images/bencangVN.jpg')} alt="name" /></div>
                    <div className='box box-2' data-text='details'><img src={require('../../images/bencangVN2.jpg')} alt="name" /></div>
                    <div className='box box-3' data-text='details'><img src={require('../../images/bencangVN3.jpg')} alt="name" /></div>
                    <div className='box box-4' data-text='details'><img src={require('../../images/container.jpg')} alt="name" /></div>
                    <div className='box box-5' data-text='details'><img src={require('../../images/hero_bg_1.jpg')} alt="name" /></div>
                </div>
            </div>
            <div className=' project min-w-full h-96 text-center p-10'>
                <h3 className='text-3xl font-[600] text-[#00918d]'>PROJECTS</h3>
                <div className='w-[1000px] grid grid-cols-3 gap-5 mt-10'>
                    <div data-text='POJECT 1' className='items'><img src={require('../../images/g9.jpg')} alt="name" /></div>
                    <div data-text='POJECT 2' className='items'><img src={require('../../images/lap-ke-hoach-ban-hang-chuyen-nghiep-3.jpg')} alt="name" /></div>
                    <div data-text='POJECT 3' className='items'><img src={require('../../images/g7.jpg')} alt="name" /></div>
                </div>
            </div>
        </body>
        <footer className='min-w-full h-72 bg-black mt-2 text-white'>
            <div className='min-w-full h-[500px] flex p-12'>
               
            </div>
        </footer>
    </>
  )
}
