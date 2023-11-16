import styles from './UserDetailsModal.module.css';

const UserDetailsModal = ({ user, onClose }) => {
  return (
    <div className={styles.userDetailsModal}>
      <div className={styles.modalContent}>
        <h2>User Details</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>ID: {user.id}</p>
        <p>Creation Date: {user.creationDate}</p>
        <button onClick={onClose}>Close</button>
        <button onClick={() => generateReport(user.id)}>Generate Report</button>
      </div>
    </div>
  );
};

const generateReport = (userId) => {
  // Dummy function to generate a report
  console.log(`Generating report for user ${userId}`);
};

export default UserDetailsModal;
