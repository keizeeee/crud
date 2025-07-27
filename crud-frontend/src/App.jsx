import './App.css'
import { useState, useEffect } from 'react'
import ModalForm from './components/Modalform'
import Navbar from './components/Navbar'
import TableList from './components/Tablelist'
import axios from 'axios';

function App() {
  // add use state for modal visibility
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/clients');
        setTableData(response.data);
    } catch (err) {
        console.log(err.message);
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = async (newClientData) => {
    if (modalMode === 'add'){
      try {
        const response = await axios.post('http://localhost:3000/api/clients', newClientData); // Replace with your actual API URL
        console.log('Client added:', response.data); // Log the response
        setTableData((prevData) => [...prevData, response.data]);
        // Optionally, update your state here to reflect the newly added client
        } catch (error) {
            console.error('Error adding client:', error); // Log any errors
        }
      console.log('modal mode Added');
    }
    else{
      console.log('Updating client with ID:', clientData.id); // Log the ID being updated
      try {
          const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData);
          console.log('Client updated:', response.data);
          setTableData((prevData) =>
            prevData.map((client) => (client.id === clientData.id ? response.data : client))
          );
          } catch (error) {
          console.error('Error updating client:', error); 
      }
      console.log('modal mode Edit');
    }
    setIsOpen(false);
  };  

  return (
    <>
     <Navbar onOpen={() => handleOpen('add')}  onSearch={setSearchTerm} />
     <div className="container mx-auto p-10">
        <TableList handleOpen={handleOpen} searchTerm={searchTerm} setTableData={setTableData} tableData={tableData} />
     </div>
     
     <ModalForm 
     isOpen={isOpen}
     OnSubmit={handleSubmit} 
     onClose={() => setIsOpen(false)}
     mode ={modalMode}
     clientData={clientData}
     onSubmit={handleSubmit}
     />
    </>
  )
}

export default App
