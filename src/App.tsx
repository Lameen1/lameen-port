import "./App.css"
import  Header from "./componets/Header.tsx"
import Cards from "./componets/Cards.tsx"
import Contact from "./componets/Contact.tsx"
import Footer from "./componets/Footer.tsx"
import {IconContext} from "react-icons"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiPhp, SiWordpress   } from "react-icons/si";
import {useEffect, useRef} from "react"
import { motion, useInView, useAnimation } from "framer-motion"

function App() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const animationControls = useAnimation()

  useEffect(() => {
    if(isInView){
      animationControls.start("shown")
    }
  }, [isInView])

  return (
    <>
      <Header/>
      <div >
        <section className="p-2 sm:h-screen scroll-smooth wave-back">
        <h1 id="welcome" className="sm:text-5xl text-2xl font-bold p-4 text-gray-600 mb-2">Welcome</h1>
        <motion.div 
        variants={{
          hidden: {opacity: 0, y: 100},
          shown: { opacity: 1, y:0}
        }}
        initial= "hidden"
        animate="shown"
        transition={{ duration: 0.5, delay: 0.25}}
        className="flex flex-col sm:flex-row sm:justify-between ">
          <div className="h-full w-full flex flex-1 flex-col">
            <div className="border-gray-50 rounded-md bg-gray-50 sm:w-full sm:h-fit p-2 mb-4">
              <h2 className="text-2xl font-bold mb-4">Software Developer</h2>
              <p>Just a young passionate developer in Greenville, 
                North Carolina. Looking for oppurtunties to create 
                beautiful visions and dreams.</p>
            </div>
            <div className="border-gray-50 rounded-md p-2 bg-gray-50 sm:w-1/2 h-fit mb-4">
              <h2 className="flex text-xl font-bold mb-2">My Tech Stack</h2>
              <div className="flex gap-2 ">
                <IconContext.Provider value={{size: "2rem"}}>
                  <SiHtml5 color="orange" /> <SiCss3 color="cornflowerblue" /> <SiJavascript color="gold" /> <SiReact color="lightblue" /> <SiTypescript color="#007acc" /> <SiTailwindcss color="#06b6d4" /> <SiNextdotjs /> <SiPhp color="#8993be" /> <SiWordpress color="#40E0D0" />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center sm:items-end ">
            <h2 className="border-gray-50 rounded-md p-2 bg-gray-50 font-bold">Lameen Williams</h2>
            
          </div>
        </motion.div>
        </section>

        <section className="lg:h-screen">
        <div className="bg-[#edeef0]">
        <h1 id="about" className="sm:text-5xl text-2xl font-bold p-4 text-gray-600 text-right">About Me</h1>
        <motion.div 
        variants={{
          hidden: {opacity: 0, y: 100},
          shown: { opacity: 1, y:0}
        }}
        initial= "hidden"
        animate="shown"
        transition={{ duration: 0.5, delay: 0.25}}
        className="flex justify-center items-center h-screen scroll-smooth">
          <div className="flex flex-col xl:flex-row border-gray-50 rounded-md p-2 bg-gray-50  sm:w-3/5">
            <div className="">
              <img className="h-max w-max" src="computer.jpg" alt="A picture of a computer" />
            </div>
            <div className="p-3">
              <h2 className="font-bold text-lg sm:text-xl mb-2">A Young Resilient Developer</h2>
              <p className="">Hello, My name is Lameen Williams. 
                I was born in Queens, NY and now stationed in Greenville, NC.
                My goal as developer is to constantly elevate my peers
                to help create beautiful visions and applications. I'm 
                an open minded person that is excited to learn something new with
                each day that passes by.
                </p>
            </div>
          </div>
        </motion.div>
        </div>
        </section>
        <section className="lg:h-screen bg-[#edeef0]">
          <h1 id="projects" className="text-2xl sm:text-5xl font-bold p-4 text-gray-600">My Projects</h1>
          <motion.div 
          variants={{
            hidden: {opacity: 0, y: 100},
            shown: { opacity: 1, y:0}
          }}
          initial= "hidden"
          animate="shown"
          transition={{ duration: 0.5, delay: 0.25}} 
          className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:h-screen p-2">
            <Cards />
          </motion.div>
        </section>
        
        <section className="sm:h-screen tableback">
        <h1 id="contact" className="text-2xl sm:text-5xl font-bold p-4 text-gray-600 text-right mb-4">Contact Me</h1>
        <motion.div 
        variants={{
          hidden: {opacity: 0, y: 100},
          shown: { opacity: 1, y:0}
        }}
        initial= "hidden"
        animate="shown"
        transition={{ duration: 0.5, delay: 0.25}} 
        className="flex flex-col-reverse sm:flex-row items-center">
          <div className="sm:w-1/2 h-full flex justify-center items-center p-5">
          <Contact />
          </div>
          <div className="h-full sm:w-1/2 flex justify-center items-center p-5">
            <div className="h-1/2 w-full flex flex-col justify-center items-center">
              <h2 className="sm:text-3xl text-xl font-bold text-yellow-500 text-center mb-4">Want to get in Contact with me?</h2>
              <h3 className="sm:text-xl text-lg text-center">Fill out your Name and your Contact Email with a Message</h3>
            </div>
          </div>
        </motion.div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
