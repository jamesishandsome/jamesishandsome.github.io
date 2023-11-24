import { useEffect, useState } from 'react';
import { fib } from './wasm/pkg/wasm.js';
const WasmPage = () => {
  const [fib_wasm, setFib_wasm] = useState(0);
  const [fib_js, setFib_js] = useState(0);
  const [wasm_running_time, setWasm_running_time] = useState(0);
  const [js_running_time, setJs_running_time] = useState(0);
  const calc_running_time = (func: () => void) => {
    const start = performance.now();
    func();
    const end = performance.now();
    //   to second
    return (end - start) / 1000;
  };
  const fib_js_func = (n: number) => {
    if (n <= 1) {
      return n;
    }
    return fib_js_func(n - 1) + fib_js_func(n - 2);
  };
  useEffect(() => {
    setWasm_running_time(calc_running_time(() => setFib_wasm(fib(36))));
    setJs_running_time(calc_running_time(() => setFib_js(fib_js_func(37))));
  }, []);
  return (
    <div className={'w-full h-full flex justify-center items-center'}>
      <div className={'flex flex-col justify-center items-center'}>
        <div className={'text-3xl'}>Fibonacci</div>
        <div className={'text-3xl'}>
          WASM Running Time: {wasm_running_time} second
        </div>
        <div className={'text-3xl'}>WASM: {fib_wasm}</div>
        <div className={'text-3xl'}>
          JS Running Time: {js_running_time} second
        </div>
        <div className={'text-3xl'}>JS: {fib_js}</div>
      </div>
    </div>
  );
};

export default WasmPage;
