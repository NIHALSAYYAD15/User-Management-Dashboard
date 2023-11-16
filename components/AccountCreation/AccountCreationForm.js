import styles from './AccountCreationForm.module.css';

const AccountCreationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    // Dummy API request handling
    console.log(`Creating account for ${username} with password ${password}`);
  };

  return (
    <div className={styles.accountCreationForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default AccountCreationForm;
