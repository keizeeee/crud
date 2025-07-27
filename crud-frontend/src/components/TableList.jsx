import axios from 'axios';
import React, { useState } from 'react';
export default function TableList({handleOpen, searchTerm, tableData, setTableData}){

    
    const [error, setError] = useState(null);

     // Filter the tableData based on the searchTerm
     const filteredData = tableData.filter(client => 
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.job.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this client?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/api/clients/${id}`); // API call to delete client
                setTableData((prevData) => prevData.filter(client => client.id !== id)); // Update state
            } catch (err) {
                setError(err.message); // Handle any errors
            }
        }
    };

    
    

    return(
        <>

            <div className="overflow-x-auto mt-10">
                {error && <div className="alert alert-error">{error}</div>}
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>rate</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>

                    {filteredData.map((client) => (
                        <tr key={client.id}  className="hover:bg-base-300">
                            <th>{client.id}</th>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.job}</td>
                            <td>{client.rate}</td>
                            <td>
                                <button className={`btn rounded-full w-20 ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}>
                                    {client.isactive ? "Active" : "Inactive"}
                                </button>

                            </td>
                            <td>
                                <button onClick={() => handleOpen('edit', client)} className="btn btn-secondary">
                                    Update
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-soft btn-error" onClick={()=>handleDelete(client.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>

                    ))}
                    

                    
                   
                   
                    </tbody>
                </table>
            </div>
        </>
    )
}