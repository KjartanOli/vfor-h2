import { cookies } from "next/headers";
import Link from "next/link";
import { signout } from "../actions";
import styles from "./SessionButtons.module.css";
import { get_user_id } from "@/lib/utils";

export default function SessionButtons() {
  if (get_user_id() != null)
    return (<form action={signout} className={styles.container}><button className={styles.signOut}>Sign out</button></form>)
  return (<div className={styles.container}>
            <Link href="/login" className={styles.login}>Log in</Link>
            <Link href="/register" className={styles.register}>Register</Link>
          </div>)
}
