import fetch from 'isomorphic-fetch';

const populateDivs = (sections) => {
    Object.keys(sections).map((key) => {
        fetch(sections[key])
            .then(response => response.text())
            .then(response => {
                document.getElementById(key).innerHTML = response;
            });
    });
}

module.exports = populateDivs;