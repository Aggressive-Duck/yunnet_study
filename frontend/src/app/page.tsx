import UserForm from "@/components/UserForm";

export default async function Home() {
  const apiHost = process.env.API_HOST;

  const response = await fetch(`${apiHost}/users`, {
    method: 'GET',
    cache: 'no-store', 
  });

  const users = await response.json();

  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <p>This is a simple Next.js application.</p>
      <h2>Users:</h2>
      <ul>
        {users.map((user: { name: string }, index: number) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
      <UserForm />
    </main>
  );
}