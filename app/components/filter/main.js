import Intent from './intent.js';
import View from './view.js';

export default function(sources) {
    const input$ = Intent(sources);
    const value$ = input$.map(event => event.target.value).startWith('');

    return {
        vdom$: View(value$),
        value$
    };
}
