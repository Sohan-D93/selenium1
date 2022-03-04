const { Builder, By, Key } = require("selenium-webdriver"); //using selenium webdriver node module to write in selenium
var should = require("chai").should();

describe("Add todo first test", function () {

    it("Successfully added first todo item in application", async function () {

        let driver = await new Builder().forBrowser("firefox").build();

        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        await driver.findElement(By.id("sampletodotext")).sendKeys("Sixth Item", Key.RETURN);

        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {

            return value

        }); //finding the xpath for the new entry in list and adding as new variable

        todoText.should.equal("Sixth Item"); //chai assertion for same todoText variable

        await driver.quit();

    });

});








