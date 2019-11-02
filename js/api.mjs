// Chamada da API
export default async function api(rota){
    try {
        const response = await fetch(rota)
        return await response.json()
    }
    catch (error) {
        console.log(error)
    }
}