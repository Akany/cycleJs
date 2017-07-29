import {div} from '@cycle/dom';

export default function(sources) {
    return sources.items$
        .map(function(items) {
            return div(items.map(function(item) {
                return div(item);
            }));
        });
}
