import { cookies } from "next/headers";
import Link from "next/link";
import { signout } from "../actions";
import styles from "./SessionButtons.module.css";

export default function SessionButtons() {
  if (cookies().get('SESSION'))
    return (<form action={signout}><button>Sign out</button></form>)
  return (<div className={styles.container}>
            <Link href="/login" className={styles.login}>Log in</Link>
            <Link href="/register" className={styles.register}>Register</Link>
          </div>)
}
