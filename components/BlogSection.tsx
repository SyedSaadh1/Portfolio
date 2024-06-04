"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const BlogSection = () => {
    return (
        <section id="Blogs">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16   md:text-left">
                <h1 className="my-10 text-center font-bold text-4xl">
                    Latest Blogs
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
            </div>
            <div>
                <h1 className="text-4xl font-bold mb-6">Resume Parser and Skill Extraction</h1>
                <ul className="list-disc ml-5">
                    <li className="text-xl text-balance">Developed an advanced Resume Parser and Skill Extraction system using AI and ML technologies.</li>
                    <li className="text-xl text-balance">This tool streamlined the evaluation of candidate profiles by efficiently parsing resumes and extracting key skills.</li>
                    <li className="text-xl text-balance">Implemented a real-time data processing pipeline that increased resume parsing speed by 40%, ensuring prompt and accurate candidate evaluations.</li>
                </ul>
                <div className="mt-5">
                    <p className="text-xl text-balance">
                        For more details, you can refer to the full paper &nbsp;
                        <a href="https://ijarsct.co.in/Paper3029.pdf" className="text-blue-500 underline">Click Here</a>.
                    </p>
                </div>

                <br />
                <h2 className="text-4xl font-bold mb-6">Prediction of House Pricing Using Machine Learning</h2>
                <ul className="list-disc ml-5">
                    <li className="text-xl text-balance">Prediction of House Pricing Using Machine Learning with Python to predict house cost utilizing different regression methods with the assistance of python libraries.</li>
                    <li className="text-xl text-balance">Implemented Pandas, Numpy, and Scoremetrics. Aspects used for the calculation of house price and it is used to provide more accurate prediction results.</li>
                    <li className="text-xl text-balance">Utilized advanced feature engineering techniques to improve the accuracy of house price predictions by 15%, leveraging domain-specific knowledge and data analysis skills.</li>
                </ul>
                <div className="mt-5">
                    <p className="text-xl text-balance">
                        For more details, you can refer to the full paper&nbsp;
                        <a href="https://jespublication.com/upload/2023-V14I127.pdf" className="text-blue-500 underline">Click Here</a>.
                    </p>
                </div>


            </div>
        </section>
    )
}

export default BlogSection
