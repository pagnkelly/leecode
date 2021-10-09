type a1 = {
  a: 1,
  b: '2',
  d: 3
}
type a2 = {
  a: 1,
  b: 2,
  c?: 3
}

type PPPP = Pick<a1, 'a'>
type PAPA = Partial<a1>
type RRRR = Required<a2>
type EEEE = Exclude<keyof a2, keyof a1>
type XXXX = Extract<keyof a2, keyof a1>
type OOOO = Omit<a2, keyof a1>
type NNNN = NonNullable<'1' | '2' | undefined | null>


type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    // ...u,
    id: u.id,
    kind: 'customer'
  }
}


function f(a: string, b: string):number
function f(a: number, b: number):string
function f(a: string | number, b: string | number): string | number {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return (a as number) + (b as number); // error as b can be number | string
  }
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b') // Ok


type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

type SetOptional<T, K extends keyof T> = 
  Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

const a:SomeOptional = {
  a: 1,
  b: 'ddd',
  c: true
}
// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean; 
// }

type SomeRequired = SetRequired<Foo, 'b' | 'c'>;
// type SomeRequired = {
// 	a?: number;
// 	b: string; // 保持不变
// 	c: boolean; // 该属性已变成必填
// }
type D = keyof any
type R<K extends D, T> = {
  [P in K]: T;
};

const x:R<'a'|'b', string> = {
  a: '1',
  b: '2'
}

interface Example {
	a: string;
	b: string | number;
	c: Array<number>;
	d: Object;
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, {} | string | number>;
//=> {a: string}

type ConditionalPick<T, K> = {
  [P in keyof T as (T[P] extends K ? P : never)]: T[P]
}

type Fn = (a: number, b: string) => number
type AppendArgument<F extends (...args: any) => any, A> 
  = (x: A, ...args: Parameters<F>) => ReturnType<F> 

type FinalFn = AppendArgument<Fn, boolean> 
// (x: boolean, a: number, b: string) => number

type NaiveFlat<T extends any[]> = {
  [P in keyof T]: T[P] extends any[] ? T[P][number] : T[P]
}[number]
// type NaiveFlat<T extends any[]> = T extends (infer P)[] ? P extends any[] ? NaiveFlat<P> : P : never;
// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"

type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]];

// type DeepFlat<T extends any[]> = {
//   [K in keyof T]: T[K] extends any[] ? DeepFlat<T[K]> : T[K]
// }[number]

type DeepFlat<T extends any[]> = T extends (infer P)[] ? P extends any[] ? DeepFlat<P> : P : never;

type DeepTestResult = NaiveFlat<Deep>

type p = 'string' | 'number' | 'symbol'
type EmptyObject = {
 [k in p] : never
} 

// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = { // 将出现编译错误
  
}

type SomeType = {
  props: string
}
// type Exclusive<T1, T2 extends T1> = {
//   [K in keyof T2]: K extends keyof T1 ? T2[K] : never 
// }
 
// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly(x: SomeType) { return x }
// function takeSomeTypeOnly<T extends SomeType>(x: Exclusive<SomeType, T>) { return x }
// 测试用例：
const xx = { props: 'a' };
takeSomeTypeOnly(xx) // 可以正常调用

const y = { props: 'a', addditionalProp: 'x' };
takeSomeTypeOnly(y) // 将出现编译错误

// type NonEmptyArray<T> = {
//   [P in (keyof T[] & 0)]: P extends number ? T : T[][P]
// }
// type NonEmptyArray<T> = {
//   [P in number]: T;
// } & {
//   0: T
// };
type NonEmptyArray<T> = [T, ...T[]]
const aa: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS', '2222', 'dwdwdw'] // 非空数据，正常使用

type JoinStrArray<Arr extends string[], Separator extends string> = Arr extends [infer El, ...infer Res]
    ? `${Arr[0]}${Res extends string[]
        ? Res[0] extends string
            ? `${Separator}${JoinStrArray<Res, Separator>}`
            : ""
        : ""}`
    : ""
// 测试用例
type Names = ["Sem", "Lolo", "Kaquko"]
type NamesComma = JoinStrArray<Names, ","> // "Sem,Lolo,Kaquko"
type NamesSpace = JoinStrArray<Names, " "> // "Sem Lolo Kaquko"
type NamesStars = JoinStrArray<Names, "⭐️"> // "Sem⭐️Lolo⭐️Kaquko"

type Left<V> = V extends ` ${infer a}` ? Left<a> : V;
type Right<V> = V extends `${infer a} ` ? Right<a> : V
type Trim<V extends string, res extends string = ''> = Right<Left<V>>

// 测试用例
type se = Trim<' semlinker '>;
//=> 'semlinker'

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

type Push<T extends any[], V> = [...T, V]
// 测试用例
type Arr00 = Push<[], 1> // [1]
type Arr11 = Push<[1, 2, 3], 4> // [1, 2, 3, 4]
 
type Includes<T extends Array<any>, E> = E extends T[number] ? true : false

type I0 = Includes<[], 1> // false
type I1 = Includes<[2, 2, 3, 1], 2> // true
type I2 = Includes<[2, 3, 3, 1], 1> // true

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
type a<U> = U extends any ? U : never
type s = a<'1' | '2'>
// 测试用例
type U0 = UnionToIntersection<string | number> // never
type U1 = UnionToIntersection<{ name: string } | { age: number }> // { name: string; } & { age: number; }

type Person = {
  id: string;
  name: string;
  age: number;
  from?: string;
  speak?: string;
};

type OptionalKeys<T> = {
  [P in keyof T]: Pick<T, P> extends Required<Pick<T, P>> ? never : P
}[keyof T]

type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"

type Curry<
    F extends (...args: any[]) => any,
    P extends any[] = Parameters<F>,
    R = ReturnType<F>
    > = P extends [infer U, ...infer Arg] ? (arg: U) => Curry<F, Arg, R> : P extends [] ? () => R : never

type F0 = Curry<() => Date>; // () => Date
type F1 = Curry<(a: number) => Date>; // (arg: number) => Date
type F2 = Curry<(a: number, b: string) => Date>; //  (arg_0: number) => (b: string) => Date

type Fooo = {
	a: number;
	b: string;
};

type Bar = {
	b: number;
};

type Merge<FirstType, SecondType> = Omit<FirstType, keyof SecondType> & SecondType;

const ab: Merge<Fooo, Bar> = { a: 1, b: 2 };
