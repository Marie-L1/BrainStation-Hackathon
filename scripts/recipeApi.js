class RecipeApi{
    constructor(apiKey, query){
        this.apiKey = "5967ec3c5472de181aa932189dc4ed43";
        this.baseUrl = "https://api.edamam.com/api/recipes/v2";
        this.api_id = "31a047ce";
        this.type = "public";
        this.query = query;
        }

    async getRecipe(){
        const response = await axios.get(`${this.baseUrl}?api_key=${this.apiKey}`);
    };
    return response.data;;
    
}

export default RecipeApi;this.baseUrl,