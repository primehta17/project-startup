import React from 'react';
import './Footer.css';
 import records from './records.json';

function Footer() {
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