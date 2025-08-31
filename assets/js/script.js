const cards = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");
import { getBooks } from "./service.js";


async function useFetch() {
  const data = await getBooks()
  showBooks(data)
  searchInput.addEventListener('input', () => searchFilter(data));
}
useFetch()


function searchFilter(data) {
  let value = searchInput.value.toLowerCase();
  const filteredData = data.filter(item => item.name.toLowerCase().includes(value))
  showBooks(filteredData)
}

function showBooks(data) {
  cards.innerHTML = ''
  data.forEach(element => {
    cards.innerHTML += `
    <a href="./assets/pages/detail.html?id=${element.id}" target="_blank" class="max-w-xs bg-white rounded-xl shadow-md overflow-hidden relative">
    <!-- Favori ikonu -->
    <div class="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" class="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5.121 19.071A8.001 8.001 0 0112 4a8.001 8.001 0 016.879 15.071L12 21l-6.879-1.929z" />
      </svg>
    </div>

    <!-- Şəkil -->
    <img class="w-full h-60 object-cover" src="${element.image}" alt="Kitab">

    <!-- Məzmun -->
    <div class="p-4">
      <h3 class="text-sm font-semibold text-gray-800 mb-1">${element.name}</h3>
      <p class="text-xs text-gray-600 mb-2">${element.author}</p>

      <!-- Qiymət -->
      <div class="flex items-center space-x-2">
        <span class="text-lg font-bold text-gray-900">${element.price.current} ${element.price.currency}</span>
        <span class="text-sm line-through text-gray-400">${element.price.original} ${element.price.currency}</span>
      </div>
    </div>
    </a>`
  })
}
