class Menu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<nav><ul><li><a href="#/ngDashboard">Dashboard</a></li><li><a href="#/UserManagement">UserManagement</a></li><li><a href="#/WebComponentApp">App with Web Components</a></li></ul></nav>';
    }
}
customElements.define('rb-menu', Menu);
//# sourceMappingURL=menu.js.map