import { DiHtml5, DiCss3, DiJsBadge, DiGithubBadge } from "react-icons/di";
import {IconContext} from "react-icons"
import { MdOutlineWeb } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";


function Cards (){

    return(
    <>
    <div className="lg:h-4/6 w-full sm:w-80 border rounded-md shadow bg-white">
        
        <div className="w-full h-2/5">
            <img className="h-full w-full" src="payplan.png" alt="payment plan website photo" />
        </div>

        <div className="p-2">
            
            <IconContext.Provider value= {{ size: "1.5em"}} >
                <div className="flex justify-between">
                    <h3 className="font-bold" >4-Step Subscription</h3>
                    <div className="flex justify-center mb-3">
                        <DiHtml5 color="darkorange" />
                        <DiCss3 color="cornflowerblue" />
                        <DiJsBadge color="gold" />
                        
                    </div>
                </div>
                <div className="mb-2 text-sm ">
                    This project is a 4 step subscription order
                    checkout. First step require to give a name
                    , email and phone number for the order. The
                    subscription has customizable options with price
                    change depending on what you choose. Website is 
                    mobile friendly with a different layout. 
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{size: "2.2em"}}>
            <div className="flex justify-center items-center gap-2">

                <div className="flex justify-center items-center gap-1 hover:opacity-70 cursor-pointer">
                    <a href="https://lameen1.github.io/multi-step-form-main/step-pages/step-1/step-1.html">
                        <div className="flex items-center">
                            <div>Website</div>
                            <MdOutlineWeb />
                        </div>
                    </a>
                </div>
                
                <div className="bg-gray-400 h-6 w-0.5"></div>

                <div className="flex justify-center items-center gap-1 hover:opacity-70 cursor-pointer">
                    <a href="https://github.com/Lameen1/multi-step-form-main">
                        <div className="flex items-center">
                            <DiGithubBadge />
                            <div>Repository</div>
                        </div>
                    </a>
                </div>
            </div>
            </IconContext.Provider>
            
        </div>
    </div>

    <div className="lg:h-4/6 w-full sm:w-80 border rounded-md shadow bg-white">
        
        <div className="w-full h-2/5 rounded">
            <img className="h-full w-full " src="venom-web.png" alt="" />
        </div>

        <div className="p-2">
            
            <IconContext.Provider value= {{ size: "1.5em"}} >
                <div className="flex justify-between">
                    <h3 className="font-bold" >Venom Website</h3>
                    <div className="flex justify-center mb-3 gap-2">
                        <FaReact color="lightblue" />
                        <SiNextdotjs />
                        <SiTailwindcss color="#06b6d4"/>
                        <SiTypescript color="#007acc" />
                        
                    </div>
                </div>
                <div className="mb-2 text-sm ">
                    This project is a website for the Carolina Venom 
                    Football team. The Carolina Venom is a Minor league Team
                    founded by father (Lameen Williams Sr.).
                    This website provides everything
                    a traditional sports team website would have. From 
                    team roster, player statistics, schedule and 
                    contact infomation. Additonally account sign in using clerk and convex.
                </div>
            </IconContext.Provider>
        </div>
        <IconContext.Provider value={{size: "2.2em"}}>
            <div className="flex justify-center items-center gap-2">

                <div className="flex justify-center items-center gap-1 hover:opacity-70 cursor-pointer">
                    <a href="https://venomsite-v2-qfmmid9xc-lameens-projects.vercel.app/">
                    <div className="flex items-center">
                        <div>Website</div>
                        <MdOutlineWeb />
                    </div>
                    </a>
                </div>
                
                <div className="bg-gray-400 h-6 w-0.5"></div>

                <div className="flex justify-center items-center gap-1 hover:opacity-70 cursor-pointer">
                    <a href="https://github.com/Lameen1/venomsite-v2">
                        <div className="flex items-center">
                            <DiGithubBadge />
                            <div>Repository</div>
                        </div>
                    </a>
                    
                </div>
            </div>
        </IconContext.Provider>
    </div>

    <div className="lg:h-4/6 w-full sm:w-80 border rounded-md shadow bg-white">
        
        <div className="w-full h-2/5 rounded">
            <img className="h-full w-full " src="wordee-web.png" alt="" />
        </div>

        <div className="p-2">
            
            <IconContext.Provider value= {{ size: "1.5em"}} >
                <div className="flex justify-between">
                    <h3 className="font-bold" >Wordees</h3>
                    <div className="flex justify-center mb-3">
                        <DiHtml5 color="darkorange" />
                        <DiCss3 color="cornflowerblue" />
                        <DiJsBadge color="gold" />
                        
                    </div>
                </div>
                <div className="mb-2 text-sm ">
                    This project is a game called Wordees. The 
                    objective of the game is to guess as many words 
                    as you can within the time limit and with the letters 
                    provided. New game is created everyday and score is 
                    tracked in the leaderboard each week for a weekly 
                    winner. I made this game only for my family so guest
                    scores are not tracked.
                </div>
            </IconContext.Provider>
        </div>
        <IconContext.Provider value={{size: "2.2em"}}>
            <div className="flex justify-center items-center gap-2">

            <div className="flex justify-center items-center gap-1 hover:opacity-70 cursor-pointer">
                <a href="https://lameen1.github.io/websocket-game/public/index.html">
                    <div className="flex items-center">
                        <div>Website</div>
                        <MdOutlineWeb />
                    </div>
                </a>
            </div>
                
                <div className="bg-gray-400 h-6 w-0.5"></div>

                <div className="flex justify-center items-center gap-1 hover:opacity-70 cursor-pointer">
                    <a href="https://github.com/Lameen1/websocket-game">
                        <div className="flex items-center">
                            <DiGithubBadge />
                            <div>Repository</div>
                        </div>
                    </a>
                    
                </div>
            </div>
        </IconContext.Provider>
    </div>
    </>
    )
}
export default Cards