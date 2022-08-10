// 1, 3, 4

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
type CCCC = Record<'a' | 'b', { v: 1 }>

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
    ...u,
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
type StringKeysOnly = ConditionalPick<Example, string>;
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

type NativeTestResult = NaiveFlat<Deep>
type DeepTestResult = DeepFlat<Deep>
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

type Responder = {
	text?: () => string;
	json?: () => string;
	secure?: boolean;
};

type RequireAtLeastOne<
    ObjectType,
    KeysType extends keyof ObjectType = keyof ObjectType,
> = KeysType extends keyof ObjectType ? 
  ObjectType & Required<Pick<ObjectType, KeysType>>: 
  never;

// 表示当前类型至少包含 'text' 或 'json' 键
const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
	text: () => '{"message": "ok"}',
	secure: true
};

interface Ffoo {
  [key: string]: any;
  [key: number]: any;
  bar(): void;
}

type RemoveIndexSignature<T> = {
  [key in keyof T as string extends key ? never : number extends key ? never: key]: T[key] 
}

type FooWithOnlyBar = RemoveIndexSignature<Ffoo>; //{ bar: () => void; }

type Fo2o = {
  readonly a: number;
  readonly b: string;
  readonly c: boolean;
};

type Mutable<T, Keys extends keyof T = keyof T> = {
  -readonly[P in Keys]: T[P]
} & Omit<T, Keys>

const mutableFoo: Mutable<Fo2o, 'a'> = { a: 1, b: '2', c: true };

mutableFoo.a = 3; // OK
mutableFoo.b = '6'; // Cannot assign to 'b' because it is a read-only property.

type IsUnion<T, U = T> = T extends U? ([T,U] extends [U,T] ?  false: true) : never;

type I01 = IsUnion<string|number | symbol> // true
type I11 = IsUnion<string|never | symbol> // false
type I21 =IsUnion<string|any | symbol> // false

type IsNever<T> = [T] extends [never] ? true : false
type I02 = IsNever<never> // true
type I12 = IsNever<never | string> // false
type I22 = IsNever<null> // false
type I23 = IsNever<any>

type Reverse<
  T extends Array<any>,
  R extends Array<any> = []
> = T extends [infer A,... infer B]? Reverse<B,[A,...R]> : R 

type R0 = Reverse<[]> // []
type R1 = Reverse<[1, 2, 3, 4]> // [3, 2, 1]

type Item = 'semlinker,lolo,kakuqo';

type Split<
	S extends string, 
	Delimiter extends string,
> = S extends `${infer a}${Delimiter}${infer b}` ? [a, ...Split<b, Delimiter>] : [S]

type ElementType = Split<Item, ','>; // ["semlinker", "lolo", "kakuqo"]

type ToPath<S extends string> = S extends `${infer A}.${infer B}`
  ? [...ToPath<A>, ...ToPath<B>]
  : S extends `${infer A}[${infer B}]`
    ? [A, B]
    : [S]


type pa = ToPath<'foo.bar.baz'> //=> ['foo', 'bar', 'baz']
type ppa = ToPath<'foo[0].bar[1].baz'> //=> ['foo', '0', 'bar', 'baz']

declare const config: Chainable

type ITypes = string | number | symbol;
type Chainable<T = {}> = {
  option<K extends ITypes, V extends any>(key: K, value: V): Chainable<T & Record<K, V>>;
  get(): T;
}

const result = config
  .option('age', 7)
  .option('name', 'lolo')
  .option('address', { value: 'XiaMen' })
  .get()

type ResultType = typeof result  
// 期望 ResultType 的类型是：
// {
//   age: number
//   name: string
//   address: {
//     value: string
//   }
// }
type Repeat<T, C extends number, A extends any[] = []> = A["length"] extends C
  ? A
  : Repeat<T, C, Push<A, T>>;

type R03 = Repeat<0, 0>; // []
type R13 = Repeat<1, 1>; // [1]
type R23 = Repeat<number, 2>; // [number, number]

type RepeatString<
  T extends string,
  C extends number,
  S extends any[] = []
> = S["length"] extends C ? JoinStrArray<S, ''> : RepeatString<T, C, Push<S, T>>

type S01 = RepeatString<"a", 0>; // ''
type S12 = RepeatString<"a", 2>; // 'aa'
type S23 = RepeatString<"ab", 3>; // 'ababab'

type ToNumber<T extends string, A extends any[] = []> = `${A["length"]}` extends T
  ? A["length"]
  : ToNumber<T, [...A, '']>;

type T01 = ToNumber<"0">; // 0
type T11 = ToNumber<"10">; // 10
type T21 = ToNumber<"20">; // 20

