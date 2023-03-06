import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';
import ActionIcon from '../../Components/ButtonIcon/ActionIcon';
import HeartIcon from '../../Components/ButtonIcon/HeartIcon';
import HeartIconOutline from '../../Components/ButtonIcon/HeartIconOutline';
import LikeButton from '../../Features/ui/LikeButton';
import { useGetAlbumByIdQuery } from '../../Stores/albums/albums.api';
import { useGetArtistByIdQuery } from '../../Stores/artists/artist.api';
import { useGetSongsByIdQuery } from '../../Stores/songs/song.api';

const SongData = ({song, artist, length, i}: any) => {
    const router = useRouter()
    const isArtist = router.pathname === "/artist/[id]"
    const isAlbum = router.pathname === `/album/[id]`
    const isPlaylist = router.pathname === `/playlist/[id]`
    const isLiked = router.asPath === "/liked"
    const isProfile = router.pathname === `/user/[id]`
    
    const {data: albumData} = useGetAlbumByIdQuery(song.albumId)
    
    return (
        <Wrapper>
            {isLiked && (
                <PlaylistRender>
                    <>
                        <LikeButton/>
                        <SongOrder>{i + 1}</SongOrder>
                        <SongTitle>
                            <SongCover><img src={song.coverUrl} alt="Cover Picture"/></SongCover>
                            <SongTitleInfo>
                                <>{song.title}</>
                                <Link href={`artist/${artist.id}`}>
                                    <SongArtistTitle>{artist.title}</SongArtistTitle>
                                </Link>
                            </SongTitleInfo>
                        </SongTitle>
                        {albumData?.map((album) => {
                            return(
                                <Link href={`album/${album.id}`}>
                                    <SongAlbum>{album.title}</SongAlbum>
                                </Link>
                            )
                        })}
                        <SongDateAdded>31 фев. 2000 г.</SongDateAdded>
                        <SongDuration>3:02</SongDuration>
                        <ActionsButton><ActionIcon/></ActionsButton>
                    </>
                </PlaylistRender>
            )}

            {isPlaylist && (
                <PlaylistRender>
                    <>
                    <LikeButton/>
                        <SongOrder>{i + 1}</SongOrder>
                        <SongTitle>
                            <SongCover><img src={song.coverUrl} alt="Cover Picture"/></SongCover>
                            <SongTitleInfo>
                                <>{song.title}</>
                                <Link href={`/artist/${artist.id}`}>
                                    <SongArtistTitle>{artist.title}</SongArtistTitle>
                                </Link>
                            </SongTitleInfo>
                        </SongTitle>
                        {albumData?.map((album) => {
                            return(
                                <Link href={`/album/${album.id}`}>
                                    <SongAlbum>{album.title}</SongAlbum>
                                </Link>
                            )
                        })}
                        <SongDateAdded>31 фев. 2000 г.</SongDateAdded>
                        <SongDuration>3:02</SongDuration>
                        <ActionsButton><ActionIcon/></ActionsButton>
                    </>
                </PlaylistRender>
            )}
            
            {isProfile && (
                <ProfileRender>
                    <LikeButton/>
                    <SongOrder>{i + 1}</SongOrder>
                    <SongTitle>
                            <SongCover><img src={song.coverUrl} alt="Cover Picture"/></SongCover>
                            <SongTitleInfo>
                                <>{song.title}</>
                                <Link href={`/artist/${artist.id}`}>
                                    <SongArtistTitle>{artist.title}</SongArtistTitle>
                                </Link>
                            </SongTitleInfo>
                    </SongTitle>
                    {albumData?.map((album) => {
                            return(
                                <Link href={`/album/${album.id}`}>
                                    <SongAlbum>{album.title}</SongAlbum>
                                </Link>
                            )
                    })}
                    <SongDuration>3:02</SongDuration>
                    <ActionsButton><ActionIcon/></ActionsButton>
                </ProfileRender>
            )}

            {isAlbum && (
                <AlbumRender>
                    <LikeButton/>
                    <SongOrder>{song.albumOrder}</SongOrder>
                    <SongTitle>{song.title}</SongTitle>
                    <SongPlays>{song.plays}</SongPlays>
                    <SongDuration>3:02</SongDuration>
                    <ActionsButton><ActionIcon/></ActionsButton>
                </AlbumRender>
            )}

            {isArtist && (
                <ArtistRender>
                    <LikeButton/>
                    <SongOrder>{i + 1}</SongOrder>
                    <SongTitle>{song.title}</SongTitle>
                    <SongPlays>{song.plays}</SongPlays>
                    <SongDuration>3:02</SongDuration>
                    <ActionsButton><ActionIcon/></ActionsButton>
                </ArtistRender>
            )}
        </Wrapper>
    );
};

const ActionsButton = styled.div`
    display: flex;
    opacity: 1;
    align-items: center;
    justify-content: center;
    transition: 0.1s ease-in-out;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
`

const PlaylistRender = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: [status] 32px [index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr) [actions] 32px;
    align-items: center;
    height: 40px;
    width: 100%;
`

const ProfileRender = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: [status] 32px [index] 16px [first] 6fr [var1] 7fr [last] minmax(120px,1fr) [actions] 32px;
    align-items: center;
    height: 40px;
    width: 100%;
`

const AlbumRender = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: [status] 32px [index] 16px [first] 6fr [var1] 4fr [last] minmax(120px,1fr) [actions] 32px;
    align-items: center;
    height: 40px;
    width: 100%;
`

const ArtistRender = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: [status] 32px [index] 16px [first] 6fr [var1] 4fr [last] minmax(32px, 1fr) [actions] 32px;
    align-items: center;
    height: 40px;
    width: 100%;
`
const SongOrder = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: ${darkTheme.fontColor.gray};
`

const SongTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: ${darkTheme.fontColor.white};
`

const SongCover = styled.div`
    display: flex;
    height: 40px;
    width: 40px;
    margin-right: 16px;

    & img {
        display: block;
        border-radius: 4px;
    }
`

const SongTitleInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const SongArtistTitle = styled.div`
    display: flex;
    color: ${darkTheme.fontColor.gray};

    &:hover {
        text-decoration: underline;
    }
`

const SongAlbum = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: ${darkTheme.fontColor.gray};

    &:hover {
        text-decoration: underline;
    }
`

const SongDateAdded = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: ${darkTheme.fontColor.gray};
`

const SongPlays = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: ${darkTheme.fontColor.gray};
`

const SongDuration = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: ${darkTheme.fontColor.gray};
`
export default SongData;