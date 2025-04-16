import './Navigation.css'

function Navigation(){
    return(
      <>
      <div className="navigation">
         <ul>
          <li><a href="#">Masai</a></li>
          <li><a href="#mara">Mara</a></li>
          <li><a href="#conservancies">Conservancies</a></li>
          <li><a href="#agents">Agents</a></li>
          <li><a href ="#contact">Contact</a></li>
          <li><a href="#find">🔎</a></li>
          <li><a href="#price">🙎🏻‍♂️</a></li>
          <button className="register"> <a href="#register">Register</a></button>
         </ul>
      </div>
        
      </>
    )
}

export default Navigation;