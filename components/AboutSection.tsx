import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "PyTorch" },
  { skill: "Tensorflow" },
  { skill: "Artificial Intelligence" },
  { skill: "Machine Learning" },
  { skill: "Natural Languae Processing" },
  { skill: "R Programming" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Javascript" },
  { skill: "React" },
  { skill: "Typescript" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "SQL" },
  { skill: "Django" },
  { skill: "Postman" },  
  { skill: "Cypress" }, 
  { skill: "Jupyter Notebook" },
  { skill: "GoogleColab Notebook" },
  { skill: "Ms Office Suite" }
  
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Syed Saadh and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Hyderabad, India.
            </p>
            <br />
            <p>
              I graduated from GITAM University, Hyderabad in 2023
              with a 85% in Computer Science And  Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              Dynamic AI/ML Engineer with 2+ years of experience.
              Specializes in developing and implementing scalable Machine learning and Deep
              learning solutions.
            </p>
            <br /> 
            <p> 
              Proficient in Python, TensorFlow, PyTorch,NLP,Kubernetes, and distributed computing.  
              Skilled in optimizing kernels for enhanced performance.
            </p>
            <br />
            <p>
              Experienced in deploying large-scale ML models in enterprise-grade applications.
            </p>
            <br />
            <p> 
              Adept at collaborating with cross-functional teams And Effective communicator of complex concepts. 
            </p>
            <br />
            <p>  
              Passionate about leveraging cutting-edge technologies to solve real-world business challenges And 
              Recognized for leadership skills and contributions to team success.
            </p>
            <br />
            <p>
              I have a diverse range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities for growth and advancement.🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className={`bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-800 rounded font-semibold transition-all duration-300 ease-in-out 
                       ${idx % 2 === 0 ? 'hover:bg-blue-300' : 'hover:bg-green-300'} 
                       ${idx % 3 === 0 ? 'hover:text-red-600' : 'hover:text-purple-600'}`}
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/vector2.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
