import Link from "next/link";

export default async function Home() {
  return (
    <div className="main-container">
      <h1>Home Page</h1>
      <div>
        <Link href="/landing">Go to Landing Page</Link>
      </div>
      <div>
        <Link href="/information">Go to Information Page</Link>
      </div>
    </div>
  );
}
