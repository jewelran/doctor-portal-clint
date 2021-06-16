import React from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';
import ellipse from "../../../images/ellipse.png";
import ellipse1 from "../../../images/Ellipse1.png";
import ellipse2 from "../../../images/Ellipse2.png";
const Blog = () => {
    const blogs = [
        {
            name:"Dr. Caudi",
            date:"23 april 2019",
            title:"2 time of brush in a day con keep you healthy",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum accusamus totam quae. Dolorem, eius tempore.",
            images: ellipse
        },
        {
            name:"Dr. John Mitchel",
            date:"23 april 2019",
            title:"The tooth cancer is taking a challenge",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum accusamus totam quae. Dolorem, eius tempore.",
            images: ellipse1

        },
        {
            name:"Dr. smith",
            date:"23 april 2019",
            title:"2 time of brush in a day con keep you healthy",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum accusamus totam quae. Dolorem, eius tempore.",
            images: ellipse2

        }
    ]
    return (
        <section className='pt-5'>
            <div className="">
            <h5 style ={{color:"#8DD9D9"}}>OUR BLOG</h5>
            <h1>From Our Blog News</h1>
            </div>
            <div className=" d-flex justify-content-center">
                    {
                        blogs.map(blog => <BlogDetails blog = {blog}></BlogDetails>)
                    }
            </div>
        
        </section>
    );
};

export default Blog;