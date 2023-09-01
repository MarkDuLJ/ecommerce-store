import getBillboard from "@/actions/get-billboard"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

const revalidate = 0

const Homepage = async () => {

    const billboard= await getBillboard("fbd25a3d-3165-4352-af55-fd59dfeaa21f")
    console.log(billboard);
    
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
        </Container>
    )
}

export default Homepage