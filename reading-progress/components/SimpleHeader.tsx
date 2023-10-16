import Link from "next/link";

export function SimpleHeader() {
  return (
    <header className="bg-gray-900 py-4 fixed w-full top-0">
      <div className="mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">Your Logo</div>
          <ul className="flex space-x-4">
            <Link href="/" className="text-white hover:text-blue-300">
              Home
            </Link>
            <Link href="/quotes" className="text-white hover:text-blue-300">
              Quotes
            </Link>
            <Link href="/about" className="text-white hover:text-blue-300">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-blue-300">
              Services
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
