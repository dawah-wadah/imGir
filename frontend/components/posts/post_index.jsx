import React from 'react';
import PostIndexItem from './post_index_item';
import { GridList } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '99%',
    height: '90vh',
    overflowY: 'hidden',
    overflowX: 'hidden',
  },
};

class PostIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPosts();
  }

  render(){
    const allPosts = this.props.posts.map((post) => (
      <PostIndexItem post={post} key={post.id}/>
    ));
    return(
      <div className='post-index-container'>
        <GridList
          cellHeight={255}
           style={styles.gridList}
           cols={5}
           >
        {allPosts}
      </GridList>
      </div>
    );
  }
}

export default PostIndex;
