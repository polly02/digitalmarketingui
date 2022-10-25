class Infoblock {
    constructor() {
        this.getResponse()
    }

    getResponse() {
        const plus = document.querySelectorAll(".plus")
        const response = document.querySelectorAll(".response")

        for (let i = 0; i < plus.length; i++) {
            plus[i].addEventListener("click", () => {
                if (response[i].hidden) {
                    response[i].hidden = false
                } else {
                    response[i].hidden = true
                }
            })
        }
    }
}

const infoblock = new Infoblock()
