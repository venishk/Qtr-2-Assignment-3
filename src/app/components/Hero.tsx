import React from 'react'
import Image from 'next/image'
import worktogether from '../assets/work together.jpeg'

const Hero = () => {
    return (
        <>
            <div className=' py-[140px] px-[220px] top-[98px] bg-[#043873]  text-white flex items-center '>

                <div className='w-[656px] h-[361]'>
                    <div className='w-[656px] h-[238px]'>
                        <h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
                            Get More Done with whitepace

                        </h2>
                        <p className=' font-normal text-lg leading-[30px] tracking [-0.02em] '>Project management software that enables your teams to collaborate,
                            plan, analyze and manage everyday tasks
                        </p>
                    </div>
                    <div>
                        <button className=' w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] gap-[10px] text-[18px] font-medium leading-[23px] tracking-[-2%] hover:bg-blue-200 '>
                            Try Whitepace free<span className="ml-2">→</span>
                        </button>
                    </div>

                </div>


                <div className='w-[824px] h-[549px] bg-[#C4DEFD] '></div>

            </div>

            {/* Project Management Section */}
            <div className=' py-[140px] px-[220px] top-[92px]  flex items-center bg-white'>

                <div className='w-[656px] h-[361]'>
                    <div className='w-[656px] h-[238px]'>
                        <h2 className='text-black font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
                            Project <br />
                            Management

                        </h2>
                        <p className=' text-black font-normal text-lg leading-[30px] tracking [-0.02em]'>Images, videos, PDFs and audio files are supported. Create math expressions
                            and diagrams directly
                            from the app. Take photos
                            with the mobile app and save
                            them to a note.
                        </p>
                    </div>
                    <div>
                        <button className=' w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] gap-[10px] text-[18px] font-medium leading-[23px] tracking-[-2%] hover:bg-blue-200 hover:text-[#4F9CF9] hover:border-white hover:border-2'>
                            Get Started<span className="ml-2">→</span>
                        </button>
                    </div>

                </div>

                {/* right side box  */}


                <div className='w-[824px] h-[549px] bg-[#C4DEFD]'></div>

            </div>

            {/* work together section */}

            <div className="w-[1920px] h-[829px] flex items-center justify-center bg-white ">
                <div className="w-[1480px] h-[661px] flex items-center gap-[100px]">
                    <div className="flex-1 bg-white">
                        <Image src={worktogether} alt="" />
                    </div>

                    <div className="flex-1 w-[670px] h-[661px] flex flex-col items-start justify-center gap-6">
                        <div className="w-[670px] h-[171px]">
                            <h1 className="w-[670] h-[87px] text-7xl text-black font-bold leading-[87.1px] tracking-[-2%]">Work together</h1>
                            <p className="w-[670px] h-10 text-lg text-black font-normal leading-[30px] tracking-[-2%]">With whitepace, share your notes with your colleagues and collaborate on them.
                                You can also publish a note to the internet and share the URL with others.</p>
                        </div>
                        <div className="w-[156px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9] hover:bg-blue-200 hover:text-[#4F9CF9]">
                            <button className="w-[82px] h-[23px] text-lg font-medium 
                            leading-6 tracking-[-2%] flex items-center justify-center text-white 
                            text-nowrap">Try it now<span className="ml-2">→</span></button>
                        </div>
                    </div>
                </div>
            </div>



            {/* USE EXTENSION */}

            <div className=' py-[140px] px-[220px] top-[92px] bg-[#043873]  text-white flex items-center '>

                <div className='w-[656px] h-[361]'>
                    <div className='w-[656px] h-[238px]'>
                        <h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
                            Use as Extension
                        </h2>
                        <p className=' font-normal text-lg leading-[30px] tracking [-0.02em]'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                            plan, analyze and manage everyday tasks
                        </p>
                    </div>
                    <div>
                        <button className=' w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] gap-[10px] text-[18px] font-medium leading-[23px] tracking-[-2%] hover:bg-blue-200 hover:text-[#4F9CF9] hover:border-white hover:border-2'>
                            Let’s Go<span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
                {/* right side box  */}
                <div className='w-[824px] h-[549px] bg-[#C4DEFD] hover:bg-red-200 '></div>
            </div>

            {/* CUSTOMIZE */}
            <div className='w-[1921px] h-[812px] top-[3268px] ml-[1px] py-[140px] px-[120px]  gap-[10px] flex flex-row-reverse bg-white text-black'>


                <div className='w-[1990px] h-[411px] flex flex-col gap-10'>
                    <div className='w-[969px] h-[288px] flex flex-col flex-nowrap items-center gap-6 px-11 py-9'>
                        <div className='w-[669px] h-[174px] flex flex-col'>
                            <h3 className='text-[#212529] font-bold tracking-[-2%] leading-[87.14px] text-7xl flex felx col-span-1 '>
                                Customise it to your needs</h3>
                            <p className='w-[669px] h-[90px] font-medium leading-[30px] tracking-[-2%]'>Customise the app with plugins, custom themes and
                                multiple text editors (Rich Text or Markdown).
                                Or create your own scripts and plugins using the
                                Extension API.</p>
                            <button className="w-[171px] h-[63px] rounded-lg text-lg py-[20px] px-[40px] bg-[#4F9CF9] gap-[10px] text-[18px] font-medium leading-[23px] tracking-[-2%] flexitems-center justify-center hover:bg-blue-200 text-white text-nowrap hover:text-[#4F9CF9]  hover:border-white hover:border-2">Let's Go<span className="ml-2">→</span></button>

                        </div>
                    </div>

                </div>
                {/* left side box  */}
                <div className='w-[1824px] h-[549px] bg-[#C4DEFD] gap-[4px]'></div>
            </div>


            {/* your work together*/}


            <div className=" w-[1920px] h-[574px] py-[140px] ml-[1px] px-[220px]  flex items-center bg-[#043873] text-white gap-10">
                <div className="w-[1481px] h-[294px] flex items-center justify-center flex-col gap-[10px] ">
                    <div className="w-[1064px] h-[171px] flex  flex-col gap-6 items-center justify-center">
                        <h1 className="w-[1064px] h-[87px] text-[72px] font-medium tracking-[-2%] leading-[87.14px] ">Your work, everywhere you are</h1>
                        <p className="w-[1064px] h-[60px] font-medium text-[18px] leading-[30px] tracking-[-2%] text-justify ">
                            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                        </p>
                      </div>
                    <div className='items-center justify-center py-[5px] px-[350px]'>
                        <button className=" w-[195px] h-[63px]  bg-[#4F9CF9] hover:bg-blue-200 text-white py-[20px] px-[40px] rounded-lg font-medium flex items-center justify-center">
                            Try Taskey<span className="ml-2">→</span>
                        </button>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Hero