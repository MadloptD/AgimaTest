module.exports = {
    "Login test agima.ru" : function (browser) {
        const mainPage = browser.page.mainPage();
        mainPage
            .navigate()
            .waitForElementVisible("@mainTitle")
            .click("@clientLink")
        const newCustomer = browser.page.newCustomer();
        newCustomer
            .waitForElementVisible("@newCustomerTitle")
            .assert.containsText("@newCustomerTitle", "Анкета для новых клиентов AGIMA")
            .setForm("Test", "Company", "4951234567", "test@test.ru")
            .click("@agreement")
            .click("@sendBtn")
            .waitForElementVisible("@thanksText")
            .assert.containsText("@thanksText", "Спасибо. Мы получили вашу заявку и ответим в течение пары дней.")
            .click("@closeBtn")
            .waitForElementNotVisible("@thanksText")
            .assert.containsText("@newCustomerTitle", "Анкета для новых клиентов AGIMA")
        browser.end();
    }
};

