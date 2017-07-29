import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';

import App from './app/app.js';

function main(sources) {
    return {
        DOM: App(sources)
    };
}

run(main, { DOM: makeDOMDriver('#app-container') })
