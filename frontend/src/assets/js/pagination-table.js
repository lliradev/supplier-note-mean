$(document).ready(function () {
    $('#myTable').pageMe({
        pagerSelector: '#myPager',
        prevText: 'Anterior',
        nextText: 'Siguiente',
        showPrevNext: true,
        hidePageNumbers: false,
        perPage: 10
    });
});