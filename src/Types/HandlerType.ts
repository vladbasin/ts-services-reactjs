import { Maybe } from '@vladbasin/ts-types';

export type HandlerType<T> = ((arg: Maybe<T>) => void) | (() => void);
