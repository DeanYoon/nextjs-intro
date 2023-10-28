import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <style jsx>{`
        a {
          text-decoration: none; 
        }
        img{
          width
        }
      `}</style>
    </nav>
  );
}
