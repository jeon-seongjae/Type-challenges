/**
 * Array.unshift의 타입 버전을 구현하세요.
 */

/** 예시 */
type unshiftResult = Unshift<[1, 2], 0>; // [0, 1, 2,]

/** 정답 */
type Unshift<T extends any[], U> = [U, ...T];
