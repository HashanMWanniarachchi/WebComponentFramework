class Menu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#/ngDashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/UserManagement">UserManagement</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/WebComponentApp">App with Web Components</a>
                        </li>
                    </ul>
                <div>
            </nav>
        </header>
        `;
    }
}

customElements.define('rb-menu', Menu);
