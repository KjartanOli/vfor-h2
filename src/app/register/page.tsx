import RegistrationForm from "../ui/forms/RegistrationForm";
import styles from "./page.module.css";

export default function Page() {
  return (<main className={styles.container}>
            <h1 className={styles.header}>Register</h1>
            <div className={styles.RegistrationFormContainer}>
              <RegistrationForm></RegistrationForm>
            </div>
          </main>)
}
