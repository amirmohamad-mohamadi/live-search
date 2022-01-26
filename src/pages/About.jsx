const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app To search GitHub profiles and see profile details. this
        project is part of the
        <a href="https://musing-ptolemy-bc6ce1.netlify.app/">
          react front to back
        </a>
        Udemy course by
        <strong>
          <a href="http://amir-store.herokuapp.com/">Amir MM</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-with">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Loyot By:
        <a
          className="text-white"
          href="https://musing-ptolemy-bc6ce1.netlify.app/"
        >
          Amirrrr MMMMM
        </a>
      </p>
    </div>
  );
};

export default About;
