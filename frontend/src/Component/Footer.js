import React from 'react';
import './Footer.css';
// import records from './records.json';

function Footer() {
  const records=[
    {"id":1,"title":"About","content":"Our Story","faq":"Careers","center":"Our Team","our":"Resources"},
    {"id":2,"title":"Support","content":"FAQ","faq":"Contact Us","center":"Help Center","our":"Terms of Service"},
    {"id":3,"title":"Find Us","content":"FAQ","faq":"Locations","center":"Newsletter"},
    {"id":4,"title":"Our Social","content":"📲 Instagram","faq":"🍃 Facebook","center":"Ⓧ Twitter"}
]
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          <h4><b>Dwello</b></h4>
          <p>Bringing you closer to your gream home, one click at a time.</p>
          </div>
          {records.map((record)=>{
            return(<>
             <div className="col-md-2" key={record.id}>
            <h5>{record.title}</h5>
            <p>{record.content}</p>
            <p>{record.faq}</p>
            <p>{record.center}</p>
            <p>{record.our}</p>
          </div>
          </>)
             })}
        </div>
      </div>
    </>
  );
}

export default Footer;