type SmallerThan<
  N extends number,
  M extends number,
  A extends any[] = []
> = A["length"] extends M
  ? false
  : A["length"] extends N
    ? true
    : SmallerThan<N, M, [...A, ""]>

type S04 = SmallerThan<0, 1>; // true
type S14 = SmallerThan<2, 0>; // false
type S24 = SmallerThan<8, 10>; // true

type CreateTuple<
  T extends number,
  A extends any[] = []
> = A['length'] extends T ? A : CreateTuple<T, Push<A, ''>>

type Add<
  T extends number,
  R extends number
> = [...CreateTuple<T>, ...CreateTuple<R>]['length']
  
type A011 = Add<5, 5>; // 10
type A111 = Add<8, 20>; // 28
type A211 = Add<10, 30>; // 40


type Filter<T extends any[], F, A extends any[] = []> = 
  T extends [infer a, ...infer b] ? 
  [a] extends [F] ?
  Filter<b, F, [...A, a]> :
  Filter<b, F, A> : 
  A

type F01 = Filter<[6, "lolo", 7, "semlinker", false], number>; // [6, 7]
type F11 = Filter<["kakuqo", 2, ["ts"], "lolo"], string>; // ["kakuqo", "lolo"]
type F21 = Filter<[0, true, any, "abao"], string>; // [any, "abao"]

type Flat<T extends any[]> = T extends [infer a, ...infer b] ? a extends any[] ? [...Flat<a>, ...Flat<b>] : [a, ...Flat<b>] : []

type F011 = Flat<[]> // []
type F111 = Flat<['a', 'b', 'c']> // ["a", "b", "c"]
type F211 = Flat<['a', ['b', 'c'], ['d', ['e', ['f']]]]> // ["a", "b", "c", "d", "e", "f"]

type StartsWith<T extends string, U extends string> = T extends `${U}${infer Rest}` ? true : false;

type S011 = StartsWith<'123', '12'> // true
type S111 = StartsWith<'123', '13'> // false
type S211 = StartsWith<'123', '1234'> // false
type S311 = StartsWith<'123', '123'> // true

type EndsWith<T extends string, U extends string> = T extends `${infer Head}${U}` ? true : false;

type E011 = EndsWith<'123', '23'> // true
type E111 = EndsWith<'123', '13'> // false
type E211 = EndsWith<'123', '123'> // true

// type IsAny<T> = [T] extends [string | number | symbol] ? [T] extends [never] ? false : true : false
type IsAny<T> = 0 extends 1 & T ? true : false;
type I0111 = IsAny<never> // false
type I1111 = IsAny<unknown> // false
type I2111 = IsAny<any> // true

type NotEmptyObject<T> = T extends {} ? ({} extends T ? false : true) : true;
type Flasy = 0 | "" | false | [];
type AnyOf<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [First] extends [Flasy]
    ? AnyOf<Rest>
    : NotEmptyObject<First>
  : false;

type A0 = AnyOf<[]>; // false
type A1 = AnyOf<[0, '', false, [], {}]> // false
type A2 = AnyOf<[1, "", false, [], {}]> // true

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer a}${From}${infer b}` ? `${a}${To}${b}` : S
  
type R04 = Replace<'', '', ''> // ''
type R14 = Replace<'foobar', 'bar', 'foo'> // "foofoo"
type R24 = Replace<'foobarbar', 'bar', 'foo'> // "foofoobar"
type R34 = Replace<'foobarbar', 'foo', 'bar'> // "barbarbar"
type R44 = Replace<'foofoobar', 'bar', 'foo'> // "foofoofoo"

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer a}${From}${infer b}` ? `${a}${To}${ReplaceAll<b, From, To>}` : S

type R012 = ReplaceAll<'', '', ''> // ''
type R112 = ReplaceAll<'barfoo', 'bar', 'foo'> // "foofoo"
type R212 = ReplaceAll<'foobarbar', 'bar', 'foo'> // "foofoofoo"
type R312 = ReplaceAll<'foobarfoobar', 'ob', 'b'> // "fobarfobar"

type IndexOf<A extends any[], Item, arr extends any[] = []> =
  A extends [infer first, ...infer rest] ?
    [first] extends [Item] ?
    arr["length"] : 
    IndexOf<rest, Item, [...arr, first]> :
    -1  
type Arr = [1, 2, 3, 4, 5]
type I011 = IndexOf<Arr, 0> // -1
type I111 = IndexOf<Arr, 1> // 0
type I211 = IndexOf<Arr, 3> // 2

