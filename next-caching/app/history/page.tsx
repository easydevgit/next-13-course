import Link from "next/link";
import { headers } from 'next/headers'


async function getHistory() {
  const data = await fetch("http://127.0.0.1:8000/history", { next: { revalidate: 30 } });
  return data.json();
}

export async function generateMetadata() {
  const history = await getHistory();
  const history1 = await getHistory();
  const history2 = await getHistory();
  await getHistory();
  return {
    title: history.data + history1.data + history2.data,
  };
}

export default async function History() {
  const history = await getHistory();
  const headersList = headers()
  const referer = headersList.get('referer')
  return (
    <main>
      <h2>History page</h2>
      <div>{history.data}</div>
      <div>Referer: {referer}</div>
      <Link href="/">Home</Link>
    </main>
  );
}
