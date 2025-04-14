import {useState} from 'react';
import './Search.css';
function Search(){
    const [location,setLocation] =useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] =useState('');
    const [confirm,setConfirm] =useState('')
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(location,email,number,confirm)
        setLocation('')
        setEmail('')
        setNumber('')
        setConfirm('')
        console.log("form submit")
   }
    return(
        <>
        <div className="container searchContainer mt-5">
        <form onSubmit={(e)=>{submitHandler(e)}} >
            <div className="row">
                <div className="col-md-2">
                    <input className="inputs" type="text" placeholder="Location" value={location}
                    onChange={(e)=>{setLocation(e.target.value)} } required/>
                </div>
                <div className="col-md-2">
                    <input className="inputs" type="email" placeholder="Email" value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}} required/>
                </div>
                <div className="col-md-2">
                    <input className="inputs" type="number" placeholder="Price Range" value={number} onChange={(e)=>setNumber(e.target.value) } required/>
                </div>
                <div className="col-md-2">
                    <input className="inputs" type="number" placeholder="Confirm Range" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required/>
                </div>
                <div className="col-md-3">
                    <button className="signup" type="submit">Sign up</button>
                </div>  
            </div>
            </form>
        </div>


         </>
    )
}

export default Search;