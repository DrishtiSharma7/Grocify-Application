import { useEffect, useState } from "react";

const USERS_STORAGE_KEY = "grocify-users";
const SESSION_STORAGE_KEY = "grocify-session";

function readUsers() {
  try {
    const stored = localStorage.getItem(USERS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function readSession() {
  try {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function useAuth() {
  const [user, setUser] = useState(readSession);

  useEffect(() => {
    if (user) {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    }
  }, [user]);

  const signup = ({ name, email, password }) => {
    const users = readUsers();
    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((u) => u.email === normalizedEmail)) {
      return { success: false, error: "An account with this email already exists." };
    }

    const newUser = { name: name.trim(), email: normalizedEmail, password };
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([...users, newUser]));
    setUser({ name: newUser.name, email: newUser.email });
    return { success: true };
  };

  const login = ({ email, password }) => {
    const users = readUsers();
    const normalizedEmail = email.trim().toLowerCase();
    const match = users.find((u) => u.email === normalizedEmail && u.password === password);

    if (!match) {
      return { success: false, error: "Invalid email or password." };
    }

    setUser({ name: match.name, email: match.email });
    return { success: true };
  };

  const logout = () => setUser(null);

  return { user, signup, login, logout };
}
