```javascript
{
  currentUser: {
    2: {
      id: 2,
      username: 'GirSaws',
      password_digest: 'l22kafklajsklajfjnkjnsjhaw',
      session_token: 'askjhajfbncbjkhefEBFKJB'
    }
  }

  forms; {
    createPost: {
      errors: []
    }
    signUp: {
      errors: []
    }
    logIn: {
      errors: []
    }
  }
  posts {
    1: {
      id: 1,
      title: 'Check out my applesauce',
      description: 'mmmmm AppleSaws is my favorite',
      points: '1',
      authorid: 'Gir'
      imageId: 1
    }
    2: {
      id: 2,
      title: 'Why does Zim hate me',
      description: 'Zim is always mad at me',
      points: '-5',
      authorid: 'Gir'
      imageId: 2
    }
  }
  images {
    1: {
      id: 1,
      postId: 1,
      imageUrl: 'www.imGir.com/zzSDknncs221',
      title: 'Check out my applesauce',
      description: 'mmm AppleSaws is my favorite'
    }
    3: {
      id: 3,
      postId: 1,
      imageUrl: 'www.imGir.com/zkjjkh2cs233',
      title: 'Doom Song',
      description: 'Doom-do-doom-doom'
    }
  }

  comments: {
    1: {
      id: 1,
      body: 'Its because you always mess up my plans',
      postId: 1
      parent: null,
      points: 3,
      commentorId: 3,
    }
    2: {
      id: 1,
      body: 'Friendly reminder not Im taking over the world tomorrow',
      parent: null,
      postId: 1,
      points: 6,
      commentorId: 3,
    }
  }

  votes: {
    1: {
      id: 1,
      voterId: 1,
      voteId: 1,
      voteType: 2,
    }
  }
}
