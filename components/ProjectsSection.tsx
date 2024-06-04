import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "FullStack-Portal",
    description:
      "Student Dashboard: The Cohort-Based Learning Platform is an online education platform that offers structured learning experiences through cohort-based programs. Users can enroll in cohorts, navigate courses, track their progress, Resume Creation, Mock Interviews and collaborate with peers on capstone projects. The platform prioritizes intuitive user interface design, timely notifications, and community engagement to enhance the learning experience.",
    image: "/Untitled 2.jpg",
    github: "https://github.com/SyedSaadh1/FullStack_Portal",
    link: "fullstack-portal.vercel.app",
  },
  {
    name: "Online Resume Upload User Interface (UI)",
    description: "This project provides a user-friendly interface for uploading files using React and Next.js.",
    image: "/Untitled 2.png",
    github: "https://github.com/SyedSaadh1/Online-Resume-Upload-Interface",
    link: "https://online-resume-upload-interface.vercel.app",
  },
  {
    name: "Prediction Of House Pricing Using MachineLearning With Python",
    description:
      "House price prediction is the process of using statistical models and machine learning algorithms to predict the price of a house. The models are trained on historical data that includes information about the house (e.g., square footage, number of bedrooms and bathrooms, location) and other factors that may affect the price (e.g., interest rates, economic conditions). The goal is to create a model that can accurately predict the price of a house based on these factors.",
    image: "/project prediction.png",
    github: "https://github.com/SyedSaadh1/Prediction_Of_House_Pricing_Using_MachineLearning_With_Python",
    link: "https://colab.research.google.com/drive/18wmKDSzhv3TtHqz5nm491XSc200sWJ0Q#scrollTo=laCkZiNFv9dN",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
