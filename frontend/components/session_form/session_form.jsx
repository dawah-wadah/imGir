import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Img from 'react-image';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logo = this.logo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">need an account?</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  logo() {
    return(
      <Img src="https://vignette3.wikia.nocookie.net/zimwiki/images/d/d2/Gir_dogsuit.png/revision/latest?cb=20160731215834"/>
    );
  }
  // render() {
  //   return (
  //     <section className="signin-container">
  //     Welcome to invaderGir!
  //       <div className="signin-box">
          // <form onSubmit={this.handleSubmit} className="login-form-box">
          //   <br/>
          //   Please {this.props.formType} or {this.navLink()}
          //   {this.renderErrors()}
          //   <div className="login-form">
          //     <br/>
          //     <label>Username:
          //       <input type="text"
          //         value={this.state.username}
          //         onChange={this.update('username')}
          //         className="login-input"
          //       />
          //     </label>
          //     <br/>
          //     <label>Password:
          //       <input type="password"
          //         value={this.state.password}
          //         onChange={this.update('password')}
          //         className="login-input"
          //       />
          //     </label>
          //     <br/>
          //     <input type="submit" value="Submit" />
          //   </div>
          // </form>
  //       </div>
  //     </section>
  //   );
  // }

  // {this.logo()}
  render(){
    return(
      <section className="signin-container">
        <div className='signin-logo'>
        </div>
        <div className="signin-box">
        <form onSubmit={this.handleSubmit} className="signin-form">
          <br/>
          <span className="fade-break"></span>
          <p className="formtype-text text-center inline">{this.props.formType}</p>
          <span className="fade-break fade-break-flip"></span>
          {this.renderErrors()}
          <div className="signin-imGir core-dark core-shadow br5">
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="br5 lightest-dark login-input"
                placeholder='Username'
              />
            <br/>
            <p>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="br5 lightest-dark login-input"
                placeholder="Password"
              />
            </p>
            <br/>
          </div>
          <div className='signin-button'>
            <input type="submit" value="Submit" className='submit-button right' />
            <div className="right signin-register-link text-shadow"> {this.navLink()} </div>
          </div>
        </form>
        </div>
      </section>
    );
  }
}

export default withRouter(SessionForm);