# RecipeDB Model migrations

```bash
    npx sequelize model:generate --name RecipeType --attributes name:string

    npx sequelize model:generate --name Recipe --attributes name:string,prepTime:float,cookTime:float,instructions:text,recipeTypeId:integer

    npx sequelize model:generate --name Food --attributes name:string

    npx sequelize model:generate --name Ingredient --attributes name:string,foodId:integer

    npx sequelize model:generate --name NutritonFact --attributes calories:float,fat:float,carbs:float,protein:carbs,ingredientId:integer

    npx sequelize model:generate --name RecipeIngredient --attributes recipeId:integer,ingredientId:integer,mesurement:float

    npx sequelize model:generate --name PhotoSize --attributes name:string,width:integer,height:integer

    npx sequelize model:generate --name Photo --attributes url:text,sizeId:integer,recipeId:integer

    npx sequelize model:generate --name User --attributes name:string

    npx sequelize model:generate --name Review --attributes post:string,rating:integer,userId:integer,recipeId:integer

    npx sequelize model:generate --name Like --attributes liked:boolean,userId:integer
```
