import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login"
import RegisterPage from "./components/RegisterPage/RegisterPage"
import HomePage from "./components/Pages/HomePage"
import ProfilePage from "./components/Pages/ProfilePage"
import UserProfilePage from "./components/Pages/UserProfilePage"
import ExplorePage from "./components/Pages/ExplorePage";
import NotificationsPage from "./components/Pages/NotificationsPage";
import PostPage from "./components/Pages/PostPage";
import React, {useEffect, useState} from 'react';
import verifyUser from "./verifyUser";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import RequireUnauth from "./components/RequireAuth/RequireUnauth";


const defaultUser = {
    "name": "SLAVA MARLOW",
    "tag": "slava",
    "hashedPassword": "$2a$10$GP271GEIiW58ytFILI1gVO2dBRvHhDIgGgO0q4EW8nnolH5.LGgMa",
    "posts": [],
    "likedPosts": [],
    "following": [],
    "followers": [],
    "_id": "61f3797afc22fe235645dba2",
    "regDate": "2022-01-28T05:04:58.971Z",
    "avatar": "https://cdn1.ozone.ru/s3/multimedia-3/c1200/6079430331.jpg",
    "backgroundImage": "https://i.imgur.com/ZjCDTrc.png",
    "__v": 0
}


function App() {

    let [auth, setAuth] = useState(false);
    let [user, setUser] = useState(defaultUser);
    let [error, setError] = useState('');

    useEffect((): any => {
        let cleanupFunc = false;

        const getAuth = async () => {
            try {
                const res = await verifyUser(localStorage.getItem('token'));
                if (!cleanupFunc) {
                    auth = (res !== null && res !== undefined && res);
                    setAuth(res !== null && res !== undefined && res);
                }
                if (auth) {
                    user = res?.user;
                    setUser(user);
                }
            } catch (e) {
                console.log(e);
            }
        }

        getAuth();
        return () => cleanupFunc = true;
    }, [])

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/home" element={<RequireAuth auth={auth} setAuthorised={setAuth} user={user}>
                        <HomePage user={defaultUser}/>
                    </RequireAuth>}/>
                    <Route path="/explore" element={<RequireAuth auth={auth} setAuthorised={setAuth} user={user}>
                        <ExplorePage/>
                    </RequireAuth>}/>
                    <Route path="/notifications" element={<NotificationsPage/>}/>
                    <Route path="/profile" element={<RequireAuth auth={auth} setAuthorised={setAuth} user={user}>
                        <ProfilePage user={user}/>
                    </RequireAuth>}/>
                    <Route path="/login" element={<RequireUnauth auth={auth} user={user} setAuthorised={setAuth}>
                        <Login setUser={setUser}/>
                    </RequireUnauth>}/>
                    <Route path="/register" element={<RequireUnauth auth={auth} user={user} setAuthorised={setAuth}>
                        <RegisterPage setUser={setUser} setAuthorised={setAuth}/>
                    </RequireUnauth>}/>
                    <Route path={"/user/:tag"} element={<UserProfilePage/>}/>
                    <Route path={"/post/:id"} element={<PostPage/>}/>
                    <Route path="/" element={<RequireUnauth auth={auth} user={user} setAuthorised={setAuth}>
                        <Login setUser={setUser}/>
                    </RequireUnauth>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

