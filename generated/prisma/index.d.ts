
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model income
 * 
 */
export type income = $Result.DefaultSelection<Prisma.$incomePayload>
/**
 * Model outcome
 * 
 */
export type outcome = $Result.DefaultSelection<Prisma.$outcomePayload>
/**
 * Model report
 * 
 */
export type report = $Result.DefaultSelection<Prisma.$reportPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.income`: Exposes CRUD operations for the **income** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incomes
    * const incomes = await prisma.income.findMany()
    * ```
    */
  get income(): Prisma.incomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outcome`: Exposes CRUD operations for the **outcome** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outcomes
    * const outcomes = await prisma.outcome.findMany()
    * ```
    */
  get outcome(): Prisma.outcomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.reportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    income: 'income',
    outcome: 'outcome',
    report: 'report'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "income" | "outcome" | "report"
      txIsolationLevel: never
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.userFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.userAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      income: {
        payload: Prisma.$incomePayload<ExtArgs>
        fields: Prisma.incomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.incomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.incomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          findFirst: {
            args: Prisma.incomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.incomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          findMany: {
            args: Prisma.incomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>[]
          }
          create: {
            args: Prisma.incomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          createMany: {
            args: Prisma.incomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.incomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          update: {
            args: Prisma.incomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          deleteMany: {
            args: Prisma.incomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.incomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.incomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomePayload>
          }
          aggregate: {
            args: Prisma.IncomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncome>
          }
          groupBy: {
            args: Prisma.incomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.incomeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.incomeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.incomeCountArgs<ExtArgs>
            result: $Utils.Optional<IncomeCountAggregateOutputType> | number
          }
        }
      }
      outcome: {
        payload: Prisma.$outcomePayload<ExtArgs>
        fields: Prisma.outcomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.outcomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outcomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.outcomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outcomePayload>
          }
          findFirst: {
            args: Prisma.outcomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outcomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.outcomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outcomePayload>
          }
          findMany: {
            args: Prisma.outcomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outcomePayload>[]
          }
          create: {
            args: Prisma.outcomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outcomePayload>
          }
          createMany: {
            args: Prisma.outcomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.outcomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outcomePayload>
          }
          update: {
            args: Prisma.outcomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outcomePayload>
          }
          deleteMany: {
            args: Prisma.outcomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.outcomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.outcomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outcomePayload>
          }
          aggregate: {
            args: Prisma.OutcomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutcome>
          }
          groupBy: {
            args: Prisma.outcomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutcomeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.outcomeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.outcomeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.outcomeCountArgs<ExtArgs>
            result: $Utils.Optional<OutcomeCountAggregateOutputType> | number
          }
        }
      }
      report: {
        payload: Prisma.$reportPayload<ExtArgs>
        fields: Prisma.reportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findFirst: {
            args: Prisma.reportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findMany: {
            args: Prisma.reportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          create: {
            args: Prisma.reportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          createMany: {
            args: Prisma.reportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          update: {
            args: Prisma.reportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          deleteMany: {
            args: Prisma.reportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.reportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.reportFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.reportAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.reportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    income?: incomeOmit
    outcome?: outcomeOmit
    report?: reportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ReportCountOutputType
   */

  export type ReportCountOutputType = {
    incomes: number
    outcomes: number
  }

  export type ReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomes?: boolean | ReportCountOutputTypeCountIncomesArgs
    outcomes?: boolean | ReportCountOutputTypeCountOutcomesArgs
  }

  // Custom InputTypes
  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     */
    select?: ReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incomeWhereInput
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountOutcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: outcomeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    username: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    username: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    username: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    username?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    username?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    username?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string
    username: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    username?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "username", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      username: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {userFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: userFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {userAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: userAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user findRaw
   */
  export type userFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user aggregateRaw
   */
  export type userAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model income
   */

  export type AggregateIncome = {
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  export type IncomeAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
    total: number | null
  }

  export type IncomeSumAggregateOutputType = {
    price: number | null
    quantity: number | null
    total: number | null
  }

  export type IncomeMinAggregateOutputType = {
    id: string | null
    date: string | null
    price: number | null
    quantity: number | null
    total: number | null
    reportId: string | null
  }

  export type IncomeMaxAggregateOutputType = {
    id: string | null
    date: string | null
    price: number | null
    quantity: number | null
    total: number | null
    reportId: string | null
  }

  export type IncomeCountAggregateOutputType = {
    id: number
    date: number
    price: number
    quantity: number
    total: number
    reportId: number
    _all: number
  }


  export type IncomeAvgAggregateInputType = {
    price?: true
    quantity?: true
    total?: true
  }

  export type IncomeSumAggregateInputType = {
    price?: true
    quantity?: true
    total?: true
  }

  export type IncomeMinAggregateInputType = {
    id?: true
    date?: true
    price?: true
    quantity?: true
    total?: true
    reportId?: true
  }

  export type IncomeMaxAggregateInputType = {
    id?: true
    date?: true
    price?: true
    quantity?: true
    total?: true
    reportId?: true
  }

  export type IncomeCountAggregateInputType = {
    id?: true
    date?: true
    price?: true
    quantity?: true
    total?: true
    reportId?: true
    _all?: true
  }

  export type IncomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which income to aggregate.
     */
    where?: incomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomeOrderByWithRelationInput | incomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: incomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned incomes
    **/
    _count?: true | IncomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomeMaxAggregateInputType
  }

  export type GetIncomeAggregateType<T extends IncomeAggregateArgs> = {
        [P in keyof T & keyof AggregateIncome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncome[P]>
      : GetScalarType<T[P], AggregateIncome[P]>
  }




  export type incomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incomeWhereInput
    orderBy?: incomeOrderByWithAggregationInput | incomeOrderByWithAggregationInput[]
    by: IncomeScalarFieldEnum[] | IncomeScalarFieldEnum
    having?: incomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomeCountAggregateInputType | true
    _avg?: IncomeAvgAggregateInputType
    _sum?: IncomeSumAggregateInputType
    _min?: IncomeMinAggregateInputType
    _max?: IncomeMaxAggregateInputType
  }

  export type IncomeGroupByOutputType = {
    id: string
    date: string
    price: number
    quantity: number
    total: number
    reportId: string | null
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  type GetIncomeGroupByPayload<T extends incomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomeGroupByOutputType[P]>
            : GetScalarType<T[P], IncomeGroupByOutputType[P]>
        }
      >
    >


  export type incomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    price?: boolean
    quantity?: boolean
    total?: boolean
    reportId?: boolean
    report?: boolean | income$reportArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>



  export type incomeSelectScalar = {
    id?: boolean
    date?: boolean
    price?: boolean
    quantity?: boolean
    total?: boolean
    reportId?: boolean
  }

  export type incomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "price" | "quantity" | "total" | "reportId", ExtArgs["result"]["income"]>
  export type incomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | income$reportArgs<ExtArgs>
  }

  export type $incomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "income"
    objects: {
      report: Prisma.$reportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: string
      price: number
      quantity: number
      total: number
      reportId: string | null
    }, ExtArgs["result"]["income"]>
    composites: {}
  }

  type incomeGetPayload<S extends boolean | null | undefined | incomeDefaultArgs> = $Result.GetResult<Prisma.$incomePayload, S>

  type incomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<incomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncomeCountAggregateInputType | true
    }

  export interface incomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['income'], meta: { name: 'income' } }
    /**
     * Find zero or one Income that matches the filter.
     * @param {incomeFindUniqueArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends incomeFindUniqueArgs>(args: SelectSubset<T, incomeFindUniqueArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Income that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {incomeFindUniqueOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends incomeFindUniqueOrThrowArgs>(args: SelectSubset<T, incomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeFindFirstArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends incomeFindFirstArgs>(args?: SelectSubset<T, incomeFindFirstArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeFindFirstOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends incomeFindFirstOrThrowArgs>(args?: SelectSubset<T, incomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incomes
     * const incomes = await prisma.income.findMany()
     * 
     * // Get first 10 Incomes
     * const incomes = await prisma.income.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incomeWithIdOnly = await prisma.income.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends incomeFindManyArgs>(args?: SelectSubset<T, incomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Income.
     * @param {incomeCreateArgs} args - Arguments to create a Income.
     * @example
     * // Create one Income
     * const Income = await prisma.income.create({
     *   data: {
     *     // ... data to create a Income
     *   }
     * })
     * 
     */
    create<T extends incomeCreateArgs>(args: SelectSubset<T, incomeCreateArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incomes.
     * @param {incomeCreateManyArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends incomeCreateManyArgs>(args?: SelectSubset<T, incomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Income.
     * @param {incomeDeleteArgs} args - Arguments to delete one Income.
     * @example
     * // Delete one Income
     * const Income = await prisma.income.delete({
     *   where: {
     *     // ... filter to delete one Income
     *   }
     * })
     * 
     */
    delete<T extends incomeDeleteArgs>(args: SelectSubset<T, incomeDeleteArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Income.
     * @param {incomeUpdateArgs} args - Arguments to update one Income.
     * @example
     * // Update one Income
     * const income = await prisma.income.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends incomeUpdateArgs>(args: SelectSubset<T, incomeUpdateArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incomes.
     * @param {incomeDeleteManyArgs} args - Arguments to filter Incomes to delete.
     * @example
     * // Delete a few Incomes
     * const { count } = await prisma.income.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends incomeDeleteManyArgs>(args?: SelectSubset<T, incomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incomes
     * const income = await prisma.income.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends incomeUpdateManyArgs>(args: SelectSubset<T, incomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Income.
     * @param {incomeUpsertArgs} args - Arguments to update or create a Income.
     * @example
     * // Update or create a Income
     * const income = await prisma.income.upsert({
     *   create: {
     *     // ... data to create a Income
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Income we want to update
     *   }
     * })
     */
    upsert<T extends incomeUpsertArgs>(args: SelectSubset<T, incomeUpsertArgs<ExtArgs>>): Prisma__incomeClient<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incomes that matches the filter.
     * @param {incomeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const income = await prisma.income.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: incomeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Income.
     * @param {incomeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const income = await prisma.income.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: incomeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeCountArgs} args - Arguments to filter Incomes to count.
     * @example
     * // Count the number of Incomes
     * const count = await prisma.income.count({
     *   where: {
     *     // ... the filter for the Incomes we want to count
     *   }
     * })
    **/
    count<T extends incomeCountArgs>(
      args?: Subset<T, incomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncomeAggregateArgs>(args: Subset<T, IncomeAggregateArgs>): Prisma.PrismaPromise<GetIncomeAggregateType<T>>

    /**
     * Group by Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends incomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: incomeGroupByArgs['orderBy'] }
        : { orderBy?: incomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, incomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the income model
   */
  readonly fields: incomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for income.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__incomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends income$reportArgs<ExtArgs> = {}>(args?: Subset<T, income$reportArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the income model
   */
  interface incomeFieldRefs {
    readonly id: FieldRef<"income", 'String'>
    readonly date: FieldRef<"income", 'String'>
    readonly price: FieldRef<"income", 'Float'>
    readonly quantity: FieldRef<"income", 'Float'>
    readonly total: FieldRef<"income", 'Float'>
    readonly reportId: FieldRef<"income", 'String'>
  }
    

  // Custom InputTypes
  /**
   * income findUnique
   */
  export type incomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
    /**
     * Filter, which income to fetch.
     */
    where: incomeWhereUniqueInput
  }

  /**
   * income findUniqueOrThrow
   */
  export type incomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
    /**
     * Filter, which income to fetch.
     */
    where: incomeWhereUniqueInput
  }

  /**
   * income findFirst
   */
  export type incomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
    /**
     * Filter, which income to fetch.
     */
    where?: incomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomeOrderByWithRelationInput | incomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incomes.
     */
    cursor?: incomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * income findFirstOrThrow
   */
  export type incomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
    /**
     * Filter, which income to fetch.
     */
    where?: incomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomeOrderByWithRelationInput | incomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incomes.
     */
    cursor?: incomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * income findMany
   */
  export type incomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
    /**
     * Filter, which incomes to fetch.
     */
    where?: incomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomeOrderByWithRelationInput | incomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing incomes.
     */
    cursor?: incomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * income create
   */
  export type incomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
    /**
     * The data needed to create a income.
     */
    data: XOR<incomeCreateInput, incomeUncheckedCreateInput>
  }

  /**
   * income createMany
   */
  export type incomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many incomes.
     */
    data: incomeCreateManyInput | incomeCreateManyInput[]
  }

  /**
   * income update
   */
  export type incomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
    /**
     * The data needed to update a income.
     */
    data: XOR<incomeUpdateInput, incomeUncheckedUpdateInput>
    /**
     * Choose, which income to update.
     */
    where: incomeWhereUniqueInput
  }

  /**
   * income updateMany
   */
  export type incomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update incomes.
     */
    data: XOR<incomeUpdateManyMutationInput, incomeUncheckedUpdateManyInput>
    /**
     * Filter which incomes to update
     */
    where?: incomeWhereInput
    /**
     * Limit how many incomes to update.
     */
    limit?: number
  }

  /**
   * income upsert
   */
  export type incomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
    /**
     * The filter to search for the income to update in case it exists.
     */
    where: incomeWhereUniqueInput
    /**
     * In case the income found by the `where` argument doesn't exist, create a new income with this data.
     */
    create: XOR<incomeCreateInput, incomeUncheckedCreateInput>
    /**
     * In case the income was found with the provided `where` argument, update it with this data.
     */
    update: XOR<incomeUpdateInput, incomeUncheckedUpdateInput>
  }

  /**
   * income delete
   */
  export type incomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
    /**
     * Filter which income to delete.
     */
    where: incomeWhereUniqueInput
  }

  /**
   * income deleteMany
   */
  export type incomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incomes to delete
     */
    where?: incomeWhereInput
    /**
     * Limit how many incomes to delete.
     */
    limit?: number
  }

  /**
   * income findRaw
   */
  export type incomeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * income aggregateRaw
   */
  export type incomeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * income.report
   */
  export type income$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
  }

  /**
   * income without action
   */
  export type incomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
  }


  /**
   * Model outcome
   */

  export type AggregateOutcome = {
    _count: OutcomeCountAggregateOutputType | null
    _avg: OutcomeAvgAggregateOutputType | null
    _sum: OutcomeSumAggregateOutputType | null
    _min: OutcomeMinAggregateOutputType | null
    _max: OutcomeMaxAggregateOutputType | null
  }

  export type OutcomeAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
    total: number | null
  }

  export type OutcomeSumAggregateOutputType = {
    price: number | null
    quantity: number | null
    total: number | null
  }

  export type OutcomeMinAggregateOutputType = {
    id: string | null
    date: string | null
    price: number | null
    quantity: number | null
    total: number | null
    reportId: string | null
  }

  export type OutcomeMaxAggregateOutputType = {
    id: string | null
    date: string | null
    price: number | null
    quantity: number | null
    total: number | null
    reportId: string | null
  }

  export type OutcomeCountAggregateOutputType = {
    id: number
    date: number
    price: number
    quantity: number
    total: number
    reportId: number
    _all: number
  }


  export type OutcomeAvgAggregateInputType = {
    price?: true
    quantity?: true
    total?: true
  }

  export type OutcomeSumAggregateInputType = {
    price?: true
    quantity?: true
    total?: true
  }

  export type OutcomeMinAggregateInputType = {
    id?: true
    date?: true
    price?: true
    quantity?: true
    total?: true
    reportId?: true
  }

  export type OutcomeMaxAggregateInputType = {
    id?: true
    date?: true
    price?: true
    quantity?: true
    total?: true
    reportId?: true
  }

  export type OutcomeCountAggregateInputType = {
    id?: true
    date?: true
    price?: true
    quantity?: true
    total?: true
    reportId?: true
    _all?: true
  }

  export type OutcomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which outcome to aggregate.
     */
    where?: outcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outcomes to fetch.
     */
    orderBy?: outcomeOrderByWithRelationInput | outcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: outcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned outcomes
    **/
    _count?: true | OutcomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutcomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutcomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutcomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutcomeMaxAggregateInputType
  }

  export type GetOutcomeAggregateType<T extends OutcomeAggregateArgs> = {
        [P in keyof T & keyof AggregateOutcome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutcome[P]>
      : GetScalarType<T[P], AggregateOutcome[P]>
  }




  export type outcomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: outcomeWhereInput
    orderBy?: outcomeOrderByWithAggregationInput | outcomeOrderByWithAggregationInput[]
    by: OutcomeScalarFieldEnum[] | OutcomeScalarFieldEnum
    having?: outcomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutcomeCountAggregateInputType | true
    _avg?: OutcomeAvgAggregateInputType
    _sum?: OutcomeSumAggregateInputType
    _min?: OutcomeMinAggregateInputType
    _max?: OutcomeMaxAggregateInputType
  }

  export type OutcomeGroupByOutputType = {
    id: string
    date: string
    price: number
    quantity: number
    total: number
    reportId: string | null
    _count: OutcomeCountAggregateOutputType | null
    _avg: OutcomeAvgAggregateOutputType | null
    _sum: OutcomeSumAggregateOutputType | null
    _min: OutcomeMinAggregateOutputType | null
    _max: OutcomeMaxAggregateOutputType | null
  }

  type GetOutcomeGroupByPayload<T extends outcomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutcomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutcomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutcomeGroupByOutputType[P]>
            : GetScalarType<T[P], OutcomeGroupByOutputType[P]>
        }
      >
    >


  export type outcomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    price?: boolean
    quantity?: boolean
    total?: boolean
    reportId?: boolean
    report?: boolean | outcome$reportArgs<ExtArgs>
  }, ExtArgs["result"]["outcome"]>



  export type outcomeSelectScalar = {
    id?: boolean
    date?: boolean
    price?: boolean
    quantity?: boolean
    total?: boolean
    reportId?: boolean
  }

  export type outcomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "price" | "quantity" | "total" | "reportId", ExtArgs["result"]["outcome"]>
  export type outcomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | outcome$reportArgs<ExtArgs>
  }

  export type $outcomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "outcome"
    objects: {
      report: Prisma.$reportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: string
      price: number
      quantity: number
      total: number
      reportId: string | null
    }, ExtArgs["result"]["outcome"]>
    composites: {}
  }

  type outcomeGetPayload<S extends boolean | null | undefined | outcomeDefaultArgs> = $Result.GetResult<Prisma.$outcomePayload, S>

  type outcomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<outcomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutcomeCountAggregateInputType | true
    }

  export interface outcomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['outcome'], meta: { name: 'outcome' } }
    /**
     * Find zero or one Outcome that matches the filter.
     * @param {outcomeFindUniqueArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends outcomeFindUniqueArgs>(args: SelectSubset<T, outcomeFindUniqueArgs<ExtArgs>>): Prisma__outcomeClient<$Result.GetResult<Prisma.$outcomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outcome that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {outcomeFindUniqueOrThrowArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends outcomeFindUniqueOrThrowArgs>(args: SelectSubset<T, outcomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__outcomeClient<$Result.GetResult<Prisma.$outcomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outcome that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outcomeFindFirstArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends outcomeFindFirstArgs>(args?: SelectSubset<T, outcomeFindFirstArgs<ExtArgs>>): Prisma__outcomeClient<$Result.GetResult<Prisma.$outcomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outcome that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outcomeFindFirstOrThrowArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends outcomeFindFirstOrThrowArgs>(args?: SelectSubset<T, outcomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__outcomeClient<$Result.GetResult<Prisma.$outcomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outcomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outcomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outcomes
     * const outcomes = await prisma.outcome.findMany()
     * 
     * // Get first 10 Outcomes
     * const outcomes = await prisma.outcome.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outcomeWithIdOnly = await prisma.outcome.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends outcomeFindManyArgs>(args?: SelectSubset<T, outcomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$outcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outcome.
     * @param {outcomeCreateArgs} args - Arguments to create a Outcome.
     * @example
     * // Create one Outcome
     * const Outcome = await prisma.outcome.create({
     *   data: {
     *     // ... data to create a Outcome
     *   }
     * })
     * 
     */
    create<T extends outcomeCreateArgs>(args: SelectSubset<T, outcomeCreateArgs<ExtArgs>>): Prisma__outcomeClient<$Result.GetResult<Prisma.$outcomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outcomes.
     * @param {outcomeCreateManyArgs} args - Arguments to create many Outcomes.
     * @example
     * // Create many Outcomes
     * const outcome = await prisma.outcome.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends outcomeCreateManyArgs>(args?: SelectSubset<T, outcomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Outcome.
     * @param {outcomeDeleteArgs} args - Arguments to delete one Outcome.
     * @example
     * // Delete one Outcome
     * const Outcome = await prisma.outcome.delete({
     *   where: {
     *     // ... filter to delete one Outcome
     *   }
     * })
     * 
     */
    delete<T extends outcomeDeleteArgs>(args: SelectSubset<T, outcomeDeleteArgs<ExtArgs>>): Prisma__outcomeClient<$Result.GetResult<Prisma.$outcomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outcome.
     * @param {outcomeUpdateArgs} args - Arguments to update one Outcome.
     * @example
     * // Update one Outcome
     * const outcome = await prisma.outcome.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends outcomeUpdateArgs>(args: SelectSubset<T, outcomeUpdateArgs<ExtArgs>>): Prisma__outcomeClient<$Result.GetResult<Prisma.$outcomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outcomes.
     * @param {outcomeDeleteManyArgs} args - Arguments to filter Outcomes to delete.
     * @example
     * // Delete a few Outcomes
     * const { count } = await prisma.outcome.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends outcomeDeleteManyArgs>(args?: SelectSubset<T, outcomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outcomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outcomes
     * const outcome = await prisma.outcome.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends outcomeUpdateManyArgs>(args: SelectSubset<T, outcomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outcome.
     * @param {outcomeUpsertArgs} args - Arguments to update or create a Outcome.
     * @example
     * // Update or create a Outcome
     * const outcome = await prisma.outcome.upsert({
     *   create: {
     *     // ... data to create a Outcome
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outcome we want to update
     *   }
     * })
     */
    upsert<T extends outcomeUpsertArgs>(args: SelectSubset<T, outcomeUpsertArgs<ExtArgs>>): Prisma__outcomeClient<$Result.GetResult<Prisma.$outcomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outcomes that matches the filter.
     * @param {outcomeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const outcome = await prisma.outcome.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: outcomeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Outcome.
     * @param {outcomeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const outcome = await prisma.outcome.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: outcomeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Outcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outcomeCountArgs} args - Arguments to filter Outcomes to count.
     * @example
     * // Count the number of Outcomes
     * const count = await prisma.outcome.count({
     *   where: {
     *     // ... the filter for the Outcomes we want to count
     *   }
     * })
    **/
    count<T extends outcomeCountArgs>(
      args?: Subset<T, outcomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutcomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutcomeAggregateArgs>(args: Subset<T, OutcomeAggregateArgs>): Prisma.PrismaPromise<GetOutcomeAggregateType<T>>

    /**
     * Group by Outcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outcomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends outcomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: outcomeGroupByArgs['orderBy'] }
        : { orderBy?: outcomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, outcomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutcomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the outcome model
   */
  readonly fields: outcomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for outcome.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__outcomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends outcome$reportArgs<ExtArgs> = {}>(args?: Subset<T, outcome$reportArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the outcome model
   */
  interface outcomeFieldRefs {
    readonly id: FieldRef<"outcome", 'String'>
    readonly date: FieldRef<"outcome", 'String'>
    readonly price: FieldRef<"outcome", 'Float'>
    readonly quantity: FieldRef<"outcome", 'Float'>
    readonly total: FieldRef<"outcome", 'Float'>
    readonly reportId: FieldRef<"outcome", 'String'>
  }
    

  // Custom InputTypes
  /**
   * outcome findUnique
   */
  export type outcomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
    /**
     * Filter, which outcome to fetch.
     */
    where: outcomeWhereUniqueInput
  }

  /**
   * outcome findUniqueOrThrow
   */
  export type outcomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
    /**
     * Filter, which outcome to fetch.
     */
    where: outcomeWhereUniqueInput
  }

  /**
   * outcome findFirst
   */
  export type outcomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
    /**
     * Filter, which outcome to fetch.
     */
    where?: outcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outcomes to fetch.
     */
    orderBy?: outcomeOrderByWithRelationInput | outcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for outcomes.
     */
    cursor?: outcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of outcomes.
     */
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * outcome findFirstOrThrow
   */
  export type outcomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
    /**
     * Filter, which outcome to fetch.
     */
    where?: outcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outcomes to fetch.
     */
    orderBy?: outcomeOrderByWithRelationInput | outcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for outcomes.
     */
    cursor?: outcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of outcomes.
     */
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * outcome findMany
   */
  export type outcomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
    /**
     * Filter, which outcomes to fetch.
     */
    where?: outcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outcomes to fetch.
     */
    orderBy?: outcomeOrderByWithRelationInput | outcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing outcomes.
     */
    cursor?: outcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outcomes.
     */
    skip?: number
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * outcome create
   */
  export type outcomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
    /**
     * The data needed to create a outcome.
     */
    data: XOR<outcomeCreateInput, outcomeUncheckedCreateInput>
  }

  /**
   * outcome createMany
   */
  export type outcomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many outcomes.
     */
    data: outcomeCreateManyInput | outcomeCreateManyInput[]
  }

  /**
   * outcome update
   */
  export type outcomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
    /**
     * The data needed to update a outcome.
     */
    data: XOR<outcomeUpdateInput, outcomeUncheckedUpdateInput>
    /**
     * Choose, which outcome to update.
     */
    where: outcomeWhereUniqueInput
  }

  /**
   * outcome updateMany
   */
  export type outcomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update outcomes.
     */
    data: XOR<outcomeUpdateManyMutationInput, outcomeUncheckedUpdateManyInput>
    /**
     * Filter which outcomes to update
     */
    where?: outcomeWhereInput
    /**
     * Limit how many outcomes to update.
     */
    limit?: number
  }

  /**
   * outcome upsert
   */
  export type outcomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
    /**
     * The filter to search for the outcome to update in case it exists.
     */
    where: outcomeWhereUniqueInput
    /**
     * In case the outcome found by the `where` argument doesn't exist, create a new outcome with this data.
     */
    create: XOR<outcomeCreateInput, outcomeUncheckedCreateInput>
    /**
     * In case the outcome was found with the provided `where` argument, update it with this data.
     */
    update: XOR<outcomeUpdateInput, outcomeUncheckedUpdateInput>
  }

  /**
   * outcome delete
   */
  export type outcomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
    /**
     * Filter which outcome to delete.
     */
    where: outcomeWhereUniqueInput
  }

  /**
   * outcome deleteMany
   */
  export type outcomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which outcomes to delete
     */
    where?: outcomeWhereInput
    /**
     * Limit how many outcomes to delete.
     */
    limit?: number
  }

  /**
   * outcome findRaw
   */
  export type outcomeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * outcome aggregateRaw
   */
  export type outcomeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * outcome.report
   */
  export type outcome$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
  }

  /**
   * outcome without action
   */
  export type outcomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
  }


  /**
   * Model report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report to aggregate.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type reportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
    orderBy?: reportOrderByWithAggregationInput | reportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: reportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends reportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type reportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incomes?: boolean | report$incomesArgs<ExtArgs>
    outcomes?: boolean | report$outcomesArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>



  export type reportSelectScalar = {
    id?: boolean
  }

  export type reportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["report"]>
  export type reportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomes?: boolean | report$incomesArgs<ExtArgs>
    outcomes?: boolean | report$outcomesArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $reportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "report"
    objects: {
      incomes: Prisma.$incomePayload<ExtArgs>[]
      outcomes: Prisma.$outcomePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type reportGetPayload<S extends boolean | null | undefined | reportDefaultArgs> = $Result.GetResult<Prisma.$reportPayload, S>

  type reportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface reportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['report'], meta: { name: 'report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {reportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportFindUniqueArgs>(args: SelectSubset<T, reportFindUniqueArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportFindUniqueOrThrowArgs>(args: SelectSubset<T, reportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportFindFirstArgs>(args?: SelectSubset<T, reportFindFirstArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportFindFirstOrThrowArgs>(args?: SelectSubset<T, reportFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reportFindManyArgs>(args?: SelectSubset<T, reportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {reportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends reportCreateArgs>(args: SelectSubset<T, reportCreateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {reportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportCreateManyArgs>(args?: SelectSubset<T, reportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {reportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends reportDeleteArgs>(args: SelectSubset<T, reportDeleteArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {reportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportUpdateArgs>(args: SelectSubset<T, reportUpdateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {reportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportDeleteManyArgs>(args?: SelectSubset<T, reportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportUpdateManyArgs>(args: SelectSubset<T, reportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {reportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends reportUpsertArgs>(args: SelectSubset<T, reportUpsertArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * @param {reportFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const report = await prisma.report.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: reportFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Report.
     * @param {reportAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const report = await prisma.report.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: reportAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends reportCountArgs>(
      args?: Subset<T, reportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportGroupByArgs['orderBy'] }
        : { orderBy?: reportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the report model
   */
  readonly fields: reportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incomes<T extends report$incomesArgs<ExtArgs> = {}>(args?: Subset<T, report$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outcomes<T extends report$outcomesArgs<ExtArgs> = {}>(args?: Subset<T, report$outcomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$outcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the report model
   */
  interface reportFieldRefs {
    readonly id: FieldRef<"report", 'String'>
  }
    

  // Custom InputTypes
  /**
   * report findUnique
   */
  export type reportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findUniqueOrThrow
   */
  export type reportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findFirst
   */
  export type reportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findFirstOrThrow
   */
  export type reportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findMany
   */
  export type reportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report create
   */
  export type reportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to create a report.
     */
    data?: XOR<reportCreateInput, reportUncheckedCreateInput>
  }

  /**
   * report createMany
   */
  export type reportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reports.
     */
    data: reportCreateManyInput | reportCreateManyInput[]
  }

  /**
   * report update
   */
  export type reportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to update a report.
     */
    data: XOR<reportUpdateInput, reportUncheckedUpdateInput>
    /**
     * Choose, which report to update.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report updateMany
   */
  export type reportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reports.
     */
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
  }

  /**
   * report upsert
   */
  export type reportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The filter to search for the report to update in case it exists.
     */
    where: reportWhereUniqueInput
    /**
     * In case the report found by the `where` argument doesn't exist, create a new report with this data.
     */
    create: XOR<reportCreateInput, reportUncheckedCreateInput>
    /**
     * In case the report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportUpdateInput, reportUncheckedUpdateInput>
  }

  /**
   * report delete
   */
  export type reportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter which report to delete.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report deleteMany
   */
  export type reportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to delete
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to delete.
     */
    limit?: number
  }

  /**
   * report findRaw
   */
  export type reportFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * report aggregateRaw
   */
  export type reportAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * report.incomes
   */
  export type report$incomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income
     */
    select?: incomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income
     */
    omit?: incomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomeInclude<ExtArgs> | null
    where?: incomeWhereInput
    orderBy?: incomeOrderByWithRelationInput | incomeOrderByWithRelationInput[]
    cursor?: incomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * report.outcomes
   */
  export type report$outcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outcome
     */
    select?: outcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outcome
     */
    omit?: outcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outcomeInclude<ExtArgs> | null
    where?: outcomeWhereInput
    orderBy?: outcomeOrderByWithRelationInput | outcomeOrderByWithRelationInput[]
    cursor?: outcomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * report without action
   */
  export type reportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    username: 'username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IncomeScalarFieldEnum: {
    id: 'id',
    date: 'date',
    price: 'price',
    quantity: 'quantity',
    total: 'total',
    reportId: 'reportId'
  };

  export type IncomeScalarFieldEnum = (typeof IncomeScalarFieldEnum)[keyof typeof IncomeScalarFieldEnum]


  export const OutcomeScalarFieldEnum: {
    id: 'id',
    date: 'date',
    price: 'price',
    quantity: 'quantity',
    total: 'total',
    reportId: 'reportId'
  };

  export type OutcomeScalarFieldEnum = (typeof OutcomeScalarFieldEnum)[keyof typeof OutcomeScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    username?: SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    username?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
  }

  export type incomeWhereInput = {
    AND?: incomeWhereInput | incomeWhereInput[]
    OR?: incomeWhereInput[]
    NOT?: incomeWhereInput | incomeWhereInput[]
    id?: StringFilter<"income"> | string
    date?: StringFilter<"income"> | string
    price?: FloatFilter<"income"> | number
    quantity?: FloatFilter<"income"> | number
    total?: FloatFilter<"income"> | number
    reportId?: StringNullableFilter<"income"> | string | null
    report?: XOR<ReportNullableScalarRelationFilter, reportWhereInput> | null
  }

  export type incomeOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    reportId?: SortOrder
    report?: reportOrderByWithRelationInput
  }

  export type incomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: incomeWhereInput | incomeWhereInput[]
    OR?: incomeWhereInput[]
    NOT?: incomeWhereInput | incomeWhereInput[]
    date?: StringFilter<"income"> | string
    price?: FloatFilter<"income"> | number
    quantity?: FloatFilter<"income"> | number
    total?: FloatFilter<"income"> | number
    reportId?: StringNullableFilter<"income"> | string | null
    report?: XOR<ReportNullableScalarRelationFilter, reportWhereInput> | null
  }, "id">

  export type incomeOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    reportId?: SortOrder
    _count?: incomeCountOrderByAggregateInput
    _avg?: incomeAvgOrderByAggregateInput
    _max?: incomeMaxOrderByAggregateInput
    _min?: incomeMinOrderByAggregateInput
    _sum?: incomeSumOrderByAggregateInput
  }

  export type incomeScalarWhereWithAggregatesInput = {
    AND?: incomeScalarWhereWithAggregatesInput | incomeScalarWhereWithAggregatesInput[]
    OR?: incomeScalarWhereWithAggregatesInput[]
    NOT?: incomeScalarWhereWithAggregatesInput | incomeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"income"> | string
    date?: StringWithAggregatesFilter<"income"> | string
    price?: FloatWithAggregatesFilter<"income"> | number
    quantity?: FloatWithAggregatesFilter<"income"> | number
    total?: FloatWithAggregatesFilter<"income"> | number
    reportId?: StringNullableWithAggregatesFilter<"income"> | string | null
  }

  export type outcomeWhereInput = {
    AND?: outcomeWhereInput | outcomeWhereInput[]
    OR?: outcomeWhereInput[]
    NOT?: outcomeWhereInput | outcomeWhereInput[]
    id?: StringFilter<"outcome"> | string
    date?: StringFilter<"outcome"> | string
    price?: FloatFilter<"outcome"> | number
    quantity?: FloatFilter<"outcome"> | number
    total?: FloatFilter<"outcome"> | number
    reportId?: StringNullableFilter<"outcome"> | string | null
    report?: XOR<ReportNullableScalarRelationFilter, reportWhereInput> | null
  }

  export type outcomeOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    reportId?: SortOrder
    report?: reportOrderByWithRelationInput
  }

  export type outcomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: outcomeWhereInput | outcomeWhereInput[]
    OR?: outcomeWhereInput[]
    NOT?: outcomeWhereInput | outcomeWhereInput[]
    date?: StringFilter<"outcome"> | string
    price?: FloatFilter<"outcome"> | number
    quantity?: FloatFilter<"outcome"> | number
    total?: FloatFilter<"outcome"> | number
    reportId?: StringNullableFilter<"outcome"> | string | null
    report?: XOR<ReportNullableScalarRelationFilter, reportWhereInput> | null
  }, "id">

  export type outcomeOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    reportId?: SortOrder
    _count?: outcomeCountOrderByAggregateInput
    _avg?: outcomeAvgOrderByAggregateInput
    _max?: outcomeMaxOrderByAggregateInput
    _min?: outcomeMinOrderByAggregateInput
    _sum?: outcomeSumOrderByAggregateInput
  }

  export type outcomeScalarWhereWithAggregatesInput = {
    AND?: outcomeScalarWhereWithAggregatesInput | outcomeScalarWhereWithAggregatesInput[]
    OR?: outcomeScalarWhereWithAggregatesInput[]
    NOT?: outcomeScalarWhereWithAggregatesInput | outcomeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"outcome"> | string
    date?: StringWithAggregatesFilter<"outcome"> | string
    price?: FloatWithAggregatesFilter<"outcome"> | number
    quantity?: FloatWithAggregatesFilter<"outcome"> | number
    total?: FloatWithAggregatesFilter<"outcome"> | number
    reportId?: StringNullableWithAggregatesFilter<"outcome"> | string | null
  }

  export type reportWhereInput = {
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    id?: StringFilter<"report"> | string
    incomes?: IncomeListRelationFilter
    outcomes?: OutcomeListRelationFilter
  }

  export type reportOrderByWithRelationInput = {
    id?: SortOrder
    incomes?: incomeOrderByRelationAggregateInput
    outcomes?: outcomeOrderByRelationAggregateInput
  }

  export type reportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    incomes?: IncomeListRelationFilter
    outcomes?: OutcomeListRelationFilter
  }, "id">

  export type reportOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: reportCountOrderByAggregateInput
    _max?: reportMaxOrderByAggregateInput
    _min?: reportMinOrderByAggregateInput
  }

  export type reportScalarWhereWithAggregatesInput = {
    AND?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    OR?: reportScalarWhereWithAggregatesInput[]
    NOT?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"report"> | string
  }

  export type userCreateInput = {
    id?: string
    name: string
    password: string
    username: string
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    username: string
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    password: string
    username: string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type incomeCreateInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
    report?: reportCreateNestedOneWithoutIncomesInput
  }

  export type incomeUncheckedCreateInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
    reportId?: string | null
  }

  export type incomeUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    report?: reportUpdateOneWithoutIncomesNestedInput
  }

  export type incomeUncheckedUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type incomeCreateManyInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
    reportId?: string | null
  }

  export type incomeUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type incomeUncheckedUpdateManyInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type outcomeCreateInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
    report?: reportCreateNestedOneWithoutOutcomesInput
  }

  export type outcomeUncheckedCreateInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
    reportId?: string | null
  }

  export type outcomeUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    report?: reportUpdateOneWithoutOutcomesNestedInput
  }

  export type outcomeUncheckedUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type outcomeCreateManyInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
    reportId?: string | null
  }

  export type outcomeUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type outcomeUncheckedUpdateManyInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reportCreateInput = {
    id?: string
    incomes?: incomeCreateNestedManyWithoutReportInput
    outcomes?: outcomeCreateNestedManyWithoutReportInput
  }

  export type reportUncheckedCreateInput = {
    id?: string
    incomes?: incomeUncheckedCreateNestedManyWithoutReportInput
    outcomes?: outcomeUncheckedCreateNestedManyWithoutReportInput
  }

  export type reportUpdateInput = {
    incomes?: incomeUpdateManyWithoutReportNestedInput
    outcomes?: outcomeUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateInput = {
    incomes?: incomeUncheckedUpdateManyWithoutReportNestedInput
    outcomes?: outcomeUncheckedUpdateManyWithoutReportNestedInput
  }

  export type reportCreateManyInput = {
    id?: string
  }

  export type reportUpdateManyMutationInput = {

  }

  export type reportUncheckedUpdateManyInput = {

  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    username?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    username?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    username?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ReportNullableScalarRelationFilter = {
    is?: reportWhereInput | null
    isNot?: reportWhereInput | null
  }

  export type incomeCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    reportId?: SortOrder
  }

  export type incomeAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type incomeMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    reportId?: SortOrder
  }

  export type incomeMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    reportId?: SortOrder
  }

  export type incomeSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type outcomeCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    reportId?: SortOrder
  }

  export type outcomeAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type outcomeMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    reportId?: SortOrder
  }

  export type outcomeMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    reportId?: SortOrder
  }

  export type outcomeSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type IncomeListRelationFilter = {
    every?: incomeWhereInput
    some?: incomeWhereInput
    none?: incomeWhereInput
  }

  export type OutcomeListRelationFilter = {
    every?: outcomeWhereInput
    some?: outcomeWhereInput
    none?: outcomeWhereInput
  }

  export type incomeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type outcomeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reportCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type reportMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type reportMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type reportCreateNestedOneWithoutIncomesInput = {
    create?: XOR<reportCreateWithoutIncomesInput, reportUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: reportCreateOrConnectWithoutIncomesInput
    connect?: reportWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type reportUpdateOneWithoutIncomesNestedInput = {
    create?: XOR<reportCreateWithoutIncomesInput, reportUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: reportCreateOrConnectWithoutIncomesInput
    upsert?: reportUpsertWithoutIncomesInput
    disconnect?: boolean
    delete?: reportWhereInput | boolean
    connect?: reportWhereUniqueInput
    update?: XOR<XOR<reportUpdateToOneWithWhereWithoutIncomesInput, reportUpdateWithoutIncomesInput>, reportUncheckedUpdateWithoutIncomesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type reportCreateNestedOneWithoutOutcomesInput = {
    create?: XOR<reportCreateWithoutOutcomesInput, reportUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: reportCreateOrConnectWithoutOutcomesInput
    connect?: reportWhereUniqueInput
  }

  export type reportUpdateOneWithoutOutcomesNestedInput = {
    create?: XOR<reportCreateWithoutOutcomesInput, reportUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: reportCreateOrConnectWithoutOutcomesInput
    upsert?: reportUpsertWithoutOutcomesInput
    disconnect?: boolean
    delete?: reportWhereInput | boolean
    connect?: reportWhereUniqueInput
    update?: XOR<XOR<reportUpdateToOneWithWhereWithoutOutcomesInput, reportUpdateWithoutOutcomesInput>, reportUncheckedUpdateWithoutOutcomesInput>
  }

  export type incomeCreateNestedManyWithoutReportInput = {
    create?: XOR<incomeCreateWithoutReportInput, incomeUncheckedCreateWithoutReportInput> | incomeCreateWithoutReportInput[] | incomeUncheckedCreateWithoutReportInput[]
    connectOrCreate?: incomeCreateOrConnectWithoutReportInput | incomeCreateOrConnectWithoutReportInput[]
    createMany?: incomeCreateManyReportInputEnvelope
    connect?: incomeWhereUniqueInput | incomeWhereUniqueInput[]
  }

  export type outcomeCreateNestedManyWithoutReportInput = {
    create?: XOR<outcomeCreateWithoutReportInput, outcomeUncheckedCreateWithoutReportInput> | outcomeCreateWithoutReportInput[] | outcomeUncheckedCreateWithoutReportInput[]
    connectOrCreate?: outcomeCreateOrConnectWithoutReportInput | outcomeCreateOrConnectWithoutReportInput[]
    createMany?: outcomeCreateManyReportInputEnvelope
    connect?: outcomeWhereUniqueInput | outcomeWhereUniqueInput[]
  }

  export type incomeUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<incomeCreateWithoutReportInput, incomeUncheckedCreateWithoutReportInput> | incomeCreateWithoutReportInput[] | incomeUncheckedCreateWithoutReportInput[]
    connectOrCreate?: incomeCreateOrConnectWithoutReportInput | incomeCreateOrConnectWithoutReportInput[]
    createMany?: incomeCreateManyReportInputEnvelope
    connect?: incomeWhereUniqueInput | incomeWhereUniqueInput[]
  }

  export type outcomeUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<outcomeCreateWithoutReportInput, outcomeUncheckedCreateWithoutReportInput> | outcomeCreateWithoutReportInput[] | outcomeUncheckedCreateWithoutReportInput[]
    connectOrCreate?: outcomeCreateOrConnectWithoutReportInput | outcomeCreateOrConnectWithoutReportInput[]
    createMany?: outcomeCreateManyReportInputEnvelope
    connect?: outcomeWhereUniqueInput | outcomeWhereUniqueInput[]
  }

  export type incomeUpdateManyWithoutReportNestedInput = {
    create?: XOR<incomeCreateWithoutReportInput, incomeUncheckedCreateWithoutReportInput> | incomeCreateWithoutReportInput[] | incomeUncheckedCreateWithoutReportInput[]
    connectOrCreate?: incomeCreateOrConnectWithoutReportInput | incomeCreateOrConnectWithoutReportInput[]
    upsert?: incomeUpsertWithWhereUniqueWithoutReportInput | incomeUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: incomeCreateManyReportInputEnvelope
    set?: incomeWhereUniqueInput | incomeWhereUniqueInput[]
    disconnect?: incomeWhereUniqueInput | incomeWhereUniqueInput[]
    delete?: incomeWhereUniqueInput | incomeWhereUniqueInput[]
    connect?: incomeWhereUniqueInput | incomeWhereUniqueInput[]
    update?: incomeUpdateWithWhereUniqueWithoutReportInput | incomeUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: incomeUpdateManyWithWhereWithoutReportInput | incomeUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: incomeScalarWhereInput | incomeScalarWhereInput[]
  }

  export type outcomeUpdateManyWithoutReportNestedInput = {
    create?: XOR<outcomeCreateWithoutReportInput, outcomeUncheckedCreateWithoutReportInput> | outcomeCreateWithoutReportInput[] | outcomeUncheckedCreateWithoutReportInput[]
    connectOrCreate?: outcomeCreateOrConnectWithoutReportInput | outcomeCreateOrConnectWithoutReportInput[]
    upsert?: outcomeUpsertWithWhereUniqueWithoutReportInput | outcomeUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: outcomeCreateManyReportInputEnvelope
    set?: outcomeWhereUniqueInput | outcomeWhereUniqueInput[]
    disconnect?: outcomeWhereUniqueInput | outcomeWhereUniqueInput[]
    delete?: outcomeWhereUniqueInput | outcomeWhereUniqueInput[]
    connect?: outcomeWhereUniqueInput | outcomeWhereUniqueInput[]
    update?: outcomeUpdateWithWhereUniqueWithoutReportInput | outcomeUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: outcomeUpdateManyWithWhereWithoutReportInput | outcomeUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: outcomeScalarWhereInput | outcomeScalarWhereInput[]
  }

  export type incomeUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<incomeCreateWithoutReportInput, incomeUncheckedCreateWithoutReportInput> | incomeCreateWithoutReportInput[] | incomeUncheckedCreateWithoutReportInput[]
    connectOrCreate?: incomeCreateOrConnectWithoutReportInput | incomeCreateOrConnectWithoutReportInput[]
    upsert?: incomeUpsertWithWhereUniqueWithoutReportInput | incomeUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: incomeCreateManyReportInputEnvelope
    set?: incomeWhereUniqueInput | incomeWhereUniqueInput[]
    disconnect?: incomeWhereUniqueInput | incomeWhereUniqueInput[]
    delete?: incomeWhereUniqueInput | incomeWhereUniqueInput[]
    connect?: incomeWhereUniqueInput | incomeWhereUniqueInput[]
    update?: incomeUpdateWithWhereUniqueWithoutReportInput | incomeUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: incomeUpdateManyWithWhereWithoutReportInput | incomeUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: incomeScalarWhereInput | incomeScalarWhereInput[]
  }

  export type outcomeUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<outcomeCreateWithoutReportInput, outcomeUncheckedCreateWithoutReportInput> | outcomeCreateWithoutReportInput[] | outcomeUncheckedCreateWithoutReportInput[]
    connectOrCreate?: outcomeCreateOrConnectWithoutReportInput | outcomeCreateOrConnectWithoutReportInput[]
    upsert?: outcomeUpsertWithWhereUniqueWithoutReportInput | outcomeUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: outcomeCreateManyReportInputEnvelope
    set?: outcomeWhereUniqueInput | outcomeWhereUniqueInput[]
    disconnect?: outcomeWhereUniqueInput | outcomeWhereUniqueInput[]
    delete?: outcomeWhereUniqueInput | outcomeWhereUniqueInput[]
    connect?: outcomeWhereUniqueInput | outcomeWhereUniqueInput[]
    update?: outcomeUpdateWithWhereUniqueWithoutReportInput | outcomeUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: outcomeUpdateManyWithWhereWithoutReportInput | outcomeUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: outcomeScalarWhereInput | outcomeScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type reportCreateWithoutIncomesInput = {
    id?: string
    outcomes?: outcomeCreateNestedManyWithoutReportInput
  }

  export type reportUncheckedCreateWithoutIncomesInput = {
    id?: string
    outcomes?: outcomeUncheckedCreateNestedManyWithoutReportInput
  }

  export type reportCreateOrConnectWithoutIncomesInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutIncomesInput, reportUncheckedCreateWithoutIncomesInput>
  }

  export type reportUpsertWithoutIncomesInput = {
    update: XOR<reportUpdateWithoutIncomesInput, reportUncheckedUpdateWithoutIncomesInput>
    create: XOR<reportCreateWithoutIncomesInput, reportUncheckedCreateWithoutIncomesInput>
    where?: reportWhereInput
  }

  export type reportUpdateToOneWithWhereWithoutIncomesInput = {
    where?: reportWhereInput
    data: XOR<reportUpdateWithoutIncomesInput, reportUncheckedUpdateWithoutIncomesInput>
  }

  export type reportUpdateWithoutIncomesInput = {
    outcomes?: outcomeUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutIncomesInput = {
    outcomes?: outcomeUncheckedUpdateManyWithoutReportNestedInput
  }

  export type reportCreateWithoutOutcomesInput = {
    id?: string
    incomes?: incomeCreateNestedManyWithoutReportInput
  }

  export type reportUncheckedCreateWithoutOutcomesInput = {
    id?: string
    incomes?: incomeUncheckedCreateNestedManyWithoutReportInput
  }

  export type reportCreateOrConnectWithoutOutcomesInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutOutcomesInput, reportUncheckedCreateWithoutOutcomesInput>
  }

  export type reportUpsertWithoutOutcomesInput = {
    update: XOR<reportUpdateWithoutOutcomesInput, reportUncheckedUpdateWithoutOutcomesInput>
    create: XOR<reportCreateWithoutOutcomesInput, reportUncheckedCreateWithoutOutcomesInput>
    where?: reportWhereInput
  }

  export type reportUpdateToOneWithWhereWithoutOutcomesInput = {
    where?: reportWhereInput
    data: XOR<reportUpdateWithoutOutcomesInput, reportUncheckedUpdateWithoutOutcomesInput>
  }

  export type reportUpdateWithoutOutcomesInput = {
    incomes?: incomeUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutOutcomesInput = {
    incomes?: incomeUncheckedUpdateManyWithoutReportNestedInput
  }

  export type incomeCreateWithoutReportInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
  }

  export type incomeUncheckedCreateWithoutReportInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
  }

  export type incomeCreateOrConnectWithoutReportInput = {
    where: incomeWhereUniqueInput
    create: XOR<incomeCreateWithoutReportInput, incomeUncheckedCreateWithoutReportInput>
  }

  export type incomeCreateManyReportInputEnvelope = {
    data: incomeCreateManyReportInput | incomeCreateManyReportInput[]
  }

  export type outcomeCreateWithoutReportInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
  }

  export type outcomeUncheckedCreateWithoutReportInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
  }

  export type outcomeCreateOrConnectWithoutReportInput = {
    where: outcomeWhereUniqueInput
    create: XOR<outcomeCreateWithoutReportInput, outcomeUncheckedCreateWithoutReportInput>
  }

  export type outcomeCreateManyReportInputEnvelope = {
    data: outcomeCreateManyReportInput | outcomeCreateManyReportInput[]
  }

  export type incomeUpsertWithWhereUniqueWithoutReportInput = {
    where: incomeWhereUniqueInput
    update: XOR<incomeUpdateWithoutReportInput, incomeUncheckedUpdateWithoutReportInput>
    create: XOR<incomeCreateWithoutReportInput, incomeUncheckedCreateWithoutReportInput>
  }

  export type incomeUpdateWithWhereUniqueWithoutReportInput = {
    where: incomeWhereUniqueInput
    data: XOR<incomeUpdateWithoutReportInput, incomeUncheckedUpdateWithoutReportInput>
  }

  export type incomeUpdateManyWithWhereWithoutReportInput = {
    where: incomeScalarWhereInput
    data: XOR<incomeUpdateManyMutationInput, incomeUncheckedUpdateManyWithoutReportInput>
  }

  export type incomeScalarWhereInput = {
    AND?: incomeScalarWhereInput | incomeScalarWhereInput[]
    OR?: incomeScalarWhereInput[]
    NOT?: incomeScalarWhereInput | incomeScalarWhereInput[]
    id?: StringFilter<"income"> | string
    date?: StringFilter<"income"> | string
    price?: FloatFilter<"income"> | number
    quantity?: FloatFilter<"income"> | number
    total?: FloatFilter<"income"> | number
    reportId?: StringNullableFilter<"income"> | string | null
  }

  export type outcomeUpsertWithWhereUniqueWithoutReportInput = {
    where: outcomeWhereUniqueInput
    update: XOR<outcomeUpdateWithoutReportInput, outcomeUncheckedUpdateWithoutReportInput>
    create: XOR<outcomeCreateWithoutReportInput, outcomeUncheckedCreateWithoutReportInput>
  }

  export type outcomeUpdateWithWhereUniqueWithoutReportInput = {
    where: outcomeWhereUniqueInput
    data: XOR<outcomeUpdateWithoutReportInput, outcomeUncheckedUpdateWithoutReportInput>
  }

  export type outcomeUpdateManyWithWhereWithoutReportInput = {
    where: outcomeScalarWhereInput
    data: XOR<outcomeUpdateManyMutationInput, outcomeUncheckedUpdateManyWithoutReportInput>
  }

  export type outcomeScalarWhereInput = {
    AND?: outcomeScalarWhereInput | outcomeScalarWhereInput[]
    OR?: outcomeScalarWhereInput[]
    NOT?: outcomeScalarWhereInput | outcomeScalarWhereInput[]
    id?: StringFilter<"outcome"> | string
    date?: StringFilter<"outcome"> | string
    price?: FloatFilter<"outcome"> | number
    quantity?: FloatFilter<"outcome"> | number
    total?: FloatFilter<"outcome"> | number
    reportId?: StringNullableFilter<"outcome"> | string | null
  }

  export type incomeCreateManyReportInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
  }

  export type outcomeCreateManyReportInput = {
    id?: string
    date: string
    price: number
    quantity: number
    total: number
  }

  export type incomeUpdateWithoutReportInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type incomeUncheckedUpdateWithoutReportInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type incomeUncheckedUpdateManyWithoutReportInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type outcomeUpdateWithoutReportInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type outcomeUncheckedUpdateWithoutReportInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type outcomeUncheckedUpdateManyWithoutReportInput = {
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}