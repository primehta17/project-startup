import './Features.css';

function Features() {
  return (
    <>
    <div className="container mt-5" id="conservancies">
      <div className="row">
        <div className="col-md-6">
          <img className="featureimg" src="./one.jpg" />
        </div>
        <div className="col-md-6">
           <h2>Maasai Mara conservancies</h2>
           <h2> Mara Triangle</h2>
           <br />
           <p>Maasai Mara is one of the wildlife conservation and wilderness areas in  </p>
           <p> Africa, with its populations of lions, leopards, cheetahs and African bush</p>
           <p> elephants. It also hosts the Great Migration, which secured it as one of </p>
           <p>the Seven Natural Wonders of Africa, and as one of the ten Wonders of the World.</p>
           <div className="row">
            <div className="col-md-4">
              <h1>1961</h1>
              <p>Established</p>
            </div>
            <div className="col-md-4">
              <h1>520km²</h1>
              <p>Current area</p>
            </div>
            <div className="col-md-4">
              <h1> 12–30°C</h1>
              <p>Temperature range</p>
            </div>
           </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Features;