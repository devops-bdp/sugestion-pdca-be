
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Suggestion
 * 
 */
export type Suggestion = $Result.DefaultSelection<Prisma.$SuggestionPayload>
/**
 * Model SuggestionHistory
 * 
 */
export type SuggestionHistory = $Result.DefaultSelection<Prisma.$SuggestionHistoryPayload>
/**
 * Model FormPenilaian
 * 
 */
export type FormPenilaian = $Result.DefaultSelection<Prisma.$FormPenilaianPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Non_Staff: 'Non_Staff',
  Staff: 'Staff',
  Group_Leader: 'Group_Leader',
  Supervisor: 'Supervisor',
  Dept_Head: 'Dept_Head',
  Project_Manager: 'Project_Manager',
  Super_Admin: 'Super_Admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Department: {
  IT: 'IT',
  HRGA: 'HRGA',
  PLANT: 'PLANT',
  HSE: 'HSE',
  TC: 'TC',
  PRODUKSI: 'PRODUKSI',
  LOGISTIK: 'LOGISTIK',
  ALL_DEPT: 'ALL_DEPT'
};

export type Department = (typeof Department)[keyof typeof Department]


export const PermissionLevel: {
  SUBMITTER: 'SUBMITTER',
  APPROVAL_ONLY: 'APPROVAL_ONLY',
  SCORING_ONLY: 'SCORING_ONLY',
  APPROVAL_SCORING: 'APPROVAL_SCORING',
  FULL_ACCESS: 'FULL_ACCESS'
};

export type PermissionLevel = (typeof PermissionLevel)[keyof typeof PermissionLevel]


export const Position: {
  MEKANIK: 'MEKANIK',
  TYREMAN: 'TYREMAN',
  WELDER: 'WELDER',
  OPERATOR_DT: 'OPERATOR_DT',
  OPERATOR_FT: 'OPERATOR_FT',
  OPERATOR_CT: 'OPERATOR_CT',
  DRIVER_LV: 'DRIVER_LV',
  DRIVER_SARANA: 'DRIVER_SARANA',
  GL_PRODUKSI: 'GL_PRODUKSI',
  GL_LOGISTIK: 'GL_LOGISTIK',
  GL_PLANT: 'GL_PLANT',
  GL_HSE: 'GL_HSE',
  GL_HRGA: 'GL_HRGA',
  PDCA_OFFICER: 'PDCA_OFFICER',
  HRGA_OFFICER: 'HRGA_OFFICER',
  PLANNER: 'PLANNER',
  SPV_PLANT: 'SPV_PLANT',
  SPV_PRODUKSI: 'SPV_PRODUKSI',
  SPV_LOGISTIK: 'SPV_LOGISTIK',
  SPV_HSE: 'SPV_HSE',
  SPV_HRGA: 'SPV_HRGA',
  DEPT_HEAD_PLANT: 'DEPT_HEAD_PLANT',
  DEPT_HEAD_PRODUKSI: 'DEPT_HEAD_PRODUKSI',
  DEPT_HEAD_LOGISTIK: 'DEPT_HEAD_LOGISTIK',
  DEPT_HEAD_HSE: 'DEPT_HEAD_HSE',
  DEPT_HEAD_HRGA: 'DEPT_HEAD_HRGA',
  IT_OFFICER: 'IT_OFFICER',
  IT_MANAGER: 'IT_MANAGER',
  PROJECT_MANAGER: 'PROJECT_MANAGER',
  CCR: 'CCR',
  MOCO: 'MOCO',
  MANAGEMENT_SITE: 'MANAGEMENT_SITE'
};

export type Position = (typeof Position)[keyof typeof Position]


export const KriteriaSS: {
  QUALITY: 'QUALITY',
  COST: 'COST',
  DELIVERY: 'DELIVERY',
  SAFETY: 'SAFETY',
  MORALE: 'MORALE',
  PRODUCTIVITY: 'PRODUCTIVITY'
};

export type KriteriaSS = (typeof KriteriaSS)[keyof typeof KriteriaSS]


export const SifatPerbaikan: {
  MENCIPTAKAN: 'MENCIPTAKAN',
  MENINGKATKAN: 'MENINGKATKAN',
  MENCONTOH: 'MENCONTOH'
};

export type SifatPerbaikan = (typeof SifatPerbaikan)[keyof typeof SifatPerbaikan]


export const StatusIde: {
  DIAJUKAN: 'DIAJUKAN',
  APPROVE: 'APPROVE',
  DINILAI: 'DINILAI'
};

export type StatusIde = (typeof StatusIde)[keyof typeof StatusIde]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Department = $Enums.Department

export const Department: typeof $Enums.Department

export type PermissionLevel = $Enums.PermissionLevel

export const PermissionLevel: typeof $Enums.PermissionLevel

export type Position = $Enums.Position

export const Position: typeof $Enums.Position

export type KriteriaSS = $Enums.KriteriaSS

export const KriteriaSS: typeof $Enums.KriteriaSS

export type SifatPerbaikan = $Enums.SifatPerbaikan

export const SifatPerbaikan: typeof $Enums.SifatPerbaikan

export type StatusIde = $Enums.StatusIde

