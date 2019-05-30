module.exports = function(router){
    //This will render the home page
    router.get("/", function(req, res){
        res.render("home");
    });
    //This will render the saved handlbars page
    router.get("/saved", function(req, res){
        res.render("saved");
    });
}