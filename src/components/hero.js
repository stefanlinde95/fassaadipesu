import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => (
  <section id="hero">
    <div className="container-fluid">
      <div className="row bg-overlay">
        <div className="col-md-6 col-sm-12">
          <a href="/rennipesu" className="hero-text">
            <StaticImage
              className="ratio ratio-1x1 bg-overlay"
              src="../images/rennipesu.jpg"
              alt="rennipesu"
              height={500}
              quality={100}
            />
            <p>
              <span>Rennide puhastus</span>
            </p>
          </a>
        </div>
        <div className="col-md-6 col-sm-12">
          <a href="/fassaadipesu" className="hero-text">
            <StaticImage
              className="ratio ratio-1x1 bg-overlay"
              src="../images/fassaadipesu.jpg"
              alt="fassaadipesu"
              height={500}
              quality={100}
            />
            <p>
              <span>Fassaadipesu</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
