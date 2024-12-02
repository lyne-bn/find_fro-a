import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Searchbar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import vector from "../Assets/vector.svg"
import { useState, useEffect } from "react";
import "./Projects.css"


function Projects() {

    const [allProjects, setAllProjects] = useState([
        {
            titre: "Redesign Website for TechCorp",
            description: "Complete redesign of the company's main website. gvfb chjzbdhu vcbrhuvbhib vyzrvb kzbvuibi",
            budget: "$5000",
            duree: "3 months",
            technologies: ["React", "Node.js", "MongoDB"],
            responsabilities: ["Frontend Development", "Backend API Integration"],
            specifications: ["Mobile-friendly design", "High performance"],
            contact: "techcorp@example.com",
            id_user: '6749cd2d8c3e2fd0d1112038',
            categories : ['UI/UX'],
            _id : "6749cd2d8c3e2fd0d111203b"
          },
          {
            titre: "E-commerce Platform",
            description: "Development of a scalable e-commerce platform.",
            budget: "$15000",
            duree: "6 months",
            technologies: ["Angular", "Express.js", "MySQL"],
            responsabilities: ["Database Design", "Payment Gateway Integration"],
            specifications: ["User-friendly interface", "Secure transactions"],
            contact: "shopmaster@example.com",
            id_user: '6749cd2d8c3e2fd0d1112039',
            categories : ["Frontend","Backend"],
            _id : '6749cd2d8c3e2fd0d111203c'
          },
        {
            titre: "Redesign Website for TechCorp",
            description: "Complete redesign of the company's main website. gvfb chjzbdhu vcbrhuvbhib vyzrvb kzbvuibi",
            budget: "$5000",
            duree: "3 months",
            technologies: ["React", "Node.js", "MongoDB"],
            responsabilities: ["Frontend Development", "Backend API Integration"],
            specifications: ["Mobile-friendly design", "High performance"],
            contact: "techcorp@example.com",
            id_user: '6749cd2d8c3e2fd0d1112038',
            categories : ['UI/UX'],
            _id : "6749cd2d8c3e2fd0d111203b"
          },
          {
            titre: "E-commerce Platform",
            description: "Development of a scalable e-commerce platform.",
            budget: "$15000",
            duree: "6 months",
            technologies: ["Angular", "Express.js", "MySQL"],
            responsabilities: ["Database Design", "Payment Gateway Integration"],
            specifications: ["User-friendly interface", "Secure transactions"],
            contact: "shopmaster@example.com",
            id_user: '6749cd2d8c3e2fd0d1112039',
            categories : ["Frontend","Backend"],
            _id : '6749cd2d8c3e2fd0d111203c'
          },
        {
            titre: "Redesign Website for TechCorp",
            description: "Complete redesign of the company's main website. gvfb chjzbdhu vcbrhuvbhib vyzrvb kzbvuibi",
            budget: "$5000",
            duree: "3 months",
            technologies: ["React", "Node.js", "MongoDB"],
            responsabilities: ["Frontend Development", "Backend API Integration"],
            specifications: ["Mobile-friendly design", "High performance"],
            contact: "techcorp@example.com",
            id_user: '6749cd2d8c3e2fd0d1112038',
            categories : ['UI/UX'],
            _id : "6749cd2d8c3e2fd0d111203b"
          },
          {
            titre: "E-commerce Platform",
            description: "Development of a scalable e-commerce platform.",
            budget: "$15000",
            duree: "6 months",
            technologies: ["Angular", "Express.js", "MySQL"],
            responsabilities: ["Database Design", "Payment Gateway Integration"],
            specifications: ["User-friendly interface", "Secure transactions"],
            contact: "shopmaster@example.com",
            id_user: '6749cd2d8c3e2fd0d1112039',
            categories : ["Frontend","Backend"],
            _id : '6749cd2d8c3e2fd0d111203c'
          },
        {
            titre: "Redesign Website for TechCorp",
            description: "Complete redesign of the company's main website. gvfb chjzbdhu vcbrhuvbhib vyzrvb kzbvuibi",
            budget: "$5000",
            duree: "3 months",
            technologies: ["React", "Node.js", "MongoDB"],
            responsabilities: ["Frontend Development", "Backend API Integration"],
            specifications: ["Mobile-friendly design", "High performance"],
            contact: "techcorp@example.com",
            id_user: '6749cd2d8c3e2fd0d1112038',
            categories : ['UI/UX'],
            _id : "6749cd2d8c3e2fd0d111203b"
          },
          {
            titre: "E-commerce Platform",
            description: "Development of a scalable e-commerce platform.",
            budget: "$15000",
            duree: "6 months",
            technologies: ["Angular", "Express.js", "MySQL"],
            responsabilities: ["Database Design", "Payment Gateway Integration"],
            specifications: ["User-friendly interface", "Secure transactions"],
            contact: "shopmaster@example.com",
            id_user: '6749cd2d8c3e2fd0d1112039',
            categories : ["Frontend","Backend"],
            _id : '6749cd2d8c3e2fd0d111203c'
          }
    ]);
    
    const [filteredProjects, setFilteredProjects] = useState(allProjects);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/projects");
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des projets");
                }
                const data = await response.json();
                setAllProjects(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProjects();
    }, []);

    
    return (
        <div className="Projects">
            <NavBar user={false}></NavBar>
            <div className="content">
                <Searchbar data={allProjects} onFilter={setFilteredProjects} />
                <Categories data={allProjects} onFilter={setFilteredProjects}></Categories>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                    {filteredProjects.map((project) => (
                        <div className="bg-white pt-8 pb-8 pl-4 pr-4 shadow-md rounded-2xl overflow-hidden flex flex-col justify-between h-[60vh] w-full">
                            <p className="font-bold text-[#1AE3D9] text-lg">{project.titre}</p>
                            <p className="text-sm">{project.description}</p>
                            <div className="flex gap-2 flex-wrap">
                                {project.technologies.map((tech) => (
                                    <p key={tech} className="font-bold text-[#020B56] text-sm">{tech}</p>
                                ))}
                            </div>
                            <div className="href">
                                <p className="text-sm">Durée</p>
                                <p className="text-sm">{project.duree}</p>
                            </div>
                            <a href={`/project/${project._id}`} className="self-end cursor-pointer">
                                <div className="href">
                                    <p className="font-bold text-[#1AE3D9] text-sm">Voyez Plus</p>
                                    <img className="vector" alt="vector" src={vector}></img>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Projects;
