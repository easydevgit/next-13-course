interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface Quotes {
  quotes: Quote[];
  total: number;
  limit: number;
  skip: number;
}

async function getQuotes(): Promise<Quotes> {
  const res = await fetch("https://dummyjson.com/quotes/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Quotes() {
  const data = await getQuotes();
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-[73px]">
      {data.quotes.map((quote) => (
        <article
          key={quote.id}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="my-4 text-2xl">{quote.quote}</h2>
          <p>{quote.author}</p>
        </article>
      ))}
    </section>
  );
}
