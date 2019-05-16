import APIManager from "./dbCalls";
import interestsHandler from "./DOMDisplay"
import buttonEvents from "./buttonEvents";

const interestsDisplay = {
    // buildInterestsHTML: (interests) => {
    //     let interestString = "";
    //     interests.forEach(interest => {
    //         interestString += `
    //     <section class="interestCard">
    //     <div class="col">
    //     <h1>Name: ${interest.name}</h1>
    //     <h3>Description: ${interest.description}</h3>
    //     <h3>Cost: ${interest.cost}</h3>
    //     <h3>Review: ${interest.review}</h3>
    //     <button id="submitReview">Add a Review</button>
    //     </div>
    //     </section>
    //     `
    //     })
    //     return interestString
    // },

    buildFormHTML: () => {
        return `
        <form id="interestForm">
        <div>
        <h3>Add a New Place of Interest</h3>
            <label for="interestNameInput">Name: </label>
            <input type="text" id="interestNameInput" placedholder="Name of Place" required></input>
        </div>

        <div>
            <label for="interestDescriptionInput">Description: </label>
            <input type="text" id="interestDescriptionInput" placedholder="Description" required></input>
        </div>

        <div>
            <label for="interestCostInput">Cost: $</label>
            <input type="text" id="interestCostInput" placedholder="Description" required></input>
        </div>

        <div>
            <label for="interestReviewInput">Review: </label>
            <textarea rows="5" cols="60" name="review" id="interestReviewInput" placedholder="Review" required></textarea>
        </div>
        <button type="button" class="saveNewInterestBtn">Save</button>
        </form>
        `
    },

    // printToDOM: (interests) => {
    //     const output = document.querySelector("#output");
    //     let interestHTML = interestsDisplay.buildInterestsHTML(interests);
    //     output.innerHTML = interestHTML;
    //     // document.querySelector(".saveBtn").addEventListener("click", () => {
    //     //     interestsHandler.createNewInterest();
    //     // })
    // },

    displayForm: () => {
        const outputForm = document.querySelector("#formOutput");
        let formHTML = interestsDisplay.buildFormHTML();
        outputForm.innerHTML = formHTML;
        document.querySelector(".saveNewInterestBtn").addEventListener("click", () => {
            console.log("button clicked");
            buttonEvents.saveNewInterest();
        })
    }
}

console.log("domBuilder.js here");

export default interestsDisplay