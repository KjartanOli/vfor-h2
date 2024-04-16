import { post } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(data: FormData) {
  const username = data.get('username')
  const password = data.get('password')

  const response = await post('login', { username, password });

  if (!response.ok)
    throw new Error('Network error')

  const token = (await response.json()).token;

  if (!token)
    throw new Error('Error');

  cookies().set('SESSION', token)
  redirect('/');
}


export function LoginForm() {
  return (
    <form action={login}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}
