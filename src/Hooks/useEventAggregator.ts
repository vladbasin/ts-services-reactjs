import { Result } from "@vladbasin/ts-result";
import { HandlerType } from "../Types/HandlerType";
import { useEventAggregatorAsync } from "./useEventAggregatorAsync";

export const useEventAggregator = <T extends any>(handler: HandlerType<T>, eventName: string) => useEventAggregatorAsync<T>(t => {
    handler(t);

    return Result.Void();
}, eventName);