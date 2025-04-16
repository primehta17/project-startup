import './Pricing.css';

function Pricing() {
  const pricingrecord=[
    {"id":1,"content":"📍 San Francisco, California","room1":"🛌 4 rooms",
      "room2":"📼 3,500 sq ft","rupees":"$ 2,500,000"
    },
    {"id":2,"content":"📍 San Francisco, California","room1":"🛌 4 rooms",
      "room2":"📼 3,500 sq ft","rupees":"$ 2,500,000"
    },
    {"id":3,"content":"📍 San Francisco, California","room1":"🛌 4 rooms",
      "room2":"📼 3,500 sq ft","rupees":"$ 2,500,000"
    },
  ]
  return (
    <>
    <div className="container mt-5" id="price">
      <h2 className="center">Our Popular Residency</h2>
      <div className="row">
        {pricingrecord.map((record)=>{
          return(
            <div className="col-md-4 col-sm-4 pricecard" key={record.id}>
            <img src="./six.jpg" />
              <div className="pricebottom">
                <p>{record.content}</p>
                <p><span>{record.room1}</span>  <span> {record.room2}</span></p>
                <button className="signup">Sign up </button><span> {record.rupees}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  );
}

export default Pricing;