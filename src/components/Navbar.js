
import React from "react";
import { Button } from 'react-bootstrap';

import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import {HiArrowCircleDown}  from "react-icons/hi";


export default function Navbar() {
   
   
  return (
    <header className=" md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href="/" className="title-font font-medium text-gray-950 mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl text-gray-950 hover:text-red-600">
                Rita Chauhan
            </a>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center ">
                <a href="#projects" className="mr-5 hover:text-red-600">
                    Projects
                </a>
                <a href="#skills" className="mr-5 hover:text-red-600">
                    Skills
                </a>
                <a href="#testimonials" className="mr-5 hover:text-red-600">
                    Recommendations
                </a>
                <a href="https://www.linkedin.com/in/rita-h-chauhan-393664212/" className="mr-8 hover:text-red-600 text-2xl">
                    <AiFillLinkedin 
                    />
                </a>

                <a href="https://github.com/RitaHC" className="mr-8 hover:text-red-600 text-2xl">
                    <AiFillGithub 
                    />
                </a>
                
            </nav>

            <a href="./Resume -1.pdf">
            <Button className=" text-white inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-amber-800 rounded text-base mt-4 md:mt-0"  variant="secondary" size="lg" active>
                Resume <HiArrowCircleDown/>
            </Button></a>

           
      </div>
    </header>
  );
}