$(document).ready(function() {
    const btn = $('#btn');

    btn.click(function() {
        let req = new XMLHttpRequest();
        req.open('GET', 'superheroes.php', true);
        req.onload = function() {
            alert(req.responseText);
        };
        req.send();
    });
});