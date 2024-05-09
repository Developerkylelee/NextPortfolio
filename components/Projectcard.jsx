import React, { useState } from 'react' 

const Projectcard = ({ motion }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

  return (
    <>
        <div id="project-card">
       
      </div>
    </>
  )
};

export default Projectcard
