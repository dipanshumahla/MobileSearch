async function match(query, feature) {
    query = query.toLowerCase().split(' ');
    feature = feature.toLowerCase().split(' ');

    var totalKeywords = 0;
    var matchKeywords = 0;

    await query.forEach(keyword => {

        if (feature.includes(keyword)) matchKeywords++;
        totalKeywords++;
    });

    return matchKeywords / totalKeywords;
}

async function matchAll(query, features) {
    return new Promise(async (res, rej) => {
        var totalPercentage = parseFloat(0);

        for (var i = 0; i < features.length; i++) {
            await match(query, features[i]).then(r => {
                if (!Array.isArray(r)) totalPercentage += r;
            });
        }
        res(totalPercentage / features.length);
    });

}

async function searchAll(products, query) {
    var pseudoArray = []
    return new Promise((res, rej) => {
        products.forEach(async (product, index) => {
            var features = product.features;
            await matchAll(query, features).then(res => {
                pseudoArray.push({ p: res, i: index });
            });

            if (index == products.length - 1) res(pseudoArray);
        });
    });
}

var search = (products, query) => {
    var response = [];
    return new Promise((res, rej) => {
        searchAll(products, query).then(r => {
            var sortedResponse = r.sort((a, b) => b.p - a.p);
            for (var i = 0; i < sortedResponse.length && i < 10; i++) {
                if (sortedResponse[i].p < 0.2) break;
                response.push(products[sortedResponse[i].i]);
            }
            res(response);
        });
    });

}

module.exports = search;