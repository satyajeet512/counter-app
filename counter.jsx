import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">
        Count: {count}
      </h1>

      <div className="flex gap-3">
        <button
          onClick={increase}
          className="bg-green-500 text-white px-5 py-2 rounded"
        >
          Increment
        </button>

        <button
          onClick={decrease}
          className="bg-red-500 text-white px-5 py-2 rounded"
        >
          Decrement
        </button>

        <button
          onClick={reset}
          className="bg-gray-500 text-white px-5 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
