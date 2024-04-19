const api_url = 'https://vfor-h1.onrender.com';

export async function get(path: string, token: string | null = null): Promise<Response> {
  return fetch(`${api_url}/${path}`, {
    headers: (token ? {
      'Authorization': `Bearer ${token}`
    } : {})
  });
}

export async function post(path: string, body: Object, token: string | null = null): Promise<Response> {
  return fetch(`${api_url}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    },
    body: JSON.stringify(body),
  });
}

export async function patch(path: string, body: Object, token: string | null = null): Promise<Response> {
  return fetch(`${api_url}/${path}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    },
    body: JSON.stringify(body),
  });
}

export async function del(path: string, token: string): Promise<Response> {
  return fetch(`${api_url}/${path}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}

