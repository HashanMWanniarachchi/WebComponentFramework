class Router extends HTMLElement {
    private definedCustomElements: Set<string> = new Set();

    connectedCallback() {
        this.handleRouteChange = this.handleRouteChange.bind(this);
        window.addEventListener('hashchange', this.handleRouteChange);
        this.handleRouteChange(); // Initial rendering
    }

    componentNameToCustomElementName(componentName: string): string {
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

            let appContainer = document.createElement("div");
            appContainer.className = "container";

            let rowElem = document.createElement("div");
            rowElem.className = "row";
            appContainer.appendChild(rowElem);

            // Load components
            if (layoutData && layoutData.parameterMap && layoutData.parameterMap.componentList) {
                for (const key in layoutData.parameterMap.componentList) {
                    const component = layoutData.parameterMap.componentList[key];
                    await this.loadComponent(appName, component.name, component.id, rowElem, component.span);
                }
            }

            this.innerHTML = appContainer.innerHTML;
                
        } catch (error) {
            console.error('Error loading layout:', error);
        }
    }



    async loadComponent(appName: string, componentName: string, componentId: string, appContainer: HTMLElement, span: number) {
        try {
            // Load the component dynamically
            const module = await import(`../Data/Components/${componentId}/${componentName}.js`);
            const customElementName = this.componentNameToCustomElementName(componentName);
            if (!this.definedCustomElements.has(customElementName) && appName !== "WebComponentApp") {
                customElements.define(customElementName, module.default);
                this.definedCustomElements.add(customElementName);

            }           

            // Create parent container for the component
            const parentContainer = document.createElement('div');
            parentContainer.className = `col-sm-${span} col-md-${span} col-lg-${span} col-xl-${span}`; // Set grid span
            appContainer.appendChild(parentContainer);

            // Create instance of the component
            const componentElement = document.createElement(customElementName);
            parentContainer.appendChild(componentElement);

        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
        }
    }
}

customElements.define('rb-router', Router);
