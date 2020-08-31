# H11-GET-GROCERIES

Welcome to my Grocerires List app.  

## Summary

This application will allow you to have saved your list of items, move them to different places to avoid forgetting any item when going shopping.

## GettingStarted

Project Location

>[Project's GitHub repository](https://github.com/dcristinaterry/H11-GET-GROCERIES)

## Prerequisites

>NA

## Built With

>* Node js
>* mySql
>* Express
>* Handlebars
>* HTML
>* CSS

## Installation

If you want to download this project follow these steps.

To run this application on your local machine follow these steps:

>1. Clone project from github.
>2. Copy sql statements found in db/query.sql and run the statements on your mySQL application.
>3. Open the terminal and go to the project's path
>4. run command npm install
>5. run command server.js

## Deployed Link

>N/A

## Code-Snippets

```sh
This is a code sniped of an API call connecting query result with handlebarrs in order to display the query result.

router.get("/", function (req, res) {
    groceriesItems.findItem({ getItem: 0 }, function (data) {
        groceriesItems.findItem({ getItem: 1 }, function (getdata) {
            groceriesItems.findItem({ getItem:2}, function (donedata) {
                res.render("index",
                    {
                        item: data,
                        getItem: getdata,
                        doneItem:donedata
                    });
            });
        })
    })
})




```

## Screen shots / gifs

gif.

![consoleInput](./groceries.gif)


## Author

<img src="https://avatars.githubusercontent.com/u/61372364?" alt="avatar" style="border-radius:20px" width="30"/>

D. Cristina Terry

GitHub: [https://github.com/dcristinaterry/](https://github.com/dcristinaterry/),

LinkedIn: [www.linkedin.com/in/dcristinaterry](www.linkedin.com/in/dcristinaterry)

## License

![license](https://img.shields.io/badge/license-MIT-green)

