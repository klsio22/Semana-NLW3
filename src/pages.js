module.exports = {
  index(req,res){
     //arrow functions
      //return response.send("Olá mundo!");
      //console.log(path.join(__dirname,'views','index.html'))
      //console.log(request.query);

      //return response.sendFile(path.join(__dirname, "views", "index.html"));
      const city = req.query.city
      return res.render('index', {city})
  }
};
