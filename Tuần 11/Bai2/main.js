let url = "https://5f5741881a07d600167e693d.mockapi.io/api/v1/product2"
let myLIst = [];
async function ajaxGet(url) {
    let rs = null;
    await $.ajax({
        type: 'GET',
        dataType: "json",
        url: url,
        timeout: 30000,
        cache: true,
        success: function (result) {
            rs = result;
        }
    });
    return rs;
}

async function getFirstProduct(){
    await ajaxGet(url).then(function(resole){
        myLIst = resole;
    })
}

getFirstProduct().then(function(){
    render();
});
function render(){
    $(".product-data").html(`
    <div class="col-10 m-auto pt-4 pb-4">
        <div class="name text-center">${myLIst[0].name}</div>
        <div class="des text-center">${myLIst[0].des}</div>
        <div class="image mt-2">
            <img src="${myLIst[0].image}" alt="">
        </div>
        <div class="row justify-content-between mt-2">
            <div class="price">$${myLIst[0].price}</div>
            <div class="btn btn-outline-info rounded-pill">
                ADD TO CART
            </div>
        </div>
    </div>`)
}