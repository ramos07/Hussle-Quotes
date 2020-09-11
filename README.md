# Hussle Quotes

## A website that generates random quotes from rapper Nipsey Hussle. :computer: :checkered_flag:

### Check it out live :white_check_mark:

https://fathomless-island-10728.herokuapp.com/

---

### Purpose :brain:

I decided to build this website to practice developing with Node.js, Express.js, Bootstrap, HTML and CSS. Nipsey Hussle has been one of my favorite rappers and I believe he always provided some type of message in his music and outside of his music that would inspire and motivate myself and other people. This website shares some of those quotes with the world. A site dedicated to him.

---

### Technology Used :hammer_and_wrench:

-   Node.js
-   Express.js
-   Handlebars.js
-   Bootstrap 4
-   HTML/CSS
-   Heroku

---

### Project Structure :open_file_folder:

-   `/data`
    -   The data folder contains the quotes that I used on the website. The quotes were scraped off a website using a Python script I developed.
-   `/public`
    -   Contains all the assets that were used on the site. The necessary JS files (Bootstrap, Popper.js, & JQuery) and CSS files that were used.
    -   `/css`
    -   `/js`
-   `/views`
    -   Contains the views on the website. Currently there are only two, the home page and an about page.
        -   `/layouts` - The layouts sub directory contains the main layout for the website. The head of the site, header (navbar), and the footer. All the pages in the `views` folder use this main layout.
        -   `/partials` - The partials folder contains the partial components that are used on a page. In this case the header and the footer which are applied to each page through the main layout.
-   `index.js`
    -   The entry file that starts the whole application and its dependencies and serves the necessary data for each page, routes, etc.

---

### Contribute :wrench:

This repository is open to contributions. To anyone that wants to enhance their skills and wants to make this website better feel free to fork it or clone it.
