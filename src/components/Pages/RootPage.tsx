import React, {useEffect, useState} from "react";
import getRequest from "../../Requests/GetRequest";

const defaultText = "Hello!"

function RootPage() {
    const [text, setText] = useState(defaultText)
    const API_URL = 'http://localhost:8000'

    const helloRequest = () => {
        setText(defaultText)
        fetch(API_URL, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((request) => request.text())
            .then((request) => setText(request))
    }

    const helloRequestWithData = (event?: any) => {
        event.preventDefault()
        const data = {
            name: event.target.elements.name.value,
        }
        console.log(event.target.elements.name.value)
        if (data.name) {
            fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.text())
                .then((response) => {
                    setText(response)
                })
        } else {
            helloRequest()
        }
    }

    useState(() => {
        helloRequest()
    })

    return(
        <div>
            <p>{text}</p>
            <form onSubmit={helloRequestWithData}>
                <input
                    placeholder="What's your name?"
                    type="text"
                    id="name"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RootPage