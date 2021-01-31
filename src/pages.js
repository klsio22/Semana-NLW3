const orphanages = require("./database/fakedata.js");

module.exports = {
   index(req, res) {
      //arrow functions
      //return response.send("Olá mundo!");
      //console.log(path.join(__dirname,'views','index.html'))
      //console.log(request.query);

      //return response.sendFile(path.join(__dirname, "views", "index.html"));
      return res.render("index");
   },

   orphanage(req, res) {
      return res.render("orphanage");
   },

   orphanages(req, res) {
      return res.render("orphanages", {orphanages});
   },

   createOrphanege(req, res) {
      return res.render("create-orphanage");
   },
};
