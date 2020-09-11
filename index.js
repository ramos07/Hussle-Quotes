const express = require("express");
const helmet = require("helmet");
const exphbs = require("express-handlebars");
const path = require("path");
const quotes = require("./data/quotes");

// Initialize express app
const app = express();

/**
 * STATIC ASSETS
 */
app.use(express.static(path.join(__dirname, "public")));

/**
 * MIDDLEWARE
 */
// JSON middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Helmet middleware
app.use(helmet());

/**
 * VIEW ENGINE
 */
// Handlebars.js config
app.engine(
    ".hbs",
    exphbs({
        extname: ".hbs",
        defaultLayout: "main",
    })
);
app.set("view engine", ".hbs");

// PORT
const PORT = process.env.PORT || 3000;

/**
 * ROUTES
 */
// Home route
app.get("/", (req, res) => {
    try {
        // Get a random quote
        const randomQuote = Math.floor(Math.random() * quotes.length);
        res.status(200).render("index", {
            quote: quotes[randomQuote].quote,
        });
    } catch (error) {
        res.send({
            message: "An error occured!",
        });
    }
});

app.get("/about", (req, res) => {
    try {
        res.render("about");
    } catch (error) {
        res.send({
            message: "404: Something went wrong!",
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
