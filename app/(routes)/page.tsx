import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"

const revalidate = 0

const Homepage = async () => {

    const products = await getProducts({
        // categoryId:"f7a9bdf5-a93e-412a-aeb8-99ddb82e388d",
        isFeatured:true,
    })
    const billboard= await getBillboard("fbd25a3d-3165-4352-af55-fd59dfeaa21f")
    console.log(billboard);
    
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products}/>
            </div>
        </Container>
    )
}

export default Homepage