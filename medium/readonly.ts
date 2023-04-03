/**
 * TT에서 K 프로퍼티만 읽기 전용으로 설정해 새로운 오브젝트 타입을 만드는 제네릭 MyReadonly2<T, K>를 구현하세요.
 * K가 주어지지 않으면 단순히 Readonly<T>처럼 모든 프로퍼티를 읽기 전용으로 설정해야 합니다.
 */

/** 예시 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const readonly: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

readonly.title = "Hello"; // Error: cannot reassign a readonly property
readonly.description = "barFoo"; // Error: cannot reassign a readonly property
readonly.completed = true; // OK

/** 정답 */

type MyReadonly2<T, K extends keyof T> = {
  readonly [k in K]: T[k];
} & {
  [k in keyof T as k extends K ? never : k]: T[k];
};
