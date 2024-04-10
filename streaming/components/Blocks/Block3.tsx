export default async function Block3() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
      <div className="w-full h-[200px] bg-red-500 flex items-center justify-center mt-3">
        Block3
      </div>
  );
}
