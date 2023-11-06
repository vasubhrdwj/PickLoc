/** @format */

import Side from './Side';

const About = () => {
  return (
    <div className="w-11/12 m-auto py-20 md:w-10/12">
      <div className="flex flex-col md:flex-row md:gap-24 items-baseline">
        <div className="md:w-2/3 pb-10">
          <h1 className="text-3xl mb-7">About</h1>
          <p>
            This is an example of a page. Unlike posts, which are displayed on
            your blog’s front page in the order they’re published, pages are
            better suited for more timeless content that you want to be easily
            accessible, like your About or Contact information. Click the Edit
            link to make changes to this page or add another page.
          </p>
        </div>
        <Side />
      </div>
    </div>
  );
};

export default About;
