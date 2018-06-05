"use strict";
$(document).ready(() => {




////// START COMBAT
let grantMaxHealth =10
let grantHealth = grantMaxHealth;
let userHealth = 40;
let userWins = 1;
const battle = () => {
  // if (userWins < 3) {
      const getDamage = () => {
      return Math.floor(Math.random() * 5 + 1);
    } // end getDamage function
    // when you click fight, getDamage and subtract from grantHealth

  //// START USER TURN
    let userDmg = getDamage();
    console.log(userDmg);
    grantHealth -= userDmg;

      // const displayGrantHealth = () => {
      //   let currentHealth = grantHealth / grantMaxHealth;
      //   console.log(`Grant's health is at ${currentHealth * 100}%`);
      // }
      for ( let i = 0; i < userDmg; i++) {
        // let currentHealth = grantHealth / grantMaxHealth;
        $(".grant-hp").css("width", "-=10%");
      }
      // displayGrantHealth();



    if (grantHealth <= 0 && userWins < 3) {
      grantHealth = 0;
      console.log(grantHealth);
      console.log("WIN ROUND!!!");
      // add a popup
      $("#full-screen-popup").html(`<p>Well fought! You have won round ${userWins}!</p><p>Begin round ${userWins + 1}?</p><button type="button" class="start-button">Play!</button>`)
      .css("display", "block")
      .css("font-size", "26px");
      userWins++
      grantHealth = 10;
      $(".grant-hp").css("width", "100%");
      $(".start-button").on("click", () => {
        // console.log("is this thing on??");
        $("#full-screen-popup").fadeOut();
      })
    } else if (grantHealth <= 0 && userWins === 3) {
      grantHealth = 0;
      console.log("YOU WON THE GAME!!!");
      $("#full-screen-popup").html(`<p>You have defeated the Almighty Grant!!</p>`)
      .css("display", "flex");
    }
  //// END USER TURN
  //// START GRANT TURN
    let grantDmg = getDamage();
    console.log(grantDmg);
    userHealth -= grantDmg;

    for ( let i = 0; i < userDmg; i++) {
      $(".user-hp").css("width", "-=2.5%");
    }

    if (userHealth <= 0) {
      userHealth = 0;
      // console.log(userHealth);
      // console.log("sucks to suck");
      // $("#full-screen-popup").html(`<p>Your fear gets the best of you and you turn to flee. Grant sees you turn your back and takes the opportunity to strike!</p>
      // <p>The strike is fatal.</p>
      // <p>As darkness consumes your vision you hear him say the last words you ever hear...</p>
      // <h2>lol. sucks to suck</h2>`)
      // .css("display", "block");
    }
  //// END GRANT TURN
  // } // end of if wins < 3
  // else {

  // }

} // end battle function
////// END COMBAT

////// START OF ITEMS

let items = [
  {
    "id": 1,
    "name": "Potion",
    "effect": userHealth += 5,
    "quantity": 1
  },

  {
    "id": 2,
    "name": "Potion",
    "effect": userHealth += 5,
    "quantity": 1
  }
]
////// END OF ITEMS

////// START OF BUTTONS  

$("#special").on("click", () => {
  console.log("SPECIAL");
  $(".popup-action-menu").html(`here's some text!<button type="button" class="back-button">BACK</button>`)
  .css("display", "flex");
  $(".back-button").on("click", () => {
    $(".popup-action-menu").hide();
  }); // end of back button
}); // end of SPECIAL
$("#item").on("click", () => {
  console.log("ITEM");
  // items.forEach((item) => {
  //   console.log(item.name);

  // })

//   $(".itemList").html(`${items.forEach((item) => {
//     console.log(item.name);
//     item.name;
//   })}`
// )
  console.log(items);
  $(".popup-action-menu").html(` <div class="item-list">${items.name}</div> <button type="button" class="back-button">BACK</button>`)
  .css("display", "flex");
  $(".back-button").on("click", () => {
    $(".popup-action-menu").hide();
  }); // end of back button
});
    $("#fight").on("click", () => {
      console.log("FIGHT");
      $(".user").css("left", "+=20px");
      battle();
      
    });// end of FIGHT button
$("#flee").on("click", () => {
  console.log("FLEE");
  $("#full-screen-popup").html(`<p>Your fear gets the best of you and you turn to flee. Grant sees you turn your back and takes the opportunity to strike!</p>
  <h2>The strike is fatal.</h2>
  <p>As darkness consumes your vision you hear him say the last words you ever hear...</p>
  <h2>lol. sucks to suck</h2>`)
  .css("display", "block")
  .css("font-size", "18px");
});

$(".start-button").on("click", () => {
  // console.log("is this thing on??");
  $("#full-screen-popup").fadeOut();
})
////// END OF BUTTONS 





  console.log("It works!");
}); /////////////////THE END