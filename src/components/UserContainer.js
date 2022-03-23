import React from "react";
import { useEffect } from "react";
import { fetchUsers } from "../redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <p key={user.id}>
              <span>{user.id}</span>
              {user.name}
            </p>
          ))}
      </div>
    </div>
  );
};
