


$("#saveItem").on("click", function (event) {

    var itemValue = $("#item").val();
    var itemQuantity = $("#count").val();
    var itemUnits = $("#type").val();

    if (itemValue !== "") {
        $.ajax("/api/item", {
            type: "POST",
            data: {
                item: itemValue,
                quantity: itemQuantity,
                units: itemUnits,
            }
        }).then(function () {
            location.reload();
        })
    }
})

$(".get").on("click", function(event){

    var itemId = $(this).data("id");
    console.log(itemId);

    $.ajax("/api/getitem/" + itemId, {
        type: "PUT",
        data: {
            getitem: 1,
        }
    }).then(function () {
        location.reload();
    })
})

$(".gotit").on("click", function(event){

    var itemId = $(this).data("id");
    console.log(itemId);

    $.ajax("/api/getitem/" + itemId, {
        type: "PUT",
        data: {
            getitem: 2,
        }
    }).then(function () {
        location.reload();

    })

})

$(".done").on("click", function(event){

    var itemId = $(this).data("id");
    console.log(itemId);

    $.ajax("/api/getitem/" + itemId, {
        type: "PUT",
        data: {
            getitem: 0,
        }
    }).then(function () {
        location.reload();

    })

})

$(".remove").on("click", function(event){

    var itemId = $(this).data("id");
    console.log(itemId);

    $.ajax("/api/getitem/" + itemId, {
        type: "DELETE"
    }).then(function () {
        location.reload();

    })
})





