import { login } from "@/app/actions";
import styles from "./LoginForm.module.css";

export function LoginForm() {
  return (
    <form action={login} className={styles.formContainer}>
      <input type="text" name="username" placeholder="Username" required className={styles.username} />
      <input type="password" name="password" placeholder="Password" required className={styles.password} />
      <button type="submit" className={styles.button}>Login</button>
    </form>
  )
}
