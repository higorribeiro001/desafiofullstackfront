import { FormBuilderInterface } from "@/data/types";

class FormBuilder {
    formBuilder: FormBuilderInterface;

    constructor() {
        this.formBuilder = {
            formFields: [],
        }
    }

    addTextField(name: string, label: string, type: string, placeholder = '') {
        this.formBuilder.formFields.push({
            type,
            name,
            label,
            placeholder
        })

        return this
    }

    build() {
        return this.formBuilder.formFields
    }
}

export default FormBuilder;