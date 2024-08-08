class RecipeApi{
    constructor(apiKey, query){
        this.apiKey = "5967ec3c5472de181aa932189dc4ed43"
        this.baseUrl = "https://express-proxy-3fa2dcca9dad.herokuapp.com/api?url=https://api.edamam.com/api/recipes/v2";
        this.api_id = "31a047ce";
        this.type = "public";
        }

    async getRecipe(query){
        try{
            const response = await axios.get(`${this.baseUrl}?app_id=${this.api_id}&app_key=${this.apiKey}&q=${query}&type=${this.type}`
            );
            console.log(response)
            return response.data;
        }
        catch(e){
            console.error("Error:",e)
        }
    };
    
}

export default RecipeApi;