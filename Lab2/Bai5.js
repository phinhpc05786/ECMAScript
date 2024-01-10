function genereteTableHeader(headersTitle) {
    if(!headersTitle || headersTitle.length === 0 ){
        return "";
    }

    const headersHtml = headersTitle.map((title) => `<th>${title}</th>`).join("")
    return `<thead ><tr>${headersHtml}</tr></thead>`;
    
}

function genereteTableRow(rowData, index){

    if(!rowData || rowData.length === 0){
        return "";
    }

    return `
            <tr>
                <td>${index + 1}</td>
                <td><img src="${rowData.avatar}" height="50"></td>
                <td>${rowData.name}</td>
                <td>${rowData.createdAt}</td>
            </tr>`
}

function genereteTable(headers, data){
    if(!headers || !data || headers.length === 0 || data.length === 0){
        return "";
    }

    const headersRow = genereteTableHeader(headers);
    const dataRow = data.map((row, index) => genereteTableRow(row,index)).join("");

    return `<table  class="table">${headersRow}<tbody>${dataRow}</tbody></table>`
}

fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
  .then(function (response) {
    response.json().then(function (data) {
      const headers = ["#", "Ảnh đại diện", "Họ và tên", "Ngày tạo"];
      const tableHtml = genereteTable(headers, data);
      let app = document.getElementById("app");
      app.innerHTML = tableHtml;
    });
  })
  .catch(function (err) {
    console.log(err);
  });