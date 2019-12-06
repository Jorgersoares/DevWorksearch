const ENDPOINT = "https://project-js-api.herokuapp.com/api/get"

export default async function api() {
    try {
        const response = await fetch(ENDPOINT)
        return await response.json()
    }
    catch (error) {
        console.log(error)
    }
}