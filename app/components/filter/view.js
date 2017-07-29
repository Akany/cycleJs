import {input} from '@cycle/dom';

export default function(value$) {
    return value$
        .map(function(value) {
            return input({attrs: {type: 'text', value}});
        });
}
