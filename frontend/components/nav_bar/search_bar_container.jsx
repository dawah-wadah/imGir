import React from 'react';
import { connect } from 'react-redux';
import { displayDropdown } from '../../actions/dropdown_actions';
import { fetchSearch } from '../../actions/search_actions';
import SearchBarInput from './search_bar_input';
import { selectAllResults } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';



class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { search: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
   return e => {
     this.setState({['search']: e.currentTarget.value});
     this.props.fetchSearch(e.currentTarget.value);
   };
 }


  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.displayDropdown({searchBar: !this.props.visible});
  }


 componentWillReceiveProps(){
  this.setState({['search']: ''});
}


 componentDidUpdate(nextProps){
  if(this.state.search !== '') {
    if (this.props.history.location.pathname !== '/'){
      this.props.history.push('/');
    }
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
           {this.props.results.length ?
             <div> WE HAVE RESULTS</div>
             : <div className="search-bar search-bar-addition">SEARCH SYNTAX</div>
           }
         </div>
         : null }
     </div>

  );
  }
}

const mapStateToProps = (state, ownProps) => ({
  results: selectAllResults(state.search.search),
  visible: Boolean(state.dropdown.searchBar),
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearch: query => dispatch(fetchSearch(query)),
  displayDropdown: (obj) => dispatch(displayDropdown(obj))
});



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
