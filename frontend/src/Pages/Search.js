import './Search.css';
function Search(){
    return(
        <>
          
        <div className="container searchContainer mt-5">
        <form  >
            <div className="row">
          
                <div className="col-md-3">
                    <input className="inputs" type="text" placeholder="Location" />
                </div>
                <div className="col-md-3">
                    <input className="inputs" type="email" placeholder="Email" />
                </div>
                <div className="col-md-3">
                    <input className="inputs" type="number" placeholder="Price Range" />
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