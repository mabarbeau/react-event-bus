export let count = 1;

const subscribers = new Set<(number: number) => void>();

export const updateCount = () => {
  count += 1;

  subscribers.forEach((subscriber) => {
    subscriber(count);
  });
};

export const subscribe = (subscriber: (number: number) => void) => {
  subscribers.add(subscriber);
  return () => {
    subscribers.delete(subscriber);
  };
};
