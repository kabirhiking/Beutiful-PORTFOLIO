import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkill = [
        "React", 
        "TailwindCSS",
        "JavaScript",
        "html"
    ];

    const backendSkill = [
        "Pyhton", 
        "Docker",
        "Mysql",
        "Docker"
    ];

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20" 
        > 
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all" >
                        <p>
                          Passionate developer with expertise in building scalable web
                          applications and creating innovative solutions. I am constantly 
                          seeking opportunities to learn, grow, and push the boundaries of what is possible.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2"> 
                                    {frontendSkill.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.2]] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2"> 
                                    {backendSkill.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba[59, 130, 2246, 0.2]] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" >
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all" >
                            <h3 className="text-xl font-bold mb-4">🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2" >
                                <li>
                                    <strong> Bsc in Computer Science and Engineeering </strong> - University of Asia Pacific
                                </li>
                                <li>
                                    Relevent CourseWork: Data Structure, Web Development, Cloud Computing.
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all" >
                            <h3 className="text-xl font-bold mb-4">️💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300" >
                                {/* <h4 className="font-semibold" > 
                                    {" "}
                                    Software Engineer at RoxNor (- Present){" "}
                                </h4>
                                <p>
                                    Developed and maintained microservice for cloud-based applications.
                                </p> */}
                            

                             <div>
                                <h4 className="font-semibold"> 
                                    {" "}
                                    Intern at HrSoftbd (2024){" "}
                                </h4>
                                <p>
                                    Developed and maintained microservice for cloud-based applications.
                                    <p>
                                        Assisted in building front-end components and integration REST APIs
                                    </p>
                                </p>
                            </div>
                            </div>
                        </div>

                    </div>

                </div>
            </RevealOnScroll>                
        </section>
    );
};