export default async function Block2() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return (
      <div className="w-full h-[200px] bg-red-500 flex items-center justify-center mt-3">
        Block2
      </div>
  );
}
