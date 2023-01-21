
const app = require('./app')
const PORT = 8082

app.listen(PORT, (err) => {
    if (err) console.log("Error on startup")
    console.log(`Server running at port: ${PORT}`);
});

