import Link from "next/link"

export default function Info() {
  return (
      <>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mt-4 mb-5">Info page</h2>
          <Link href="/info/map">Map</Link>
      </>
  )
}
