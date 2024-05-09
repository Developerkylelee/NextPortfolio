import react from 'react' 
import Page from "@/components/page";
import Skillscontainer from '@/components/Skillscontainer';

const skills = () => {
  return (
    <>
     <Page>
      <div className="page-body">
        <div className="page-container">
         <Skillscontainer />
         </div>
            </div> 
      </Page>
    </>
  )
};

export default skills
