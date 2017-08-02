import React from 'react';
import {
	connect
} from 'react-redux';
import {
	displayDropdown
} from '../../actions/dropdown_actions';
import {
	fetchSearch
} from '../../actions/search_actions';
import SearchBarInput from './search_bar_input';
import {
	selectAllResults
} from '../../reducers/selectors';
import {
	withRouter,
	Link
} from 'react-router-dom';



class SearchBar extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			search: ''
		};
		this.handleChange = this.handleChange.bind( this );
		this.handleClick = this.handleClick.bind( this );
    this.handleSearchClick = this.handleSearchClick.bind(this);
	}

	handleChange() {
		return e => {
			this.setState( {
				[ 'search' ]: e.currentTarget.value
			} );
			this.props.fetchSearch( e.currentTarget.value );
		};
	}


	handleClick( e ) {
		e.preventDefault();
		e.stopPropagation();
		this.props.displayDropdown( {
			searchBar: !this.props.visible
		} );
	}


	componentWillReceiveProps() {
		this.setState( {
			[ 'search' ]: ''
		} );
	}

  handleSearchClick(){
    this.props.displayDropdown( {
      searchBar: !this.props.visible
    } );

  }


	searchResults() {
		if ( this.props.results.length ) {
			return (
				<div className="search-bar search-bar-addition">
      {this.props.results.map((post) => {
      return (<Link to={`/posts/${post.id}`} key={post.id * 23} onClick={this.handleSearchClick}>
        <div className='search-item' >
          <div className='search-item-pic'>
            <img src={post.main_image}/>
          </div>
          <div className='search-item-info'>
            <p>{post.title}</p>
          </div>
        </div>
      </Link>)
    })}
		<div className='bottom-fade'></div>
  </div>
			)
		} else {
			return <div className="search-bar search-bar-addition">SEARCH SYNTAX: TITLE </div>
		}
	}


	render() {

		return (

			<div className="search-icon-container" >
         <img className="search-icon" id="search-icon" onClick={this.handleClick} src={window.images.search_icon}/>
       {this.props.visible ?
         <div id="search-icon-menu" className="hidden">
           <input className="search-bar"
             onChange = {this.handleChange('search')}
             placeholder = 'Start typing...'
             ></input>
           {this.searchResults()}
         </div>
         : null }
     </div>

		);
	}
}

const mapStateToProps = ( state, ownProps ) => ( {
	results: selectAllResults( state.search.results ),
	visible: Boolean( state.dropdown.searchBar ),
} );

const mapDispatchToProps = ( dispatch ) => ( {
	fetchSearch: query => dispatch( fetchSearch( query ) ),
	displayDropdown: ( obj ) => dispatch( displayDropdown( obj ) )
} );



export default withRouter( connect(
	mapStateToProps,
	mapDispatchToProps
)( SearchBar ) );
