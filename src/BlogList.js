const BlogList = (props) => {
    const blogs = props.blogs;
    console.log(props,blogs);
    return ( 
        <div className="blog-list">
            {blogs.map((blog)=> (
            <div className="blog-preview" key={blog.id}>
              <h1>{ blog.title}</h1>
              <h2>{blog.body}</h2>
              <p>*Created by {blog.author} , E-Learning Technician</p>
            </div>
          ))}

        </div>
     );
}
 
export default BlogList;