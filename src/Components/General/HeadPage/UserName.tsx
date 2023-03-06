import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"
import { useGetAlbumByIdQuery } from "../../../Stores/albums/albums.api"

type Props = {
    username: any
    route: any
}

const UserName = ({ username, route }: Props) => {
    const router = useRouter()
    const {id} = router.query
    const {data} = useGetAlbumByIdQuery(id)
    
    return (
        <Link href={route}>
            <Wrapper>{username}</Wrapper>
        </Link>
        
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    user-select: none;
    cursor: pointer;
`

export default UserName
