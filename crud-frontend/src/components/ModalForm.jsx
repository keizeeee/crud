import {useState, useEffect} from 'react';

export default function ModalForm({isOpen, onClose, mode, OnSubmit, clientData}){
    const [rate, setRate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [status, setStatus] = useState(false);

    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Active'); // boolean result, target is the select and the value is the one chosen
    }

    const handleSubmit = async (e) => {
        // prevents the default browser behavior for the few events that have it
        e.preventDefault();

        try{
            const clientData = {name, email, job, rate: Number(rate) , isactive: status };
            await OnSubmit(clientData);

        } catch (err) {
            console.log("error adding client", err);
        }
        onClose();
    }
    
    useEffect(() => {
        if (mode === 'edit' && clientData) {
            setName(clientData.name);
            setEmail(clientData.email);
            setJob(clientData.job);
            setRate(clientData.rate);
            setStatus(clientData.isActive); // Assuming isActive is a boolean
        } else {
            // Reset fields when adding a new client
            setName('');
            setEmail('');
            setJob('');
            setRate('');
            setStatus(false);
        }
    }, [mode, clientData]);
    
    
    
    
    return(
        <>
       {/* You can open the modal using document.getElementById('ID').showModal() method */}
       
        <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose} >✕</button>
            <h3 className="font-bold text-lg py-2">{mode === 'edit' ?  'Edit Client' : 'Client Details'}</h3>
            <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}
            <label className="input m-2 flex items-center gap-2">
                Name
                <input type="text" className="grow" value={name} onChange ={ (e) => setName(e.target.value) }/>
            </label>
             <label className="input m-2 flex items-center gap-2" >  {/* onChange is a property */}
                Email
                <input type="text" className="grow" value={email} onChange={ (e) => setEmail(e.target.value)} />
            </label>
             <label className="input m-2 flex items-center gap-2">
                Job
                <input type="text" className="grow" value={job} onChange={(e) => setJob(e.target.value)} />
            </label>
            <div className="flex mb-4 justify-between">
                <label className="input m-2 flex items-center gap-2">
                Rate
                <input type="number" className="grow" value={rate} onChange={ (e) => setRate(e.target.value)}/>
            </label>

            <select value={status ? 'Active' : 'Inactive'} className="select select-bordered m-2" onChange={handleStatusChange}>
                <option>Inactive</option>
                <option>Active</option>
            </select>

            </div>

           
            <button type="submit" className="btn btn-success mt-5" >{mode === 'edit' ?  'Save Changes' : 'Add Client'} </button>
            </form>
            
        </div>
        </dialog>

        </>
    )
}