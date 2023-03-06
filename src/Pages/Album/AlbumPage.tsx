import React from "react"
import styled from "styled-components"
import { useRouter } from "next/router"
import { darkTheme } from "../../../styles/theme"
import HeadPage from "../../Components/General/HeadPage/HeadPage"
import { useGetAlbumByIdQuery } from "../../Stores/albums/albums.api"
import AlbumContent from "../../Widgets/Album/AlbumContent"
import BottomSubtitleAlbum from "../../Entitites/Album/BottomSubtitleAlbum"

const AlbumPage = () => {
    const router = useRouter()
    const {id} = router.query
    const {data: albumsData} = useGetAlbumByIdQuery(id)
    return (
        <Wrapper>
            <Content>
                {albumsData?.map((album) =>{
                    return(
                    <>
                        <HeadPage album={album} />
                        <AlbumContent />
                        <BottomSubtitleAlbum album={album}/>
                    </>
                    )
                    
                })}
                
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: inherit;
    width: 100%;
    min-height: 100%;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 24px;
    background-color: rgb(12, 12, 12);
`

export default AlbumPage
