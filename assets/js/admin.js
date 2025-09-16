import { getBooks } from "./service.js";
const tableBody = document.getElementById("tableBody");


async function dataniGetir() {
    const data = await getBooks()
    printBooks(data)
}

dataniGetir()

function printBooks(data) {

    data.forEach(element => {
        tableBody.innerHTML += `
        <tr class="border-b hover:bg-gray-100 transition">
                    <td class="py-3 px-4">${element.id}</td>
                    <td class="py-3 px-4">${element.name}</td>
                    <td class="py-3 px-4">${element.author} </td>
                    <td class="py-3 px-4"><img src="${element.image}" alt="Şəkil" class="w-10 h-10 rounded-full object-cover"></td>
                    <td class="py-3 px-4">${element.language}</td>
                    <td class="py-3 px-4">${element.price.current} ${element.price.currency}</td>
                    <td class="py-3 px-4 flex space-x-2">
                        <button
                            class="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 px-3 rounded transition">
                            Dəyiş
                        </button>
                        <button
                            class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition">
                            Sil
                        </button>
                    </td>
                </tr>
`
    });


}