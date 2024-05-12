export function getProjectTechnologiesText(technologies) {
    return 'Technologie' + (technologies.length === 1 ? '' : 's') + ' : ' +
        technologies.list[0] +
        ((technologies.length === 2) ? (' & ' + technologies.list[1]) : '');
}