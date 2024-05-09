import react from "react";
import Page from "@/components/page";
import Projectscontainer from "@/components/Projectscontainer";
import { motion } from "framer-motion";

const projects = () => {
  return (
    <>
      <Page>
      <div className="page-body">
        <div className="page-container">
         <Projectscontainer motion={motion}/>
         </div>
            </div> 
      </Page>
    </>
  );
};

export default projects;
