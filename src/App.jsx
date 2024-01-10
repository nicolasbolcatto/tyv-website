import Main from "./components/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ServiceContainer } from "./components/ServiceContainer";
import { servicesData } from "./data/services";
import { membersData } from "./data/members";
import { projectData } from "./data/projects";
import { MemberContainer } from "./components/MemberContainer";
import {ServiceDetailContainer} from "./components/ServiceDetailContainer"
import "./App.css"
import { ProjectList } from "./components/ProjectList";
import Contact from "./components/Contact";

function App() {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route path="/nosotros" element={<MemberContainer members={membersData}/>} />
                <Route path="/servicios" element={<ServiceContainer services={servicesData}/>}/>
                <Route path="/servicios/:id" element={<ServiceDetailContainer/>}/>
                <Route path="/proyectos" element={<ProjectList projects={projectData}/>}/> 
                <Route path="/contacto" element={<Contact/>}/>               
            </Routes>    
        </BrowserRouter>  
        </> 
    );
}

export {App};