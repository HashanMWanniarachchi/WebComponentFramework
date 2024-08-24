class Router extends HTMLElement {
    connectedCallback() {
        this.handleRouteChange = this.handleRouteChange.bind(this);
        window.addEventListener('hashchange', this.handleRouteChange);
        this.handleRouteChange(); // Initial rendering
    }
    componentNameToCustomElementName(componentName) {
        // Split the component name by capital letters or spaces
        const words = componentName.split(/(?=[A-Z])|\s/);
        // Convert each word to lowercase and join with hyphen
        const customElementName = words.map(word => word.toLowerCase()).join('-');
        return customElementName;
    }
    async handleRouteChange() {
        const route = window.location.hash.slice(1) || '/ngDashboard';
        const [appName] = route.split('/').filter(Boolean);
        if (!appName) {
            // Handle invalid route
            console.error('Invalid route:', route);
            return;
        }
        if (appName.toLowerCase() === "ngdashboard") {
            this.innerHTML = "<h1>This is the dashboard</h1>";
            return;
        }
        try {
            const response = await fetch(`../Apps/${appName}/layout.json`);
            const layoutData = await response.json();
            // Clear previous content
            this.innerHTML = '';
            // Load components
            if (layoutData && layoutData.parameterMap && layoutData.parameterMap.componentList) {
                for (const key in layoutData.parameterMap.componentList) {
                    const component = layoutData.parameterMap.componentList[key];
                    await this.loadComponent(appName, component.name, component.id);
                }
            }
        }
        catch (error) {
            console.error('Error loading layout:', error);
        }
    }
    async loadComponent(appName, componentName, componentId) {
        try {
            // Load the component dynamically
            const module = await import(`../Components/${componentId}/${componentName}.ts`);
            const customElementName = this.componentNameToCustomElementName(componentName);
            customElements.define(customElementName, module.default);
            // Create instance of the component
            const componentElement = document.createElement(componentName);
            this.appendChild(componentElement);
        }
        catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
        }
    }
}
customElements.define('rb-router', Router);
//# sourceMappingURL=router.js.map