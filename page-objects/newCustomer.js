const fillInContacts = {
    setForm: function(name, companyName, phone, email, message="This is test message") {
        this.setValue("@message", message)
            .setValue("@name", name)
            .setValue("@companyName", companyName)
            .setValue("@phone", phone)
            .setValue("@email", email)
        return this;
    },
};
module.exports = {
    url: "https://agima.ru/clients",
    commands: [fillInContacts],
    elements: {
        newCustomerTitle: "h1.new-customers__top-info-title",
        message: "#message",
        name: "#name",
        companyName: "#company",
        phone: "#tel",
        email:  "#email",
        agreement: "label.new-customers__agreement-label",
        sendBtn: "a.js-submit",
        thanksText: {
            selector: "//div[@class='new-customers__popup-wrapper']/h4[contains(text(),'.')]",
            locateStrategy: 'xpath'
        },
        closeBtn: "a.js-popup-close"
    }
};