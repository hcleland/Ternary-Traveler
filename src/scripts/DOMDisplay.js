import APIManager from "./dbCalls";
import interestsDisplay from"./DOMBuilder"

//this displays All interests to the DOM
const interestsHandler = {
    postAllInterestsDOM: () => {
        let outputEl = document.querySelector("#output");
        outputEl.innerHTML = "";
        APIManager.getAllInterests().then(interests => {
            let showAllInterests = interestsDisplay.buildInterestsDOM(interest.name, interest.description, interest.cost, interest.review)
            outputEl.innerHTML += showAllInterests
        })
    }
}

export default interestsHandler


// console.log("DOM display here");
// export default displayAllInterests