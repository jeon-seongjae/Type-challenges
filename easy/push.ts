/**
 * Array.push의 제네릭 버전을 구현하세요.
 */

/** 예시 */
type pushResult = Push<[1, 2], "3">; // [1, 2, '3']

/** 정답 */
type Push<T extends any[], U> = [...T, U];
