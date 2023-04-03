/**
 * T에서 K 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 Omit<T, K>를 이를 사용하지 않고 구현하세요.
 */

/** 예시 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

/** 정답 */

type MyOmit<T, K extends keyof T> = {
  [k in keyof T as k extends K ? never : k]: T[k];
};
