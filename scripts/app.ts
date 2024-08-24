//function TSButton() {
//    let name: string = "Fred";
//    document.getElementById("ts-example").innerHTML = greeter(user);
//}

//class Student {
//    fullName: string;
//    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//        this.fullName = firstName + " " + middleInitial + " " + lastName;
//    }
//}

//interface Person {
//    firstName: string;
//    lastName: string;
//}

//function greeter(person: Person) {
//    return "Hello, " + person.firstName + " " + person.lastName;
//}

//let user = new Student("Fred", "M.", "Smith");

class SimpleFramework {
    private rootElement: HTMLElement;

    constructor(rootElementId: string) {
        this.rootElement = document.getElementById(rootElementId);
        this.renderMenu("rb-menu");
        this.renderRouter("rb-router");
        
    }

    //private renderHomePage(componentName: string) {
    //    const homePageElement = document.createElement(componentName);
    //    this.rootElement.appendChild(homePageElement);
    //}

    private renderMenu(componentName: string) {
        const menuElement = document.createElement(componentName);
        this.rootElement.appendChild(menuElement);
    }

    private renderRouter(componentName: string) {
        const routerElement = document.createElement(componentName);
        this.rootElement.appendChild(routerElement);
    }
}

const framework = new SimpleFramework('ts-example');