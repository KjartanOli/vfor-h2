import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import { redirect } from "next/navigation";

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  console.error('Missing JWT_SECRET');
  process.exit(1);
}

const jwt_secret = (): string => {
  return JWT_SECRET;
}

export function get_token(): string | undefined {
  return cookies().get('SESSION')?.value;
}

export function get_user_id(): number | null {
  const token = get_token();
  if (!token)
    return null;

  try {
    const res = jwt.verify(token, jwt_secret());
    if (typeof res === 'string')
      return null;
    return res.data.id;
  } catch (e) {
    return null;
  }
}
