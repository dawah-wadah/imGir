import React from 'react';
import { GridTile } from 'material-ui/GridList';
import { Link, Route } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const style = {
  cell: {
    borderRadius: 10,
    height: 'auto',
    width: '100%'
  },
  gridList: {
    width: '90%',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
};

const PostDetail = ({post}) => (
  <div className='post-info'>
    <div className='post-info-border'>
      <div className='post-info-filler'></div>
      <div className='post-info-container'>
        <div className='post-info-votes'>
          <p>Like/Dislike</p>
          <p>Vote Diff</p>
        </div>
        <div className='post-info-details'>
          <p>{post.title}</p>
          <p>{post.author_name}</p>
        </div>
        <div className='post-info-tags'>
          <p>Tags</p>
          <p>Views Count</p>
        </div>
      </div>
    </div>
  </div>
);


class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visibleDetails: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({visibleDetails: true});
  }

  mouseLeave(){
    this.setState({visibleDetails: false});
  }


  render() {
    return (

  <div className='post-index-item' onMouseLeave={() => this.mouseLeave()}>
    <GridTile
      style={style.cell}
      className='grid-tile-object'
      onMouseEnter={()=> this.mouseEnter()}
      >

      <Link to={`posts/${this.props.post.id}`}>
        <img src={this.props.post.image_url}/>
      </Link>
    </GridTile>
    { this.state.visibleDetails ? <PostDetail post={ this.props.post }
     /> : null}
  </div>
);}
}


export default PostIndexItem;
