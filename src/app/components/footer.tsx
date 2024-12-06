// function Footer(){
//     return(
//         <main>
//             <h1>Footer</h1>
//         </main>
//     )
// }
// export default Footer
import Image from "next/image"
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
function footer(){
    return(
        <main className="w-full h-full md:h-[400px] bg-white flex justify-center items-start mt-20 pb-10">
<div className="w-full md:w-[80%] flex flex-col justify-center items-center">
    <div>
        <div className="flex flex-col justify-center items-center" >
            <div className="bg-gray-400 w-[120px] h-10 flex justify-center items-center rounded pt text-xl mt-6">Get in Touch </div>
            <p className="mt-3 text-center md:text-lg">&quot;Whats Next? Feel free to reach out me if you are looking for Developer have a Query or simply connect &quot;</p>
        </div>
        <div className="mt-4">
            <h1 className="flex md:text-2xl justify-center items-center " ><IoMdMail className="mr-2 text-3xl cursor-pointer"  />rizwanshar3@gmail.com  <FaRegCopy className="ml-3 "/></h1>
            <h2 className="flex md:text-2xl justify-center items-center"><FaPhoneSquareAlt className="mr-2 cursor-pointer"  /> 92 3063580583 <FaRegCopy className="ml-3"/></h2>
        </div>

<div className="mt-10 md:flex justify-center items-center" >
    <p> You may Also Find me On these platforms </p>
    
</div>
<div className="flex justify-center items-center mt-10 text-3xl">
    < FaLinkedin className="text-blue-500" />
    <FaFacebookSquare className="text-blue-500"/>
    <FaGithub className="text-gray-500"/>
    </div>
    </div>
</div>
        </main>
    )
}
export default footer