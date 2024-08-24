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
    rootElement;
    constructor(rootElementId) {
        this.rootElement = document.getElementById(rootElementId);
        this.renderMenu("rb-menu");
        this.renderRouter("rb-router");
    }
    //private renderHomePage(componentName: string) {
    //    const homePageElement = document.createElement(componentName);
    //    this.rootElement.appendChild(homePageElement);
    //}
    renderMenu(componentName) {
        const menuElement = document.createElement(componentName);
        this.rootElement.appendChild(menuElement);
    }
    renderRouter(componentName) {
        const routerElement = document.createElement(componentName);
        this.rootElement.appendChild(routerElement);
    }
}
const framework = new SimpleFramework('ts-example');
//# sourceMappingURL=app.js.map