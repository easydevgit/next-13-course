import Link from "next/link"

export default function Info() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Info Page</h1>
                <p className="text-gray-700 mb-6">
                    This is a sample of the info page. Some text here
                </p>

                <Link href="/login">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </Link>

            </div>
        </div>
    )
}
