import './About.css'
function About(){
    const aboutrecords=[
        {"id":1,"content":" Media queries is a feature of CSS 3 allowing content rendering to adapt to different conditions such as screen resolution. It became a W3C recommended standard in June 2012, and is a cornerstone technology of responsive web design",
            "image1":"one.jpg","image2":"two.jpg","title1":"Sarah Ngugen",
            "title2":"San Francisco","star":"⭐️ 5.0"
        },
        {"id":1,"content":" Media queries is a feature of CSS 3 allowing content rendering to adapt to different conditions such as screen resolution. It became a W3C recommended standard in June 2012, and is a cornerstone technology of responsive web design",
            "image1":"one.jpg","image2":"two.jpg","title1":"Sarah Ngugen",
            "title2":"San Francisco","star":"⭐️ 5.0"
        },
        {"id":1,"content":" Media queries is a feature of CSS 3 allowing content rendering to adapt to different conditions such as screen resolution. It became a W3C recommended standard in June 2012, and is a cornerstone technology of responsive web design",
            "image1":"one.jpg","image2":"two.jpg","title1":"Sarah Ngugen",
            "title2":"San Francisco","star":"⭐️ 5.0"
        }
    ]
   return (
    <>
    <div className="container mt-5 about">
        <div className="row">
            <h3 className="center">What People Say</h3>
            <h3 className="center">About Dwello</h3>
            {aboutrecords.map((record)=>{
                 return(
                   <div className="col-md-4">
                <div className="aboutcard">
                    <img className="aboutcardimg" src={record.image1} />
                    <div className="row">
                        <div className="col-md-3">
                             <img className="aboutprofile" 
                             src={`./${record.image1}`} />
                        </div>
                        <div className="col-md-5">
                            <span>{record.title1}</span><br />
                            <span>{record.title2}</span>
                        </div>
                        <div className="col-md-4">
                            <p className="profilestar">{record.star}</p>
                        </div>   
                    </div>
                    <p className="aboutpara">
                       {record.content}
                    </p>
                </div>
            </div>  
                )
             })} 
            <div className="center arrows">
                <span>
                    <button>＜</button>
                    <button>＞</button>
                </span> 
            </div>
        </div>
    </div>
    </>
   ) 
}
export default About;