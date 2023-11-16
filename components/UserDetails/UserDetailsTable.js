import { useState } from 'react';
import styles from './UserDetailsTable.module.css';
import UserDetailsModal from './UserDetailsModal';

const UserDetailsTable = ({ userData }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className={styles.userDetailsTable}>
      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        {/* Table rows */}
        <tbody>
          {userData.map((user) => (
            <tr key={user.id} onClick={() => handleUserClick(user)}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.id}</td>
              <td>{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal for displaying user details */}
      {selectedUser && <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
};

export default UserDetailsTable;
