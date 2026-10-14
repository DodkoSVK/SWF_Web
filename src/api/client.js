export class ApiError extends Error {
  constructor(status, message, details) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.details = details
  }
}

const BASE_URL = import.meta.env.VITE_API_URL

export async function apiFetch(path, options = {}) {
  const { body, headers, ...rest } = options

  const isJson = body !== undefined && !(body instanceof FormData)

  const res = await fetch(BASE_URL + path, {
    ...rest,
    headers: {
      Accept: 'application/json',
      ...(isJson && { 'Content-Type': 'application/json' }),
      ...headers,
    },
    body: isJson ? JSON.stringify(body) : body,
    credentials: 'include', // Send the cookies :: access_token, refresh_token to other login
  })

  // 204 No content :: refresh, logout -> Dont have a body
  if (res.status === 204) return null

  if (!res.ok) {
    let data = null
    try {
      data = await res.json()
    } catch (error) {
      // The body is not JSON, stay null
    }
    throw new ApiError(res.status, data?.error ?? res.statusText, data?.details)
  }

  return res.json()
}
