fetch('https://api.publicapis.org/entries')

    .then(function (response) {
        response.json().then(function (data) {
            // console.log(data.entries);

            let array = data.entries;
            let theP = document.getElementById('theP');
            let child_html = `<ul><li><strong>COUNT: </strong>${data.count}</li>`;

            array.forEach(element => {
                // console.log(element.API);
                child_html += `<li> ${element.Description} </li>`;
            });

            child_html += '</ul>';
            theP.innerHTML = child_html;
        });
    })

    .catch(function (err) {
        console.log(err);
    });