import { Result } from '@vladbasin/ts-result';
import { Maybe } from '@vladbasin/ts-types';


export type AsyncHandlerType<T> = ((arg: Maybe<T>) => Result<void>) | (() => Result<void>);
