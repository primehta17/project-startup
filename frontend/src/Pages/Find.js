import './Find.css';
import Search from './Search';

function Find() {
  return (
    <>
      <div className="container findcontainer">
        <div className="row">
        <div className="col-md-4 col-sm-6">
            <h2>Maasai Mara </h2>
            <h2> As The Mara</h2>
            <p>Is a large national game reserve in Narok</p>
            <p>County, Kenya, contiguous with the Serengeti</p>
            <p> National Park in Tanzania.</p>
            <br />
            <button className="signup">Sign up</button>
        </div>
        <div className="col-md-8 col-sm-6">
          <div className="section2">
            <img className ="sectiontwoimg" src="./three.avif"></img>
          </div>
        </div>
        <Search />
        </div>
      </div>
    </>
  );
}

export default Find;