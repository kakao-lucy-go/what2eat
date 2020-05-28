module.exports = function(app, fs)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
    app.get('/stores', function (req, res) {
        //__dirname : 현재 모듈 위치
        fs.readFile( __dirname + "/../data/" + "store.json", "utf8", function (err, data) {
            console.log( data );
            res.end( data );
        });
     });

     app.get('/menus', function (req, res) {
        //__dirname : 현재 모듈 위치
        fs.readFile( __dirname + "/../data/" + "menu.json", "utf8", function (err, data) {
            console.log( data );
            res.end( data );
        });
     });
}