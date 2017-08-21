import React from 'react';
import {
	NavLink,
	Link, Switch, Route
} from 'react-router-dom';
import Moment from 'react-moment';
import UserSideBar from './user_side_bar';
import UserGallery from './user_gallery';
import UserComments from './user_comments';


class User extends React.Component {
	constructor( props ) {
		super( props );
		this.userId = this.props.match.params.id

		this.headerType = this.headerType.bind( this );
		this.displayInfo = this.displayInfo.bind( this );
	}

	headerType() {
		switch ( this.props.location.pathname.split( '/' )[ 3 ] ) {
		case 'comments':
			return "Gallery Comments";
		case 'submitted':
			return 'Submitted Images';
		case 'favorites':
			return "Gallery Favorites";
		case 'replies':
			return 'Comment Replies';
		default:
			return "Gallery Comments";
		}
	}

	componentDidMount() {
		this.props.requestOneUser( this.userId );
		switch ( this.props.location.pathname.split( '/' )[ 3 ] ) {
		case 'comments':
			this.props.requestUserComments( parseInt( this.userId ), 'Post' );
			break;
		case 'submitted':
			this.props.requestUserPosts( this.userId );
			break;
		case 'favorites':
			return "Gallery Favorites";
		case 'replies':
			this.props.requestUserComments( parseInt( this.userId ), 'Comment' );
			break;
		default:
			this.props.requestUserComments( this.userId, 'Post' );
			break;

		}
	}

	componentWillReceiveProps( nextProps ) {
		if ( this.props.match.params.id !== nextProps.match.params.id ) {
			this.props.requestOneUser( nextProps.match.params.id );
		} else if ( this.props.location.pathname.split( '/' )[ 3 ] !== nextProps.location
			.pathname.split( '/' )[ 3 ] ) {
			switch ( nextProps.location.pathname.split( '/' )[ 3 ] ) {
			case 'comments':
				this.props.requestUserComments( parseInt( this.userId ), 'Post' );
				break;
			case 'submitted':
				this.props.requestUserPosts( this.userId );
				break;
			case 'favorites':
				return "Gallery Favorites";
			case 'replies':
				this.props.requestUserComments( parseInt( this.userId ), 'Comment' );
				break;
			default:
				this.props.requestUserComments( this.userId );
				break;
			}

		}
	}

	displayInfo() {
		let param;
		let post_id;
		switch ( this.props.location.pathname.split( '/' )[ 3 ] ) {
		case 'comments': case 'replies':
			param = 'comments'
			break;
		case 'submitted': case 'favorites':
			param = 'posts'
			break;
		default:
			param = 'comments'
			break;

		}


		if ( this.props[ param ] ) {
			return this.props[ param ].map( ( el ) => {
				let post_id = param === 'comments' ? el.post_id :
					el.id
				return (
					<Link to={`/posts/${post_id}`}>
					  <div className='user-info-item'>
					    <div className='user-info-item-pic'>
					      <img src={el.main_image}/>
					    </div>
							<div className='user-info-item-info'>
									<div className="user">
											<div className="comment-username">{el.user_name}</div>
											<div className="comment-username spacer">{el.points} pts</div>
											<div className='time-since-posted spacer'>
												<Moment fromNow>
													{el.time_since}
												</Moment>
											</div>
										</div>
										<p>{el.body}</p>
							</div>
					  </div>
					</Link>
				);
			} );
		} else {
			return <p>Nothing to Show</p>;
		}

	}

	render() {

		this.props.user ?  document.title = this.props.user.username : document.title = 'Zimgir';
		return (
			<div className='user-page'>
        <div className='user-comments'>
          <div className='panel-header-toolbox'>
            <div className='user-info left-side'>
              {this.headerType()}
            </div>
            <div className='user-info right-side'>
              Options Stuff
            </div>
          </div>
          <div className='user-info display'>
						<Switch>
							<Route exact path='/users/:id/comments' component={() => <UserComments props={this.props.comments}/>}/>
							<Route exact path='/users/:id/replies' component={() => <UserComments props={this.props.comments}/>}/>
							<Route exact path='/users/:id/submitted' component={() => <UserGallery posts={this.props.posts}/>}/>
						</Switch>
          </div>

        </div>
				<UserSideBar userId={this.userId} user={this.props.user} />

      </div>
		);
	}
}
export default User;
// {this.displayInfo()}
