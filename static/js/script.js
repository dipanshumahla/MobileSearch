var form = document.getElementById('newForm');
var done = false;

form.addEventListener('submit', (e) => {
    if (done) return;
    e.preventDefault();
    done = true;

    var features_string = "";
    var allfeatures = document.getElementsByClassName("feature");
    for (let i = 0; i < allfeatures.length; i++) features_string += allfeatures[i].value + ';';

    features_string = features_string.slice(0, -1);
    var features = document.createElement("input");
    features.type = "text";
    features.style.display = "none";
    features.name = "features";
    features.value = features_string;


    form.appendChild(features);
    form.submit();
});

var addNewFeature = document.getElementById('addNewButton');

addNewFeature.addEventListener('click', e => {
    var i = document.createElement("input");
    i.type = "text";
    i.classList.add("feature");
    document.getElementById('features').insertBefore(i, addNewFeature);
});