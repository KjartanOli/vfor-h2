import { cookies } from "next/headers";
import Link from "next/link";
import { signout } from "../actions";

export default function SessionButtons() {
  if (cookies().get('SESSION'))
    return (<form action={signout}><button>Sign out</button></form>)
  return (<div>
            <Link href="/login">Log in</Link>
            <Link href="/register">Register</Link>
          </div>)
}
