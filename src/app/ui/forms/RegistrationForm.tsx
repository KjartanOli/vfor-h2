import { register } from "@/app/actions";

export default async function RegistrationForm() {
  return (
    <form action={register}>
      <label htmlFor="username">Username: <input type="text" name="username" placeholder="Username" required /></label>
      <label htmlFor="name">Name: <input name="name" type="text" placeholder="Name" required/></label>
      <label htmlFor="password">Password: <input type="password" name="password" placeholder="Password" required /></label>
      <button type="submit">Register</button>
    </form>
  )
}
