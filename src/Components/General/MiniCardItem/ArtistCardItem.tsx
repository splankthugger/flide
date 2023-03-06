import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../../styles/theme"
import { useGetArtistByIdQuery } from "../../../Stores/artists/artist.api"
import PlayFilledIcon from "../../ButtonIcon/PlayFilledIcon"

import MiniCardCover from "./Components/MiniCardCover"
import MiniCardDescription from "./Components/MiniCardDescription"
import MiniCardPlayButton from "./Components/MiniCardPlayButton"
import MiniCardTitle from "./Components/MiniCardTitle"

const ArtistCardItem = ( {artist} : any) => {
    const router = useRouter()
    const {id} = router.query
    const {data} = useGetArtistByIdQuery(id)
    return (
        <Link href={`/artist/${artist.id}`}>
            <Wrapper>
                <HoverCard className="itemPicture" url={artist.coverUrl}>
                    <img src={artist.coverUrl} alt="cover" />
                    <HoverButtonPlay className="playButton">
                        <PlayFilledIcon/>
                    </HoverButtonPlay>
                    <OverlayDark />
                </HoverCard>
                <MiniCardTitle title={artist.title} isAlbum={false} />
                {/* <MiniCardDescription
                    description={artist.description}
                    isAlbum={false}
                /> */}
            </Wrapper>
        </Link>
    )
}

const HoverButtonPlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0;
    width: 32px;
    height: 32px;
    background-color: hsla(0,0%,96%,.48);
    backdrop-filter: saturate(190%) blur(60px);
    border-radius: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
    transition: all 0.2s;

    &:hover {
        transition: all 0.2s;
        background-color: ${darkTheme.backgroundColor.mainColor};
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 50%;
    padding: 32px;
    width: 100%;
    cursor: pointer;
    transform: translateY(0px);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-4px);
        transition: all 0.2s ease-in-out;
    }

    &:hover ${HoverButtonPlay} {
        opacity: 1;
        transition: all 200ms;
    }
`

const OverlayDark = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 1;
    transition: all 0.2s;
`

const HoverCard = styled.div<{ url: any }>`
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    margin-bottom: 16px;
    border-radius: 50%;
    width: 100%;
    height: auto;
    user-select: none;
    box-shadow: 0 0px 16px rgb(0 0 0 / 50%);

    &:hover ${OverlayDark} {
        background-color: rgba(0, 0, 0, 0.2);
    }

    & > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`

const ContentBlockItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    user-select: none;
`

const ContentBlockItemName = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 700;
    color: ${darkTheme.fontColor.white};
    margin-bottom: 8px;
`

const ContentBlockItemDescription = styled.div`
    display: -webkit-box;
    font-size: 14px;
    color: ${darkTheme.fontColor.gray};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export default ArtistCardItem
