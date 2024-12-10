class FormValidation {
    error: string;

    constructor() {
        this.error = '';
    }

    validationText(text: string, label: string) {
        if (text.length === 0) {
            this.error = `🚫 Preencha o campo ${label} para prosseguir!`;
        } else if (text.length < 5) {
            this.error = `🚫 O campo ${label} deve ter no mínimo 5 dígitos!`;
        } else if (text.length > 120) {
            this.error = `🚫 O campo ${label} deve ter no máximo 120 dígitos!`;
        } else {
            this.error = '';
        }

        return this.error;
    }

    validationEmail(email: string, label: string) {
        if (email.length === 0) {
            this.error = `🚫 Preencha o campo ${label} para prosseguir!`;
        } else if (email.length < 5) {
            this.error = `🚫 O campo ${label} deve ter no mínimo 5 dígitos!`;
        } else if (!/.+@.+\..+/.test(email)) {
            this.error = `🚫 O e-mail deve ser válido!`;
        } else {
            this.error = '';
        }

        return this.error;
    }

    validationPassword(password: string, label: string) {
        if (password.length === 0) {
            this.error = `🚫 Preencha o campo ${label} para prosseguir!`;
        } else if (password.length < 5) {
            this.error = `🚫 O campo ${label} deve ter no mínimo 5 dígitos!`;
        } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password)) {
            this.error = `🚫 A ${label} deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial!`;
        } else {
            this.error = '';
        }

        return this.error;
    }

    validationConfirmPassword(confPassword: string, password: string, label: string) {
        if (confPassword.length === 0) {
            this.error = `🚫 Preencha o campo ${label} para prosseguir!`;
        } else if (confPassword.length < 5) {
            this.error = `🚫 O campo ${label} deve ter no mínimo 5 dígitos!`;
        } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(confPassword)) {
            this.error = `🚫 A ${label} deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial!`;
        } else if (password !== confPassword) {
            this.error = `🚫 As senhas não correspondem!`;
        } else {
            this.error = '';
        }

        return this.error;
    }
}

export default FormValidation;