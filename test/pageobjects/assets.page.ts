class Assets {

    public get firstNameField() {
        return $("input[name='first-name']");
    }

    public get lastNameField() {
        return $("input[name='Last-Name']");
    }

    public get companyNameField() {
        return $("input[name='company']");
    }

    public get emailField() {
        return $("input[name='email']");
    }

    public get selectReasonField() {
        return $("#field");
    }

    public get getConsentField() {
        return $("#Consent-Checkbox");
    }

    public get getCommunicationConsentField() {
        return $("#Checkbox");
    }

    public get btnSubmit() {
        return $('input[type="submit"]');
    }

    public get formFail() {
        return $('.w-form-fail div');
    }

    public async fillForm() {
        await Promise.all([
            this.firstNameField.setValue("Test"),
            this.lastNameField.setValue("last"),
            this.companyNameField.setValue("Company"),
            this.emailField.setValue("test@example.com"),
            this.selectReasonField.selectByVisibleText("General research"),
            this.getConsentField.click(),
            this.getCommunicationConsentField.click()
        ]);
    }

}

export default new Assets()