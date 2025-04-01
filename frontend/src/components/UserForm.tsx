"use client";

import { FormEvent, useState } from "react";

export default function UserForm() {
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        password: formData.get("password"),
      }),
    });

    if (response.ok) {
      setMessage("User created successfully!");
    } else {
      setMessage("Failed to create user.");
    }
    
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}