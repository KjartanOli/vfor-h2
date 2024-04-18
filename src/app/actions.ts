'use server'

import { post } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function register(data: FormData) {
  const username = data.get('username')
  const password = data.get('password')
  const name = data.get('name');

  const response = await post('register', { username, name, password });

  if (!response.ok)
    throw new Error('Network error')

  const token = (await response.json()).token;

  if (!token)
    throw new Error('Error');

  cookies().set('SESSION', token)
  redirect('/');
}

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
