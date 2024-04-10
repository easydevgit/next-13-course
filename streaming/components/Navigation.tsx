import Link from 'next/link'


export default function Navigation() {
  return (
      <nav className="bg-gray-800 p-4 w-full z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <Link href="/" className="text-white font-bold">Home</Link>
              <Link href="/about" className="text-white hover:text-gray-300">About</Link>
              <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
              <Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link>
            </div>
          </div>
        </div>
      </nav>
  );
}
