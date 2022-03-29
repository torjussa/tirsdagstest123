import {Recipe} from "../components/Recipe"
import {client} from "../client"

export default function Home (props) {

  const {recipes} = props

  return (
    <div className='app'>
      <h1>Hei Trondheim</h1>
      
      <div className="recipes-list">
      {
        recipes.map ( recipe => 
         <Recipe recipe={recipe} key={recipe._id}/>
        )
      }
      </div>

    </div>
  )
}

Home.getInitialProps = async () => {
  return {
    recipes: await client.fetch(`*[_type == 'recipe']`)
  }
}
