class FormValidation {
    error: string;

    constructor() {
        this.error = '';
    }

    validationText(text: string, label: string) {
        if (text.length === 0) {
            this.error = `🚫 Preencha o campo ${label} para prosseguir!`;
        }

        if (text.length < 5) {
            this.error = `🚫 O campo ${label} deve ter no mínimo 5 dígitos!`;
        }

        if (text.length > 120) {
            this.error = `🚫 O campo ${label} deve ter no máximo 120 dígitos!`;
        }

        return this.error;
    }

    validationEmail(email: string, label: string) {
        if (email.length === 0) {
            this.error = `🚫 Preencha o campo ${label} para prosseguir!`;
        }

        if (email.length < 5) {
            this.error = `🚫 O campo ${label} deve ter no mínimo 5 dígitos!`;
        }

        if (!/.+@.+\..+/.test(email)) {
            this.error = `🚫 O e-mail deve ser válido!`;
        }

        return this.error;
    }
}

export default FormValidation;