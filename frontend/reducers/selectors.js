import values from 'lodash/values';

export const selectAllPosts = (posts) => (
  values(posts).sort((a, b) => (b.id - a.id))
);
// export const selectAllComments = (comments) => (
//   values(comments).sort((a,b) => (b.id - a.id))
// );
export const selectAllComments = ({ comment }, commentIds ) => {
  debugger
    if(Object.keys(comment.entities).length && commentIds) {
      return commentIds.map( id => comment.entities[id]);
    }
};

export const selectAllResults = (results) => (
  values(results)
);
