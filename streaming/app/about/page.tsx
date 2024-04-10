
export default async function About() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return (
      <div>
        About page
      </div>
  );
}
