export const Projects = () => {
    return (
    <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20" 
    >
         <div className="max-w-5xl mx-auto px-4" >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                {" "}
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.2]] transition">
                    <h3 className="text-xl font-bold mb-2" >Renew Tech</h3>
                    <p className="text-gray-400 mb-4" >
                        Sclable management and automated scaling
                        Restore old devices using refurbished parts to save money and reduce waste.
                    </p>
                    <div>
                        {["DRF", "Python", "Docker"].map((tech, key) => (

                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.1]] transition-all"
                        >
                            {tech}
                        </span>                       
                        ))}
                        <div>
                            <div className="flex justify-between items-center" >
                                <a href="https://github.com/kabirhiking/ReTech-Cycle" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 " 
                                >
                                    {" "}
                                    View Project ￫{" "}
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.2]] transition">
                    <h3 className="text-xl font-bold mb-2" >E-Commerce Web API </h3>
                    <p className="text-gray-400 mb-4" >
                        Built a modular RESTful API with FastAPI to manage users, products, carts, and orders using JWT
                        authentication.
                    </p>
                    <div>
                        {["FastAPI", "Python", "SQLAlchemy", "JWT authentication"].map((tech, key) => (

                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.1]] transition-all"
                        >
                            {tech}
                        </span>                       
                        ))}
                        <div>
                            <div className="flex justify-between items-center" >
                                <a href="https://web-production-c09a8.up.railway.app/docs" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 " 
                                >
                                    {" "}
                                    View Project ￫{" "}
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.2]] transition">
                    <h3 className="text-xl font-bold mb-2" >AI Chat Log Summarizer </h3>
                    <p className="text-gray-400 mb-4" >
                        Implemented functionality to count total messages per speaker, extract top 5 keywords using frequency and
                        F-IDF, and generate summaries of single or multiple chat files.
                    </p>
                    <div>
                        {[ "Python", "AI"].map((tech, key) => (

                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.1]] transition-all"
                        >
                            {tech}
                        </span>                       
                        ))}
                        <div>
                            <div className="flex justify-between items-center" >
                                <a href="https://web-production-c09a8.up.railway.app/docs" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 " 
                                >
                                    {" "}
                                    View Project ￫{" "}
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.2]] transition">
                    <h3 className="text-xl font-bold mb-2" >ToDo Web App </h3>
                    <p className="text-gray-400 mb-4" >
                        users organize and manage tasks efficiently with features like adding, editing, and deleting tasks. 
                        It often includes priority settings, deadlines, and progress tracking for better productivity.
                    </p>
                    <div>
                        {["Django", "Python", "Using MVT"].map((tech, key) => (

                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.1]] transition-all"
                        >
                            {tech}
                        </span>                       
                        ))}
                        <div>
                            <div className="flex justify-between items-center" >
                                <a href="https://github.com/kabirhiking/ToDo" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 " 
                                >
                                    {" "}
                                    View Project ￫{" "}
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

         </div> 


    </section>
  );
};