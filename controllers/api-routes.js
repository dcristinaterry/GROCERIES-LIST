let express = require("express");

let router = express.Router();

let groceriesItems = require("../models/groceriesItems");



router.get("/", function (req, res) {
    groceriesItems.findItem({ getItem: 0 }, function (data) {
       
       console.log("data ITEMS:  ", data)
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


router.get("/api/item/:id", function (req, res) {
    let itemId = req.params.id
    console.log("itemId", itemId);
    groceriesItems.findItem({ id: itemId }, function (data) {
        res.json(data);
    })
})

router.post("/api/item", function (req, res) {
    let itemValue = req.body.item;
    let quantityValue = req.body.quantity;
    let unitsValue = req.body.units;


    groceriesItems.create(
        {
            item: itemValue,
            quantity: quantityValue,
            units: unitsValue,
            getItem: 0
        },
        function (result) {

            // check what's insertId for the fron end
            res.json({ id: result.inserId });
        })
})

router.put("/api/item/:id", function (req, res) {
    let itemId = req.params.id;
    let itemValue = req.body.item;
    let quantityValue = req.body.quantity;
    let unitValue = req.body.units;

    groceriesItems.update({ item: itemValue }, { id: itemId }, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })

    groceriesItems.update({ quantity: quantityValue, }, { id: itemId }, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })

    groceriesItems.update({ measurements: unitValue }, { id: itemId }, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })

})

// router.put("/api/getitem/:id", function (req, res) {
//     let itemId = req.params.id;
//     let getItem = req.body.getitem;

//     groceriesItems.update({ getItem: getItem }, { id: itemId }, function (result) {
//         if (result.changedRows === 0) {
//             return res.status(404).end();
//         }
//         res.status(200).end();
//     })

// })

router.delete("/api/getitem/:id", function (req, res) {
    let itemId = req.params.id;

    groceriesItems.delete({ id: itemId }, function (result) {
        if (result.changedRows !== 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})


module.exports = router;