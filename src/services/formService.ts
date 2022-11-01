class FormService {
    public form: HTMLFormElement;

    constructor(form: HTMLFormElement) {
        this.form = form;
    }

    getInputValue(): string {
        return this.form.value;
    }

    setInputValue(value: string): void {
        this.form.value = value;
    }

}

export { FormService };