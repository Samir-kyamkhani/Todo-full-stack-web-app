import dbConnection from "./db/db.js"
import app from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 8000

dbConnection()
.then(() => {
    app.on("error", function(error){
        console.log(`Server listing error:: ${error}`);
        throw error;
    })

    app.listen(PORT, function() {
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((error) => {
    console.log(`Server connection failed:: ${error}`);
    throw error
})