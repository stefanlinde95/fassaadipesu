import * as React from "react"
import kiire from "../images/kiire.svg"
import garantii from "../images/garantii.svg"
import eluiga from "../images/eluiga.svg"

const About = () => (
  <section id="about" className="pt-5 pb-3">
    <div className="container my-5">
      <div className="row about-us-row">
        <div className="col-md-8 col-sm-12">
          <h2 className="my-5">Fassaadipuhastus Eestis</h2>
          <p className="mt-4">
            Fassaadipesu.eu on fassaadipuhastusega tegelev Eesti ettevõte.
            Teostame puhastustöid kliendile sobival ajal, kiiresti ning andes
            töödele ka garantii.
          </p>
          <p className="mt-4">
            Maja fassaadi puhastamine nõuab tihti asjakohast tehnikat ning
            kogenud meeskonda, sest oskusteta puhastamine ei tee fassaadi
            puhtaks ning võib selle sootuks ära rikkuda. Suudame pakkuda maja
            puhastusteenust, mis on efektiivsed, läbimõeldud ja
            kliendisõbralikud.
          </p>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-4 col-md-12 col-sm-12 text-center px-5">
          <img src={kiire} alt="kiire fassaadipesu" width={150} />
          <h3>Töö kiire ja kvaliteetne</h3>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 text-center px-5">
          <img src={eluiga} alt="maja eluiga" width={150} />
          <h3>
            Maja eluiga <br />
            pikeneb
          </h3>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 text-center px-5">
          <img src={garantii} alt="garantii" width={150} />
          <h3>Garantii tehtud töödele</h3>
        </div>
      </div>
    </div>
  </section>
)

export default About
