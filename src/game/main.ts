import * as CDE from "../engine/CloudDropEngine"

function main(): void {
    const app = new CDE.Application().setWidth(window.innerWidth).setHeight(window.innerHeight).init();
}

main();