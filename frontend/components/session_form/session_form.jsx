import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Img from 'react-image';
import SocialButtons from './social_buttons';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			passwordVerify: ''
		};
		this.handleSubmit = this
			.handleSubmit
			.bind(this);
		this.logo = this
			.logo
			.bind(this);
		this.extraPassword = this
			.extraPassword
			.bind(this);
	}

	componentDidMount() {
    this.props.receiveCurrentUser(this.props.user);
  }

	componentWillReceiveProps(nextProps) {
		if (nextProps.loggedIn) {
			this
				.props
				.history
				.push('/');
		}
	}

	demoLogin(e) {
	this.setState({username: 'Wadah',password: 'password'});
	}

	update(field) {
		return e => this.setState({[field]: e.currentTarget.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		if (this.props.formType === 'signup') {
			if (this.state.password === this.state.passwordVerify) {
				this
					.props
					.processForm({user});
			} else {
				this
					.props
					.receiveErrors(['Passwords dont match']);
			}
		} else {
			this
				.props
				.processForm({user});
		}
	}

	clearErrors(){
		this.props.clearErrors();
	}

	demoButtons(userName){
		let user;

		if (userName === 'Yaakov') {
			this.setState({username: 'Yaakov',
				extraPassword: 'password',
				password: 'password'});
			user = {username: 'Yaakov',
				extraPassword: 'password',
				password: 'password'};
		} else {
			this.setState({username: 'MikeBoan',
				extraPassword: 'password',
				password: 'password'});
				user = {username: 'MikeBoan',
					extraPassword: 'password',
					password: 'password'};
		}
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === 'login') {
			return <Link to="/signup" onClick={this.props.clearErrors}>need an account?</Link>;
		} else {
			return <Link to="/login" onClick={this.props.clearErrors}>log in instead</Link>;
		}
	}

	extraPassword() {
		if (this.props.formType === 'signup') {
			return (
				<p>
					<input
						type="password"
						value={this.state.passwordVerify}
						onChange={this.update('passwordVerify')}
						className="br5 lightest-dark login-input"
						placeholder="Confirm Password"/>
				</p>
			);
		}
	}

	renderErrors() {
		return (
			<ul>
				{this
					.props
					.errors
					.map((error, i) => (
						<li key={`error-${i}`}>
							{error}
						</li>
					))}
			</ul>
		);
	}

	logo() {
		return (<Img
			src="https://vignette3.wikia.nocookie.net/zimwiki/images/d/d2/Gir_dogsuit.png/revision/latest?cb=20160731215834"/>);
	}

	render() {
		return (
			<section>
				<section className="signin-container">
					<div className='signin-logo'>
						<img src={window.images.logo}/>
					</div>
					<div className=" socialButtons core-dark core-shadow br5">
						<div className="social-wrap">
							<button className="loginBtn loginBtn--facebook" onClick = {() => this.demoButtons('Yaakov')}>
								 Login as Yaakov
							</button>
							<button className="loginBtn loginBtn--google" onClick = {() => this.demoButtons('MikeBoan')}>
								Login as Mike Boan
							</button>
						</div>
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
								<input
									type="text"
									value={this.state.username}
									onChange={this.update('username')}
									className="br5 lightest-dark login-input"
									placeholder='Username'/>
								<br/>
								<p>
									<input
										type="password"
										value={this.state.password}
										onChange={this.update('password')}
										className="br5 lightest-dark login-input"
										placeholder="Password"/> {this.extraPassword()}
								</p>
								<br/>
							</div>
							<div className='signin-button'>
								<input type="submit" value="Submit" className='submit-button right'/>
								<div className="right signin-register-link text-shadow">

						</div>
						{this.navLink()}
							</div>
						</form>
					</div>
				</section>
			</section>
		);
	}
}

export default withRouter(SessionForm);
