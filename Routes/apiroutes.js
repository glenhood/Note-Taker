const app = require("express").Router()
const fs = require("fs")
const db = require("../db/db.json")
// const { v4: uuidv4 } = require('uuid');



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
      dbfile.push(noteContent)
      fs.writeFileSync("./db/db.json", JSON.stringify(dbfile))
      res.json(dbfile)
      })
    
  
    //   let newNote = req.body;
  //   newNote.id = uuidv4();
  //   db.push(newNote);
  //   fs.writeFileSync("./db/db.json", JSON.stringify(db), (err) => {
  //     if(err) throw err;
  //   });
  //   res.send(db)
  // })
  
  // app.delete("/notes/:id", (req, res) => {
  //   db.forEach((note, i) => {
  //     if (note.id === req.params.id) {db.splice(i, 1)}
  //   })
  
  //   fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
  //     if(err) throw err;
  //   })
  //   res.send(db)
  // })


module.exports = app