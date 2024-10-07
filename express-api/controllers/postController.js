//   dummy data
let posts = [
  { id: 1, title: "post one " },
  { id: 2, title: "post two" },
  { id: 3, title: "post three " },
  { id: 4, title: "post four " },
];

//@desc all posts
//@route  GET/POSTS

export const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);

  //error
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};
//@desc single  posts
//@route  GET/POST
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id); //parse the id from string to integer
  //   res.json(posts.filter((post) =>   post.id === id)); //filter the posts by id
  const post = posts.find((post) => post.id === id); //finding post

  //create error
  //   if (!post) {
  //     res.status(400).json({ msg: `the post  with id of ${id} was not found` });
  //   } else {
  //     res.status(200).json(post);
  //   }

  // if (!post) {
  //   return res.status(404).json({ msg: `the post with id ${id} was not found` });
  // }

  if (!post) {
    const error = new Error(`the post with id ${id} was not found`);
    error.status = 404; // page not found error
    return next(error);
  }

  res.status(200).json(post);
};

//@desc create post
//@route  POST/post

export const createPost = (req, res, next) => {
  //console.log(req.body);
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  //error
  if (!newPost.title) {
    //return res.status(400).json({msg:'please enter the title'});
    const error = new Error(`please enter the title `);
    error.status = 400; //client error
    return next(error);
  }
  posts.push(newPost);
  res.status(201).json(posts);
};

//@desc  PUT POST
//@route  PUT/POST

export const putPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  //error
  if (!post) {
    const error = new Error(`the post with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(posts);
};

//@desc delete POST
//@route DELETE/POST

export const deletePost = (req,res,next)=>{
    const id  = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id );
  
    //error 
    if(!post){
      const  error = new Error(`the post with id ${id} was not found`);
      error.status = 404;
      return next(error);
    }
    posts = posts.filter((post)=>post.id !== id );
  
    res.status(200).json(posts);
  }
