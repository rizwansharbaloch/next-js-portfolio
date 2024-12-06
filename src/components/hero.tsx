import { Dot, Facebook, Github, Linkedin, MapPinCheck } from "lucide-react";
import Image from "next/image";


 function Hero() {
  return (
    <main className="w-full h-full md: h-[450]  flex justify-center items-center bg-white">
<div className=" flex w-full md:w-[80%]  h-full flex-col md:flex-row justify-between items-start pt-20 ">
  <div className="w-full md:w-[30%] flex justify-center items-center">
<Image src={"/go.png"}
width={400}
height={400}
alt="pic"
className="w-[320px] h-[250px]"
></Image>
  </div>
  <div className="w-full p-5 md:w-[60%] space-y-5">
     <h1 className="text-3xl"> Hi&apos; IM Rizwan Ahmed </h1>
  <p>
  A developer is someone who creates, builds, and maintains applications
   systems, or software solutions using programming languages, tools, and technologies. </p>
  
  <div>
    <p className="flex space-x-1"><MapPinCheck/>Karachi Sindh Pakistan</p>
    <p className="flex"><Dot className="text-green-500"/> Available 24 Hours</p>
  </div>
  <div className="flex space-x-3">
  <Linkedin className="text-blue-500"></Linkedin>
   <Github className="text-gray-500"></Github>
   <Facebook className="text-blue-800"></Facebook>
  </div>
    </div>
</div>
</main>
  )

  }
  export default Hero
