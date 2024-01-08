// Lấy dữ liệu từ hai API đồng thời bằng Promise.all
Promise.all([
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then(response => response.json()),
    fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students').then(response => response.json())
])
    .then(function (responses) {
        const populationData = responses[0].data; // Giả sử phản hồi của API dân số chứa một thuộc tính 'data'
        const studentsData = responses[1]; // Giả sử phản hồi của API sinh viên là một mảng trực tiếp

        //  Table 1 bài 4.1
        let array = populationData;
        let theDiv = document.getElementById('container');
        let child_html = `
        <h1>Bài 4.1</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nation</th>
                    <th scope="col">Year</th>
                    <th scope="col">Population</th>
                </tr>
            </thead>
            <tbody>`;

        let count = 1;
        array.forEach(element => {

            let nation = element.Nation;
            let year = element.Year;
            let population = element.Population;
            child_html += `
            <tr> 
            <th scope="row">${count++}</th>
            <td>${nation}</td>
            <td>${year}</td>
            <td>${population}</td> 
            </tr>`;
        });


        child_html += `</tbody></table>`;
        theDiv.innerHTML = child_html;

        //end  Table 1 bài 4.1


        //Table 2 bài 4.2
        let count1 = 1;
        // console.log(studentsData);

        let array1 = studentsData;
        let theDiv1 = document.getElementById('container1');
        let child_html1 = `
        <h1>Bài 4.2</h1>
        <table class="table" id="table1">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ảnh đại diện</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Ngày tạo</th>
                </tr>
            </thead>
            <tbody>`;

        array1.forEach(element => {
            let avatar = element.avatar;
            let createdAt = element.createdAt;
            let name = element.name;
            child_html1 += `
            <tr> 
            <th scope="row">${count1++}</th>
            <td><img src="${avatar}" alt="" style="width: 85px; height: 85px;"  class="rounded"></td>
            <td>${name}</td>
            <td>${createdAt}</td> 
            </tr>`;
        });


        child_html1 += `</tbody></table>`;
        theDiv1.innerHTML = child_html1;
    })

    .catch(function (err) {
        console.log(err);
    });
