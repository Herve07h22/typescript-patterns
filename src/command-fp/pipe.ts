
export function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  return (initialValue: T): T => {
    return fns.reduce((acc, fn) => fn(acc), initialValue);
  };
}

