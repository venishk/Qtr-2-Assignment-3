import Image from "next/image"
import Logo from "../assets/Logo1.png"
const Navbar =()=>{
    return(
      <>
      <div className="w-[1820px] h-[92px] py-[4px] px-[120px] bg-[#043873] flex justify-between items-center ">
        <div className="w-[191px] h-[34px]">
        <Image src={Logo} alt='img'/>

        </div>
      
       <div className="w-[837.5px] h-[60px] flex justify-between items-center">
        <div className="w-[549px] h-[23px] py-[500px] px-[10px] gap-10">
            <ul className=" flex flex-row justify-between text-white font-bold">
                <li >Products</li>
                <li>Solutions</li>
                <li>Resouces</li>
                <li>Pricing</li>
            </ul>
            
          </div>
          <button className="w-[126px] h-[60px] ml-8 px-[10px] py-[4px] rounded-lg bg-yellow-400 hover:bg-yellow-400">
              Login</button>
          
        
        <div className="">
            
        </div>
 
      </div>
      </div>
      </>
    )
  }
  export default Navbar