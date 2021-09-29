type IsEqual<A, B> = A extends B ? B extends A ? true : false : false// 你的实现代码

// 测试用例
type E0 = IsEqual<1, 2>; // false
type E1 = IsEqual<{ a: 1 }, { a: 1 }> // true
type E2 = IsEqual<[1], []>; // false

type Head<T extends Array<any>> = T[0] extends undefined ? never : T[0]// 你的实现代码
// 测试用例
type H0 = Head<[]> // never
type H1 = Head<[1]> // 1
type H2 = Head<[3, 2]> // 3

type Tail<T extends Array<any>> = T extends [a: any, ...args: infer Arg] ? Arg : [] // 你的实现代码

// 测试用例
type T0 = Tail<[]> // []
type T1 = Tail<[1, 2]> // [2]
type T2 = Tail<[1, 2, 3, 4, 5]> // [2, 3, 4, 5]


type Unshift<T extends any[], E> = [E, ...T] // 你的实现代码

// 测试用例
type Arr0 = Unshift<[], 1> // [1]
type Arr1 = Unshift<[1, 2, 3], 0>; // [0, 1, 2, 3]

type Shift<T extends any[]> = T extends [f: any, ...args: infer Arg] ? Arg : never// 你的实现代码

// 测试用例
type S0 = Shift<[1, 2, 3]> // [2, 3]
type S1 = Shift<[string,number,boolean]> // [number,boolean]

