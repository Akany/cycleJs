import xs from 'xstream';
import {div} from '@cycle/dom';

import Filter from './components/filter/main.js';
import List from './components/list/main.js';

export default function(sources) {
    const {value$, vdom$} = Filter(sources);

    const {vdom$: listDom$} = List({
        DOM: sources.DOM,
        filter$: value$
    });

    return xs.combine(vdom$, listDom$)
        .map(function([vdom, listDom]) {
            return div([
                vdom,
                listDom
            ]);
        });
}
