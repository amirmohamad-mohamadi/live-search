import { useEffect, useState } from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setIsLoading(false);
  };

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
