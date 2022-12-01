export function getToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
}

export function setToken(value: string): string | undefined {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", value);
    return value;
  }
  return undefined;
}

export function clearToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}
