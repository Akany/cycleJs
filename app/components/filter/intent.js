export default function(sources) {
    return sources.DOM
        .select('input')
        .events('input');
}
