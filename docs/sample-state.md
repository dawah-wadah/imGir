```javascript
{
  currentUser: {
    2: {
      id: 1,
      username: 'GirSaws',
      password_digest: 'l22kafklajsklajfjnkjnsjhaw',
      session_token: 'askjhajfbncbjkhefEBFKJB'
    }
  }

  forms; {
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
  }

  comments: {
    1: {
      id: 1,
      body: 'Its because you always mess up my plans',
      parent: 1,
      points: 3,
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
