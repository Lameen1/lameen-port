import { FaLinkedin } from "react-icons/fa";
import {IconContext} from "react-icons"
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse gap-2">
                        <img src="LW-logo-v2.png" className="h-12" alt="Lameen Logo" />
                        <IconContext.Provider value={{size: "1.8rem", color: "gray"}}>
                        <a className="" href="https://www.linkedin.com/in/lameen-williams-428385260/">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Lameen1/Lameen-portfolio">
                            <FaGithub />
                        </a>
                        </IconContext.Provider>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#welcome" className="hover:underline me-4 md:me-6">Welcome</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline me-4 md:me-6">About Me</a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:underline me-4 md:me-6">My Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact Me</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">Lameen LLC™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer