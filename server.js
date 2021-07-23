const express = require(`express`);
const apiroutes = require (`./Routes/apiroutes`);
const htmlroutes = require (`./Routes/htmlroutes`);
const app = express();

//calls for first availabile port OR Port 3000
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.static("public"))
app.use("/api", apiroutes)
app.use("/", htmlroutes)



// listens for PORT. When prompting to run from a given port, this will allow for the port number to display in console with the message "App listening on PORT"
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });