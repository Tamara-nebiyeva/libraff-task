import { getBooksById } from "./service.js"

const qParams = location.search
const id = new URLSearchParams(qParams).get('id')
const cardDetail = document.getElementById("cardDetail")

async function useFetch(){
    const data = await getBooksById(id)
    printBookById(data)
}
useFetch()

function printBookById(data) {
    cardDetail.innerHTML = `
       <a href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.name}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">${data.author}</p>
            </a>`
} 