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
		this.state = {
			userId: this.props.match.params.id,
			headerType: 'Gallery Comments'
		};
		this.reload = this.reload.bind(this);
	}

	componentDidMount() {
		this.props.requestOneUser( this.state.userId );
		this.reload(this.props.location.pathname.split( '/' )[ 3 ]);
	}

	reload(options){
		switch ( options ) {
		case 'comments':
			this.props.requestUserComments( parseInt( this.state.userId ), 'Post' );
			this.setState({ headerType: "Gallery Comments"});
			break;
		case 'submitted':
			this.props.requestUserPosts( this.state.userId, 'submitted' );
			this.setState({ headerType: 'Submitted Images'});
			break;
		case 'favorites':
			this.props.requestUserPosts( this.state.userId, 'favorites' );
			this.setState({ headerType: "Gallery Favorites"});
		case 'replies':
			this.props.requestUserComments( parseInt( this.state.userId ), 'Comment' );
			this.setState({ headerType: 'Comment Replies'});
			break;
		default:
			this.props.requestUserComments( this.state.userId, 'Post' );
			this.setState({ headerType: "Gallery Comments"});
			break;

		}
	}

	componentWillReceiveProps( nextProps ) {

		if ( this.props.match.params.id !== nextProps.match.params.id ) {
			this.setState({
				userId: nextProps.match.params.id
			});
			this.reload(this.props.location.pathname.split( '/' )[ 3 ]);
		} else if ( this.props.location.pathname.split( '/' )[ 3 ] !== nextProps.location
			.pathname.split( '/' )[ 3 ] ) {
			this.reload(nextProps.location.pathname.split( '/' )[ 3 ]);

		}
	}


	render() {

		this.props.user ?  document.title = this.props.user.username : document.title = 'Zimgir';
		return (
			<div className='user-page'>
        <div className='user-comments'>
          <div className='panel-header-toolbox'>
            <div className='user-info left-side'>
              {this.state.headerType}
            </div>
            <div className='user-info right-side'>
              Options Stuff
            </div>
          </div>
          <div className='user-info display'>
						<Switch>
							<Route exact path='/users/:id/comments' component={() => <UserComments comments={this.props.comments}/>}/>
							<Route exact path='/users/:id' component={() => <UserComments comments={this.props.comments}/>}/>
							<Route exact path='/users/:id/replies' component={() => <UserComments comments={this.props.comments}/>}/>
							<Route exact path='/users/:id/submitted' component={() => <UserGallery posts={this.props.posts}/>}/>
							<Route exact path='/users/:id/favorites' component={() => <UserGallery posts={this.props.posts}/>}/>
						</Switch>
          </div>

        </div>
				<UserSideBar userId={this.state.userId} user={this.props.user} />

      </div>
		);
	}
}
export default User;
// {this.displayInfo()}
