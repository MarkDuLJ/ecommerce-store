import { Product } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct =async (id:string):Promise<Product> => {
    const result = await fetch(`${URL}/${id}`)
    return result.json()
}

export default getProduct