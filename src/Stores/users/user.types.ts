export interface IUser {
    id: number;
    url: string;
    coverUrl: string;
    category: string;
    title: string;
    subscriptionArtistsId: number[];
    playlistsId: number[];
    searchArtists: number[];
    searchAlbums: number[];
    likedCategory: string;
    likedTitle: string;
    likedSongs: number[];
    popularMonthlySongs: number[];
}