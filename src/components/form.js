import React from "react"
import { useForm, ValidationError } from "@formspree/react"
function Form() {
  const [state, handleSubmit] = useForm("mbjwdbeq")
  if (state.succeeded) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-5">
            <p className="success">Täname, päring on saadetud!</p>
          </div>
          <div className="col-sm-12 col-md-6 my-5 ps-5">
            <div>
              <h3>E-mail</h3>
              <p>info@fassaadipesu.eu</p>
            </div>
            <div>
              <h3>Tel.</h3>
              <p>(+372) 5663 4115</p>
            </div>
            <div>
              <h3>Fassaadipesu</h3>
              <p>Reg. nr: (täiendamisel)</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <form id="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nimi</label>
              <input
                id="name"
                type="name"
                name="name"
                className="form-control"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              Tel.
              <input
                id="phone"
                type="phone"
                name="phone"
                className="form-control"
              />
              <ValidationError
                prefix="phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              Kirja sisu
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-control"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-primary mt-4"
            >
              Saada
            </button>
          </form>
        </div>
        <div className="col-sm-12 col-md-6 my-5 ps-5">
          <div>
            <h3>E-mail</h3>
            <p>info@fassaadipesu.eu</p>
          </div>
          <div>
            <h3>Tel.</h3>
            <p>(+372) 5663 4115</p>
          </div>
          <div>
            <h3>Fassaadipesu</h3>
            <p>Reg. nr: (täiendamisel)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form
