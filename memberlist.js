import { fetchMembers } from "./fetchdata.js";

const tableBody = document.getElementById("tableBody");

try {
    let members = await fetchMembers();
    tableBody.innerHTML = " ";
    const listTemp = members.map(function(item, ind){
        const words = item.designation.split(' ');
        const truncatedDesignation = words.length > 4 ? words.slice(0, 3).join(' ') + '...' : item.designation;
        return `
            <tr>
                <td>${ind+1}</td>
                <td>${item.name}</td>
                <td>${truncatedDesignation}</td>
                <td><img src="${item.photo}"></td>
                <td>
                    <div class="btn_container">
                        <button data_id="${item._id}"><i class="fa-solid fa-trash"></i></button>
                        <button data_id="${item._id}"><i class="fa-solid fa-eye"></i></button>
                        <button data_id="${item._id}"><i class="fa-regular fa-pen-to-square"></i></button>
                    </div>
                </td>
            </tr>
        `
    }).join(' ');
    tableBody.innerHTML = listTemp;

} catch (error) {
    console.error(error)
}


