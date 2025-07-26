export default function TableList({onOpen}){
    // make a list
    const clients = [
        {id: 1, name: "John Doe", "email": "johndoe@gmail.com", job: "developer", rate: "100", isactive: true},
        {id: 2, name: "John1 Doe", "email": "john1doe@gmail.com", job: "developer1", rate: "101", isactive: true},
        {id: 3, name: "John2 Doe", "email": "john2doe@gmail.com", job: "developer2", rate: "102", isactive: false},

    ]
    return(
        <>
            <div className="overflow-x-auto mt-10">
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

                    {clients.map((client) => (
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
                                <button onClick={onOpen} className="btn btn-secondary">
                                    Update
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-soft btn-error">
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