import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectUser, setUserAlbums } from './../../store/store';
import { getSelectedUser, getUserAlbumsFromStore } from '../../store/appState';
import './Albums.scss';

export const Albums = () => {
  const dispatch = useDispatch();
  const userAlbums = useSelector(getUserAlbumsFromStore);
  const selectedUser = useSelector(getSelectedUser);

  const closeAlbums = () => {
    dispatch(setUserAlbums([]));
    dispatch(setSelectUser(undefined));
  };

  return (
    <div
      className="album__container"
      aria-hidden="true"
      onClick={closeAlbums}
    >
      <div className="album">
        <p className="album__user_name">{`${selectedUser?.username} albums`}</p>
        {
          userAlbums.map((album, i) => (
            <p key={album.id}>{`${i + 1}. ${album.title}`}</p>
          ))
        }
      </div>
    </div>
  );
};
