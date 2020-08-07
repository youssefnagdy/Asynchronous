/**
 * Created by YoussefNagdy on 7/29/2020.
 */

/*
   In Es8 something easier than Promises
   Called AsyncAwait
   designed for us to consume promises
   and not to produce them
   if you want to produce promises
   you do it with regular way

   Asyncwait make consume a lot easier to do
   by async keyword

   inside async function we can have
   more than one await expression
   by key word await


   what happens we fireOff the function
   by callit and then keep running asyncronasly
   in the background
   then we wait for promise to resolve
   and assign the value to ids const
   if the promise is rejected
   then an error will be thrown
   and if you want to handle this error
   we have to include some error code



 */

const getIDs = new Promise((resolve , reject) => {
    setTimeout(() => {
    resolve([523,883,432,974]);

},1500);
});

const getRecipe = recID => {
    return new Promise((resolve,reject) => {
            setTimeout(ID => {
            const recipe = {title:'Fresh Tomato',Publisher:'Jo'};
    resolve(`${ID}:${recipe.title}`);
});
},1500,recID);

};

const getRelated = publisher => {
    return new Promise((resolve,reject) => {
            setTimeout(pub => {
            const recipe = {title:'Italian Pizza',publisher:'jo'};
    resolve(`${pub}: ${recipe.title}`);
},1500,publisher);
});
}

async function getRecipeAw(){

    const IDs = await getIDs;
    console.log(IDs);

    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);

    const related = await getRelated('Jo');
    console.log(related);


}
getRecipeAw();