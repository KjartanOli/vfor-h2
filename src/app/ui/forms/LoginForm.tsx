import { login } from "@/app/actions";

export function LoginForm() {
  return (
    <form action={login}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}
