import './Navigation.css'

function Navigation(){
    return(
      <>
      <div className="navigation">
         <ul>
          <li><a href="#">Dwello</a></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#agents">Agents</a></li>
          <li><a href ="#contact">Contact</a></li>
          <li><a href="#find">🔎</a></li>
          <li><a href="#price">🙎🏻‍♂️</a></li>
          <button className="signup"> Sign up</button>
         </ul>
      </div>
        
      </>
    )
}

export default Navigation;