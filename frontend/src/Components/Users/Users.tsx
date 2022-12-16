import React, { useEffect, useState } from "react";
import "./module.css";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS, GET_ONE_USER } from "../../graphql/query/users";
import { CREATE_USER } from "../../graphql/mutation/users";

const Users = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
 
  return <div>
   
  </div>;
};

export default Users;
