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
        const popup = newCustomer.section.thanksPopup
        popup.waitForElementVisible("@thanksText")
            .assert.containsText("@thanksText", "Спасибо. Мы получили вашу заявку и ответим в течение пары дней.")




        browser.pause(20000)
        browser.end();
    }
};

