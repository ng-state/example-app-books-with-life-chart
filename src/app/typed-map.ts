import { Map } from 'immutable';

export interface TypedMap<T, K, V> extends Map<K, V> {
    toJS(): T;
    get<I extends keyof T>(key: I & K): T[I] & V;
    set<S extends keyof T>(key: S & K, value: T[S] & V): Map<K, V>;
}
