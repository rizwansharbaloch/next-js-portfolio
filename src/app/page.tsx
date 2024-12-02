import Image from "next/image";
import Header from "./components/header";
import Hero from "@/components/hero";
import Skill from "./components/skill";
import Experance from "@/components/experance";


 function Homepage() {
  return (
<div>
   <Header/>
   <Hero/>
   <Skill/>
   <Experance/>
</div>
  )

  }
  export default Homepage
