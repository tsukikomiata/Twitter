async function getRequest(URL: string){
    return fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
}

export default getRequest