/**
 * 배열 T를 사용해 마지막 요소를 제외한 배열을 반환하는 제네릭 Pop<T>를 구현합니다.
 */

/** 예시 */
type popArr1 = ["a", "b", "c", "d"];
type popArr2 = [3, 2, 1];

type re1 = Pop<popArr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<popArr2>; // expected to be [3, 2]

/** 정답 */
type Pop<T extends any[]> = T extends [...infer I, infer _] ? I : never;
