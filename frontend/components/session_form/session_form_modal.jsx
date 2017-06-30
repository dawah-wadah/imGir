import React from 'react';
import { Link } from 'react-router-dom';

class SessionFormModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			passwordVerify: ''
		};
		this.update = this
			.update
			.bind(this);
		this.handleSubmit = this
			.handleSubmit
			.bind(this);
		this.navLink = this
			.navLink
			.bind(this);
		this.renderErrors = this
			.renderErrors
			.bind(this);
	}

	update(field) {
		return e => this.setState({[field]: e.currentTarget.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;

		this
			.props
			.login({user}).then(() => this.props.clearModals(), (err) => receiveErrors(err));

	}

	navLink() {
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

	render() {

		return (
			<section onClick={(e)=> e.stopPropagation()}>
				<section className="signin-container">
					<div className='signin-logo'>
						<img src={window.images.logo2}/>
					</div>
					<div className="signin-box">
						<form onSubmit={this.handleSubmit} className="signin-form">
							<br/>
							<span className="fade-break"></span>
							<p className="formtype-text text-center">Sign In Please</p>
							<span className="fade-break fade-break-flip right"></span>
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
										placeholder="Password"/>
								</p>
								<br/>
							</div>
							<div className='signin-button'>
								<input type="submit" value="Submit" className='submit-button right'/>
								<div className="right signin-register-link text-shadow">
								<Link to="/signup" onClick={() => this.props.clearModals()}>need an account?</Link>;

								</div>
							</div>
						</form>
					</div>
				</section>
			</section>
		);
	}
}

import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { login, receiveErrors } from '../../actions/session_actions';
import { clearModals } from '../../actions/modal_actions';

const mapStateToProps = ({ session }) => {
  return {
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
		clearModals: () => dispatch(clearModals()),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    login: user => dispatch(login(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionFormModal));
