import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory =async (id: string):Promise<Category> => {
    const result = await fetch(`${URL}/${id}`)
    return result.json()
}

export default getCategory