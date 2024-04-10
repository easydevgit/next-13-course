export default async function Block1() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return (
      <div className="w-full h-[200px] bg-red-500 flex items-center justify-center mt-3">
        Block1
      </div>
  );
}
