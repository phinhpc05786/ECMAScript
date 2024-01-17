fetch('https://fir-42c3b-default-rtdb.firebaseio.com.json')

    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);

        });
    })

    .catch(function (err) {
        console.log(err);
    });