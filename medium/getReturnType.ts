/**
 * 내장 제네릭 ReturnType<T>을 이를 사용하지 않고 구현하세요.
 */

/** 예시 */
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"

/** 정답 */
// type MyReturnType<T extends (args: boolean) => any> = T extends (
//   args: boolean
// ) => infer R
//   ? R
//   : never;

// type MyReturnType<T> = T extends (args: boolean) => infer R ? R : never;

type MyReturnType<T extends Function> = T extends (args: boolean) => infer R
  ? R
  : never;