export const StatusIde: typeof $Enums.StatusIde

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suggestion`: Exposes CRUD operations for the **Suggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suggestions
    * const suggestions = await prisma.suggestion.findMany()
    * ```
    */
  get suggestion(): Prisma.SuggestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suggestionHistory`: Exposes CRUD operations for the **SuggestionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuggestionHistories
    * const suggestionHistories = await prisma.suggestionHistory.findMany()
    * ```
    */
  get suggestionHistory(): Prisma.SuggestionHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formPenilaian`: Exposes CRUD operations for the **FormPenilaian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormPenilaians
    * const formPenilaians = await prisma.formPenilaian.findMany()
    * ```
    */
  get formPenilaian(): Prisma.FormPenilaianDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Suggestion: 'Suggestion',
    SuggestionHistory: 'SuggestionHistory',
    FormPenilaian: 'FormPenilaian'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "suggestion" | "suggestionHistory" | "formPenilaian"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Suggestion: {
        payload: Prisma.$SuggestionPayload<ExtArgs>
        fields: Prisma.SuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          findFirst: {
            args: Prisma.SuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          findMany: {
            args: Prisma.SuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          create: {
            args: Prisma.SuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          createMany: {
            args: Prisma.SuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          delete: {
            args: Prisma.SuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          update: {
            args: Prisma.SuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          deleteMany: {
            args: Prisma.SuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuggestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          upsert: {
            args: Prisma.SuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          aggregate: {
            args: Prisma.SuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuggestion>
          }
          groupBy: {
            args: Prisma.SuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<SuggestionCountAggregateOutputType> | number
          }
        }
      }
      SuggestionHistory: {
        payload: Prisma.$SuggestionHistoryPayload<ExtArgs>
        fields: Prisma.SuggestionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuggestionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuggestionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload>
          }
          findFirst: {
            args: Prisma.SuggestionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuggestionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload>
          }
          findMany: {
            args: Prisma.SuggestionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload>[]
          }
          create: {
            args: Prisma.SuggestionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload>
          }
          createMany: {
            args: Prisma.SuggestionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuggestionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload>[]
          }
          delete: {
            args: Prisma.SuggestionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload>
          }
          update: {
            args: Prisma.SuggestionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.SuggestionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuggestionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuggestionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.SuggestionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionHistoryPayload>
          }
          aggregate: {
            args: Prisma.SuggestionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuggestionHistory>
          }
          groupBy: {
            args: Prisma.SuggestionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuggestionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuggestionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<SuggestionHistoryCountAggregateOutputType> | number
          }
        }
      }
      FormPenilaian: {
        payload: Prisma.$FormPenilaianPayload<ExtArgs>
        fields: Prisma.FormPenilaianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormPenilaianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormPenilaianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload>
          }
          findFirst: {
            args: Prisma.FormPenilaianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormPenilaianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload>
          }
          findMany: {
            args: Prisma.FormPenilaianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload>[]
          }
          create: {
            args: Prisma.FormPenilaianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload>
          }
          createMany: {
            args: Prisma.FormPenilaianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormPenilaianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload>[]
          }
          delete: {
            args: Prisma.FormPenilaianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload>
          }
          update: {
            args: Prisma.FormPenilaianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload>
          }
          deleteMany: {
            args: Prisma.FormPenilaianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormPenilaianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormPenilaianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload>[]
          }
          upsert: {
            args: Prisma.FormPenilaianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPenilaianPayload>
          }
          aggregate: {
            args: Prisma.FormPenilaianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormPenilaian>
          }
          groupBy: {
            args: Prisma.FormPenilaianGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormPenilaianGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormPenilaianCountArgs<ExtArgs>
            result: $Utils.Optional<FormPenilaianCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    user?: UserOmit
    suggestion?: SuggestionOmit
    suggestionHistory?: SuggestionHistoryOmit
    formPenilaian?: FormPenilaianOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    suggestions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestions?: boolean | UserCountOutputTypeCountSuggestionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
  }


  /**
   * Count Type SuggestionCountOutputType
   */

  export type SuggestionCountOutputType = {
    history: number
    penilaian: number
  }

  export type SuggestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | SuggestionCountOutputTypeCountHistoryArgs
    penilaian?: boolean | SuggestionCountOutputTypeCountPenilaianArgs
  }

  // Custom InputTypes
  /**
   * SuggestionCountOutputType without action
   */
  export type SuggestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionCountOutputType
     */
    select?: SuggestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuggestionCountOutputType without action
   */
  export type SuggestionCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionHistoryWhereInput
  }

  /**
   * SuggestionCountOutputType without action
   */
  export type SuggestionCountOutputTypeCountPenilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormPenilaianWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    nrp: number | null
  }

  export type UserSumAggregateOutputType = {
    nrp: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    nrp: bigint | null
    role: $Enums.Role | null
    permissionLevel: $Enums.PermissionLevel | null
    department: $Enums.Department | null
    position: $Enums.Position | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    nrp: bigint | null
    role: $Enums.Role | null
    permissionLevel: $Enums.PermissionLevel | null
    department: $Enums.Department | null
    position: $Enums.Position | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    nrp: number
    role: number
    permissionLevel: number
    department: number
    position: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    nrp?: true
  }

  export type UserSumAggregateInputType = {
    nrp?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nrp?: true
    role?: true
    permissionLevel?: true
    department?: true
    position?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nrp?: true
    role?: true
    permissionLevel?: true
    department?: true
    position?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nrp?: true
    role?: true
    permissionLevel?: true
    department?: true
    position?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    nrp: bigint
    role: $Enums.Role
    permissionLevel: $Enums.PermissionLevel
    department: $Enums.Department
    position: $Enums.Position
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nrp?: boolean
    role?: boolean
    permissionLevel?: boolean
    department?: boolean
    position?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suggestions?: boolean | User$suggestionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nrp?: boolean
    role?: boolean
    permissionLevel?: boolean
    department?: boolean
    position?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nrp?: boolean
    role?: boolean
    permissionLevel?: boolean
    department?: boolean
    position?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nrp?: boolean
    role?: boolean
    permissionLevel?: boolean
    department?: boolean
    position?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "nrp" | "role" | "permissionLevel" | "department" | "position" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestions?: boolean | User$suggestionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      suggestions: Prisma.$SuggestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      nrp: bigint
      role: $Enums.Role
      permissionLevel: $Enums.PermissionLevel
      department: $Enums.Department
      position: $Enums.Position
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suggestions<T extends User$suggestionsArgs<ExtArgs> = {}>(args?: Subset<T, User$suggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly nrp: FieldRef<"User", 'BigInt'>
    readonly role: FieldRef<"User", 'Role'>
    readonly permissionLevel: FieldRef<"User", 'PermissionLevel'>
    readonly department: FieldRef<"User", 'Department'>
    readonly position: FieldRef<"User", 'Position'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.suggestions
   */
  export type User$suggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    cursor?: SuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Suggestion
   */

  export type AggregateSuggestion = {
    _count: SuggestionCountAggregateOutputType | null
    _min: SuggestionMinAggregateOutputType | null
    _max: SuggestionMaxAggregateOutputType | null
  }

  export type SuggestionMinAggregateOutputType = {
    id: string | null
    judulIde: string | null
    masalahYangDihadapi: string | null
    uraianIde: string | null
    ideProsesPerbaikan: string | null
    hasilUraianProses: string | null
    evaluasiIde: string | null
    komentarAtasan: string | null
    fotoSebelum: string | null
    fotoSesudah: string | null
    kriteriaSS: $Enums.KriteriaSS | null
    sifatPerbaikan: $Enums.SifatPerbaikan | null
    statusIde: $Enums.StatusIde | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SuggestionMaxAggregateOutputType = {
    id: string | null
    judulIde: string | null
    masalahYangDihadapi: string | null
    uraianIde: string | null
    ideProsesPerbaikan: string | null
    hasilUraianProses: string | null
    evaluasiIde: string | null
    komentarAtasan: string | null
    fotoSebelum: string | null
    fotoSesudah: string | null
    kriteriaSS: $Enums.KriteriaSS | null
    sifatPerbaikan: $Enums.SifatPerbaikan | null
    statusIde: $Enums.StatusIde | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SuggestionCountAggregateOutputType = {
    id: number
    judulIde: number
    masalahYangDihadapi: number
    uraianIde: number
    ideProsesPerbaikan: number
    hasilUraianProses: number
    evaluasiIde: number
    komentarAtasan: number
    fotoSebelum: number
    fotoSesudah: number
    kriteriaSS: number
    sifatPerbaikan: number
    statusIde: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SuggestionMinAggregateInputType = {
    id?: true
    judulIde?: true
    masalahYangDihadapi?: true
    uraianIde?: true
    ideProsesPerbaikan?: true
    hasilUraianProses?: true
    evaluasiIde?: true
    komentarAtasan?: true
    fotoSebelum?: true
    fotoSesudah?: true
    kriteriaSS?: true
    sifatPerbaikan?: true
    statusIde?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SuggestionMaxAggregateInputType = {
    id?: true
    judulIde?: true
    masalahYangDihadapi?: true
    uraianIde?: true
    ideProsesPerbaikan?: true
    hasilUraianProses?: true
    evaluasiIde?: true
    komentarAtasan?: true
    fotoSebelum?: true
    fotoSesudah?: true
    kriteriaSS?: true
    sifatPerbaikan?: true
    statusIde?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SuggestionCountAggregateInputType = {
    id?: true
    judulIde?: true
    masalahYangDihadapi?: true
    uraianIde?: true
    ideProsesPerbaikan?: true
    hasilUraianProses?: true
    evaluasiIde?: true
    komentarAtasan?: true
    fotoSebelum?: true
    fotoSesudah?: true
    kriteriaSS?: true
    sifatPerbaikan?: true
    statusIde?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suggestion to aggregate.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suggestions
    **/
    _count?: true | SuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuggestionMaxAggregateInputType
  }

  export type GetSuggestionAggregateType<T extends SuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuggestion[P]>
      : GetScalarType<T[P], AggregateSuggestion[P]>
  }




  export type SuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithAggregationInput | SuggestionOrderByWithAggregationInput[]
    by: SuggestionScalarFieldEnum[] | SuggestionScalarFieldEnum
    having?: SuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuggestionCountAggregateInputType | true
    _min?: SuggestionMinAggregateInputType
    _max?: SuggestionMaxAggregateInputType
  }

  export type SuggestionGroupByOutputType = {
    id: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan: string | null
    fotoSebelum: string | null
    fotoSesudah: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde: $Enums.StatusIde
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: SuggestionCountAggregateOutputType | null
    _min: SuggestionMinAggregateOutputType | null
    _max: SuggestionMaxAggregateOutputType | null
  }

  type GetSuggestionGroupByPayload<T extends SuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], SuggestionGroupByOutputType[P]>
        }
      >
    >


  export type SuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judulIde?: boolean
    masalahYangDihadapi?: boolean
    uraianIde?: boolean
    ideProsesPerbaikan?: boolean
    hasilUraianProses?: boolean
    evaluasiIde?: boolean
    komentarAtasan?: boolean
    fotoSebelum?: boolean
    fotoSesudah?: boolean
    kriteriaSS?: boolean
    sifatPerbaikan?: boolean
    statusIde?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    history?: boolean | Suggestion$historyArgs<ExtArgs>
    penilaian?: boolean | Suggestion$penilaianArgs<ExtArgs>
    _count?: boolean | SuggestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judulIde?: boolean
    masalahYangDihadapi?: boolean
    uraianIde?: boolean
    ideProsesPerbaikan?: boolean
    hasilUraianProses?: boolean
    evaluasiIde?: boolean
    komentarAtasan?: boolean
    fotoSebelum?: boolean
    fotoSesudah?: boolean
    kriteriaSS?: boolean
    sifatPerbaikan?: boolean
    statusIde?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judulIde?: boolean
    masalahYangDihadapi?: boolean
    uraianIde?: boolean
    ideProsesPerbaikan?: boolean
    hasilUraianProses?: boolean
    evaluasiIde?: boolean
    komentarAtasan?: boolean
    fotoSebelum?: boolean
    fotoSesudah?: boolean
    kriteriaSS?: boolean
    sifatPerbaikan?: boolean
    statusIde?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectScalar = {
    id?: boolean
    judulIde?: boolean
    masalahYangDihadapi?: boolean
    uraianIde?: boolean
    ideProsesPerbaikan?: boolean
    hasilUraianProses?: boolean
    evaluasiIde?: boolean
    komentarAtasan?: boolean
    fotoSebelum?: boolean
    fotoSesudah?: boolean
    kriteriaSS?: boolean
    sifatPerbaikan?: boolean
    statusIde?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type SuggestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judulIde" | "masalahYangDihadapi" | "uraianIde" | "ideProsesPerbaikan" | "hasilUraianProses" | "evaluasiIde" | "komentarAtasan" | "fotoSebelum" | "fotoSesudah" | "kriteriaSS" | "sifatPerbaikan" | "statusIde" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["suggestion"]>
  export type SuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    history?: boolean | Suggestion$historyArgs<ExtArgs>
    penilaian?: boolean | Suggestion$penilaianArgs<ExtArgs>
    _count?: boolean | SuggestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SuggestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suggestion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      history: Prisma.$SuggestionHistoryPayload<ExtArgs>[]
      penilaian: Prisma.$FormPenilaianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judulIde: string
      masalahYangDihadapi: string
      uraianIde: string
      ideProsesPerbaikan: string
      hasilUraianProses: string
      evaluasiIde: string
      komentarAtasan: string | null
      fotoSebelum: string | null
      fotoSesudah: string | null
      kriteriaSS: $Enums.KriteriaSS
      sifatPerbaikan: $Enums.SifatPerbaikan
      statusIde: $Enums.StatusIde
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["suggestion"]>
    composites: {}
  }

  type SuggestionGetPayload<S extends boolean | null | undefined | SuggestionDefaultArgs> = $Result.GetResult<Prisma.$SuggestionPayload, S>

  type SuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuggestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuggestionCountAggregateInputType | true
    }

  export interface SuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suggestion'], meta: { name: 'Suggestion' } }
    /**
     * Find zero or one Suggestion that matches the filter.
     * @param {SuggestionFindUniqueArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuggestionFindUniqueArgs>(args: SelectSubset<T, SuggestionFindUniqueArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suggestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuggestionFindUniqueOrThrowArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, SuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindFirstArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuggestionFindFirstArgs>(args?: SelectSubset<T, SuggestionFindFirstArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindFirstOrThrowArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, SuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suggestions
     * const suggestions = await prisma.suggestion.findMany()
     * 
     * // Get first 10 Suggestions
     * const suggestions = await prisma.suggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuggestionFindManyArgs>(args?: SelectSubset<T, SuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suggestion.
     * @param {SuggestionCreateArgs} args - Arguments to create a Suggestion.
     * @example
     * // Create one Suggestion
     * const Suggestion = await prisma.suggestion.create({
     *   data: {
     *     // ... data to create a Suggestion
     *   }
     * })
     * 
     */
    create<T extends SuggestionCreateArgs>(args: SelectSubset<T, SuggestionCreateArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suggestions.
     * @param {SuggestionCreateManyArgs} args - Arguments to create many Suggestions.
     * @example
     * // Create many Suggestions
     * const suggestion = await prisma.suggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuggestionCreateManyArgs>(args?: SelectSubset<T, SuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suggestions and returns the data saved in the database.
     * @param {SuggestionCreateManyAndReturnArgs} args - Arguments to create many Suggestions.
     * @example
     * // Create many Suggestions
     * const suggestion = await prisma.suggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suggestions and only return the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, SuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suggestion.
     * @param {SuggestionDeleteArgs} args - Arguments to delete one Suggestion.
     * @example
     * // Delete one Suggestion
     * const Suggestion = await prisma.suggestion.delete({
     *   where: {
     *     // ... filter to delete one Suggestion
     *   }
     * })
     * 
     */
    delete<T extends SuggestionDeleteArgs>(args: SelectSubset<T, SuggestionDeleteArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suggestion.
     * @param {SuggestionUpdateArgs} args - Arguments to update one Suggestion.
     * @example
     * // Update one Suggestion
     * const suggestion = await prisma.suggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuggestionUpdateArgs>(args: SelectSubset<T, SuggestionUpdateArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suggestions.
     * @param {SuggestionDeleteManyArgs} args - Arguments to filter Suggestions to delete.
     * @example
     * // Delete a few Suggestions
     * const { count } = await prisma.suggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuggestionDeleteManyArgs>(args?: SelectSubset<T, SuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suggestions
     * const suggestion = await prisma.suggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuggestionUpdateManyArgs>(args: SelectSubset<T, SuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suggestions and returns the data updated in the database.
     * @param {SuggestionUpdateManyAndReturnArgs} args - Arguments to update many Suggestions.
     * @example
     * // Update many Suggestions
     * const suggestion = await prisma.suggestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suggestions and only return the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuggestionUpdateManyAndReturnArgs>(args: SelectSubset<T, SuggestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suggestion.
     * @param {SuggestionUpsertArgs} args - Arguments to update or create a Suggestion.
     * @example
     * // Update or create a Suggestion
     * const suggestion = await prisma.suggestion.upsert({
     *   create: {
     *     // ... data to create a Suggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suggestion we want to update
     *   }
     * })
     */
    upsert<T extends SuggestionUpsertArgs>(args: SelectSubset<T, SuggestionUpsertArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionCountArgs} args - Arguments to filter Suggestions to count.
     * @example
     * // Count the number of Suggestions
     * const count = await prisma.suggestion.count({
     *   where: {
     *     // ... the filter for the Suggestions we want to count
     *   }
     * })
    **/
    count<T extends SuggestionCountArgs>(
      args?: Subset<T, SuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuggestionAggregateArgs>(args: Subset<T, SuggestionAggregateArgs>): Prisma.PrismaPromise<GetSuggestionAggregateType<T>>

    /**
     * Group by Suggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionGroupByArgs} args - Group by arguments.
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
      T extends SuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuggestionGroupByArgs['orderBy'] }
        : { orderBy?: SuggestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suggestion model
   */
  readonly fields: SuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends Suggestion$historyArgs<ExtArgs> = {}>(args?: Subset<T, Suggestion$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    penilaian<T extends Suggestion$penilaianArgs<ExtArgs> = {}>(args?: Subset<T, Suggestion$penilaianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Suggestion model
   */
  interface SuggestionFieldRefs {
    readonly id: FieldRef<"Suggestion", 'String'>
    readonly judulIde: FieldRef<"Suggestion", 'String'>
    readonly masalahYangDihadapi: FieldRef<"Suggestion", 'String'>
    readonly uraianIde: FieldRef<"Suggestion", 'String'>
    readonly ideProsesPerbaikan: FieldRef<"Suggestion", 'String'>
    readonly hasilUraianProses: FieldRef<"Suggestion", 'String'>
    readonly evaluasiIde: FieldRef<"Suggestion", 'String'>
    readonly komentarAtasan: FieldRef<"Suggestion", 'String'>
    readonly fotoSebelum: FieldRef<"Suggestion", 'String'>
    readonly fotoSesudah: FieldRef<"Suggestion", 'String'>
    readonly kriteriaSS: FieldRef<"Suggestion", 'KriteriaSS'>
    readonly sifatPerbaikan: FieldRef<"Suggestion", 'SifatPerbaikan'>
    readonly statusIde: FieldRef<"Suggestion", 'StatusIde'>
    readonly createdAt: FieldRef<"Suggestion", 'DateTime'>
    readonly updatedAt: FieldRef<"Suggestion", 'DateTime'>
    readonly userId: FieldRef<"Suggestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Suggestion findUnique
   */
  export type SuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion findUniqueOrThrow
   */
  export type SuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion findFirst
   */
  export type SuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion findFirstOrThrow
   */
  export type SuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion findMany
   */
  export type SuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestions to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion create
   */
  export type SuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Suggestion.
     */
    data: XOR<SuggestionCreateInput, SuggestionUncheckedCreateInput>
  }

  /**
   * Suggestion createMany
   */
  export type SuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suggestions.
     */
    data: SuggestionCreateManyInput | SuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suggestion createManyAndReturn
   */
  export type SuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * The data used to create many Suggestions.
     */
    data: SuggestionCreateManyInput | SuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suggestion update
   */
  export type SuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Suggestion.
     */
    data: XOR<SuggestionUpdateInput, SuggestionUncheckedUpdateInput>
    /**
     * Choose, which Suggestion to update.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion updateMany
   */
  export type SuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suggestions.
     */
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyInput>
    /**
     * Filter which Suggestions to update
     */
    where?: SuggestionWhereInput
    /**
     * Limit how many Suggestions to update.
     */
    limit?: number
  }

  /**
   * Suggestion updateManyAndReturn
   */
  export type SuggestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * The data used to update Suggestions.
     */
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyInput>
    /**
     * Filter which Suggestions to update
     */
    where?: SuggestionWhereInput
    /**
     * Limit how many Suggestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suggestion upsert
   */
  export type SuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Suggestion to update in case it exists.
     */
    where: SuggestionWhereUniqueInput
    /**
     * In case the Suggestion found by the `where` argument doesn't exist, create a new Suggestion with this data.
     */
    create: XOR<SuggestionCreateInput, SuggestionUncheckedCreateInput>
    /**
     * In case the Suggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuggestionUpdateInput, SuggestionUncheckedUpdateInput>
  }

  /**
   * Suggestion delete
   */
  export type SuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter which Suggestion to delete.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion deleteMany
   */
  export type SuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suggestions to delete
     */
    where?: SuggestionWhereInput
    /**
     * Limit how many Suggestions to delete.
     */
    limit?: number
  }

  /**
   * Suggestion.history
   */
  export type Suggestion$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
    where?: SuggestionHistoryWhereInput
    orderBy?: SuggestionHistoryOrderByWithRelationInput | SuggestionHistoryOrderByWithRelationInput[]
    cursor?: SuggestionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuggestionHistoryScalarFieldEnum | SuggestionHistoryScalarFieldEnum[]
  }

  /**
   * Suggestion.penilaian
   */
  export type Suggestion$penilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
    where?: FormPenilaianWhereInput
    orderBy?: FormPenilaianOrderByWithRelationInput | FormPenilaianOrderByWithRelationInput[]
    cursor?: FormPenilaianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormPenilaianScalarFieldEnum | FormPenilaianScalarFieldEnum[]
  }

  /**
   * Suggestion without action
   */
  export type SuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
  }


  /**
   * Model SuggestionHistory
   */

  export type AggregateSuggestionHistory = {
    _count: SuggestionHistoryCountAggregateOutputType | null
    _min: SuggestionHistoryMinAggregateOutputType | null
    _max: SuggestionHistoryMaxAggregateOutputType | null
  }

  export type SuggestionHistoryMinAggregateOutputType = {
    id: string | null
    suggestionId: string | null
    statusIde: $Enums.StatusIde | null
    changedAt: Date | null
  }

  export type SuggestionHistoryMaxAggregateOutputType = {
    id: string | null
    suggestionId: string | null
    statusIde: $Enums.StatusIde | null
    changedAt: Date | null
  }

  export type SuggestionHistoryCountAggregateOutputType = {
    id: number
    suggestionId: number
    statusIde: number
    changedAt: number
    _all: number
  }


  export type SuggestionHistoryMinAggregateInputType = {
    id?: true
    suggestionId?: true
    statusIde?: true
    changedAt?: true
  }

  export type SuggestionHistoryMaxAggregateInputType = {
    id?: true
    suggestionId?: true
    statusIde?: true
    changedAt?: true
  }

  export type SuggestionHistoryCountAggregateInputType = {
    id?: true
    suggestionId?: true
    statusIde?: true
    changedAt?: true
    _all?: true
  }

  export type SuggestionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuggestionHistory to aggregate.
     */
    where?: SuggestionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuggestionHistories to fetch.
     */
    orderBy?: SuggestionHistoryOrderByWithRelationInput | SuggestionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuggestionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuggestionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuggestionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuggestionHistories
    **/
    _count?: true | SuggestionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuggestionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuggestionHistoryMaxAggregateInputType
  }

  export type GetSuggestionHistoryAggregateType<T extends SuggestionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSuggestionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuggestionHistory[P]>
      : GetScalarType<T[P], AggregateSuggestionHistory[P]>
  }




  export type SuggestionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionHistoryWhereInput
    orderBy?: SuggestionHistoryOrderByWithAggregationInput | SuggestionHistoryOrderByWithAggregationInput[]
    by: SuggestionHistoryScalarFieldEnum[] | SuggestionHistoryScalarFieldEnum
    having?: SuggestionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuggestionHistoryCountAggregateInputType | true
    _min?: SuggestionHistoryMinAggregateInputType
    _max?: SuggestionHistoryMaxAggregateInputType
  }

  export type SuggestionHistoryGroupByOutputType = {
    id: string
    suggestionId: string
    statusIde: $Enums.StatusIde
    changedAt: Date
    _count: SuggestionHistoryCountAggregateOutputType | null
    _min: SuggestionHistoryMinAggregateOutputType | null
    _max: SuggestionHistoryMaxAggregateOutputType | null
  }

  type GetSuggestionHistoryGroupByPayload<T extends SuggestionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuggestionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuggestionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuggestionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SuggestionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SuggestionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    statusIde?: boolean
    changedAt?: boolean
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestionHistory"]>

  export type SuggestionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    statusIde?: boolean
    changedAt?: boolean
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestionHistory"]>

  export type SuggestionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    statusIde?: boolean
    changedAt?: boolean
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestionHistory"]>

  export type SuggestionHistorySelectScalar = {
    id?: boolean
    suggestionId?: boolean
    statusIde?: boolean
    changedAt?: boolean
  }

  export type SuggestionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "suggestionId" | "statusIde" | "changedAt", ExtArgs["result"]["suggestionHistory"]>
  export type SuggestionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }
  export type SuggestionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }
  export type SuggestionHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }

  export type $SuggestionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuggestionHistory"
    objects: {
      suggestion: Prisma.$SuggestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      suggestionId: string
      statusIde: $Enums.StatusIde
      changedAt: Date
    }, ExtArgs["result"]["suggestionHistory"]>
    composites: {}
  }

  type SuggestionHistoryGetPayload<S extends boolean | null | undefined | SuggestionHistoryDefaultArgs> = $Result.GetResult<Prisma.$SuggestionHistoryPayload, S>

  type SuggestionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuggestionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuggestionHistoryCountAggregateInputType | true
    }

  export interface SuggestionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuggestionHistory'], meta: { name: 'SuggestionHistory' } }
    /**
     * Find zero or one SuggestionHistory that matches the filter.
     * @param {SuggestionHistoryFindUniqueArgs} args - Arguments to find a SuggestionHistory
     * @example
     * // Get one SuggestionHistory
     * const suggestionHistory = await prisma.suggestionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuggestionHistoryFindUniqueArgs>(args: SelectSubset<T, SuggestionHistoryFindUniqueArgs<ExtArgs>>): Prisma__SuggestionHistoryClient<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuggestionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuggestionHistoryFindUniqueOrThrowArgs} args - Arguments to find a SuggestionHistory
     * @example
     * // Get one SuggestionHistory
     * const suggestionHistory = await prisma.suggestionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuggestionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SuggestionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuggestionHistoryClient<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuggestionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionHistoryFindFirstArgs} args - Arguments to find a SuggestionHistory
     * @example
     * // Get one SuggestionHistory
     * const suggestionHistory = await prisma.suggestionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuggestionHistoryFindFirstArgs>(args?: SelectSubset<T, SuggestionHistoryFindFirstArgs<ExtArgs>>): Prisma__SuggestionHistoryClient<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuggestionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionHistoryFindFirstOrThrowArgs} args - Arguments to find a SuggestionHistory
     * @example
     * // Get one SuggestionHistory
     * const suggestionHistory = await prisma.suggestionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuggestionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SuggestionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuggestionHistoryClient<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuggestionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuggestionHistories
     * const suggestionHistories = await prisma.suggestionHistory.findMany()
     * 
     * // Get first 10 SuggestionHistories
     * const suggestionHistories = await prisma.suggestionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suggestionHistoryWithIdOnly = await prisma.suggestionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuggestionHistoryFindManyArgs>(args?: SelectSubset<T, SuggestionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuggestionHistory.
     * @param {SuggestionHistoryCreateArgs} args - Arguments to create a SuggestionHistory.
     * @example
     * // Create one SuggestionHistory
     * const SuggestionHistory = await prisma.suggestionHistory.create({
     *   data: {
     *     // ... data to create a SuggestionHistory
     *   }
     * })
     * 
     */
    create<T extends SuggestionHistoryCreateArgs>(args: SelectSubset<T, SuggestionHistoryCreateArgs<ExtArgs>>): Prisma__SuggestionHistoryClient<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuggestionHistories.
     * @param {SuggestionHistoryCreateManyArgs} args - Arguments to create many SuggestionHistories.
     * @example
     * // Create many SuggestionHistories
     * const suggestionHistory = await prisma.suggestionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuggestionHistoryCreateManyArgs>(args?: SelectSubset<T, SuggestionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuggestionHistories and returns the data saved in the database.
     * @param {SuggestionHistoryCreateManyAndReturnArgs} args - Arguments to create many SuggestionHistories.
     * @example
     * // Create many SuggestionHistories
     * const suggestionHistory = await prisma.suggestionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuggestionHistories and only return the `id`
     * const suggestionHistoryWithIdOnly = await prisma.suggestionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuggestionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SuggestionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuggestionHistory.
     * @param {SuggestionHistoryDeleteArgs} args - Arguments to delete one SuggestionHistory.
     * @example
     * // Delete one SuggestionHistory
     * const SuggestionHistory = await prisma.suggestionHistory.delete({
     *   where: {
     *     // ... filter to delete one SuggestionHistory
     *   }
     * })
     * 
     */
    delete<T extends SuggestionHistoryDeleteArgs>(args: SelectSubset<T, SuggestionHistoryDeleteArgs<ExtArgs>>): Prisma__SuggestionHistoryClient<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuggestionHistory.
     * @param {SuggestionHistoryUpdateArgs} args - Arguments to update one SuggestionHistory.
     * @example
     * // Update one SuggestionHistory
     * const suggestionHistory = await prisma.suggestionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuggestionHistoryUpdateArgs>(args: SelectSubset<T, SuggestionHistoryUpdateArgs<ExtArgs>>): Prisma__SuggestionHistoryClient<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuggestionHistories.
     * @param {SuggestionHistoryDeleteManyArgs} args - Arguments to filter SuggestionHistories to delete.
     * @example
     * // Delete a few SuggestionHistories
     * const { count } = await prisma.suggestionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuggestionHistoryDeleteManyArgs>(args?: SelectSubset<T, SuggestionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuggestionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuggestionHistories
     * const suggestionHistory = await prisma.suggestionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuggestionHistoryUpdateManyArgs>(args: SelectSubset<T, SuggestionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuggestionHistories and returns the data updated in the database.
     * @param {SuggestionHistoryUpdateManyAndReturnArgs} args - Arguments to update many SuggestionHistories.
     * @example
     * // Update many SuggestionHistories
     * const suggestionHistory = await prisma.suggestionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuggestionHistories and only return the `id`
     * const suggestionHistoryWithIdOnly = await prisma.suggestionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuggestionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SuggestionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuggestionHistory.
     * @param {SuggestionHistoryUpsertArgs} args - Arguments to update or create a SuggestionHistory.
     * @example
     * // Update or create a SuggestionHistory
     * const suggestionHistory = await prisma.suggestionHistory.upsert({
     *   create: {
     *     // ... data to create a SuggestionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuggestionHistory we want to update
     *   }
     * })
     */
    upsert<T extends SuggestionHistoryUpsertArgs>(args: SelectSubset<T, SuggestionHistoryUpsertArgs<ExtArgs>>): Prisma__SuggestionHistoryClient<$Result.GetResult<Prisma.$SuggestionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuggestionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionHistoryCountArgs} args - Arguments to filter SuggestionHistories to count.
     * @example
     * // Count the number of SuggestionHistories
     * const count = await prisma.suggestionHistory.count({
     *   where: {
     *     // ... the filter for the SuggestionHistories we want to count
     *   }
     * })
    **/
    count<T extends SuggestionHistoryCountArgs>(
      args?: Subset<T, SuggestionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuggestionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuggestionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuggestionHistoryAggregateArgs>(args: Subset<T, SuggestionHistoryAggregateArgs>): Prisma.PrismaPromise<GetSuggestionHistoryAggregateType<T>>

    /**
     * Group by SuggestionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionHistoryGroupByArgs} args - Group by arguments.
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
      T extends SuggestionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuggestionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SuggestionHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuggestionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuggestionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuggestionHistory model
   */
  readonly fields: SuggestionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuggestionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuggestionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suggestion<T extends SuggestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SuggestionDefaultArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SuggestionHistory model
   */
  interface SuggestionHistoryFieldRefs {
    readonly id: FieldRef<"SuggestionHistory", 'String'>
    readonly suggestionId: FieldRef<"SuggestionHistory", 'String'>
    readonly statusIde: FieldRef<"SuggestionHistory", 'StatusIde'>
    readonly changedAt: FieldRef<"SuggestionHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuggestionHistory findUnique
   */
  export type SuggestionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SuggestionHistory to fetch.
     */
    where: SuggestionHistoryWhereUniqueInput
  }

  /**
   * SuggestionHistory findUniqueOrThrow
   */
  export type SuggestionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SuggestionHistory to fetch.
     */
    where: SuggestionHistoryWhereUniqueInput
  }

  /**
   * SuggestionHistory findFirst
   */
  export type SuggestionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SuggestionHistory to fetch.
     */
    where?: SuggestionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuggestionHistories to fetch.
     */
    orderBy?: SuggestionHistoryOrderByWithRelationInput | SuggestionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuggestionHistories.
     */
    cursor?: SuggestionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuggestionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuggestionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuggestionHistories.
     */
    distinct?: SuggestionHistoryScalarFieldEnum | SuggestionHistoryScalarFieldEnum[]
  }

  /**
   * SuggestionHistory findFirstOrThrow
   */
  export type SuggestionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SuggestionHistory to fetch.
     */
    where?: SuggestionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuggestionHistories to fetch.
     */
    orderBy?: SuggestionHistoryOrderByWithRelationInput | SuggestionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuggestionHistories.
     */
    cursor?: SuggestionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuggestionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuggestionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuggestionHistories.
     */
    distinct?: SuggestionHistoryScalarFieldEnum | SuggestionHistoryScalarFieldEnum[]
  }

  /**
   * SuggestionHistory findMany
   */
  export type SuggestionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SuggestionHistories to fetch.
     */
    where?: SuggestionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuggestionHistories to fetch.
     */
    orderBy?: SuggestionHistoryOrderByWithRelationInput | SuggestionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuggestionHistories.
     */
    cursor?: SuggestionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuggestionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuggestionHistories.
     */
    skip?: number
    distinct?: SuggestionHistoryScalarFieldEnum | SuggestionHistoryScalarFieldEnum[]
  }

  /**
   * SuggestionHistory create
   */
  export type SuggestionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SuggestionHistory.
     */
    data: XOR<SuggestionHistoryCreateInput, SuggestionHistoryUncheckedCreateInput>
  }

  /**
   * SuggestionHistory createMany
   */
  export type SuggestionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuggestionHistories.
     */
    data: SuggestionHistoryCreateManyInput | SuggestionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuggestionHistory createManyAndReturn
   */
  export type SuggestionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many SuggestionHistories.
     */
    data: SuggestionHistoryCreateManyInput | SuggestionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuggestionHistory update
   */
  export type SuggestionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SuggestionHistory.
     */
    data: XOR<SuggestionHistoryUpdateInput, SuggestionHistoryUncheckedUpdateInput>
    /**
     * Choose, which SuggestionHistory to update.
     */
    where: SuggestionHistoryWhereUniqueInput
  }

  /**
   * SuggestionHistory updateMany
   */
  export type SuggestionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuggestionHistories.
     */
    data: XOR<SuggestionHistoryUpdateManyMutationInput, SuggestionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SuggestionHistories to update
     */
    where?: SuggestionHistoryWhereInput
    /**
     * Limit how many SuggestionHistories to update.
     */
    limit?: number
  }

  /**
   * SuggestionHistory updateManyAndReturn
   */
  export type SuggestionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update SuggestionHistories.
     */
    data: XOR<SuggestionHistoryUpdateManyMutationInput, SuggestionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SuggestionHistories to update
     */
    where?: SuggestionHistoryWhereInput
    /**
     * Limit how many SuggestionHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuggestionHistory upsert
   */
  export type SuggestionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SuggestionHistory to update in case it exists.
     */
    where: SuggestionHistoryWhereUniqueInput
    /**
     * In case the SuggestionHistory found by the `where` argument doesn't exist, create a new SuggestionHistory with this data.
     */
    create: XOR<SuggestionHistoryCreateInput, SuggestionHistoryUncheckedCreateInput>
    /**
     * In case the SuggestionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuggestionHistoryUpdateInput, SuggestionHistoryUncheckedUpdateInput>
  }

  /**
   * SuggestionHistory delete
   */
  export type SuggestionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
    /**
     * Filter which SuggestionHistory to delete.
     */
    where: SuggestionHistoryWhereUniqueInput
  }

  /**
   * SuggestionHistory deleteMany
   */
  export type SuggestionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuggestionHistories to delete
     */
    where?: SuggestionHistoryWhereInput
    /**
     * Limit how many SuggestionHistories to delete.
     */
    limit?: number
  }

  /**
   * SuggestionHistory without action
   */
  export type SuggestionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionHistory
     */
    select?: SuggestionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionHistory
     */
    omit?: SuggestionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionHistoryInclude<ExtArgs> | null
  }


  /**
   * Model FormPenilaian
   */

  export type AggregateFormPenilaian = {
    _count: FormPenilaianCountAggregateOutputType | null
    _avg: FormPenilaianAvgAggregateOutputType | null
    _sum: FormPenilaianSumAggregateOutputType | null
    _min: FormPenilaianMinAggregateOutputType | null
    _max: FormPenilaianMaxAggregateOutputType | null
  }

  export type FormPenilaianAvgAggregateOutputType = {
    skorKriteria: number | null
  }

  export type FormPenilaianSumAggregateOutputType = {
    skorKriteria: number | null
  }

  export type FormPenilaianMinAggregateOutputType = {
    id: string | null
    suggestionId: string | null
    penilaianKriteria: string | null
    skorKriteria: number | null
    komentarPenilaian: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormPenilaianMaxAggregateOutputType = {
    id: string | null
    suggestionId: string | null
    penilaianKriteria: string | null
    skorKriteria: number | null
    komentarPenilaian: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormPenilaianCountAggregateOutputType = {
    id: number
    suggestionId: number
    penilaianKriteria: number
    skorKriteria: number
    komentarPenilaian: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormPenilaianAvgAggregateInputType = {
    skorKriteria?: true
  }

  export type FormPenilaianSumAggregateInputType = {
    skorKriteria?: true
  }

  export type FormPenilaianMinAggregateInputType = {
    id?: true
    suggestionId?: true
    penilaianKriteria?: true
    skorKriteria?: true
    komentarPenilaian?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormPenilaianMaxAggregateInputType = {
    id?: true
    suggestionId?: true
    penilaianKriteria?: true
    skorKriteria?: true
    komentarPenilaian?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormPenilaianCountAggregateInputType = {
    id?: true
    suggestionId?: true
    penilaianKriteria?: true
    skorKriteria?: true
    komentarPenilaian?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormPenilaianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormPenilaian to aggregate.
     */
    where?: FormPenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormPenilaians to fetch.
     */
    orderBy?: FormPenilaianOrderByWithRelationInput | FormPenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormPenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormPenilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormPenilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormPenilaians
    **/
    _count?: true | FormPenilaianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormPenilaianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormPenilaianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormPenilaianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormPenilaianMaxAggregateInputType
  }

  export type GetFormPenilaianAggregateType<T extends FormPenilaianAggregateArgs> = {
        [P in keyof T & keyof AggregateFormPenilaian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormPenilaian[P]>
      : GetScalarType<T[P], AggregateFormPenilaian[P]>
  }




  export type FormPenilaianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormPenilaianWhereInput
    orderBy?: FormPenilaianOrderByWithAggregationInput | FormPenilaianOrderByWithAggregationInput[]
    by: FormPenilaianScalarFieldEnum[] | FormPenilaianScalarFieldEnum
    having?: FormPenilaianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormPenilaianCountAggregateInputType | true
    _avg?: FormPenilaianAvgAggregateInputType
    _sum?: FormPenilaianSumAggregateInputType
    _min?: FormPenilaianMinAggregateInputType
    _max?: FormPenilaianMaxAggregateInputType
  }

  export type FormPenilaianGroupByOutputType = {
    id: string
    suggestionId: string
    penilaianKriteria: string
    skorKriteria: number
    komentarPenilaian: string | null
    createdAt: Date
    updatedAt: Date
    _count: FormPenilaianCountAggregateOutputType | null
    _avg: FormPenilaianAvgAggregateOutputType | null
    _sum: FormPenilaianSumAggregateOutputType | null
    _min: FormPenilaianMinAggregateOutputType | null
    _max: FormPenilaianMaxAggregateOutputType | null
  }

  type GetFormPenilaianGroupByPayload<T extends FormPenilaianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormPenilaianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormPenilaianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormPenilaianGroupByOutputType[P]>
            : GetScalarType<T[P], FormPenilaianGroupByOutputType[P]>
        }
      >
    >


  export type FormPenilaianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    penilaianKriteria?: boolean
    skorKriteria?: boolean
    komentarPenilaian?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formPenilaian"]>

  export type FormPenilaianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    penilaianKriteria?: boolean
    skorKriteria?: boolean
    komentarPenilaian?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formPenilaian"]>

  export type FormPenilaianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    penilaianKriteria?: boolean
    skorKriteria?: boolean
    komentarPenilaian?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formPenilaian"]>

  export type FormPenilaianSelectScalar = {
    id?: boolean
    suggestionId?: boolean
    penilaianKriteria?: boolean
    skorKriteria?: boolean
    komentarPenilaian?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormPenilaianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "suggestionId" | "penilaianKriteria" | "skorKriteria" | "komentarPenilaian" | "createdAt" | "updatedAt", ExtArgs["result"]["formPenilaian"]>
  export type FormPenilaianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }
  export type FormPenilaianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }
  export type FormPenilaianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | SuggestionDefaultArgs<ExtArgs>
  }

  export type $FormPenilaianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormPenilaian"
    objects: {
      suggestion: Prisma.$SuggestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      suggestionId: string
      penilaianKriteria: string
      skorKriteria: number
      komentarPenilaian: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formPenilaian"]>
    composites: {}
  }

  type FormPenilaianGetPayload<S extends boolean | null | undefined | FormPenilaianDefaultArgs> = $Result.GetResult<Prisma.$FormPenilaianPayload, S>

  type FormPenilaianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormPenilaianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormPenilaianCountAggregateInputType | true
    }

  export interface FormPenilaianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormPenilaian'], meta: { name: 'FormPenilaian' } }
    /**
     * Find zero or one FormPenilaian that matches the filter.
     * @param {FormPenilaianFindUniqueArgs} args - Arguments to find a FormPenilaian
     * @example
     * // Get one FormPenilaian
     * const formPenilaian = await prisma.formPenilaian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormPenilaianFindUniqueArgs>(args: SelectSubset<T, FormPenilaianFindUniqueArgs<ExtArgs>>): Prisma__FormPenilaianClient<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormPenilaian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormPenilaianFindUniqueOrThrowArgs} args - Arguments to find a FormPenilaian
     * @example
     * // Get one FormPenilaian
     * const formPenilaian = await prisma.formPenilaian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormPenilaianFindUniqueOrThrowArgs>(args: SelectSubset<T, FormPenilaianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormPenilaianClient<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormPenilaian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormPenilaianFindFirstArgs} args - Arguments to find a FormPenilaian
     * @example
     * // Get one FormPenilaian
     * const formPenilaian = await prisma.formPenilaian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormPenilaianFindFirstArgs>(args?: SelectSubset<T, FormPenilaianFindFirstArgs<ExtArgs>>): Prisma__FormPenilaianClient<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormPenilaian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormPenilaianFindFirstOrThrowArgs} args - Arguments to find a FormPenilaian
     * @example
     * // Get one FormPenilaian
     * const formPenilaian = await prisma.formPenilaian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormPenilaianFindFirstOrThrowArgs>(args?: SelectSubset<T, FormPenilaianFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormPenilaianClient<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormPenilaians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormPenilaianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormPenilaians
     * const formPenilaians = await prisma.formPenilaian.findMany()
     * 
     * // Get first 10 FormPenilaians
     * const formPenilaians = await prisma.formPenilaian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formPenilaianWithIdOnly = await prisma.formPenilaian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormPenilaianFindManyArgs>(args?: SelectSubset<T, FormPenilaianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormPenilaian.
     * @param {FormPenilaianCreateArgs} args - Arguments to create a FormPenilaian.
     * @example
     * // Create one FormPenilaian
     * const FormPenilaian = await prisma.formPenilaian.create({
     *   data: {
     *     // ... data to create a FormPenilaian
     *   }
     * })
     * 
     */
    create<T extends FormPenilaianCreateArgs>(args: SelectSubset<T, FormPenilaianCreateArgs<ExtArgs>>): Prisma__FormPenilaianClient<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormPenilaians.
     * @param {FormPenilaianCreateManyArgs} args - Arguments to create many FormPenilaians.
     * @example
     * // Create many FormPenilaians
     * const formPenilaian = await prisma.formPenilaian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormPenilaianCreateManyArgs>(args?: SelectSubset<T, FormPenilaianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormPenilaians and returns the data saved in the database.
     * @param {FormPenilaianCreateManyAndReturnArgs} args - Arguments to create many FormPenilaians.
     * @example
     * // Create many FormPenilaians
     * const formPenilaian = await prisma.formPenilaian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormPenilaians and only return the `id`
     * const formPenilaianWithIdOnly = await prisma.formPenilaian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormPenilaianCreateManyAndReturnArgs>(args?: SelectSubset<T, FormPenilaianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormPenilaian.
     * @param {FormPenilaianDeleteArgs} args - Arguments to delete one FormPenilaian.
     * @example
     * // Delete one FormPenilaian
     * const FormPenilaian = await prisma.formPenilaian.delete({
     *   where: {
     *     // ... filter to delete one FormPenilaian
     *   }
     * })
     * 
     */
    delete<T extends FormPenilaianDeleteArgs>(args: SelectSubset<T, FormPenilaianDeleteArgs<ExtArgs>>): Prisma__FormPenilaianClient<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormPenilaian.
     * @param {FormPenilaianUpdateArgs} args - Arguments to update one FormPenilaian.
     * @example
     * // Update one FormPenilaian
     * const formPenilaian = await prisma.formPenilaian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormPenilaianUpdateArgs>(args: SelectSubset<T, FormPenilaianUpdateArgs<ExtArgs>>): Prisma__FormPenilaianClient<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormPenilaians.
     * @param {FormPenilaianDeleteManyArgs} args - Arguments to filter FormPenilaians to delete.
     * @example
     * // Delete a few FormPenilaians
     * const { count } = await prisma.formPenilaian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormPenilaianDeleteManyArgs>(args?: SelectSubset<T, FormPenilaianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormPenilaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormPenilaianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormPenilaians
     * const formPenilaian = await prisma.formPenilaian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormPenilaianUpdateManyArgs>(args: SelectSubset<T, FormPenilaianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormPenilaians and returns the data updated in the database.
     * @param {FormPenilaianUpdateManyAndReturnArgs} args - Arguments to update many FormPenilaians.
     * @example
     * // Update many FormPenilaians
     * const formPenilaian = await prisma.formPenilaian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormPenilaians and only return the `id`
     * const formPenilaianWithIdOnly = await prisma.formPenilaian.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormPenilaianUpdateManyAndReturnArgs>(args: SelectSubset<T, FormPenilaianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormPenilaian.
     * @param {FormPenilaianUpsertArgs} args - Arguments to update or create a FormPenilaian.
     * @example
     * // Update or create a FormPenilaian
     * const formPenilaian = await prisma.formPenilaian.upsert({
     *   create: {
     *     // ... data to create a FormPenilaian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormPenilaian we want to update
     *   }
     * })
     */
    upsert<T extends FormPenilaianUpsertArgs>(args: SelectSubset<T, FormPenilaianUpsertArgs<ExtArgs>>): Prisma__FormPenilaianClient<$Result.GetResult<Prisma.$FormPenilaianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormPenilaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormPenilaianCountArgs} args - Arguments to filter FormPenilaians to count.
     * @example
     * // Count the number of FormPenilaians
     * const count = await prisma.formPenilaian.count({
     *   where: {
     *     // ... the filter for the FormPenilaians we want to count
     *   }
     * })
    **/
    count<T extends FormPenilaianCountArgs>(
      args?: Subset<T, FormPenilaianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormPenilaianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormPenilaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormPenilaianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormPenilaianAggregateArgs>(args: Subset<T, FormPenilaianAggregateArgs>): Prisma.PrismaPromise<GetFormPenilaianAggregateType<T>>

    /**
     * Group by FormPenilaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormPenilaianGroupByArgs} args - Group by arguments.
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
      T extends FormPenilaianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormPenilaianGroupByArgs['orderBy'] }
        : { orderBy?: FormPenilaianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormPenilaianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormPenilaianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormPenilaian model
   */
  readonly fields: FormPenilaianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormPenilaian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormPenilaianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suggestion<T extends SuggestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SuggestionDefaultArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FormPenilaian model
   */
  interface FormPenilaianFieldRefs {
    readonly id: FieldRef<"FormPenilaian", 'String'>
    readonly suggestionId: FieldRef<"FormPenilaian", 'String'>
    readonly penilaianKriteria: FieldRef<"FormPenilaian", 'String'>
    readonly skorKriteria: FieldRef<"FormPenilaian", 'Int'>
    readonly komentarPenilaian: FieldRef<"FormPenilaian", 'String'>
    readonly createdAt: FieldRef<"FormPenilaian", 'DateTime'>
    readonly updatedAt: FieldRef<"FormPenilaian", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormPenilaian findUnique
   */
  export type FormPenilaianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
    /**
     * Filter, which FormPenilaian to fetch.
     */
    where: FormPenilaianWhereUniqueInput
  }

  /**
   * FormPenilaian findUniqueOrThrow
   */
  export type FormPenilaianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
    /**
     * Filter, which FormPenilaian to fetch.
     */
    where: FormPenilaianWhereUniqueInput
  }

  /**
   * FormPenilaian findFirst
   */
  export type FormPenilaianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
    /**
     * Filter, which FormPenilaian to fetch.
     */
    where?: FormPenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormPenilaians to fetch.
     */
    orderBy?: FormPenilaianOrderByWithRelationInput | FormPenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormPenilaians.
     */
    cursor?: FormPenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormPenilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormPenilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormPenilaians.
     */
    distinct?: FormPenilaianScalarFieldEnum | FormPenilaianScalarFieldEnum[]
  }

  /**
   * FormPenilaian findFirstOrThrow
   */
  export type FormPenilaianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
    /**
     * Filter, which FormPenilaian to fetch.
     */
    where?: FormPenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormPenilaians to fetch.
     */
    orderBy?: FormPenilaianOrderByWithRelationInput | FormPenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormPenilaians.
     */
    cursor?: FormPenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormPenilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormPenilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormPenilaians.
     */
    distinct?: FormPenilaianScalarFieldEnum | FormPenilaianScalarFieldEnum[]
  }

  /**
   * FormPenilaian findMany
   */
  export type FormPenilaianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
    /**
     * Filter, which FormPenilaians to fetch.
     */
    where?: FormPenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormPenilaians to fetch.
     */
    orderBy?: FormPenilaianOrderByWithRelationInput | FormPenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormPenilaians.
     */
    cursor?: FormPenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormPenilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormPenilaians.
     */
    skip?: number
    distinct?: FormPenilaianScalarFieldEnum | FormPenilaianScalarFieldEnum[]
  }

  /**
   * FormPenilaian create
   */
  export type FormPenilaianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
    /**
     * The data needed to create a FormPenilaian.
     */
    data: XOR<FormPenilaianCreateInput, FormPenilaianUncheckedCreateInput>
  }

  /**
   * FormPenilaian createMany
   */
  export type FormPenilaianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormPenilaians.
     */
    data: FormPenilaianCreateManyInput | FormPenilaianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormPenilaian createManyAndReturn
   */
  export type FormPenilaianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * The data used to create many FormPenilaians.
     */
    data: FormPenilaianCreateManyInput | FormPenilaianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormPenilaian update
   */
  export type FormPenilaianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
    /**
     * The data needed to update a FormPenilaian.
     */
    data: XOR<FormPenilaianUpdateInput, FormPenilaianUncheckedUpdateInput>
    /**
     * Choose, which FormPenilaian to update.
     */
    where: FormPenilaianWhereUniqueInput
  }

  /**
   * FormPenilaian updateMany
   */
  export type FormPenilaianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormPenilaians.
     */
    data: XOR<FormPenilaianUpdateManyMutationInput, FormPenilaianUncheckedUpdateManyInput>
    /**
     * Filter which FormPenilaians to update
     */
    where?: FormPenilaianWhereInput
    /**
     * Limit how many FormPenilaians to update.
     */
    limit?: number
  }

  /**
   * FormPenilaian updateManyAndReturn
   */
  export type FormPenilaianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * The data used to update FormPenilaians.
     */
    data: XOR<FormPenilaianUpdateManyMutationInput, FormPenilaianUncheckedUpdateManyInput>
    /**
     * Filter which FormPenilaians to update
     */
    where?: FormPenilaianWhereInput
    /**
     * Limit how many FormPenilaians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormPenilaian upsert
   */
  export type FormPenilaianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
    /**
     * The filter to search for the FormPenilaian to update in case it exists.
     */
    where: FormPenilaianWhereUniqueInput
    /**
     * In case the FormPenilaian found by the `where` argument doesn't exist, create a new FormPenilaian with this data.
     */
    create: XOR<FormPenilaianCreateInput, FormPenilaianUncheckedCreateInput>
    /**
     * In case the FormPenilaian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormPenilaianUpdateInput, FormPenilaianUncheckedUpdateInput>
  }

  /**
   * FormPenilaian delete
   */
  export type FormPenilaianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
    /**
     * Filter which FormPenilaian to delete.
     */
    where: FormPenilaianWhereUniqueInput
  }

  /**
   * FormPenilaian deleteMany
   */
  export type FormPenilaianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormPenilaians to delete
     */
    where?: FormPenilaianWhereInput
    /**
     * Limit how many FormPenilaians to delete.
     */
    limit?: number
  }

  /**
   * FormPenilaian without action
   */
  export type FormPenilaianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormPenilaian
     */
    select?: FormPenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormPenilaian
     */
    omit?: FormPenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormPenilaianInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    nrp: 'nrp',
    role: 'role',
    permissionLevel: 'permissionLevel',
    department: 'department',
    position: 'position',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SuggestionScalarFieldEnum: {
    id: 'id',
    judulIde: 'judulIde',
    masalahYangDihadapi: 'masalahYangDihadapi',
    uraianIde: 'uraianIde',
    ideProsesPerbaikan: 'ideProsesPerbaikan',
    hasilUraianProses: 'hasilUraianProses',
    evaluasiIde: 'evaluasiIde',
    komentarAtasan: 'komentarAtasan',
    fotoSebelum: 'fotoSebelum',
    fotoSesudah: 'fotoSesudah',
    kriteriaSS: 'kriteriaSS',
    sifatPerbaikan: 'sifatPerbaikan',
    statusIde: 'statusIde',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SuggestionScalarFieldEnum = (typeof SuggestionScalarFieldEnum)[keyof typeof SuggestionScalarFieldEnum]


  export const SuggestionHistoryScalarFieldEnum: {
    id: 'id',
    suggestionId: 'suggestionId',
    statusIde: 'statusIde',
    changedAt: 'changedAt'
  };

  export type SuggestionHistoryScalarFieldEnum = (typeof SuggestionHistoryScalarFieldEnum)[keyof typeof SuggestionHistoryScalarFieldEnum]


  export const FormPenilaianScalarFieldEnum: {
    id: 'id',
    suggestionId: 'suggestionId',
    penilaianKriteria: 'penilaianKriteria',
    skorKriteria: 'skorKriteria',
    komentarPenilaian: 'komentarPenilaian',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormPenilaianScalarFieldEnum = (typeof FormPenilaianScalarFieldEnum)[keyof typeof FormPenilaianScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'PermissionLevel'
   */
  export type EnumPermissionLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionLevel'>
    


  /**
   * Reference to a field of type 'PermissionLevel[]'
   */
  export type ListEnumPermissionLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionLevel[]'>
    


  /**
   * Reference to a field of type 'Department'
   */
  export type EnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department'>
    


  /**
   * Reference to a field of type 'Department[]'
   */
  export type ListEnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department[]'>
    


  /**
   * Reference to a field of type 'Position'
   */
  export type EnumPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Position'>
    


  /**
   * Reference to a field of type 'Position[]'
   */
  export type ListEnumPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Position[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'KriteriaSS'
   */
  export type EnumKriteriaSSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KriteriaSS'>
    


  /**
   * Reference to a field of type 'KriteriaSS[]'
   */
  export type ListEnumKriteriaSSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KriteriaSS[]'>
    


  /**
   * Reference to a field of type 'SifatPerbaikan'
   */
  export type EnumSifatPerbaikanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SifatPerbaikan'>
    


  /**
   * Reference to a field of type 'SifatPerbaikan[]'
   */
  export type ListEnumSifatPerbaikanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SifatPerbaikan[]'>
    


  /**
   * Reference to a field of type 'StatusIde'
   */
  export type EnumStatusIdeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusIde'>
    


  /**
   * Reference to a field of type 'StatusIde[]'
   */
  export type ListEnumStatusIdeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusIde[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    nrp?: BigIntFilter<"User"> | bigint | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    permissionLevel?: EnumPermissionLevelFilter<"User"> | $Enums.PermissionLevel
    department?: EnumDepartmentFilter<"User"> | $Enums.Department
    position?: EnumPositionFilter<"User"> | $Enums.Position
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    suggestions?: SuggestionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nrp?: SortOrder
    role?: SortOrder
    permissionLevel?: SortOrder
    department?: SortOrder
    position?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suggestions?: SuggestionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nrp?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    permissionLevel?: EnumPermissionLevelFilter<"User"> | $Enums.PermissionLevel
    department?: EnumDepartmentFilter<"User"> | $Enums.Department
    position?: EnumPositionFilter<"User"> | $Enums.Position
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    suggestions?: SuggestionListRelationFilter
  }, "id" | "nrp">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nrp?: SortOrder
    role?: SortOrder
    permissionLevel?: SortOrder
    department?: SortOrder
    position?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    nrp?: BigIntWithAggregatesFilter<"User"> | bigint | number
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    permissionLevel?: EnumPermissionLevelWithAggregatesFilter<"User"> | $Enums.PermissionLevel
    department?: EnumDepartmentWithAggregatesFilter<"User"> | $Enums.Department
    position?: EnumPositionWithAggregatesFilter<"User"> | $Enums.Position
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SuggestionWhereInput = {
    AND?: SuggestionWhereInput | SuggestionWhereInput[]
    OR?: SuggestionWhereInput[]
    NOT?: SuggestionWhereInput | SuggestionWhereInput[]
    id?: StringFilter<"Suggestion"> | string
    judulIde?: StringFilter<"Suggestion"> | string
    masalahYangDihadapi?: StringFilter<"Suggestion"> | string
    uraianIde?: StringFilter<"Suggestion"> | string
    ideProsesPerbaikan?: StringFilter<"Suggestion"> | string
    hasilUraianProses?: StringFilter<"Suggestion"> | string
    evaluasiIde?: StringFilter<"Suggestion"> | string
    komentarAtasan?: StringNullableFilter<"Suggestion"> | string | null
    fotoSebelum?: StringNullableFilter<"Suggestion"> | string | null
    fotoSesudah?: StringNullableFilter<"Suggestion"> | string | null
    kriteriaSS?: EnumKriteriaSSFilter<"Suggestion"> | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFilter<"Suggestion"> | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFilter<"Suggestion"> | $Enums.StatusIde
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    updatedAt?: DateTimeFilter<"Suggestion"> | Date | string
    userId?: StringFilter<"Suggestion"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    history?: SuggestionHistoryListRelationFilter
    penilaian?: FormPenilaianListRelationFilter
  }

  export type SuggestionOrderByWithRelationInput = {
    id?: SortOrder
    judulIde?: SortOrder
    masalahYangDihadapi?: SortOrder
    uraianIde?: SortOrder
    ideProsesPerbaikan?: SortOrder
    hasilUraianProses?: SortOrder
    evaluasiIde?: SortOrder
    komentarAtasan?: SortOrderInput | SortOrder
    fotoSebelum?: SortOrderInput | SortOrder
    fotoSesudah?: SortOrderInput | SortOrder
    kriteriaSS?: SortOrder
    sifatPerbaikan?: SortOrder
    statusIde?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    history?: SuggestionHistoryOrderByRelationAggregateInput
    penilaian?: FormPenilaianOrderByRelationAggregateInput
  }

  export type SuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuggestionWhereInput | SuggestionWhereInput[]
    OR?: SuggestionWhereInput[]
    NOT?: SuggestionWhereInput | SuggestionWhereInput[]
    judulIde?: StringFilter<"Suggestion"> | string
    masalahYangDihadapi?: StringFilter<"Suggestion"> | string
    uraianIde?: StringFilter<"Suggestion"> | string
    ideProsesPerbaikan?: StringFilter<"Suggestion"> | string
    hasilUraianProses?: StringFilter<"Suggestion"> | string
    evaluasiIde?: StringFilter<"Suggestion"> | string
    komentarAtasan?: StringNullableFilter<"Suggestion"> | string | null
    fotoSebelum?: StringNullableFilter<"Suggestion"> | string | null
    fotoSesudah?: StringNullableFilter<"Suggestion"> | string | null
    kriteriaSS?: EnumKriteriaSSFilter<"Suggestion"> | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFilter<"Suggestion"> | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFilter<"Suggestion"> | $Enums.StatusIde
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    updatedAt?: DateTimeFilter<"Suggestion"> | Date | string
    userId?: StringFilter<"Suggestion"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    history?: SuggestionHistoryListRelationFilter
    penilaian?: FormPenilaianListRelationFilter
  }, "id">

  export type SuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    judulIde?: SortOrder
    masalahYangDihadapi?: SortOrder
    uraianIde?: SortOrder
    ideProsesPerbaikan?: SortOrder
    hasilUraianProses?: SortOrder
    evaluasiIde?: SortOrder
    komentarAtasan?: SortOrderInput | SortOrder
    fotoSebelum?: SortOrderInput | SortOrder
    fotoSesudah?: SortOrderInput | SortOrder
    kriteriaSS?: SortOrder
    sifatPerbaikan?: SortOrder
    statusIde?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: SuggestionCountOrderByAggregateInput
    _max?: SuggestionMaxOrderByAggregateInput
    _min?: SuggestionMinOrderByAggregateInput
  }

  export type SuggestionScalarWhereWithAggregatesInput = {
    AND?: SuggestionScalarWhereWithAggregatesInput | SuggestionScalarWhereWithAggregatesInput[]
    OR?: SuggestionScalarWhereWithAggregatesInput[]
    NOT?: SuggestionScalarWhereWithAggregatesInput | SuggestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Suggestion"> | string
    judulIde?: StringWithAggregatesFilter<"Suggestion"> | string
    masalahYangDihadapi?: StringWithAggregatesFilter<"Suggestion"> | string
    uraianIde?: StringWithAggregatesFilter<"Suggestion"> | string
    ideProsesPerbaikan?: StringWithAggregatesFilter<"Suggestion"> | string
    hasilUraianProses?: StringWithAggregatesFilter<"Suggestion"> | string
    evaluasiIde?: StringWithAggregatesFilter<"Suggestion"> | string
    komentarAtasan?: StringNullableWithAggregatesFilter<"Suggestion"> | string | null
    fotoSebelum?: StringNullableWithAggregatesFilter<"Suggestion"> | string | null
    fotoSesudah?: StringNullableWithAggregatesFilter<"Suggestion"> | string | null
    kriteriaSS?: EnumKriteriaSSWithAggregatesFilter<"Suggestion"> | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanWithAggregatesFilter<"Suggestion"> | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeWithAggregatesFilter<"Suggestion"> | $Enums.StatusIde
    createdAt?: DateTimeWithAggregatesFilter<"Suggestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Suggestion"> | Date | string
    userId?: StringWithAggregatesFilter<"Suggestion"> | string
  }

  export type SuggestionHistoryWhereInput = {
    AND?: SuggestionHistoryWhereInput | SuggestionHistoryWhereInput[]
    OR?: SuggestionHistoryWhereInput[]
    NOT?: SuggestionHistoryWhereInput | SuggestionHistoryWhereInput[]
    id?: StringFilter<"SuggestionHistory"> | string
    suggestionId?: StringFilter<"SuggestionHistory"> | string
    statusIde?: EnumStatusIdeFilter<"SuggestionHistory"> | $Enums.StatusIde
    changedAt?: DateTimeFilter<"SuggestionHistory"> | Date | string
    suggestion?: XOR<SuggestionScalarRelationFilter, SuggestionWhereInput>
  }

  export type SuggestionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    statusIde?: SortOrder
    changedAt?: SortOrder
    suggestion?: SuggestionOrderByWithRelationInput
  }

  export type SuggestionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuggestionHistoryWhereInput | SuggestionHistoryWhereInput[]
    OR?: SuggestionHistoryWhereInput[]
    NOT?: SuggestionHistoryWhereInput | SuggestionHistoryWhereInput[]
    suggestionId?: StringFilter<"SuggestionHistory"> | string
    statusIde?: EnumStatusIdeFilter<"SuggestionHistory"> | $Enums.StatusIde
    changedAt?: DateTimeFilter<"SuggestionHistory"> | Date | string
    suggestion?: XOR<SuggestionScalarRelationFilter, SuggestionWhereInput>
  }, "id">

  export type SuggestionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    statusIde?: SortOrder
    changedAt?: SortOrder
    _count?: SuggestionHistoryCountOrderByAggregateInput
    _max?: SuggestionHistoryMaxOrderByAggregateInput
    _min?: SuggestionHistoryMinOrderByAggregateInput
  }

  export type SuggestionHistoryScalarWhereWithAggregatesInput = {
    AND?: SuggestionHistoryScalarWhereWithAggregatesInput | SuggestionHistoryScalarWhereWithAggregatesInput[]
    OR?: SuggestionHistoryScalarWhereWithAggregatesInput[]
    NOT?: SuggestionHistoryScalarWhereWithAggregatesInput | SuggestionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuggestionHistory"> | string
    suggestionId?: StringWithAggregatesFilter<"SuggestionHistory"> | string
    statusIde?: EnumStatusIdeWithAggregatesFilter<"SuggestionHistory"> | $Enums.StatusIde
    changedAt?: DateTimeWithAggregatesFilter<"SuggestionHistory"> | Date | string
  }

  export type FormPenilaianWhereInput = {
    AND?: FormPenilaianWhereInput | FormPenilaianWhereInput[]
    OR?: FormPenilaianWhereInput[]
    NOT?: FormPenilaianWhereInput | FormPenilaianWhereInput[]
    id?: StringFilter<"FormPenilaian"> | string
    suggestionId?: StringFilter<"FormPenilaian"> | string
    penilaianKriteria?: StringFilter<"FormPenilaian"> | string
    skorKriteria?: IntFilter<"FormPenilaian"> | number
    komentarPenilaian?: StringNullableFilter<"FormPenilaian"> | string | null
    createdAt?: DateTimeFilter<"FormPenilaian"> | Date | string
    updatedAt?: DateTimeFilter<"FormPenilaian"> | Date | string
    suggestion?: XOR<SuggestionScalarRelationFilter, SuggestionWhereInput>
  }

  export type FormPenilaianOrderByWithRelationInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    penilaianKriteria?: SortOrder
    skorKriteria?: SortOrder
    komentarPenilaian?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suggestion?: SuggestionOrderByWithRelationInput
  }

  export type FormPenilaianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormPenilaianWhereInput | FormPenilaianWhereInput[]
    OR?: FormPenilaianWhereInput[]
    NOT?: FormPenilaianWhereInput | FormPenilaianWhereInput[]
    suggestionId?: StringFilter<"FormPenilaian"> | string
    penilaianKriteria?: StringFilter<"FormPenilaian"> | string
    skorKriteria?: IntFilter<"FormPenilaian"> | number
    komentarPenilaian?: StringNullableFilter<"FormPenilaian"> | string | null
    createdAt?: DateTimeFilter<"FormPenilaian"> | Date | string
    updatedAt?: DateTimeFilter<"FormPenilaian"> | Date | string
    suggestion?: XOR<SuggestionScalarRelationFilter, SuggestionWhereInput>
  }, "id">

  export type FormPenilaianOrderByWithAggregationInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    penilaianKriteria?: SortOrder
    skorKriteria?: SortOrder
    komentarPenilaian?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormPenilaianCountOrderByAggregateInput
    _avg?: FormPenilaianAvgOrderByAggregateInput
    _max?: FormPenilaianMaxOrderByAggregateInput
    _min?: FormPenilaianMinOrderByAggregateInput
    _sum?: FormPenilaianSumOrderByAggregateInput
  }

  export type FormPenilaianScalarWhereWithAggregatesInput = {
    AND?: FormPenilaianScalarWhereWithAggregatesInput | FormPenilaianScalarWhereWithAggregatesInput[]
    OR?: FormPenilaianScalarWhereWithAggregatesInput[]
    NOT?: FormPenilaianScalarWhereWithAggregatesInput | FormPenilaianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormPenilaian"> | string
    suggestionId?: StringWithAggregatesFilter<"FormPenilaian"> | string
    penilaianKriteria?: StringWithAggregatesFilter<"FormPenilaian"> | string
    skorKriteria?: IntWithAggregatesFilter<"FormPenilaian"> | number
    komentarPenilaian?: StringNullableWithAggregatesFilter<"FormPenilaian"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FormPenilaian"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormPenilaian"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    nrp: bigint | number
    role: $Enums.Role
    permissionLevel?: $Enums.PermissionLevel
    department?: $Enums.Department
    position?: $Enums.Position
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestions?: SuggestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    nrp: bigint | number
    role: $Enums.Role
    permissionLevel?: $Enums.PermissionLevel
    department?: $Enums.Department
    position?: $Enums.Position
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nrp?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissionLevel?: EnumPermissionLevelFieldUpdateOperationsInput | $Enums.PermissionLevel
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestions?: SuggestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nrp?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissionLevel?: EnumPermissionLevelFieldUpdateOperationsInput | $Enums.PermissionLevel
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestions?: SuggestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    nrp: bigint | number
    role: $Enums.Role
    permissionLevel?: $Enums.PermissionLevel
    department?: $Enums.Department
    position?: $Enums.Position
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nrp?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissionLevel?: EnumPermissionLevelFieldUpdateOperationsInput | $Enums.PermissionLevel
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nrp?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissionLevel?: EnumPermissionLevelFieldUpdateOperationsInput | $Enums.PermissionLevel
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionCreateInput = {
    id?: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan?: string | null
    fotoSebelum?: string | null
    fotoSesudah?: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde?: $Enums.StatusIde
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSuggestionsInput
    history?: SuggestionHistoryCreateNestedManyWithoutSuggestionInput
    penilaian?: FormPenilaianCreateNestedManyWithoutSuggestionInput
  }

  export type SuggestionUncheckedCreateInput = {
    id?: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan?: string | null
    fotoSebelum?: string | null
    fotoSesudah?: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde?: $Enums.StatusIde
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    history?: SuggestionHistoryUncheckedCreateNestedManyWithoutSuggestionInput
    penilaian?: FormPenilaianUncheckedCreateNestedManyWithoutSuggestionInput
  }

  export type SuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSuggestionsNestedInput
    history?: SuggestionHistoryUpdateManyWithoutSuggestionNestedInput
    penilaian?: FormPenilaianUpdateManyWithoutSuggestionNestedInput
  }

  export type SuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    history?: SuggestionHistoryUncheckedUpdateManyWithoutSuggestionNestedInput
    penilaian?: FormPenilaianUncheckedUpdateManyWithoutSuggestionNestedInput
  }

  export type SuggestionCreateManyInput = {
    id?: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan?: string | null
    fotoSebelum?: string | null
    fotoSesudah?: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde?: $Enums.StatusIde
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SuggestionHistoryCreateInput = {
    id?: string
    statusIde: $Enums.StatusIde
    changedAt?: Date | string
    suggestion: SuggestionCreateNestedOneWithoutHistoryInput
  }

  export type SuggestionHistoryUncheckedCreateInput = {
    id?: string
    suggestionId: string
    statusIde: $Enums.StatusIde
    changedAt?: Date | string
  }

  export type SuggestionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: SuggestionUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type SuggestionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestionId?: StringFieldUpdateOperationsInput | string
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionHistoryCreateManyInput = {
    id?: string
    suggestionId: string
    statusIde: $Enums.StatusIde
    changedAt?: Date | string
  }

  export type SuggestionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestionId?: StringFieldUpdateOperationsInput | string
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormPenilaianCreateInput = {
    id?: string
    penilaianKriteria: string
    skorKriteria: number
    komentarPenilaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestion: SuggestionCreateNestedOneWithoutPenilaianInput
  }

  export type FormPenilaianUncheckedCreateInput = {
    id?: string
    suggestionId: string
    penilaianKriteria: string
    skorKriteria: number
    komentarPenilaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormPenilaianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    penilaianKriteria?: StringFieldUpdateOperationsInput | string
    skorKriteria?: IntFieldUpdateOperationsInput | number
    komentarPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: SuggestionUpdateOneRequiredWithoutPenilaianNestedInput
  }

  export type FormPenilaianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestionId?: StringFieldUpdateOperationsInput | string
    penilaianKriteria?: StringFieldUpdateOperationsInput | string
    skorKriteria?: IntFieldUpdateOperationsInput | number
    komentarPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormPenilaianCreateManyInput = {
    id?: string
    suggestionId: string
    penilaianKriteria: string
    skorKriteria: number
    komentarPenilaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormPenilaianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    penilaianKriteria?: StringFieldUpdateOperationsInput | string
    skorKriteria?: IntFieldUpdateOperationsInput | number
    komentarPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormPenilaianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestionId?: StringFieldUpdateOperationsInput | string
    penilaianKriteria?: StringFieldUpdateOperationsInput | string
    skorKriteria?: IntFieldUpdateOperationsInput | number
    komentarPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumPermissionLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionLevel | EnumPermissionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionLevel[] | ListEnumPermissionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionLevel[] | ListEnumPermissionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionLevelFilter<$PrismaModel> | $Enums.PermissionLevel
  }

  export type EnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type EnumPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionFilter<$PrismaModel> | $Enums.Position
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SuggestionListRelationFilter = {
    every?: SuggestionWhereInput
    some?: SuggestionWhereInput
    none?: SuggestionWhereInput
  }

  export type SuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nrp?: SortOrder
    role?: SortOrder
    permissionLevel?: SortOrder
    department?: SortOrder
    position?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    nrp?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nrp?: SortOrder
    role?: SortOrder
    permissionLevel?: SortOrder
    department?: SortOrder
    position?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nrp?: SortOrder
    role?: SortOrder
    permissionLevel?: SortOrder
    department?: SortOrder
    position?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    nrp?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumPermissionLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionLevel | EnumPermissionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionLevel[] | ListEnumPermissionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionLevel[] | ListEnumPermissionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionLevelWithAggregatesFilter<$PrismaModel> | $Enums.PermissionLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionLevelFilter<$PrismaModel>
    _max?: NestedEnumPermissionLevelFilter<$PrismaModel>
  }

  export type EnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type EnumPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionWithAggregatesFilter<$PrismaModel> | $Enums.Position
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPositionFilter<$PrismaModel>
    _max?: NestedEnumPositionFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
  }

  export type EnumKriteriaSSFilter<$PrismaModel = never> = {
    equals?: $Enums.KriteriaSS | EnumKriteriaSSFieldRefInput<$PrismaModel>
    in?: $Enums.KriteriaSS[] | ListEnumKriteriaSSFieldRefInput<$PrismaModel>
    notIn?: $Enums.KriteriaSS[] | ListEnumKriteriaSSFieldRefInput<$PrismaModel>
    not?: NestedEnumKriteriaSSFilter<$PrismaModel> | $Enums.KriteriaSS
  }

  export type EnumSifatPerbaikanFilter<$PrismaModel = never> = {
    equals?: $Enums.SifatPerbaikan | EnumSifatPerbaikanFieldRefInput<$PrismaModel>
    in?: $Enums.SifatPerbaikan[] | ListEnumSifatPerbaikanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SifatPerbaikan[] | ListEnumSifatPerbaikanFieldRefInput<$PrismaModel>
    not?: NestedEnumSifatPerbaikanFilter<$PrismaModel> | $Enums.SifatPerbaikan
  }

  export type EnumStatusIdeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIde | EnumStatusIdeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIde[] | ListEnumStatusIdeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIde[] | ListEnumStatusIdeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIdeFilter<$PrismaModel> | $Enums.StatusIde
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SuggestionHistoryListRelationFilter = {
    every?: SuggestionHistoryWhereInput
    some?: SuggestionHistoryWhereInput
    none?: SuggestionHistoryWhereInput
  }

  export type FormPenilaianListRelationFilter = {
    every?: FormPenilaianWhereInput
    some?: FormPenilaianWhereInput
    none?: FormPenilaianWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SuggestionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormPenilaianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    judulIde?: SortOrder
    masalahYangDihadapi?: SortOrder
    uraianIde?: SortOrder
    ideProsesPerbaikan?: SortOrder
    hasilUraianProses?: SortOrder
    evaluasiIde?: SortOrder
    komentarAtasan?: SortOrder
    fotoSebelum?: SortOrder
    fotoSesudah?: SortOrder
    kriteriaSS?: SortOrder
    sifatPerbaikan?: SortOrder
    statusIde?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    judulIde?: SortOrder
    masalahYangDihadapi?: SortOrder
    uraianIde?: SortOrder
    ideProsesPerbaikan?: SortOrder
    hasilUraianProses?: SortOrder
    evaluasiIde?: SortOrder
    komentarAtasan?: SortOrder
    fotoSebelum?: SortOrder
    fotoSesudah?: SortOrder
    kriteriaSS?: SortOrder
    sifatPerbaikan?: SortOrder
    statusIde?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    judulIde?: SortOrder
    masalahYangDihadapi?: SortOrder
    uraianIde?: SortOrder
    ideProsesPerbaikan?: SortOrder
    hasilUraianProses?: SortOrder
    evaluasiIde?: SortOrder
    komentarAtasan?: SortOrder
    fotoSebelum?: SortOrder
    fotoSesudah?: SortOrder
    kriteriaSS?: SortOrder
    sifatPerbaikan?: SortOrder
    statusIde?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
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
  }

  export type EnumKriteriaSSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KriteriaSS | EnumKriteriaSSFieldRefInput<$PrismaModel>
    in?: $Enums.KriteriaSS[] | ListEnumKriteriaSSFieldRefInput<$PrismaModel>
    notIn?: $Enums.KriteriaSS[] | ListEnumKriteriaSSFieldRefInput<$PrismaModel>
    not?: NestedEnumKriteriaSSWithAggregatesFilter<$PrismaModel> | $Enums.KriteriaSS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKriteriaSSFilter<$PrismaModel>
    _max?: NestedEnumKriteriaSSFilter<$PrismaModel>
  }

  export type EnumSifatPerbaikanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SifatPerbaikan | EnumSifatPerbaikanFieldRefInput<$PrismaModel>
    in?: $Enums.SifatPerbaikan[] | ListEnumSifatPerbaikanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SifatPerbaikan[] | ListEnumSifatPerbaikanFieldRefInput<$PrismaModel>
    not?: NestedEnumSifatPerbaikanWithAggregatesFilter<$PrismaModel> | $Enums.SifatPerbaikan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSifatPerbaikanFilter<$PrismaModel>
    _max?: NestedEnumSifatPerbaikanFilter<$PrismaModel>
  }

  export type EnumStatusIdeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIde | EnumStatusIdeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIde[] | ListEnumStatusIdeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIde[] | ListEnumStatusIdeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIdeWithAggregatesFilter<$PrismaModel> | $Enums.StatusIde
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusIdeFilter<$PrismaModel>
    _max?: NestedEnumStatusIdeFilter<$PrismaModel>
  }

  export type SuggestionScalarRelationFilter = {
    is?: SuggestionWhereInput
    isNot?: SuggestionWhereInput
  }

  export type SuggestionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    statusIde?: SortOrder
    changedAt?: SortOrder
  }

  export type SuggestionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    statusIde?: SortOrder
    changedAt?: SortOrder
  }

  export type SuggestionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    statusIde?: SortOrder
    changedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FormPenilaianCountOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    penilaianKriteria?: SortOrder
    skorKriteria?: SortOrder
    komentarPenilaian?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormPenilaianAvgOrderByAggregateInput = {
    skorKriteria?: SortOrder
  }

  export type FormPenilaianMaxOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    penilaianKriteria?: SortOrder
    skorKriteria?: SortOrder
    komentarPenilaian?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormPenilaianMinOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    penilaianKriteria?: SortOrder
    skorKriteria?: SortOrder
    komentarPenilaian?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormPenilaianSumOrderByAggregateInput = {
    skorKriteria?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SuggestionCreateNestedManyWithoutUserInput = {
    create?: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput> | SuggestionCreateWithoutUserInput[] | SuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutUserInput | SuggestionCreateOrConnectWithoutUserInput[]
    createMany?: SuggestionCreateManyUserInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type SuggestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput> | SuggestionCreateWithoutUserInput[] | SuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutUserInput | SuggestionCreateOrConnectWithoutUserInput[]
    createMany?: SuggestionCreateManyUserInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumPermissionLevelFieldUpdateOperationsInput = {
    set?: $Enums.PermissionLevel
  }

  export type EnumDepartmentFieldUpdateOperationsInput = {
    set?: $Enums.Department
  }

  export type EnumPositionFieldUpdateOperationsInput = {
    set?: $Enums.Position
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SuggestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput> | SuggestionCreateWithoutUserInput[] | SuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutUserInput | SuggestionCreateOrConnectWithoutUserInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutUserInput | SuggestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SuggestionCreateManyUserInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutUserInput | SuggestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutUserInput | SuggestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type SuggestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput> | SuggestionCreateWithoutUserInput[] | SuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutUserInput | SuggestionCreateOrConnectWithoutUserInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutUserInput | SuggestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SuggestionCreateManyUserInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutUserInput | SuggestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutUserInput | SuggestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSuggestionsInput = {
    create?: XOR<UserCreateWithoutSuggestionsInput, UserUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuggestionsInput
    connect?: UserWhereUniqueInput
  }

  export type SuggestionHistoryCreateNestedManyWithoutSuggestionInput = {
    create?: XOR<SuggestionHistoryCreateWithoutSuggestionInput, SuggestionHistoryUncheckedCreateWithoutSuggestionInput> | SuggestionHistoryCreateWithoutSuggestionInput[] | SuggestionHistoryUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: SuggestionHistoryCreateOrConnectWithoutSuggestionInput | SuggestionHistoryCreateOrConnectWithoutSuggestionInput[]
    createMany?: SuggestionHistoryCreateManySuggestionInputEnvelope
    connect?: SuggestionHistoryWhereUniqueInput | SuggestionHistoryWhereUniqueInput[]
  }

  export type FormPenilaianCreateNestedManyWithoutSuggestionInput = {
    create?: XOR<FormPenilaianCreateWithoutSuggestionInput, FormPenilaianUncheckedCreateWithoutSuggestionInput> | FormPenilaianCreateWithoutSuggestionInput[] | FormPenilaianUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: FormPenilaianCreateOrConnectWithoutSuggestionInput | FormPenilaianCreateOrConnectWithoutSuggestionInput[]
    createMany?: FormPenilaianCreateManySuggestionInputEnvelope
    connect?: FormPenilaianWhereUniqueInput | FormPenilaianWhereUniqueInput[]
  }

  export type SuggestionHistoryUncheckedCreateNestedManyWithoutSuggestionInput = {
    create?: XOR<SuggestionHistoryCreateWithoutSuggestionInput, SuggestionHistoryUncheckedCreateWithoutSuggestionInput> | SuggestionHistoryCreateWithoutSuggestionInput[] | SuggestionHistoryUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: SuggestionHistoryCreateOrConnectWithoutSuggestionInput | SuggestionHistoryCreateOrConnectWithoutSuggestionInput[]
    createMany?: SuggestionHistoryCreateManySuggestionInputEnvelope
    connect?: SuggestionHistoryWhereUniqueInput | SuggestionHistoryWhereUniqueInput[]
  }

  export type FormPenilaianUncheckedCreateNestedManyWithoutSuggestionInput = {
    create?: XOR<FormPenilaianCreateWithoutSuggestionInput, FormPenilaianUncheckedCreateWithoutSuggestionInput> | FormPenilaianCreateWithoutSuggestionInput[] | FormPenilaianUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: FormPenilaianCreateOrConnectWithoutSuggestionInput | FormPenilaianCreateOrConnectWithoutSuggestionInput[]
    createMany?: FormPenilaianCreateManySuggestionInputEnvelope
    connect?: FormPenilaianWhereUniqueInput | FormPenilaianWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumKriteriaSSFieldUpdateOperationsInput = {
    set?: $Enums.KriteriaSS
  }

  export type EnumSifatPerbaikanFieldUpdateOperationsInput = {
    set?: $Enums.SifatPerbaikan
  }

  export type EnumStatusIdeFieldUpdateOperationsInput = {
    set?: $Enums.StatusIde
  }

  export type UserUpdateOneRequiredWithoutSuggestionsNestedInput = {
    create?: XOR<UserCreateWithoutSuggestionsInput, UserUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuggestionsInput
    upsert?: UserUpsertWithoutSuggestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSuggestionsInput, UserUpdateWithoutSuggestionsInput>, UserUncheckedUpdateWithoutSuggestionsInput>
  }

  export type SuggestionHistoryUpdateManyWithoutSuggestionNestedInput = {
    create?: XOR<SuggestionHistoryCreateWithoutSuggestionInput, SuggestionHistoryUncheckedCreateWithoutSuggestionInput> | SuggestionHistoryCreateWithoutSuggestionInput[] | SuggestionHistoryUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: SuggestionHistoryCreateOrConnectWithoutSuggestionInput | SuggestionHistoryCreateOrConnectWithoutSuggestionInput[]
    upsert?: SuggestionHistoryUpsertWithWhereUniqueWithoutSuggestionInput | SuggestionHistoryUpsertWithWhereUniqueWithoutSuggestionInput[]
    createMany?: SuggestionHistoryCreateManySuggestionInputEnvelope
    set?: SuggestionHistoryWhereUniqueInput | SuggestionHistoryWhereUniqueInput[]
    disconnect?: SuggestionHistoryWhereUniqueInput | SuggestionHistoryWhereUniqueInput[]
    delete?: SuggestionHistoryWhereUniqueInput | SuggestionHistoryWhereUniqueInput[]
    connect?: SuggestionHistoryWhereUniqueInput | SuggestionHistoryWhereUniqueInput[]
    update?: SuggestionHistoryUpdateWithWhereUniqueWithoutSuggestionInput | SuggestionHistoryUpdateWithWhereUniqueWithoutSuggestionInput[]
    updateMany?: SuggestionHistoryUpdateManyWithWhereWithoutSuggestionInput | SuggestionHistoryUpdateManyWithWhereWithoutSuggestionInput[]
    deleteMany?: SuggestionHistoryScalarWhereInput | SuggestionHistoryScalarWhereInput[]
  }

  export type FormPenilaianUpdateManyWithoutSuggestionNestedInput = {
    create?: XOR<FormPenilaianCreateWithoutSuggestionInput, FormPenilaianUncheckedCreateWithoutSuggestionInput> | FormPenilaianCreateWithoutSuggestionInput[] | FormPenilaianUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: FormPenilaianCreateOrConnectWithoutSuggestionInput | FormPenilaianCreateOrConnectWithoutSuggestionInput[]
    upsert?: FormPenilaianUpsertWithWhereUniqueWithoutSuggestionInput | FormPenilaianUpsertWithWhereUniqueWithoutSuggestionInput[]
    createMany?: FormPenilaianCreateManySuggestionInputEnvelope
    set?: FormPenilaianWhereUniqueInput | FormPenilaianWhereUniqueInput[]
    disconnect?: FormPenilaianWhereUniqueInput | FormPenilaianWhereUniqueInput[]
    delete?: FormPenilaianWhereUniqueInput | FormPenilaianWhereUniqueInput[]
    connect?: FormPenilaianWhereUniqueInput | FormPenilaianWhereUniqueInput[]
    update?: FormPenilaianUpdateWithWhereUniqueWithoutSuggestionInput | FormPenilaianUpdateWithWhereUniqueWithoutSuggestionInput[]
    updateMany?: FormPenilaianUpdateManyWithWhereWithoutSuggestionInput | FormPenilaianUpdateManyWithWhereWithoutSuggestionInput[]
    deleteMany?: FormPenilaianScalarWhereInput | FormPenilaianScalarWhereInput[]
  }

  export type SuggestionHistoryUncheckedUpdateManyWithoutSuggestionNestedInput = {
    create?: XOR<SuggestionHistoryCreateWithoutSuggestionInput, SuggestionHistoryUncheckedCreateWithoutSuggestionInput> | SuggestionHistoryCreateWithoutSuggestionInput[] | SuggestionHistoryUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: SuggestionHistoryCreateOrConnectWithoutSuggestionInput | SuggestionHistoryCreateOrConnectWithoutSuggestionInput[]
    upsert?: SuggestionHistoryUpsertWithWhereUniqueWithoutSuggestionInput | SuggestionHistoryUpsertWithWhereUniqueWithoutSuggestionInput[]
    createMany?: SuggestionHistoryCreateManySuggestionInputEnvelope
    set?: SuggestionHistoryWhereUniqueInput | SuggestionHistoryWhereUniqueInput[]
    disconnect?: SuggestionHistoryWhereUniqueInput | SuggestionHistoryWhereUniqueInput[]
    delete?: SuggestionHistoryWhereUniqueInput | SuggestionHistoryWhereUniqueInput[]
    connect?: SuggestionHistoryWhereUniqueInput | SuggestionHistoryWhereUniqueInput[]
    update?: SuggestionHistoryUpdateWithWhereUniqueWithoutSuggestionInput | SuggestionHistoryUpdateWithWhereUniqueWithoutSuggestionInput[]
    updateMany?: SuggestionHistoryUpdateManyWithWhereWithoutSuggestionInput | SuggestionHistoryUpdateManyWithWhereWithoutSuggestionInput[]
    deleteMany?: SuggestionHistoryScalarWhereInput | SuggestionHistoryScalarWhereInput[]
  }

  export type FormPenilaianUncheckedUpdateManyWithoutSuggestionNestedInput = {
    create?: XOR<FormPenilaianCreateWithoutSuggestionInput, FormPenilaianUncheckedCreateWithoutSuggestionInput> | FormPenilaianCreateWithoutSuggestionInput[] | FormPenilaianUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: FormPenilaianCreateOrConnectWithoutSuggestionInput | FormPenilaianCreateOrConnectWithoutSuggestionInput[]
    upsert?: FormPenilaianUpsertWithWhereUniqueWithoutSuggestionInput | FormPenilaianUpsertWithWhereUniqueWithoutSuggestionInput[]
    createMany?: FormPenilaianCreateManySuggestionInputEnvelope
    set?: FormPenilaianWhereUniqueInput | FormPenilaianWhereUniqueInput[]
    disconnect?: FormPenilaianWhereUniqueInput | FormPenilaianWhereUniqueInput[]
    delete?: FormPenilaianWhereUniqueInput | FormPenilaianWhereUniqueInput[]
    connect?: FormPenilaianWhereUniqueInput | FormPenilaianWhereUniqueInput[]
    update?: FormPenilaianUpdateWithWhereUniqueWithoutSuggestionInput | FormPenilaianUpdateWithWhereUniqueWithoutSuggestionInput[]
    updateMany?: FormPenilaianUpdateManyWithWhereWithoutSuggestionInput | FormPenilaianUpdateManyWithWhereWithoutSuggestionInput[]
    deleteMany?: FormPenilaianScalarWhereInput | FormPenilaianScalarWhereInput[]
  }

  export type SuggestionCreateNestedOneWithoutHistoryInput = {
    create?: XOR<SuggestionCreateWithoutHistoryInput, SuggestionUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: SuggestionCreateOrConnectWithoutHistoryInput
    connect?: SuggestionWhereUniqueInput
  }

  export type SuggestionUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<SuggestionCreateWithoutHistoryInput, SuggestionUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: SuggestionCreateOrConnectWithoutHistoryInput
    upsert?: SuggestionUpsertWithoutHistoryInput
    connect?: SuggestionWhereUniqueInput
    update?: XOR<XOR<SuggestionUpdateToOneWithWhereWithoutHistoryInput, SuggestionUpdateWithoutHistoryInput>, SuggestionUncheckedUpdateWithoutHistoryInput>
  }

  export type SuggestionCreateNestedOneWithoutPenilaianInput = {
    create?: XOR<SuggestionCreateWithoutPenilaianInput, SuggestionUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: SuggestionCreateOrConnectWithoutPenilaianInput
    connect?: SuggestionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SuggestionUpdateOneRequiredWithoutPenilaianNestedInput = {
    create?: XOR<SuggestionCreateWithoutPenilaianInput, SuggestionUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: SuggestionCreateOrConnectWithoutPenilaianInput
    upsert?: SuggestionUpsertWithoutPenilaianInput
    connect?: SuggestionWhereUniqueInput
    update?: XOR<XOR<SuggestionUpdateToOneWithWhereWithoutPenilaianInput, SuggestionUpdateWithoutPenilaianInput>, SuggestionUncheckedUpdateWithoutPenilaianInput>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumPermissionLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionLevel | EnumPermissionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionLevel[] | ListEnumPermissionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionLevel[] | ListEnumPermissionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionLevelFilter<$PrismaModel> | $Enums.PermissionLevel
  }

  export type NestedEnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type NestedEnumPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionFilter<$PrismaModel> | $Enums.Position
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumPermissionLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionLevel | EnumPermissionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionLevel[] | ListEnumPermissionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionLevel[] | ListEnumPermissionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionLevelWithAggregatesFilter<$PrismaModel> | $Enums.PermissionLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionLevelFilter<$PrismaModel>
    _max?: NestedEnumPermissionLevelFilter<$PrismaModel>
  }

  export type NestedEnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type NestedEnumPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionWithAggregatesFilter<$PrismaModel> | $Enums.Position
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPositionFilter<$PrismaModel>
    _max?: NestedEnumPositionFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
  }

  export type NestedEnumKriteriaSSFilter<$PrismaModel = never> = {
    equals?: $Enums.KriteriaSS | EnumKriteriaSSFieldRefInput<$PrismaModel>
    in?: $Enums.KriteriaSS[] | ListEnumKriteriaSSFieldRefInput<$PrismaModel>
    notIn?: $Enums.KriteriaSS[] | ListEnumKriteriaSSFieldRefInput<$PrismaModel>
    not?: NestedEnumKriteriaSSFilter<$PrismaModel> | $Enums.KriteriaSS
  }

  export type NestedEnumSifatPerbaikanFilter<$PrismaModel = never> = {
    equals?: $Enums.SifatPerbaikan | EnumSifatPerbaikanFieldRefInput<$PrismaModel>
    in?: $Enums.SifatPerbaikan[] | ListEnumSifatPerbaikanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SifatPerbaikan[] | ListEnumSifatPerbaikanFieldRefInput<$PrismaModel>
    not?: NestedEnumSifatPerbaikanFilter<$PrismaModel> | $Enums.SifatPerbaikan
  }

  export type NestedEnumStatusIdeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIde | EnumStatusIdeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIde[] | ListEnumStatusIdeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIde[] | ListEnumStatusIdeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIdeFilter<$PrismaModel> | $Enums.StatusIde
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
  }

  export type NestedEnumKriteriaSSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KriteriaSS | EnumKriteriaSSFieldRefInput<$PrismaModel>
    in?: $Enums.KriteriaSS[] | ListEnumKriteriaSSFieldRefInput<$PrismaModel>
    notIn?: $Enums.KriteriaSS[] | ListEnumKriteriaSSFieldRefInput<$PrismaModel>
    not?: NestedEnumKriteriaSSWithAggregatesFilter<$PrismaModel> | $Enums.KriteriaSS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKriteriaSSFilter<$PrismaModel>
    _max?: NestedEnumKriteriaSSFilter<$PrismaModel>
  }

  export type NestedEnumSifatPerbaikanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SifatPerbaikan | EnumSifatPerbaikanFieldRefInput<$PrismaModel>
    in?: $Enums.SifatPerbaikan[] | ListEnumSifatPerbaikanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SifatPerbaikan[] | ListEnumSifatPerbaikanFieldRefInput<$PrismaModel>
    not?: NestedEnumSifatPerbaikanWithAggregatesFilter<$PrismaModel> | $Enums.SifatPerbaikan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSifatPerbaikanFilter<$PrismaModel>
    _max?: NestedEnumSifatPerbaikanFilter<$PrismaModel>
  }

  export type NestedEnumStatusIdeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIde | EnumStatusIdeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIde[] | ListEnumStatusIdeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIde[] | ListEnumStatusIdeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIdeWithAggregatesFilter<$PrismaModel> | $Enums.StatusIde
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusIdeFilter<$PrismaModel>
    _max?: NestedEnumStatusIdeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SuggestionCreateWithoutUserInput = {
    id?: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan?: string | null
    fotoSebelum?: string | null
    fotoSesudah?: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde?: $Enums.StatusIde
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: SuggestionHistoryCreateNestedManyWithoutSuggestionInput
    penilaian?: FormPenilaianCreateNestedManyWithoutSuggestionInput
  }

  export type SuggestionUncheckedCreateWithoutUserInput = {
    id?: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan?: string | null
    fotoSebelum?: string | null
    fotoSesudah?: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde?: $Enums.StatusIde
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: SuggestionHistoryUncheckedCreateNestedManyWithoutSuggestionInput
    penilaian?: FormPenilaianUncheckedCreateNestedManyWithoutSuggestionInput
  }

  export type SuggestionCreateOrConnectWithoutUserInput = {
    where: SuggestionWhereUniqueInput
    create: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput>
  }

  export type SuggestionCreateManyUserInputEnvelope = {
    data: SuggestionCreateManyUserInput | SuggestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SuggestionUpsertWithWhereUniqueWithoutUserInput = {
    where: SuggestionWhereUniqueInput
    update: XOR<SuggestionUpdateWithoutUserInput, SuggestionUncheckedUpdateWithoutUserInput>
    create: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput>
  }

  export type SuggestionUpdateWithWhereUniqueWithoutUserInput = {
    where: SuggestionWhereUniqueInput
    data: XOR<SuggestionUpdateWithoutUserInput, SuggestionUncheckedUpdateWithoutUserInput>
  }

  export type SuggestionUpdateManyWithWhereWithoutUserInput = {
    where: SuggestionScalarWhereInput
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyWithoutUserInput>
  }

  export type SuggestionScalarWhereInput = {
    AND?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
    OR?: SuggestionScalarWhereInput[]
    NOT?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
    id?: StringFilter<"Suggestion"> | string
    judulIde?: StringFilter<"Suggestion"> | string
    masalahYangDihadapi?: StringFilter<"Suggestion"> | string
    uraianIde?: StringFilter<"Suggestion"> | string
    ideProsesPerbaikan?: StringFilter<"Suggestion"> | string
    hasilUraianProses?: StringFilter<"Suggestion"> | string
    evaluasiIde?: StringFilter<"Suggestion"> | string
    komentarAtasan?: StringNullableFilter<"Suggestion"> | string | null
    fotoSebelum?: StringNullableFilter<"Suggestion"> | string | null
    fotoSesudah?: StringNullableFilter<"Suggestion"> | string | null
    kriteriaSS?: EnumKriteriaSSFilter<"Suggestion"> | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFilter<"Suggestion"> | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFilter<"Suggestion"> | $Enums.StatusIde
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    updatedAt?: DateTimeFilter<"Suggestion"> | Date | string
    userId?: StringFilter<"Suggestion"> | string
  }

  export type UserCreateWithoutSuggestionsInput = {
    id?: string
    firstName: string
    lastName: string
    nrp: bigint | number
    role: $Enums.Role
    permissionLevel?: $Enums.PermissionLevel
    department?: $Enums.Department
    position?: $Enums.Position
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSuggestionsInput = {
    id?: string
    firstName: string
    lastName: string
    nrp: bigint | number
    role: $Enums.Role
    permissionLevel?: $Enums.PermissionLevel
    department?: $Enums.Department
    position?: $Enums.Position
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSuggestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSuggestionsInput, UserUncheckedCreateWithoutSuggestionsInput>
  }

  export type SuggestionHistoryCreateWithoutSuggestionInput = {
    id?: string
    statusIde: $Enums.StatusIde
    changedAt?: Date | string
  }

  export type SuggestionHistoryUncheckedCreateWithoutSuggestionInput = {
    id?: string
    statusIde: $Enums.StatusIde
    changedAt?: Date | string
  }

  export type SuggestionHistoryCreateOrConnectWithoutSuggestionInput = {
    where: SuggestionHistoryWhereUniqueInput
    create: XOR<SuggestionHistoryCreateWithoutSuggestionInput, SuggestionHistoryUncheckedCreateWithoutSuggestionInput>
  }

  export type SuggestionHistoryCreateManySuggestionInputEnvelope = {
    data: SuggestionHistoryCreateManySuggestionInput | SuggestionHistoryCreateManySuggestionInput[]
    skipDuplicates?: boolean
  }

  export type FormPenilaianCreateWithoutSuggestionInput = {
    id?: string
    penilaianKriteria: string
    skorKriteria: number
    komentarPenilaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormPenilaianUncheckedCreateWithoutSuggestionInput = {
    id?: string
    penilaianKriteria: string
    skorKriteria: number
    komentarPenilaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormPenilaianCreateOrConnectWithoutSuggestionInput = {
    where: FormPenilaianWhereUniqueInput
    create: XOR<FormPenilaianCreateWithoutSuggestionInput, FormPenilaianUncheckedCreateWithoutSuggestionInput>
  }

  export type FormPenilaianCreateManySuggestionInputEnvelope = {
    data: FormPenilaianCreateManySuggestionInput | FormPenilaianCreateManySuggestionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSuggestionsInput = {
    update: XOR<UserUpdateWithoutSuggestionsInput, UserUncheckedUpdateWithoutSuggestionsInput>
    create: XOR<UserCreateWithoutSuggestionsInput, UserUncheckedCreateWithoutSuggestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSuggestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSuggestionsInput, UserUncheckedUpdateWithoutSuggestionsInput>
  }

  export type UserUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nrp?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissionLevel?: EnumPermissionLevelFieldUpdateOperationsInput | $Enums.PermissionLevel
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nrp?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissionLevel?: EnumPermissionLevelFieldUpdateOperationsInput | $Enums.PermissionLevel
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionHistoryUpsertWithWhereUniqueWithoutSuggestionInput = {
    where: SuggestionHistoryWhereUniqueInput
    update: XOR<SuggestionHistoryUpdateWithoutSuggestionInput, SuggestionHistoryUncheckedUpdateWithoutSuggestionInput>
    create: XOR<SuggestionHistoryCreateWithoutSuggestionInput, SuggestionHistoryUncheckedCreateWithoutSuggestionInput>
  }

  export type SuggestionHistoryUpdateWithWhereUniqueWithoutSuggestionInput = {
    where: SuggestionHistoryWhereUniqueInput
    data: XOR<SuggestionHistoryUpdateWithoutSuggestionInput, SuggestionHistoryUncheckedUpdateWithoutSuggestionInput>
  }

  export type SuggestionHistoryUpdateManyWithWhereWithoutSuggestionInput = {
    where: SuggestionHistoryScalarWhereInput
    data: XOR<SuggestionHistoryUpdateManyMutationInput, SuggestionHistoryUncheckedUpdateManyWithoutSuggestionInput>
  }

  export type SuggestionHistoryScalarWhereInput = {
    AND?: SuggestionHistoryScalarWhereInput | SuggestionHistoryScalarWhereInput[]
    OR?: SuggestionHistoryScalarWhereInput[]
    NOT?: SuggestionHistoryScalarWhereInput | SuggestionHistoryScalarWhereInput[]
    id?: StringFilter<"SuggestionHistory"> | string
    suggestionId?: StringFilter<"SuggestionHistory"> | string
    statusIde?: EnumStatusIdeFilter<"SuggestionHistory"> | $Enums.StatusIde
    changedAt?: DateTimeFilter<"SuggestionHistory"> | Date | string
  }

  export type FormPenilaianUpsertWithWhereUniqueWithoutSuggestionInput = {
    where: FormPenilaianWhereUniqueInput
    update: XOR<FormPenilaianUpdateWithoutSuggestionInput, FormPenilaianUncheckedUpdateWithoutSuggestionInput>
    create: XOR<FormPenilaianCreateWithoutSuggestionInput, FormPenilaianUncheckedCreateWithoutSuggestionInput>
  }

  export type FormPenilaianUpdateWithWhereUniqueWithoutSuggestionInput = {
    where: FormPenilaianWhereUniqueInput
    data: XOR<FormPenilaianUpdateWithoutSuggestionInput, FormPenilaianUncheckedUpdateWithoutSuggestionInput>
  }

  export type FormPenilaianUpdateManyWithWhereWithoutSuggestionInput = {
    where: FormPenilaianScalarWhereInput
    data: XOR<FormPenilaianUpdateManyMutationInput, FormPenilaianUncheckedUpdateManyWithoutSuggestionInput>
  }

  export type FormPenilaianScalarWhereInput = {
    AND?: FormPenilaianScalarWhereInput | FormPenilaianScalarWhereInput[]
    OR?: FormPenilaianScalarWhereInput[]
    NOT?: FormPenilaianScalarWhereInput | FormPenilaianScalarWhereInput[]
    id?: StringFilter<"FormPenilaian"> | string
    suggestionId?: StringFilter<"FormPenilaian"> | string
    penilaianKriteria?: StringFilter<"FormPenilaian"> | string
    skorKriteria?: IntFilter<"FormPenilaian"> | number
    komentarPenilaian?: StringNullableFilter<"FormPenilaian"> | string | null
    createdAt?: DateTimeFilter<"FormPenilaian"> | Date | string
    updatedAt?: DateTimeFilter<"FormPenilaian"> | Date | string
  }

  export type SuggestionCreateWithoutHistoryInput = {
    id?: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan?: string | null
    fotoSebelum?: string | null
    fotoSesudah?: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde?: $Enums.StatusIde
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSuggestionsInput
    penilaian?: FormPenilaianCreateNestedManyWithoutSuggestionInput
  }

  export type SuggestionUncheckedCreateWithoutHistoryInput = {
    id?: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan?: string | null
    fotoSebelum?: string | null
    fotoSesudah?: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde?: $Enums.StatusIde
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    penilaian?: FormPenilaianUncheckedCreateNestedManyWithoutSuggestionInput
  }

  export type SuggestionCreateOrConnectWithoutHistoryInput = {
    where: SuggestionWhereUniqueInput
    create: XOR<SuggestionCreateWithoutHistoryInput, SuggestionUncheckedCreateWithoutHistoryInput>
  }

  export type SuggestionUpsertWithoutHistoryInput = {
    update: XOR<SuggestionUpdateWithoutHistoryInput, SuggestionUncheckedUpdateWithoutHistoryInput>
    create: XOR<SuggestionCreateWithoutHistoryInput, SuggestionUncheckedCreateWithoutHistoryInput>
    where?: SuggestionWhereInput
  }

  export type SuggestionUpdateToOneWithWhereWithoutHistoryInput = {
    where?: SuggestionWhereInput
    data: XOR<SuggestionUpdateWithoutHistoryInput, SuggestionUncheckedUpdateWithoutHistoryInput>
  }

  export type SuggestionUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSuggestionsNestedInput
    penilaian?: FormPenilaianUpdateManyWithoutSuggestionNestedInput
  }

  export type SuggestionUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    penilaian?: FormPenilaianUncheckedUpdateManyWithoutSuggestionNestedInput
  }

  export type SuggestionCreateWithoutPenilaianInput = {
    id?: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan?: string | null
    fotoSebelum?: string | null
    fotoSesudah?: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde?: $Enums.StatusIde
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSuggestionsInput
    history?: SuggestionHistoryCreateNestedManyWithoutSuggestionInput
  }

  export type SuggestionUncheckedCreateWithoutPenilaianInput = {
    id?: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan?: string | null
    fotoSebelum?: string | null
    fotoSesudah?: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde?: $Enums.StatusIde
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    history?: SuggestionHistoryUncheckedCreateNestedManyWithoutSuggestionInput
  }

  export type SuggestionCreateOrConnectWithoutPenilaianInput = {
    where: SuggestionWhereUniqueInput
    create: XOR<SuggestionCreateWithoutPenilaianInput, SuggestionUncheckedCreateWithoutPenilaianInput>
  }

  export type SuggestionUpsertWithoutPenilaianInput = {
    update: XOR<SuggestionUpdateWithoutPenilaianInput, SuggestionUncheckedUpdateWithoutPenilaianInput>
    create: XOR<SuggestionCreateWithoutPenilaianInput, SuggestionUncheckedCreateWithoutPenilaianInput>
    where?: SuggestionWhereInput
  }

  export type SuggestionUpdateToOneWithWhereWithoutPenilaianInput = {
    where?: SuggestionWhereInput
    data: XOR<SuggestionUpdateWithoutPenilaianInput, SuggestionUncheckedUpdateWithoutPenilaianInput>
  }

  export type SuggestionUpdateWithoutPenilaianInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSuggestionsNestedInput
    history?: SuggestionHistoryUpdateManyWithoutSuggestionNestedInput
  }

  export type SuggestionUncheckedUpdateWithoutPenilaianInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    history?: SuggestionHistoryUncheckedUpdateManyWithoutSuggestionNestedInput
  }

  export type SuggestionCreateManyUserInput = {
    id?: string
    judulIde: string
    masalahYangDihadapi: string
    uraianIde: string
    ideProsesPerbaikan: string
    hasilUraianProses: string
    evaluasiIde: string
    komentarAtasan?: string | null
    fotoSebelum?: string | null
    fotoSesudah?: string | null
    kriteriaSS: $Enums.KriteriaSS
    sifatPerbaikan: $Enums.SifatPerbaikan
    statusIde?: $Enums.StatusIde
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuggestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: SuggestionHistoryUpdateManyWithoutSuggestionNestedInput
    penilaian?: FormPenilaianUpdateManyWithoutSuggestionNestedInput
  }

  export type SuggestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: SuggestionHistoryUncheckedUpdateManyWithoutSuggestionNestedInput
    penilaian?: FormPenilaianUncheckedUpdateManyWithoutSuggestionNestedInput
  }

  export type SuggestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    judulIde?: StringFieldUpdateOperationsInput | string
    masalahYangDihadapi?: StringFieldUpdateOperationsInput | string
    uraianIde?: StringFieldUpdateOperationsInput | string
    ideProsesPerbaikan?: StringFieldUpdateOperationsInput | string
    hasilUraianProses?: StringFieldUpdateOperationsInput | string
    evaluasiIde?: StringFieldUpdateOperationsInput | string
    komentarAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSebelum?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSesudah?: NullableStringFieldUpdateOperationsInput | string | null
    kriteriaSS?: EnumKriteriaSSFieldUpdateOperationsInput | $Enums.KriteriaSS
    sifatPerbaikan?: EnumSifatPerbaikanFieldUpdateOperationsInput | $Enums.SifatPerbaikan
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionHistoryCreateManySuggestionInput = {
    id?: string
    statusIde: $Enums.StatusIde
    changedAt?: Date | string
  }

  export type FormPenilaianCreateManySuggestionInput = {
    id?: string
    penilaianKriteria: string
    skorKriteria: number
    komentarPenilaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuggestionHistoryUpdateWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionHistoryUncheckedUpdateWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionHistoryUncheckedUpdateManyWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusIde?: EnumStatusIdeFieldUpdateOperationsInput | $Enums.StatusIde
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormPenilaianUpdateWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    penilaianKriteria?: StringFieldUpdateOperationsInput | string
    skorKriteria?: IntFieldUpdateOperationsInput | number
    komentarPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormPenilaianUncheckedUpdateWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    penilaianKriteria?: StringFieldUpdateOperationsInput | string
    skorKriteria?: IntFieldUpdateOperationsInput | number
    komentarPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormPenilaianUncheckedUpdateManyWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    penilaianKriteria?: StringFieldUpdateOperationsInput | string
    skorKriteria?: IntFieldUpdateOperationsInput | number
    komentarPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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