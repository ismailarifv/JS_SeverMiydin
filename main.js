
$(document).ready(function () {
    $(".evet").mousedown(function () {
        alert("Biliyordum beni sevdiğini <3");
    })
    $(".b1").mouseenter(function () {
        $(this).addClass("d-none");
        $(".b2").removeClass("d-none");
    })
    $(".b2").mouseenter(function () {
        $(".b2").hide();
        $(".b3").removeClass("d-none");
    })
    $(".b3").mouseenter(function () {
        $(this).addClass("d-none");
        $(".b4").removeClass("d-none");
    })
    $(".b4").mouseenter(function () {
        $(this).addClass("d-none");
        $(".b5").removeClass("d-none");
    })
    $(".b5").mouseenter(function () {
        location.reload();
    })

})