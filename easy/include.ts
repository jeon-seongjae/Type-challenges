/**
 * JavaScript의 Array.includes 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, true 또는 false를 반환해야 합니다.
 */

/** 예시 */
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

/** 정답 */
type Includes<T extends readonly any[], U extends any> = T extends [
  infer Current,
  ...infer Rest
]
  ? Equal<Current, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
