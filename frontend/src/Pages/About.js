import './About.css'
function About(){
   return (
    <>
    <div className="container-fluid mt-5 about">
        <div className="row">
            <h3 className="center">What People Say</h3>
            <h3 className="center">About Dwello</h3>
            <div className="col-md-4">
                <div className="aboutcard">
                    <img className="aboutcardimg" src="./one.jpg" />
                    <div className="row">
                        <div className="col-md-3">
                             <img className="aboutprofile" src="./two.jpeg" />
                        </div>
                        <div className="col-md-5">
                            <p className="name">Sarah Ngugen</p>
                            <p className="name">San Francisco</p>
                        </div>
                        <div className="col-md-4">
                            <p></p>
                            <p className="profilestar">⭐️ 5.0</p>
                        </div>   
                    </div>
                    <p className="aboutpara">
                        Media queries is a feature of CSS 3 allowing content rendering to adapt to different conditions such as screen resolution. It became a W3C recommended standard in June 2012, and is a cornerstone technology of responsive web design.
                    </p>
                </div>
            </div>   
        </div>
    </div>
    </>
   ) 
}
export default About;