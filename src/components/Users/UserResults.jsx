import { useEffect, useContext } from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/Github/GithubContext";

const UserResults = () => {
  const { isLoading, users, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((item) => {
          return <UserItem key={item.id} user={item} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
