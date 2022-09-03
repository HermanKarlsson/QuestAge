export default class Application {
    private canvas: HTMLCanvasElement | null;
    private width: number;
    private height: number;

    constructor() {
        this.canvas = null;
        this.width = 0;
        this.height = 0;
    }

    public setWidth(width: number): Application {
        this.width = width;

        return this;
    }
    
    public setHeight(height: number): Application {
        this.height = height;

        return this;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public init(): Application {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        const body = document.getElementsByTagName("body")[0];
        if (!body) {
            throw new Error("HTML does not contain a body");
        }

        body.style.margin = "0px";
        body.appendChild(this.canvas);

        return this;
    }
}