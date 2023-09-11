import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories =async ():Promise<Category[]> => {
    const result = await fetch(URL)
    return result.json()
}

export default getCategories