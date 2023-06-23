const cartRoute = require('./bookRoute');
const siteRoute = require('./siteRoute');

function route(app) {
    
    app.use('/book', cartRoute);

    app.use('/', siteRoute);

}

module.exports = route;