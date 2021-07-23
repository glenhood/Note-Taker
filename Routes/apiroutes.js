const app = require("express").Router()
const fs = require("fs")
const db = require("../db/db.json")



// Getting API Notes
app.get("/notes", (req, res) => {
    res.json(db);
  })
  // Posting the API Notes
  app.post("/notes", (req, res) => {
      let noteContent = {
      title: req.body.title,
      text: req.body.text,
      id: Math.floor(Math.random()*100000)
      }
      
      // this writes the data from above to the db.json file.
      db.push(noteContent)
      fs.writeFileSync("./db/db.json", JSON.stringify(db))
      res.json(dbfile)
      })

      app.delete("/api/notes/:id", (req, res) => {
        db.forEach((note, i) => {
          if (note.id === req.params.id) {db.splice(i, 1)}
        })
      
        // db.splice(db.indexOf(req.params.id), 1);
        fs.writeFile("..db/db.json", JSON.stringify(db), (err) => {
          if(err) throw err;
        })
        res.send(db)
      })
    

module.exports = app