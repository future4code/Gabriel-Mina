import * as jwt from 'jsonwebtoken'

type authentication = {
    id: string,
    roles:string
}

const expiresIn = "1min";

export const generationToken = (input: authentication): string => {

    return jwt.sign(
        {
            id: input.id,
            roles:input.roles
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )
}

export const getTokenData = (token: string): authentication | null => {
    try {
    const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as any

    const result = {
        id: payload.id,
        roles:payload.roles
    }
    return result;

    }catch(error){
        {return null}
    }
}