/** @format */

import Side from "./Side";
import { blogData } from "../blogData";

const Blog = () => {
  return (
    <div className="w-11/12 m-auto py-20 md:w-10/12">
      <h1 className="text-3xl mb-7">Blog</h1>
      <div className="flex flex-col md:flex-row gap-24">
        <div className="md:w-2/3 grid grid-cols-1 gap-20 md:grid-cols-2">
          {blogData.map((data) => (
            <div>
              <img src={data.image} alt="blog photo" />
              <p className="py-3">{data.date}</p>
              <h1 className="text-3xl text-orange-400 underline mb-10">
                {data.title}
              </h1>
              <p>{data.content}</p>
            </div>
          ))}
        </div>
        <Side />
      </div>
    </div>
  );
};

export default Blog;
