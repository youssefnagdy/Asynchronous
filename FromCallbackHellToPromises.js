/**
 * Created by YoussefNagdy on 7/28/2020.
 */

/*
   What ARe Promises ?
   . object that keeps track about whether a certain event
     has happened already or not ;
   . Determines what happens after the event has happened;

   events mean Asynchronous Events Like :-
   - TimerFinishing
   - DataComing Back From ajax Call


   Hey Get Me SomeData From Server and The Promise . Promises us
   To Get that Data


   * Promise can Have Different State
     before the event has happened the promise is Pending
     then After the Event Has Happened the promise
     is called Settled Or Resolved

             Event Happens
     PENDING ------------------>   SETTLED / RESOLVED
                                     -------------
                                     |           |
                                     |           |
                                     |           |
                                FulFilled  OR  REJECTED

     when the Promise Actually SuccessFull which means
     that resolved is available then the Promise is FulFilled
     but if there any errors then the promise Rejected

     so You Will handle These 2 Different Situations in our
     Code In Practical Terms We Can produce and consume promises

     -Produce -> we create new Promise and send resolved
                 using that Promise

    -Consume It ->  we can use callback function for fulfillment
                    and rejection of our Promise


   Let's Produce a Promise and Consume It
   Promise just like any object type
   we use the new keyword and into this promise we
   pass function called the Executor which a function
   that will immediately called once the promise is created

  The Call Back Function Pass into the Promise is
  called The Executor function Takes Two arguments resolve,reject

  To Consume Promise we use two methods
  then(callbackFunction);
  catch()

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
  getIDs
      .then(IDs => {
      console.log(IDs);
      return getRecipe(IDs[2]);
  })
  .then(recipe => {
   console.log(recipe);
   return getRelated('jo');
})
  .then(recipe => {
    console.log(recipe);
})
  .catch(error => {
    console.log('Error !!')
   });