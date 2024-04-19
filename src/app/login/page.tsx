import { LoginForm } from "../ui/forms/LoginForm";
import styles from "./page.module.css";

export default function Page() {
  return (<main className={styles.container}>
            <h1 className={styles.header}>Log In</h1>
            <div className={styles.LoginFormContainer}>
              <LoginForm></LoginForm>
            </div>
          </main>)
}
