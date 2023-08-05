export type Menu = {
    title: string,
    path: string
}

export type User = {
    isLoggedIn: boolean,
    login: string,
    hasConfirmed: boolean,
}

export type Coordinate = {
    lat: number,
    lng: number
}