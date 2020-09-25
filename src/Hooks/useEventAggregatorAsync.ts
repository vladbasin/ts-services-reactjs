import { useService } from '@vladbasin/ts-dependencies-reactjs';
import { EventAggregatorContract, ServiceIds } from '@vladbasin/ts-services';
import { useEffect } from "react";
import { AsyncHandlerType } from '../Types/AsyncHandlerType';

export const useEventAggregatorAsync = <T extends any>(handler: AsyncHandlerType<T>, eventName: string) => {
    const eventAggregator = useService<EventAggregatorContract>(ServiceIds.eventAggregator);

    useEffect(() => {
        const id = eventAggregator.subscribe(eventName, arg => handler(arg));

        return () => {
            eventAggregator.unsubscribe(id);
        };
    }, [handler, eventName, eventAggregator]);
}