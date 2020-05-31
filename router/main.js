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

     app.post('/stores', function (req, res) {
        var result = {  };
        var store = req.body;

        // LOAD DATA & CHECK DUPLICATION
        fs.readFile( __dirname + "/../data/store.json", 'utf8',  function(err, data){
            var stores = JSON.parse(data);
            
            stores.push(store)
            console.log(store)
            fs.writeFile(__dirname + "/../data/store.json",
                            
                JSON.stringify(stores, null, '\t'), "utf8", function(err, data){
                    result = {"success": 1};
                    res.json(result);
                }
            )

        })

     });

     app.get('/menus', function (req, res) {
        //__dirname : 현재 모듈 위치
        fs.readFile( __dirname + "/../data/" + "menu.json", "utf8", function (err, data) {
            console.log( data );
            res.end( data );
        });
     });

     app.get('/tags', function (req, res) {
        //__dirname : 현재 모듈 위치
        fs.readFile( __dirname + "/../data/" + "tag.json", "utf8", function (err, data) {
            console.log( data );
            res.end( data );
        });
     });
}