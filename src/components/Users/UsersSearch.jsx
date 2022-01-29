import { useState, useContext } from "react";

import GithubContext from "../../context/Github/GithubContext";

const UsersSearch = () => {
  const [text, setText] = useState("");

  const { users } = useContext(GithubContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text === "") {
      alert("لطفا چیزی وارد کنید ");
    } else {
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                value={text}
                placeholder="search"
                onChange={handleChange}
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
};

export default UsersSearch;
