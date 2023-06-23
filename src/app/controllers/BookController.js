class BookController {
    
    // [GET] /cart
    index(req, res){
        res.render('bookPage');
    };

};

module.exports = new BookController;