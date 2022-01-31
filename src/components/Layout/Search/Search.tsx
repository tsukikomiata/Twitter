import styles from "./Search.module.css"
import React, {useState} from "react";
import searchFieldIcon from "../../icons/SearchIcons/SearchFieldIcon";

const defaultPosts = [
    {
        id: 5,
        avatar: "lkj",
        displayName: "lk",
        verified: true,
        username: "String",
        timeLeft: "25",
        text: "String",
        image: "lklk;kok",
        countComments: 8,
        countLikes: 9,
        countRetweets: 4,
        isLiked: false
    },
]

function Search({setPosts}: {setPosts?: any}) {
    const postsRequest = (event: any) => {
        const API_URL1 = 'http://localhost:8000/search/?search=' + event.target.value
        setPosts(defaultPosts)
        fetch(API_URL1, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((request) => request.json())
            .then((request) => setPosts(request))
    }

    return (
        <form className={styles.searchForm}>
            <div className={styles.searchField}>
                {searchFieldIcon}
                <input
                    placeholder="Search Tweet"
                    type="text"
                    onChange={postsRequest}
                />
            </div>
        </form>
    )
}

export default Search;