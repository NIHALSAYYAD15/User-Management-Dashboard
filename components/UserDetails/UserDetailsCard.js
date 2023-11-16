// components/UserDetails/UserDetailsCard.js
import React from 'react';
import styles from './UserDetailsTable.module.css';

const UserDetailsCard = ({ user, onClick }) => (
  <div className={styles.userCard} onClick={() => onClick(user)}>
    <p>{user.username}</p>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <p>{user.id}</p>
    <p>{user.creationDate}</p>
  </div>
);

export default UserDetailsCard;
