function sortArrayByTwoCriteria(data) {

    let criteriaSorter = (a, b) =>  a.length - b.length || a.localeCompare(b);

    data.sort(criteriaSorter);

    console.log(data.join('\n'));
}

sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);