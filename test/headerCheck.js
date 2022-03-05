const { Builder, By, Key } = require("selenium-webdriver"); //using selenium webdriver node module to write in selenium
var should = require("chai").should();

describe("Validate Third Item on List", function () {

    it("Successfully found third todo item in application", async function () {

        let driver = await new Builder().forBrowser("firefox").build();

        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        let headText = await driver.findElement(By.className("//h2")).getText().then(function(value){
            return value
        })
        
        headText.should.equal("LambdaTest Sample App"); //chai assertion for same todoText variable

        await driver.quit();

    });

});