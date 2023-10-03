import { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const users = useSelector(state => state.user)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h2>List of Users</h2>
      {users.isLoading  && <div>Loading...</div>}
      {!users.isLoading && users.error ? <div>Error: {users.error}</div> : null}
      {!users.isLoading && users.users.length ? (
        <ul>
          {
            users.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))
          }
        </ul>
      ) : null}
    </div>
  );
}

// export default UserView;
