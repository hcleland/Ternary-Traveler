import APIManager from "./dbCalls";
import interestsDisplay from "./DOMBuilder"

// const buttonEvents = {
//     saveNewInterest: () => {
//         let nameInput = document.getElementById("interestNameInput").value
//         let descriptionInput = document.getElementById("interestDescriptionInput").value
//         let costInput = document.getElementById("interestCostInput").value
//         let reviewInput = document.getElementById("interestReviewInput").value

//         const interestObj = {
//             name: nameInput,
//             description: descriptionInput,
//             cost: costInput,
//             review: reviewInput
//         }
//         APIManager.createNewInterest(interestObj)
//             .then(allInterestsFromDB());
//     }
// }

// export default buttonEvents