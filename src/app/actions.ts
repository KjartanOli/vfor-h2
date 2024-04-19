'use server'

import { patch, post } from "@/lib/api";
import { get_token } from "@/lib/utils";
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

export async function signout() {
  cookies().delete('SESSION');
  redirect('/');
}

function form_parse_int(value: ReturnType<FormData["get"]>): number {
  if (!value || typeof value !== 'string')
    throw new Error('Invalid argument');
  return parseInt(value);
}

export async function rate(data: FormData) {
  const game = form_parse_int(data.get('game'));
  const rating = form_parse_int(data.get('rating'));

  console.log(game, rating);

  const result = await post(`games/${game}/ratings`, { rating }, get_token());
  console.log(await result.text())
  if (!result.ok)
    throw new Error('Network error');
  redirect(`/games/${game}`);
}

export async function update_rating(data: FormData) {
  const game = form_parse_int(data.get('game'));
  const rating = form_parse_int(data.get('rating'));

  const result = await patch(`games/${game}/ratings`, { rating }, get_token());
  if (!result.ok)
    throw new Error('Network error');
  redirect(`/games/${game}`);
}
