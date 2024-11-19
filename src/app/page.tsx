import Image from "next/image";

export default function Home() {
  return (
    <div>
        <main className="max-w-5xl mx-auto " >
          <h1 className="text-5xl font-bold">
            Invoicing Peida
          </h1>
          <p>
            <a href="/dashboard">
            Sign In</a>
          </p>
        </main>
    </div>
  );
}
