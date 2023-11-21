import Link from "next/link";
import { promises as fs } from "fs";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/data.txt", "utf8");

  return (
    <main>
      <h2>Main page</h2>
      <div>{file}</div>
      <Link href="/history">History</Link>
    </main>
  );
}
