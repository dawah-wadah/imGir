const imgur = require("./imgur.json");
const fetch = require("node-fetch");
const fs = require("fs");

let info = [];

imgur.data.forEach(post => {
  let foo = {};
  foo.title = post.title;
  foo.id = post.id;
  if (post.description) {
    foo.description = post.description;
  }

  foo.images = [];

  if (post.is_album) {
    post.images.forEach(image => {
      foo.images.push(image.link);
      if (image.description) {
        post.description = image.description;
      }
    });
  } else {
    foo.images.push(post.link);
  }
  info.push(foo);
});

extractComment = comment => {
  let foo = {};
  foo.comment = comment.comment;
  if (comment.children.length) {
    foo.children = comment.children.map(el => extractComment(el));
  }
  return foo;
};

const headers = {
  Authorization: "Client-ID e1fc1d9931bccbe"
};

let crap = {};

let shite = info.map(post => {
  let comments = [];

  return new Promise((resolve, reject) => {
    fetch(`https://api.imgur.com/3/gallery/${post.id}/comments/`, {
      headers
    })
      .then(results => results.json())
      .then(({ data }) => {
        comments = data.map(comment => extractComment(comment));
      })
      .then(() => {
        post.comments = comments;
        resolve(post);
      })
      .catch(err => {
        console.log(err.message);
        reject(post);
      });
  });
});

Promise.all(shite).then(res => {
  fs.writeFile("message.json", JSON.stringify(res), err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});

// console.log(info);
