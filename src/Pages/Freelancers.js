import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Searchbar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import FilterChips from "../Components/Singlefilters";
import vector from "../Assets/vector.svg"
import { useState, useEffect } from "react";


function Freelancers() {

    const [allFreelancers, setAllFreelancers] = useState([
        {
            _id : '6749cd2d8c3e2fd0d1112035',
            nom: "Taylor",
            prenom: "Chris",
            email: "chris.taylor@example.com",
            password: "freelance123",
            profession: "UI/UX Designer",
            level: "Expert",
            description: "Experienced UI/UX designer with a passion for user-friendly interfaces.",
            Github: "https://github.com/ChrisTaylor",
            Linkedin: "https://linkedin.com/in/ChrisTaylor",
            Dribble: "https://dribbble.com/ChrisTaylor",
            Behance: "https://www.behance.net/ChrisTaylor",
            Expertise: "UI/UX Design",
            categories: ["UI/UX", "Frontend", "Design Graphique"],
            num_carte: "2345678901234567",
            date_carte: new Date("2027-08-31"),
            code_carte: "789",
            nom_carte: "Chris Taylor"
        },
        {
            _id : '6749cd2d8c3e2fd0d1112036',
            nom: "Brown",
            prenom: "Alex",
            email: "alex.brown@example.com",
            password: "designRocks",
            profession: "Graphic Designer",
            level: "Intermediate",
            description: "Creative graphic designer specializing in brand identity.",
            Github: "https://github.com/AlexBrown",
            Linkedin: "https://linkedin.com/in/AlexBrown",
            Dribble: "https://dribbble.com/AlexBrown",
            Behance: "https://www.behance.net/AlexBrown",
            Expertise: "Graphic Design",
            categories: ["Design Logo", "Design Graphique"],
            num_carte: "3456789012345678",
            date_carte: new Date("2024-09-30"),
            code_carte: "101",
            nom_carte: "Alex Brown"
        },
        {
            _id : '6749cd2d8c3e2fd0d1112035',
            nom: "Taylor",
            prenom: "Chris",
            email: "chris.taylor@example.com",
            password: "freelance123",
            profession: "UI/UX Designer",
            level: "Expert",
            description: "Experienced UI/UX designer with a passion for user-friendly interfaces.",
            Github: "https://github.com/ChrisTaylor",
            Linkedin: "https://linkedin.com/in/ChrisTaylor",
            Dribble: "https://dribbble.com/ChrisTaylor",
            Behance: "https://www.behance.net/ChrisTaylor",
            Expertise: "UI/UX Design",
            categories: ["UI/UX", "Frontend", "Design Graphique"],
            num_carte: "2345678901234567",
            date_carte: new Date("2027-08-31"),
            code_carte: "789",
            nom_carte: "Chris Taylor"
        },
        {
            _id : '6749cd2d8c3e2fd0d1112036',
            nom: "Brown",
            prenom: "Alex",
            email: "alex.brown@example.com",
            password: "designRocks",
            profession: "Graphic Designer",
            level: "Intermediate",
            description: "Creative graphic designer specializing in brand identity.",
            Github: "https://github.com/AlexBrown",
            Linkedin: "https://linkedin.com/in/AlexBrown",
            Dribble: "https://dribbble.com/AlexBrown",
            Behance: "https://www.behance.net/AlexBrown",
            Expertise: "Graphic Design",
            categories: ["Design Logo", "Design Graphique"],
            num_carte: "3456789012345678",
            date_carte: new Date("2024-09-30"),
            code_carte: "101",
            nom_carte: "Alex Brown"
        },
        {
            _id : '6749cd2d8c3e2fd0d1112035',
            nom: "Taylor",
            prenom: "Chris",
            email: "chris.taylor@example.com",
            password: "freelance123",
            profession: "UI/UX Designer",
            level: "Expert",
            description: "Experienced UI/UX designer with a passion for user-friendly interfaces.",
            Github: "https://github.com/ChrisTaylor",
            Linkedin: "https://linkedin.com/in/ChrisTaylor",
            Dribble: "https://dribbble.com/ChrisTaylor",
            Behance: "https://www.behance.net/ChrisTaylor",
            Expertise: "UI/UX Design",
            categories: ["UI/UX", "Frontend", "Design Graphique"],
            num_carte: "2345678901234567",
            date_carte: new Date("2027-08-31"),
            code_carte: "789",
            nom_carte: "Chris Taylor"
        },
        {
            _id : '6749cd2d8c3e2fd0d1112036',
            nom: "Brown",
            prenom: "Alex",
            email: "alex.brown@example.com",
            password: "designRocks",
            profession: "Graphic Designer",
            level: "Intermediate",
            description: "Creative graphic designer specializing in brand identity.",
            Github: "https://github.com/AlexBrown",
            Linkedin: "https://linkedin.com/in/AlexBrown",
            Dribble: "https://dribbble.com/AlexBrown",
            Behance: "https://www.behance.net/AlexBrown",
            Expertise: "Graphic Design",
            categories: ["Design Logo", "Design Graphique"],
            num_carte: "3456789012345678",
            date_carte: new Date("2024-09-30"),
            code_carte: "101",
            nom_carte: "Alex Brown"
        },
        {
            _id : '6749cd2d8c3e2fd0d1112035',
            nom: "Taylor",
            prenom: "Chris",
            email: "chris.taylor@example.com",
            password: "freelance123",
            profession: "UI/UX Designer",
            level: "Expert",
            description: "Experienced UI/UX designer with a passion for user-friendly interfaces.",
            Github: "https://github.com/ChrisTaylor",
            Linkedin: "https://linkedin.com/in/ChrisTaylor",
            Dribble: "https://dribbble.com/ChrisTaylor",
            Behance: "https://www.behance.net/ChrisTaylor",
            Expertise: "UI/UX Design",
            categories: ["UI/UX", "Frontend", "Design Graphique"],
            num_carte: "2345678901234567",
            date_carte: new Date("2027-08-31"),
            code_carte: "789",
            nom_carte: "Chris Taylor"
        },
        {
            _id : '6749cd2d8c3e2fd0d1112036',
            nom: "Brown",
            prenom: "Alex",
            email: "alex.brown@example.com",
            password: "designRocks",
            profession: "Graphic Designer",
            level: "Intermediate",
            description: "Creative graphic designer specializing in brand identity.",
            Github: "https://github.com/AlexBrown",
            Linkedin: "https://linkedin.com/in/AlexBrown",
            Dribble: "https://dribbble.com/AlexBrown",
            Behance: "https://www.behance.net/AlexBrown",
            Expertise: "Graphic Design",
            categories: ["Design Logo", "Design Graphique"],
            num_carte: "3456789012345678",
            date_carte: new Date("2024-09-30"),
            code_carte: "101",
            nom_carte: "Alex Brown"
        }
    ]);
    
    const [filteredFreelancers, setFilteredFreelancers] = useState(allFreelancers);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFreelancers = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/Freelancers");
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des projets");
                }
                const data = await response.json();
                setAllFreelancers(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchFreelancers();
    }, []);

    
    return (
        <div className="bg-[#EAF6FF]">
            <NavBar></NavBar>
            <div className="flex flex-col items-start px-[10vw] pt-[7vh] pb-[15vh]">
                <Searchbar data={allFreelancers} onFilter={setFilteredFreelancers}  freelancer={true}/>
                <Categories data={allFreelancers} onFilter={setFilteredFreelancers}></Categories>
                <div class="flex flex-col lg:flex-row items-start gap-5 lg:justify-between">
                    <FilterChips data={allFreelancers} onFilter={setFilteredFreelancers}></FilterChips>
                    <div className="grid grid-cols-1 justify-center gap-5">
                        {filteredFreelancers.map((freelancer) => (
                            <div className="bg-white pt-8 pb-8 pl-4 pr-4 shadow-md rounded-2xl overflow-hidden flex flex-col gap-2 h-full w-[60vw]">

                                <div className="flex gap-[1vw]">
                                    <p className="font-bold text-sm text-[#020B56]">{freelancer.nom}</p>
                                    <p className="font-bold text-sm text-[#020B56]">{freelancer.prenom}</p>
                                </div>

                                <p className="text-[#1AE3D9] text-sm">{freelancer.profession}</p>

                                <p className="text-[#1AE3D9] text-sm">{freelancer.level}</p>

                                <p className="text-sm text-[#020B56]">{freelancer.description}</p>
                                
                                <div className="flex gap-2 flex-wrap">
                                    {freelancer.categories.map((cat) => (
                                        <p key={cat} className="font-bold text-[#020B56] text-sm">{cat}</p>
                                    ))}
                                </div>

                                <a href={`/freelancers/${freelancer._id}`} className="self-end cursor-pointer">
                                    <div className="flex gap-[1vw]">
                                        <p className="font-bold text-[#1AE3D9] text-sm">Voyez mes projets</p>
                                        <img className="vector" alt="vector" src={vector}></img>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Freelancers;
