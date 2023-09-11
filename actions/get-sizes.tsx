import { Size } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes =async ():Promise<Size[]> => {
    const result = await fetch(URL)
    return result.json()
}

export default getSizes