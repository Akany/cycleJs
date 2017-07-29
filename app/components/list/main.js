import xs from 'xstream';

import View from './view.js';
import ItemsShuffler from './items.js';

export default function(sources) {
    const items$ = xs.combine(ItemsShuffler(), sources.filter$)
        .map(function([items, filter]) {
            return filter ? items.filter(function(item) {
                return item.toLowerCase().indexOf(filter.toLowerCase()) > -1;
            }) : items;
        });

    return {
        vdom$: View({
            items$
        })
    };
}