type Om<T, I> = T extends I ? never : T;
type Test<T extends any[], F, G = F> = T extends any[]
  ? F | 1 extends 1
    ? T
    : F extends any
    ? Test<[...T, F], Om<G, F>>
    : T
  : T;
// type Permutation<T> = Test<[], T>;

type Permutation<T, K = T> = [T] extends [never] ? [] : K extends K ? [K, ...Permutation<Exclude<T, K>>] : never
type ssssd = 'a' | 'b'
// ["a", "b"] | ["b", "a"]
type P0 = Permutation<'a' | 'b'>  // ['a', 'b'] | ['b' | 'a']
// type P1 = ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"] 
// | ["b", "c", "a"] | ["c", "a", "b"] | ["c", "b", "a"]
type P1 = Permutation<'a' | 'b' | 'c'> 

type Unpacked<T> = T => infer a exsnte ? a : never

type T001 = Unpacked<string>;  // string
type T011 = Unpacked<string[]>;  // string
type T021 = Unpacked<() => string>;  // string
type T031 = Unpacked<Promise<string>>;  // string
type T041 = Unpacked<Unpacked<Promise<string>[]>>;  // string
type T051 = Unpacked<any>;  // any
type T061 = Unpacked<never>;  // never

type Jsonified<T extends object> = {
  [k in keyof T]: T[k] extends object
    ? "toJSON" extends keyof T[k]
      ? T[k]["toJSON"] extends (...args: any[]) => infer R
        ? R
        : never
      : T[k] extends (...args: any[]) => any
        ? never
        : Jsonified<T[k]>
    : T[k];
};


type MyObject = {
  str: "literalstring",
  fn: () => void,
  date: Date,
  customClass: MyClass,
  obj: {
    prop: "property",
    clz: MyClass,
    nested: { attr: Date }
  },
}

declare class MyClass {
  toJSON(): "MyClass";
}

/**
 * type JsonifiedMyObject = {
 *  str: "literalstring";
 *  fn: never;
 *  date: string;
 *  customClass: "MyClass";
 *  obj: JsonifiedObject<{
 *    prop: "property";
 *    clz: MyClass;
 *    nested: {
 *      attr: Date;
 *    };
 *   }>;
 * }
*/
type JsonifiedMyObject = Jsonified<MyObject>;
declare let ex: JsonifiedMyObject;
const z1: "MyClass" = ex.customClass;
const z2: string = ex.obj.nested.attr;

interface Person2 {
  name: string;
  age?: number;
  gender?: number;
}

type ddd = { name: string } & ({ age: number, gender: number } | { age?: never, gender?: never })

type RequireAllOrNone<T, K extends keyof T> = Omit<T, K> & (Required<Pick<T, K>> | Partial<Record<K, never>>)

const p11: RequireAllOrNone<Person2, "age" | "gender"> = {
  name: "lolo"
};

const p21: RequireAllOrNone<Person2, "age" | "gender"> = {
  name: "lolo",
  age: 7,
  gender: 1
};

const p31: RequireAllOrNone<Person2, "age" | "gender"> = {
// const p3: SetRequired<Person, "age" | "gender"> = {
// const p3: Omit<Person, "age" | "gender"> = {
  name: "lolo",
  age: 7,
};
interface Person1 {
  name: string;
  age?: number;
  gender?: number;
}
// 想要构建成这个样子才可以满足条件
type ttt = { name: string } & ({ age: number, gender?: never } | { age?: never, gender: number })

type RP<T, K> = {
  [P in keyof T]: P extends K ? T & Partial<Record<P, never>> : never
}[keyof T];

// 只能包含Keys中唯一的一个Key
type RequireExactlyOne<T, K extends keyof T> = Omit<T, K> & RP<Pick<T, K>, K>

const p1: RequireExactlyOne<Person1, 'age' | 'gender'> = {
  name: "lolo",
  age: 7,
};

const p2: RequireExactlyOne<Person1, 'age' | 'gender'> = {
  name: "lolo",
  gender: 1
};

// Error
const p3: RequireExactlyOne<Person1, 'age' | 'gender'> = {
  name: "lolo",
  age: 7,
  gender: 1
};

type ConsistsOnlyOf<LongString extends string, Substring extends string> = LongString extends ''
  ? true
  : LongString extends `${Substring}${infer B}`
    ? ConsistsOnlyOf<B, Substring>
    : false;
type C0 = ConsistsOnlyOf<'aaa', 'a'> //=> true
type C1 = ConsistsOnlyOf<'ababab', 'ab'> //=> true
type C2 = ConsistsOnlyOf<'aBa', 'a'> //=> false
type C3 = ConsistsOnlyOf<'', 'a'> //=> true

