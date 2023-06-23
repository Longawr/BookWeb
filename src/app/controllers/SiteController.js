class SiteController {
    
    // [GET] /
    index(req, res){
        res.render('homePage');
    };

};

module.exports = new SiteController;