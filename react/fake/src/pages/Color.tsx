export default function Color() {
  return (
    <div className="bg-sky-700">
      <p className="w-full p-4 text-3xl text-white">Color</p>
      <div className="mb-4">
        {/*text-2xl font-bold italic  */}
        <p className="text-lime-400 text-5xl font-extrabold text-center">
          Email Address
        </p>
        <input
          type="email"
          className="text-gray-900 border-sky-200 border-4"
        ></input>
      </div>
    </div>
  );
}
