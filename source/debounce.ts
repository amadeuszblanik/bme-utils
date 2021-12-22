const DEFAULT_WAIT = 450;

const debounce = <T extends Function>(callback: T, wait: number = DEFAULT_WAIT) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const callable = (...args: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    timeout = setTimeout(() => callback(...args), wait);
  };

  return <T>(<any>callable);
};

export default debounce;
