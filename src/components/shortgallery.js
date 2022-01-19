import { Link } from "gatsby"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

const Shortgallery = () => (
  <section id="short-gallery">
    <div className="container my-5 text-center">
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="row">
            <h2 className="pb-5">Tehtud tööd</h2>
            <div className="col-3">
              <StaticImage
                className="ratio ratio-1x1"
                src="../images/1.jpg"
                alt="fassaadipesu portfolio"
              />
            </div>
            <div className="col-3">
              <StaticImage
                className="ratio ratio-1x1"
                src="../images/2.jpg"
                alt="fassaadipesu portfolio"
              />
            </div>
            <div className="col-3">
              <StaticImage
                className="ratio ratio-1x1"
                src="../images/3.jpg"
                alt="fassaadipesu portfolio"
              />
            </div>
            <div className="col-3">
              <StaticImage
                className="ratio ratio-1x1"
                src="../images/4.jpg"
                alt="fassaadipesu portfolio"
              />
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
      <button className="btn btn-primary my-5">
        <Link to="/">Vaata teisi töid</Link>
      </button>
    </div>
  </section>
)

export default Shortgallery
