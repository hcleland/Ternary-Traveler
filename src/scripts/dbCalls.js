const baseURL = "http://0.0.0.0:8088";

const APIManager = {
    getAllPlaces: function () {
        return fetch(`${baseURL}/places`)
            .then(response => response.json());
    },

    getOnePlace: function (placeId) {
        return fetch(`${baseURL}/places/${placeId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json());
    },

    createNewPlace: function (placeObj) {
        return fetch(`${baseURL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(placeObj)
        })
            .then(response => response.json());
    },

    deletePlace: function (placeId) {
        return fetch(`${baseURL}/places/${placeId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    },

    getAllInterests: function () {
        return fetch(`${baseURL}/interests`)
            .then(response => response.json())
    },

    getOneInterest: function (interestId) {
        return fetch(`${baseURL}/interests/${interestId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json());
    },

    createNewInterest: function (interestObj) {
        return fetch(`${baseURL}/interests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestObj)
        }).then(response => response.json());
    },

    deleteInterest: function (interestId) {
        return fetch(`${baseURL}/interests/${interestId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }
}

export default APIManager;
