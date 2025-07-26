import './App.css'
import { useState } from 'react'
import ModalForm from './components/Modalform'
import Navbar from './components/Navbar'
import TableList from './components/Tablelist'


function App() {
  // add use state for modal visibility
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  
  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (modalMode === 'add'){
      console.log('modal mode Added');
    }
    else{
      console.log('modal mode Edit');
    }
    setIsOpen(false);
  };  

  return (
    <>
     <Navbar onOpen={() => handleOpen('add')}  />
     <div className="container mx-auto p-10">
        <TableList onOpen={() => handleOpen('edit')} />
     </div>
     
     <ModalForm 
     isOpen={isOpen}
     OnSubmit={handleSubmit} 
     onClose={() => setIsOpen(false)}
     mode ={modalMode}
     onSubmit={handleSubmit}
     />
    </>
  )
}

export default App
