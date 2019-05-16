import APIManager from "./dbCalls";
import interestsDisplay from "./DOMBuilder";
import displayAllInterests from "./DOMDisplay";
import buttonEvents from "./buttonEvents";

const allInterestsFromDB = () => {
    APIManager.getAllInterests()
        .then(interests => {
            console.log("interests", interests)
            allInterestsHTML(interests);
        })

}

const allInterestsHTML = (interests) => {
    let interestsOutput = document.querySelector("#output");
    interests.forEach(interest => {
        interestsOutput.innerHTML += `
        <section class="interestCard">
        <div class="col">
        <h1>Name: ${interest.name}</h1>
        <h3>Description: ${interest.description}</h3>
        <h3>Cost: ${interest.cost}</h3>
        <h3>Review: ${interest.review}</h3>
        <button id="submitReview">Add a Review</button>
        </div>
        </section>
        `
    })
}

const buildFormHTML = () => {
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
}

const displayForm = () => {
    const outputForm = document.querySelector("#formOutput");
    let formHTML = interestsDisplay.buildFormHTML();
    outputForm.innerHTML = formHTML;
    document.querySelector(".saveNewInterestBtn").addEventListener("click", () => {
        console.log("button clicked");
        saveNewInterest();
    })
}

const saveNewInterest = () => {
    let nameInput = document.getElementById("interestNameInput").value
    let descriptionInput = document.getElementById("interestDescriptionInput").value
    let costInput = document.getElementById("interestCostInput").value
    let reviewInput = document.getElementById("interestReviewInput").value

    const interestObj = {
        name: nameInput,
        description: descriptionInput,
        cost: costInput,
        review: reviewInput
    }
    APIManager.createNewInterest(interestObj)
        .then(allResults => {
            console.log(allResults);
            APIManager.getAllInterests()
                .then(result => {
                    allInterestsFromDB(result);
                })
        })
}

displayForm();
allInterestsFromDB();

