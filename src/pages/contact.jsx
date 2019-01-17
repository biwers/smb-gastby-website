import React, { PureComponent } from 'react'
import ServiceLayout from '../components/servicLayout'
import Helmet from 'react-helmet'
import Button from '../components/common/button'
import Loader from '../components/common/loader'

export default class ConstructionPage extends PureComponent {
  constructor() {
    super()
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkInputs = this.checkInputs.bind(this)
    this.state = {
      loading: false,
      hasSuccess: false,
      hasError: false,
      name: '',
      company: '',
      email: '',
      subject: '',
      message: '',
      errors: {
        email: false,
        name: false,
        subject: false,
        message: false,
      },
    }
  }
  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  async handleSubmit(e) {
    e.preventDefault()

    const hasErrors = this.checkInputs(),
      errors = { ...this.state.errors }
    for (let error in errors) {
      if (!(error in hasErrors)) {
        errors[error] = false
      }
    }
    if (hasErrors.length <= 0) {
      const data = {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
        company: this.state.company,
      }
      var formBody = []
      for (var property in data) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(data[property])
        formBody.push(encodedKey + '=' + encodedValue)
      }
      formBody = formBody.join('&')

      this.setState(
        {
          errors,
          loading: true,
        },
        async () => {
          let ps = await fetch('/mail.php', {
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formBody,
          })
          let resp = await ps.json()
          if (resp == 'success') {
            this.setState(
              {
                loading: false,
                hasSuccess: true,
                hasError: false,
                email: '',
                name: '',
                message: '',
                company: '',
                subject: '',
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    hasSuccess: false,
                  })
                }, 5000)
              }
            )
          } else {
            this.setState(
              {
                loading: false,
                hasSuccess: false,
                hasError: true,
              },
              () => {
                this.err.focus()
              }
            )
          }
        }
      )
    } else {
      hasErrors.forEach(error => {
        errors[error] = true
      })
      this.setState({
        errors,
      })
    }
  }
  checkInputs() {
    const { subject, email, name, message } = this.state,
      hasError = []
    const errors = {
      name: name.length > 0,
      subject: subject.length > 0,
      message: message.length > 50,
      email: email.length > 0 && /(.+)@(.+){2,}\.(.+){2,}/.test(email),
    }
    for (let error in errors) {
      if (!errors[error]) hasError.push(error)
    }
    return hasError
  }
  async componentDidMount() {}
  render() {
    const {
      name,
      company,
      email,
      subject,
      message,
      loading,
      errors,
      hasSuccess,
      hasError,
    } = this.state

    return (
      <React.Fragment>
        <ServiceLayout title="Contact Us" isNotService hideContactBtn>
          <Helmet
            style={[
              {
                cssText: `
            .contact-form {
              width: 100%;
            }
            .form-group {
              margin-bottom: 1.5rem;
            }
            .form-input-label {
              margin-bottom: 8px;
              display: inline-block;
              font-weight: 700
            }
            .form-control {
              display: block;
              width: 100%;
              padding: .5rem 1rem;
              border: 1px solid #ccc;
              border-radius: 4px;
              outline: none;
              box-shadow: inset 0 0 5px rgba(0,0,0,0.1)
            }
            .form-control:focus, .form-control:focus-within {
              box-shadow: 0 0 0 3px rgba(15, 112, 148, 0.3)
              
            }
            .form-control::-webkit-input-placeholder {
              color: #777;
              font-size: .8rem;
            }
            .success-sent-msg {
              border: 1px dotted green;
              background: #2ecc71;
            }
            .error-sent-msg, .success-sent-msg{
              padding: 1rem;
              font-size: 1.5rem;
              font-weight: 700;
              color: #121212;
             }
            .error-sent-msg {
              border: 1px dotted red;
              background: #e74c3c;

            }
            .error-message {
              display: 'block';
              color: red;
              font-size: .8rem;
            }
            
            
            .address-col, .form-col {
              padding: 1rem 0rem;
            }
            @media screen and (min-width: 769px) {
              .address-col, .form-col {
                padding: 1rem 3rem;
              }
              .contact-page {
                margin: -1rem -2rem;
              }
              .address-col, .form-col {
                float: left;
              }
              .address-col {
                width: 35%
              }
              .form-col {
                width: 65%
              }
            }
        `,
              },
            ]}
          />
          {loading && <Loader />}
          {!loading && (
            <div className="contact-page">
              {hasSuccess && (
                <div className="success-sent-msg">
                  <p>Your message was sent successfully!</p>
                </div>
              )}
              {hasError && (
                <div
                  className="error-sent-msg"
                  tabIndex="-1"
                  ref={err => (this.err = err)}
                >
                  <p>An Error occured, Please try again.</p>
                </div>
              )}
              <div className="form-col">
                <form className="contact-form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-input-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your name (REQUIRED)"
                      value={name}
                      onChange={this.handleInput}
                      className="form-control"
                    />
                    {errors.name && (
                      <span className="error-message">Name is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="company" className="form-input-label">
                      Company Name:
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company name"
                      value={company}
                      onChange={this.handleInput}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-input-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email (REQUIRED)"
                      value={email}
                      onChange={this.handleInput}
                      className="form-control"
                    />
                    {errors.email && (
                      <span className="error-message">
                        Please use a valid email address
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-input-label">
                      Subject:
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject (REQUIRED)"
                      value={subject}
                      onChange={this.handleInput}
                      className="form-control"
                    />
                    {errors.subject && (
                      <span className="error-message">
                        Please provide a subject
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-input-label">
                      Message:
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Message (REQUIRED)"
                      onChange={this.handleInput}
                      className="form-control"
                      rows="8"
                      defaultValue={message}
                    />
                    <span style={{ fontSize: '.8rem', color: '#999' }}>
                      At least 50 characters
                    </span>
                    {errors.message && (
                      <span className="error-message">
                        Please write at least 50 characters or more
                      </span>
                    )}
                  </div>
                  <Button type="submit" title="Send" />
                </form>
              </div>

              <div className="address-col">
                <h4>Address</h4>
                <address>
                  Dohuk (Registered Office) SMB Group Building <br />
                  Erbil Office Villa 237 English Village, Erbil.
                  <br />
                  <br />
                  <p>
                    Contact: <br />
                    +964 –750 330 4338 (KU, ENG,TUR)
                    <br />
                    +964 - 751 410 4314 (ENG)
                    <br />
                    +964 - 750 450 5555 (ENG,ARA)
                    <br />
                    <br />
                    Email: info@smbgroup-iq.com <br />
                  </p>
                </address>
                <div
                  style={{
                    position: 'relative',
                    height: 0,
                    paddingBottom: '56.25%',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1609.9406929581253!2d43.969388375235006!3d36.19376645122574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDExJzM3LjYiTiA0M8KwNTgnMTIuNSJF!5e0!3m2!1sen!2siq!4v1539163911834"
                    width="300"
                    height="200"
                    frameBorder="0"
                    title="Smb location on google map"
                    style={{
                      border: 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </ServiceLayout>
      </React.Fragment>
    )
  }
}
