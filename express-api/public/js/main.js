const output = document.querySelector("#posts");
const button = document.querySelector("#get-posts-btn");

//event 
button.addEventListener('click',showPosts);

//get the data from the api , try catch error 
async function showPosts() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error("Failed to get posts");
    }
    //creta a new element
    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log('Error fetching posts',error);
  }
}

