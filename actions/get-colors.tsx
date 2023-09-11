import { Color } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors =async ():Promise<Color[]> => {
    const result = await fetch(URL)
    return result.json()
}

export default getColors