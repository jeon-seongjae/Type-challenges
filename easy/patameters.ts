/**
 * 내장 제네릭 Parameters<T>를 이를 사용하지 않고 구현하세요.
 */

/** 예시 */
const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

/** 정답 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => void
  ? R
  : never;
