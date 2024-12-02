import Image from "next/image"


function Skill(){
    return(
        <main className="w-full h-full md:h-[400px] bg-white flex justify-center items-start mt-20">
<div className="w-full md:w-[80%] flex flex-col justify-center items-center">
    <div>
        <div className="flex flex-col justify-center items-center" >
            <div className="bg-gray-400 w-[100px] h-10 flex justify-center items-center rounded pt text-xl mt-6">Skill</div>
            <p className="mt-3 text-center md:text-lg">"Skills are the building blocks of success, unlocking opportunities and driving innovation in every field."</p>
        </div>
        <div className="w-full  md:w-[100%] flex flex-wrap justify-center items-center gap-4 mt-10 p-20">
            <div className="flex">
                <Image src={"/ts.png"}
                width={80}
                height={80}
                className=" w-[50px] h-[50px]"
                alt="rb.web">
                </Image>

               <div> <Image src={"/js.webp"}
                width={80}
                height={80}
                 className="w-[50px] h-[50px]"
                alt="rb.web">
                </Image></div>
                </div>

            <div> <Image src={"/ms.webp"}
                width={80}
                height={80}
                className="w-[50px] h-[50px]"
                alt="rb.web">
                </Image></div>

                <div> <Image src={"/ns.webp"}
                width={80}
                height={80}
                className="w-[50px] h-[50px]"
                alt="rb.web">
                </Image></div>
                

                <div> <Image src={"/g1.jpg"}
                width={80}
                height={80}
               className="w-[50px] h-[50px]"
                alt="rb.web">
                </Image></div>

                <div> <Image src={"/g2.jpg"}
                width={80}
                height={80}
                className="w-[50px] h-[50px]"
                alt="rb.web">
                </Image></div>
                <div> <Image src={"/linkedin.png"}
                width={80}
                height={80}
                 className="w-[50px] h-[50px]"
                alt="rb.web">
                </Image></div>

                <div> <Image src={"/g3.png"}
                width={80}
                height={80}
                 className="w-[50px] h-[50px]"
                alt="rb.web">
                </Image></div>

                <div> <Image src={"/rb.webp"}
                width={80}
                height={80}
                className="w-[50px] h-[50px]"
                alt="rb.web">
                </Image></div>

                <div> <Image src={"/py.webp"}
                width={80}
                height={80}
                  className="w-[50px] h-[50px]"
                alt="rb.web">
                </Image></div>
               
                

        </div>
    </div>
</div>
        </main>
    )
}
export default Skill