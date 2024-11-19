import React from "react"
import Image from "next/image"
import Apple from "../assets/Apple.png"
import microsoft from "../assets/microsoft 1.png"
import Slack from "../assets/Slack.png"
import google from "../assets/Google.png"


const Sponsors = () => {
    return (
        <>
        <div className="w-[1922px] h-[538px] py-[140px] px-[220px] gap-[30%] flex flex-col items-center text-center bg-white">

            <h1 className="w-[1482px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] items-center justify-center text-[#212529]">Our Sponsors</h1>
            <div className="w-[1482px] h-[71px] justify-between py-[80px] px-[100px] flex items-center gap-[4px] ">
            <Image width={55.47} height={68} src={Apple} alt='Apple img'/>
            <Image width={287} height={62} src={microsoft} alt='Microsoft img'/>
            <Image width={280} height={71} src={Slack} alt='Slack img'/>
            <Image width={211} height={69.81} src={google} alt='google img'/>


            </div>
        </div>

        </>
    )
}

export default Sponsors