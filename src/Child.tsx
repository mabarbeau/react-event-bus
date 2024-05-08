import { useEffect, useState } from "react";
import { count, subscribe, updateCount } from "./count";

export function Child({ name }: { name: string }) {
  const [countLocal, setCount] = useState(count);

  useEffect(() => {
    return subscribe((newCount) => {
      setCount(newCount);
    });
  });

  return (
    <div>
      <h2>{name}</h2>
      <div>
        Count: {countLocal}
        <br />
        <button
          onClick={() => {
            updateCount();
          }}
        >
          Increment count
        </button>
      </div>
    </div>
  );
}
