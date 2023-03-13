/**
 * 조건 C, 참일 때 반환하는 타입 T, 거짓일 때 반환하는 타입 F를 받는 타입 If를 구현하세요. C는 true 또는 false이고, T와 F는 아무 타입입니다.
 */

/** 예시 */
type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

/** 정답 */
type If<T, a, b> = T extends true ? a : b;
