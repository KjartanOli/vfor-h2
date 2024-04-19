import { register } from "@/app/actions";
import styles from "./RegistrationForm.module.css";

export default async function RegistrationForm() {
  return (
    <form action={register} className={styles.formContainer}>
      <input type="text" name="username" placeholder="Username" required className={styles.usernameInput}/>
      <input name="name" type="text" placeholder="Name" required className={styles.nameInput}/>
      <input type="password" name="password" placeholder="Password" required className={styles.passwordInput}/>
      <button type="submit" className={styles.button}>Register</button>
    </form>
  )
}
