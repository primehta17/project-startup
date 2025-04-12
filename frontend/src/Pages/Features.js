import './Features.css';

function Features() {
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img className="featureimg" src="./one.jpg" />
        </div>
        <div className="col-md-6">
           <h2>We Help You To Find</h2>
           <h2>Your Dream Home</h2>
           <br />
           <p>From cozy cottages to luxrious estates, our</p>
           <p>dedication team guides you through every step of the</p>
           <p>journey, ensuring your dream home becomes a reality</p>
           <div className="row">
            <div className="col-md-4">
              <h1> 8K+</h1>
              <p>Houses Available</p>
            </div>
            <div className="col-md-4">
              <h1> 6K+</h1>
              <p>Houses Sold</p>
            </div>
            <div className="col-md-4">
              <h1> 2K+</h1>
              <p>Trusted Agents</p>
            </div>
           </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Features;