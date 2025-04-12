import './Pricing.css';

function Pricing() {
  return (
    <>
    <div className="container mt-5">
      <h2 className="center">Our Popular Residency</h2>
      <div className="row">
        <div className="col-md-4 col-sm-4 pricecard">
          <img src="./six.jpg" />
            <div className="pricebottom">
              <p>📍 San Francisco, California</p>
              <p>🛌 4 rooms     📼 3,500 sq ft</p>
              <button className="signup">Sign up </button><span> $ 2,500,000</span>
            </div>
        </div>
        <div className="col-md-4 col-sm-4 pricecard">
          <img src="./six.jpg" />
            <div className="pricebottom">
              <p>📍 San Francisco, California</p>
              <p>🛌 4 rooms     📼 3,500 sq ft</p>
              <button className="signup">Sign up </button><span> $ 2,500,000</span>
            </div>
        </div>
        <div className="col-md-4 col-sm-4 pricecard">
          <img src="./six.jpg" />
            <div className="pricebottom">
              <p>📍 San Francisco, California</p>
              <p>🛌 4 rooms     📼 3,500 sq ft</p>
              <button className="signup">Sign up </button><span> $ 2,500,000</span>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Pricing;