let BASE_URL = "https://libraffdata-eo5z.onrender.com/books"

export async function getBooks() {
    try {
        const res = await fetch(BASE_URL)
        if (!res.ok) {
            throw new Error()
        }
        const data = await res.json()
        return data;

    } catch (error) {
        console.error(error.message)
    }

}

export async function getBooksById(id) {
    try {
        const res = await fetch(`${BASE_URL}/${id}`)
        if(!res.ok){
            throw new Error()
        }
        const data = await res.json()
        return data;
    } catch (error) {
        console.error(error.message)
    }

}
