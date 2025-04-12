import './Choose.css';
function Choose(){
    const chooserecord=[
        {"id":1,"title":"Expert Guidance","icon":" 📍 ",
            "content":" Benefit from our team's seasoned expertise for a smooth buying experience"
        },
        {"id":1,"title":"Expert Guidance","icon":" 📍 ",
            "content":" Benefit from our team's seasoned expertise for a smooth buying experience"
        },
        {"id":1,"title":"Expert Guidance","icon":" 📍 ",
            "content":" Benefit from our team's seasoned expertise for a smooth buying experience"
        },
        {"id":1,"title":"Expert Guidance","icon":" 📍 ",
            "content":" Benefit from our team's seasoned expertise for a smooth buying experience"
        }
    ]
    return(
        <>
          <div className="container mt-5">
              <div className="row">
                <h3 className="center">Why Choose Us</h3>
                <br />
                <p className="center">Elevating Your Home Buying with Experience, Intergrity,</p>
                <p className="center">and Unmatched Personalized Service</p>
               {chooserecord.map((record)=>{
                return(
                    <div className="col-md-2 choosecard">
                        <p><icon>{record.icon}</icon></p>
                        <h5>{record.title}</h5>
                        <p>{record.content}</p>
                    </div>
                )
               })}
              </div>
          </div>
        </>
    )
}

export default Choose;