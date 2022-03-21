import axios from 'axios';

const ingredientes = async (state) =>{
    const peticion = await axios.get('https://recipe-rissoto.vercel.app/recipe')
    state(peticion.data.ingredients)
}

export{ 
    ingredientes
}