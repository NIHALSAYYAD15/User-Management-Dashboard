import { useState } from 'react';
import UserDetailsTable from './UserDetails/UserDetailsTable';
import AccountCreationForm from './AccountCreation/AccountCreationForm';
import styles from './DashboardTabs.module.css';

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.dashboardTabs}>
      <div className={styles.tabs}>
        <div className={activeTab === 'userDetails' ? styles.activeTab : ''} onClick={() => handleTabChange('userDetails')}>
          User Details
        </div>
        <div className={activeTab === 'accountCreation' ? styles.activeTab : ''} onClick={() => handleTabChange('accountCreation')}>
          Account Creation
        </div>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'userDetails' && <UserDetailsTable userData={dummyUserData} />}
        {activeTab === 'accountCreation' && <AccountCreationForm />}
      </div>
    </div>
  );
};

const dummyUserData = [
  { id: 1, username: 'user1', email: 'user1@example.com', phone: '123-456-7890', creationDate: '2023-01-01' },
  { id: 2, username: 'user2', email: 'user2@example.com', phone: '987-654-3210', creationDate: '2023-01-02' },
  // Add more dummy user data as needed
];

export default DashboardTabs;
