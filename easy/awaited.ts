/**
 * Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?
 */

/** 예시 */
type ExampleType = Promise<string>;

type awaitResult = MyAwaited<ExampleType>; // string

/** 정답 */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? MyAwaited<P>
    : P
  : never;
