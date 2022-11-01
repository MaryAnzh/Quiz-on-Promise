class FormService {
    public form: HTMLFormElement;
    public input: HTMLInputElement;

    constructor(form: HTMLFormElement) {
        this.form = form;
        this.input = <HTMLInputElement>this.form.elements.namedItem('number');
    }

    getInputValue(): number {
        const value = this.input.valueAsNumber;
        return value;
    }

    setInputValue(value: number): void {
        this.input.valueAsNumber = value;
    }

    generateInputEvrnt() {
        const event = new Event('input');
        this.input.dispatchEvent(event);
    }

}

export { FormService };