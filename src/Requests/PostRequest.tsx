async function postRequest (data: object, URL: string) {
    return fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    });
}

export default postRequest