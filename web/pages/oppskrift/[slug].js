import { client } from "../../client"


const Oppskrift = (props) => {
    const {recipe} = props
    console.log(recipe)

    return <h1>{recipe.name}</h1>

}

Oppskrift.getInitialProps = async ( context ) => {
    const { slug = ""} = context.query
    return {
        recipe: await client.fetch(`*[_type == 'recipe' && slug.current == $slug][0]`, {slug})
    }
}

export default Oppskrift