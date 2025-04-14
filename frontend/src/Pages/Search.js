import './Search.css';
function Search(){
    return(
        <div className="container searchContainer mt-5">
            <div className="row">
            <div className="col-md-3">
                <input className="inputs" placeholder="Location" />
            </div>
            <div className="col-md-3">
                <input className="inputs" placeholder="Type" />
            </div>
            <div className="col-md-3">
                <input className="inputs" placeholder="Price Range" />
            </div>
            <div className="col-md-3">
                <button className="signup">Sign up</button>
            </div>  
            </div>
        </div>
    )
}

export default Search;