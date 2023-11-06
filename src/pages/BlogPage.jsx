/** @format */

import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

const BlogPage = () => {
  return (
    <div className="dark:bg-black">
      <Header />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
