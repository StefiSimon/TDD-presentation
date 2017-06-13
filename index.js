const populateDivs = require('./util/populate');

const divs = {
    header: '../static/header.html',
    content: '../static/content.html'
};

document.onLoad =  populateDivs(divs);