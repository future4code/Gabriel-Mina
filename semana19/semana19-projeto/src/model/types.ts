enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type AuthenticationData = {
    id: string
}

export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export type UserType = {
    id: string,
    name: string,
    email: string,
    password: string,
}

