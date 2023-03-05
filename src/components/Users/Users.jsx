import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserAlbums, getUserPosts, getUsers } from '../../service/api';
import {
    setSelectUser, setUserAlbums, setUserPosts, setUsers,
} from '../../store/store';
import { getUserAlbumsFromStore, getUsersFromStore } from './../../store/appState';
import { Albums } from '../Albums/Albums';
import './Users.scss';

export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsersFromStore);
    const usersAlbum = useSelector(getUserAlbumsFromStore);

    useEffect(() => {
        const loadUsersFromServer = async () => {
            try {
                const response = await getUsers();

                dispatch(setUsers(response));
            } catch (error) {
                alert('Error try again');
            }
        };

        loadUsersFromServer();
    });

    const loadUserAlbumsFromServer = async (id) => {
        try {
            const response = await getUserAlbums(id);

            dispatch(setUserAlbums(response));
        } catch (error) {
            alert('Error try later');
        }
    };

    const loadUserPostsFromServer = async (id) => {
        try {
            const response = await getUserPosts(id);

            dispatch(setUserPosts(response));
        } catch (error) {
            alert('Error try later');
        }
    };

    const showPosts = (id, user) => {
        loadUserPostsFromServer(id);
        dispatch(setSelectUser(user));
    };

    const showAlbums = (id, user) => {
        loadUserAlbumsFromServer(id);
        dispatch(setSelectUser(user));
    };

    return (
        <div className="users">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Street</th>
                        <th>Posts</th>
                        <th>Albums</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 && (
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    )}
                    {users.map((user, i) => (
                        <tr key={user.id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.street}</td>
                            <td>
                                <Link className="user__link" to="posts">
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => showPosts(user.id, user)}
                                    >
                                        Show Posts
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => showAlbums(user.id, user)}
                                >
                                    Show Albums
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {usersAlbum.length !== 0 && (
                <Albums />
            )}
        </div>
    );
};