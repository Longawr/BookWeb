const Book = require('../models/Book');

class SiteController {
    
    // [GET] /
     index(req, res, next){
            Book.find({})
                .then(books => res.render('homePage', { books }))
                .catch(next)

    };

};

module.exports = new SiteController;