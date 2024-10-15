import React from 'react'
import './home.css'
import Navbar from '../Navbar/navbar'
import video2 from '../../assets/video2.mp4'
import glimg from '../../assets/glimg.png'
import Aiimg from '../../assets/Aimg.png'
import purse from '../../assets/purse.png'
import  graph from '../../assets/graphimg.png'
import tools from '../../assets/toolsimg.png'
import robot from '../../assets/robot.png'
import camera from '../../assets/cameraimg.png'
import video from '../../assets/video1.mp4'
import Donut from '../../assets/Donut.png'
import phase2 from '../../assets/phase2.png'
import phase1 from '../../assets/Phase1.png'
import phase3 from '../../assets/phase3.png'
import logo from '../../assets/logoImg.png'
import { FcOk } from "react-icons/fc";
import { PiTelegramLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";

function Home() {
  return (
    <div className='total-container relative'>
        <Navbar/>
        {/* first container */}
        <div className="relative w-full">
            <video 
                className="absolute z-0 top-0 left-0 w-full  object-cover small-device-bg-video" 
                autoPlay 
                loop 
                muted 
                src={video2} // Replace with your video file path
            />
            <div className="relative z-1 flex items-center justify-center bg-transparent" style={{height:'40vh'}}>
                <div className='text-center font-momo  w-3/5'>
                    <h3 className='text-white text-4xl mt-10'>When Innovation Meets</h3>
                    <span className='rounded-full text-xl bg-teal-400 p-2 mt-4'>Innovation</span>
                    <p className='mt-4' style={{color:"#B0FAFFB2"}}>Empowering Trading Through Advanced Technology</p>
                    <button className='rounded-full pt-2 pb-2 pl-4 pr-4 border-2 border-sky-400 shadow-inner shadow-sky-400 shadow-md' style={{backgroundColor:"#CDFCFF"}}>Open dApp</button>
                </div>
            </div>
        </div>
        

        {/* second-container */}


        <div className=' mt-64'>
            <h1 className='text-white text-center relative mb-4'>Our Features</h1>
            <div className='row'>
                <div className='text-white flex flex-col items-center p-4 mb-4 col-lg-4 mr-3' style={{backgroundColor:"#0C2B2FB2", borderRadius:'15px'}}>
                    <img src={glimg} alt="glm" className=''/>
                    <h1 className='m-0 mt-4'>Text optimzer</h1>
                    <p className='mt-4' style={{color:"#B0FAFFB2"}}>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity. </p>
                </div>

                <div className='p-4 text-white mb-4 col-lg-4 mr-3' style={{backgroundColor:"#0C2B2FB2", borderRadius:'15px'}}>
                    <h1 className='m-0 mt-4'>Market Insight</h1>
                    <p className='mt-4' style={{color:"#B0FAFFB2"}}>Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
                </div>

                <div className='flex flex-col items-center text-white  p-4 mb-4 mr-3 col-lg-3' style={{backgroundColor:"#0C2B2FB2", borderRadius:'15px'}}>
                    <div className='text-center'>
                        <h1 className='m-0 mt-4'>Risk Guard</h1>
                        <p  className='mt-4' style={{color:"#B0FAFFB2"}}>Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
                    </div>
                    <img src={Aiimg} alt='ai' className='h-52 w-48'/>
                </div>

                <div className=' flex flex-row justify-between p-4 text-white mb-4 relative bg-no-repeat bg-bottom col-lg-4' style={{backgroundColor:"#0C2B2FB2", borderRadius:'15px'}}>
                    <div>
                        <h1  className='m-0 mt-4'>Portfolio Sync</h1>
                        <p className='mt-4' style={{color:"#B0FAFFB2"}}>Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
                    </div>
                    
                    <div className='flex flex-col justify-end '>
                        <img src={purse} alt='purse' className='relative h-28 w-72 left-5 top-3 bottom-0 right-0'/>
                    </div>
                </div>
            </div>
        </div>

        {/* third container */}

        <div className='relative tools-total-container'>
            <div className='flex flex-col justify-center items-center text-white p-6'>
                <h1>About Us</h1>
                <p className='mt-4' style={{color:"#B0FAFFB2"}}>At Eth Ai, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.</p>
                <button className='rounded-full pt-2 pb-2 pl-4 pr-4 border-2 border-sky-400 shadow-inner shadow-sky-400 shadow-md text-black' style={{backgroundColor:"#CDFCFF"}}>Read More</button>
            </div>
            <div className='text-white p-4 mb-4 row tools-container' style={{backgroundColor:"#0C2B2FB2", borderRadius:'15px'}}>
                <div className='mb-5 col-lg-6'>
                    <img src={graph} alt="graph" className='mb-3'/>
                    <h3 className='m-0 mb-3'>Stay Ahead</h3>
                    <p className='m-0 mt-4' style={{color:"#B0FAFFB2"}}>No more guesswork—get clear, trustable insights.</p>
                </div>
                <div className='mb-5 col-lg-6'>
                    <img src={camera} alt="camera" className='mb-3'/>
                    <h3 className='m-0 mb-3'>Know Your Assets</h3>
                    <p className='m-0 mt-4' style={{color:"#B0FAFFB2"}}>Always stay on top of how your investments are performing.</p>
                </div>
                <div className='mb-5 col-lg-6'>
                    <img src={tools} alt='tools' className='mb-3'/>
                    <h3 className='m-0 mb-3'>Simple, Not Overwhelming</h3>
                    <p className='m-0 mt-4' style={{color:"#B0FAFFB2"}}>Our tools are designed to make complex market analysis easy to understand and act on.</p>
                </div>
                <div className='col-lg-6'>
                    <img src={robot} alt='robot' className='mb-3'/>
                    <h3 className='m-0 mb-3'>Future-Proof</h3>
                    <p className='m-0 mt-4' style={{color:"#B0FAFFB2"}}>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
                </div>
            </div>
        </div>


        {/* fourth Container*/}
        
        <div className='relative graph-container'>
            <div>
                <video autoPlay loop muted src={video} className="absolute top-0 left-0 w-full object-cover small-device-bg-video" />
                    <div className='relative z-1 text-white'>
                            <h1 className='text-center tokenmonies-text'>Tokenmoies</h1>
                            <div className='h-full flex flex-row justify-center items-center w-full small-device-bg-video'>
                                <img src={Donut} alt='' className='absolute top-20 graph-image'/>
                            </div>
                    </div>
            </div>
               
            
           <div className='text-white flex flex-column items-center relative form-container'>
                <div className='list-none p-3 mb-4'  style={{backgroundColor:"#0C2B2FB2", borderRadius:'15px', width:'350px'}}>
                    <div className='flex'>
                        <p className='w-48'>Name</p>
                        <p>:  EthAi</p>
                    </div>
                    <div className='flex'>
                        <p className='w-48'>Token Name</p>
                        <p>:  $EthAi</p>
                    </div>
                    <div className='flex'>
                        <p className='w-48'>Token Standard</p>
                        <p>:  ERC20</p>
                    </div>
                    <div className='flex'>
                        <p className='w-48'>BlockChain</p>
                        <p>:  Etherum</p>
                    </div>
                    <div className='flex'>
                        <p className='w-48'>Total Supply</p>
                        <p>:  100 million</p>
                    </div>
                    <div className='flex'>
                        <p className='w-48'>Tax</p>
                        <p>:  5% %%</p>
                    </div>
                </div>  

                <div className='list-none p-3'  style={{backgroundColor:"#0C2B2FB2", borderRadius:'15px', width:'350px'}}>
                <div className='flex'>
                        <p className='w-48'>Team</p>
                        <p>:  35%</p>
                    </div>
                    <div className='flex'>
                        <p className='w-48'>Marketing</p>
                        <p>:  5%</p>
                    </div>
                    <div className='flex'>
                        <p className='w-48'>Liquidity Pool</p>
                        <p>:  90%</p>
                    </div>
                </div>                       
            </div>
        </div>


        {/* fifth container */}


        <div className='mt-20 flex flex-col items-center'>
            <h1 className='text-white text-center'>Roadmap</h1>
            <div className='text-white mt-4 row'>
                <div className='col-lg-6'>
                    <button className='btn bg-white mt-4'>Phase 1</button>
                    <h1 className='mt-4'>Kicking Off</h1>
                    <ul className='list-none mt-4'>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            Launch of EthAi officially
                        </li>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            Development of core Ai Agent
                        </li>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            User Onboarding Campaign
                        </li>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            Community Engagement Initiatives
                        </li>
                    </ul>
                </div>

                <img src={phase1} alt='' className='col-lg-6'/>
            </div>


            <div className='text-white mt-4 row'>
                <div className='col-lg-6 order-2'>
                    <button className='btn bg-white mt-4'>Phase 2</button>
                    <h1 className='mt-4'>Bigger Insights</h1>
                    <ul className='list-none mt-4'>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            Introduction of Advanced AI Agents
                        </li>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            Strategic Partnerships
                        </li>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            User Interface Optimization
                        </li>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            Comprehensive Marketing Campaign
                        </li>
                    </ul>
                </div>

                <img src={phase2} alt='' className='col-lg-6 order-1'/>
            </div>



            <div className='text-white mt-4 row'>
                <div className='col-lg-6'>
                    <button className='btn bg-white mt-4'>Phase 3</button>
                    <h1 className='mt-4'>Full Power</h1>
                    <ul className='list-none mt-4'>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            Introduction of Enhanced Features
                        </li>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            API Integration for Data Access
                        </li>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            Launch of Community-Driven Initiatives
                        </li>
                        <li className='flex mb-4'>
                            <FcOk className='self-center mr-4'/>
                            Continuous Improvement and Updates
                        </li>
                    </ul>
                </div>

                <img src={phase3} alt=''  className='col-lg-6'/>
            </div>
        </div>


        {/* sixth container */}


        <div className='text-white row questions-container'>
            <h1 className='text-5xl col-lg-6'>Frequently Asked Questions?</h1>
            <div className='col-lg-6'>
                <div className='flex mt-10'>
                    <p className='w-12 text-xl' style={{color:"#B0FAFFB2"}}>+</p>
                    <p className='text-lg'>What is EthAi?</p>
                </div>
                <div className='flex mt-10'>
                    <p className='w-12 text-xl' style={{color:"#B0FAFFB2"}}>+</p>
                    <p className='text-lg'>How can EthAi can help me as a Trader?</p>
                </div>
                <div className='flex mt-10'>
                    <p className='w-12 text-xl' style={{color:"#B0FAFFB2"}}>+</p>
                    <p className='text-lg'>Who can use EthAi?</p>
                </div>
                <div className='flex mt-10'>
                    <p className='w-12 text-xl' style={{color:"#B0FAFFB2"}}>+</p>
                    <p className='text-lg'>How does EthAi track smart money flow?</p>
                </div>

                <div className='flex mt-10'>
                    <p className='w-12 text-xl' style={{color:"#B0FAFFB2"}}>+</p>
                    <p className='text-lg'>How does ensure data security?</p>
                </div>
            </div>
        </div>



        {/* sevent container */}

        <div className='explore-container'>
        <div className='explore-card mt-10 text-white border-2 border-emerald-400 rounded-lg flex flex-col justify-center items-center p-4 shadow-inner shadow-emerald-400'>
            <h1>Explore Our <span className='text-teal-400 text-bold'>dApp</span></h1>
            <p className='' style={{color:"#B0FAFFB2"}}>EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI Features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
            <button className='rounded-full pt-2 pb-2 pl-4 pr-4 border-2 border-sky-400 shadow-inner shadow-sky-400 shadow-md text-black' style={{backgroundColor:"#CDFCFF"}}>Open dApp</button>
        </div>
        </div>

        



        {/* footer Container */}



        <div className='mt-20 footer'>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-white flex flex-row justify-center items-center'>
                    <img src={logo} alt='' className='h-10 w-10 mr-4'/>
                    <h1 className='text--4xl'>EthAi</h1>
                </div>
                <div className='text-white w-64 text-3xl flex justify-between mt-4 mb-20'>
                    <PiTelegramLogo/>
                    < FaInstagram />
                    <FaXTwitter/>
                    < FaFacebookF />
                    <FaGamepad/>
                </div>
            </div>

            <div className='d-none d-lg-block text-white'>
                    <h2 className='w-80 text-3xl mb-4'>"Designed for traders for today,just like you"</h2>
                    <div className='flex justify-between w-96 items-center border-1 border-zinc-300 p-2 rounded-full'>
                        <p className='self-center'>What's your working email?</p>
                        <button className='self-center p-2 rounded-full' style={{backgroundColor:'#0C2B2FB2'}}>Get started</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Home

