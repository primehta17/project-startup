import {useState} from 'react';
import User from './User'
import './Search.css';
function Search(){ 
    const [users,setUsers] = useState([]);
    const [location,setLocation] =useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] =useState('');
    const [confirm,setConfirm] =useState('');
    const [error, setError] =useState('');
    const submitHandler = (e) =>{
        e.preventDefault();

        if(number.length<10){
            setError('Number must be 10 characters long');
            return;
        }
        if(number!=confirm){
            setError('Number and confirm Number should be same');
            return;
        }
        if(!/[@#~#$%^&*(){<>?]/.test(location)){
            setError("Location should contain any special character");
            return;
        }
        if(!/[A-Z]/.test(location)){
            setError("Location should contain capital letter too");
            return;
        }
       setUsers([...users,{location,email,number}])
        setLocation('')
        setEmail('')
        setNumber('')
        setConfirm('')
        setError('')
        console.log(location,email,number,confirm)
        alert("form submit")
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
                {error && (
                        <p className="text-danger"> {error}</p>
                    )}
                    
                <div className="col-md-3">
                    <button className="signup" type="submit">Sign up</button>
                </div>  
                {users.map((elem,index)=>{
                    return <User  key={index} elem={elem} />
                    })}
            </div>
            </form>
        </div>


         </>
    )
}

export default Search;