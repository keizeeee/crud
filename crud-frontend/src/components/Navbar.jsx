export default function Navbar({onOpen, onSearch}){
    const handleSearchChange = (event) => {
        onSearch(event.target.value);
    }

    return (
        <>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                
                <a className="btn btn-ghost text-xl">Clients</a>
            </div>
            <div className="navbar-center ">
                <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" onChange={handleSearchChange} />
               
            </div>
            <div className="navbar-end">
                <button onClick={onOpen} className="btn btn-primary mx-5">Add Client</button>
            </div>
        </div>
        </>
    )
}