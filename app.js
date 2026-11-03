/*
$(document).ready(function() {
    const btn = $('#btn');


    btn.click(function() {
        let req = new XMLHttpRequest();
        const query = $('#searchInput').val().trim();

        if (!query) {
            req.open('GET', 'superheroes.php', true);
            req.onload = function() {
                let response = req.responseText;
                $('#rsltspace').html(response);
            };
        }
            
        else {
            if (req.status === 200) {
                req.open('GET', 'superheroes.php?query=' + encodeURIComponent(query), true);
                req.onload = function() {

                    if (req.readyState === XMLHttpRequest.DONE) {
                        if (req.status === 200) {
                                let response = req.responseText;
                                $('#rsltspace').html(response);
                            }
                        }
                    else {
                        console.error('Error: ' + req.status);
                    }
                }
            };
        }
        req.send();
    });
});
*/

// Add all heroes here, using the name, alias, and biography values
// from superheroes.php.

$(document).ready(function() {
    const btn = $('#btn');
    btn.click(function() {
        const query = $('#searchInput').val().trim();
        const req = new XMLHttpRequest();

        req.open('GET', 'superheroes.php?query=' + encodeURIComponent(query), true);

        req.onload = function() {
            if (req.status === 200) {

                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === 200) {
                            let response = req.responseText;
                            $('#rsltspace').html(response);
                        }
                    }
                else {
                    console.error('Error: ' + req.status);
                }
            }
        };
        req.send();
    });
});