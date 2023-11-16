// pages/index.js
import DashboardTabs from '../components/DashboardTabs';
import styles from '../styles/globals.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>User Management Dashboard</h1>
      <DashboardTabs />
    </div>
  );
}
