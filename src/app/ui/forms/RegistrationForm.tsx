import { post } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function register(data: FormData) {
  const username = data.get('username')
  const password = data.get('password')

  const response = await post('register', { username, password });

  if (!response.ok)
    throw new Error('Network error')

  const token = (await response.json()).token;

  if (!token)
    throw new Error('Error');

  cookies().set('SESSION', token)
  redirect('/');
}


export default function RegistrationForm() {
  return (
    <form action={register}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  )
}
