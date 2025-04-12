import './Question.css'
function Question(){
 return(
    <>
    <div className="container questioncont">
        <div className="row">
                <h3 className="center">Do You Have Any Questions?</h3>
                <h3 className="center">Get Help From Us</h3>
                <p className="center">✅ Chat live with our support team      ✅ Browser our FAQ</p>
                <div className="center">
                    <input className="questioninput" placeholder="✉️ Enter your email address..." />
                    <button className="signup">Submit</button>
                </div>
        </div>
    </div>
    </>
 )
}

export default Question;