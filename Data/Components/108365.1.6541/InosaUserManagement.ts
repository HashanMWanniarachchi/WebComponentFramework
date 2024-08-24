class InosaUserManagement extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<main><h2>This is InosaUserManagement Component</h2></main>`
    }

}

export default InosaUserManagement;