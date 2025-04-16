import './Register.css';
import React,{useState} from 'react';

function Register() {
  const [error,setError]=useState('');
  const [register,setRegister]=useState([]);
  const [formData, setFormData] = useState({
    fullname:'',
    email:'',
    password:'',
    confirmPassword:''
  })
 
  const handleChange =(e) =>{
    //destructring
    // const name =e.target.name;
    // const value=e.target.value;
const {name,value} =e.target;
   setFormData((prevData)=>({
    ...prevData,
    [name]:value
   }))
  //  console.log(setFormData)
  }
  const submitHandler=(e)=>{
     e.preventDefault()
     if(formData.password.length<10){
      setError('Password must be 10 characters long');
      return;
  }
  if(formData.password !== formData.confirmPassword){
      setError('Number and confirm Number should be same');
      return;
  }
  if(!/[@#~#$%^&*(){<>?]/.test(formData.password)){
      setError("Password should contain any special character");
      return;
  }
  if(!/[A-Z]/.test(formData.password)){
      setError("Password should contain capital letter too");
      return;
  }
  setRegister((prevUsers)=>[
    ...prevUsers,{
      fullname:formData.fullname,
      email:formData.email,
      password:formData.password,
      consfirmPassword:formData.confirmPassword
    }
  ]);
  setError('');
  setFormData({
    fullname:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  alert("Register successful");
  }

  return (
    <>
    <div className="container containerreg m-5 bg-info" id="register">
      <div className="row">
        {/* <div className="col-md-3"></div>
        <div className="col-md-6"> */}
      <h2>Register</h2>
      <form onSubmit={(e)=>{submitHandler(e)}}>
       <p><label htmlFor="fullName">Full Name</label></p> 
        <input type="text" className="inputs" value={formData.fullname} name="fullname"
        onChange={handleChange} required />
        <p> <label htmlFor="email">Email</label></p>
       
        <input type="email" className="inputs" name="email" value={formData.email} onChange={handleChange} required/>
       <p><label htmlFor="password">Password</label></p> 
        <input type="password" className="inputs" name="password" value={formData.password} onChange={handleChange} required/>
       <p><label htmlFor="confirmPassword">Confirm Password</label></p> 
        <input type="password" className="inputs" name="confirmPassword" value={formData.confirmPassword} 
        onChange={handleChange} required/>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" >Submit</button>
      </form>
      {register.map((elem,index)=>{
                    return  <div key={index}>{elem.fullname}</div> 
            })}
    </div>
    {/* <div className="col-md-3"></div>
      </div>    */}
    </div>
    </>
  );
}

export default Register;