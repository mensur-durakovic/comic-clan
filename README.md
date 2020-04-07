
# ComicClan - React Webapp

### Setup
 
To install dependencies position yourself in application directory and run:

    npm install

you can run application with:

    npm start

Tests will be executed with command:

    npm test

Inside the app directory, you should also create `.env` file and specify secret auth header value. You can look at `env.template` file for exact example.

### Specifications

You can search for commic books inside search bar and group them by group categories below search bar. Grouping is also supported through URL query parameters on main page. If you add `?group=author` you will group books by author category. Only 5 valid categories are supported: 

 - Year
 - Writer
 - Artist
 - Owner
 - Random

If you click on single book you will be taken to the page with full comic book description.

Have fun!