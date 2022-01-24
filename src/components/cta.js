import * as React from "react"

import clean from "../images/clean.svg"

const Cta = () => (
  <section id="cta" className="mb-5">
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-sm-12 col-lg-7">
          <h2>Soovid ka oma fassadi puhtaks saada?</h2>
          <p>Siis küsi meie käest julgelt hinnapakkumist!</p>
          <button className="btn btn-info">
            <a href="#form">Küsi hinnapakkumist</a>
          </button>
        </div>
        <div className="col-5 d-flex cta-btn-wrapper">
          <img src={clean} alt="majapuhastus" width={150} />
        </div>
      </div>
    </div>
  </section>
)

export default Cta
