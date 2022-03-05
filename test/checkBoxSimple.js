const { Builder, By, Key } = require("selenium-webdriver"); //using selenium webdriver node module to write in selenium
var should = require("chai").should();

describe("Selecting Single Check Box", function () {

    it("4 of 5 remaining message", async function () {

        let driver = await new Builder().forBrowser("firefox").build();

        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        let fiveOfFive = await driver.findElement(By.xpath("//span[@class='ng-binding']")).getText().then(function(value){
            return value
        });

        todoText.should.equal("5 of 5 remaining");

        // await driver.findElement(By.xpath("//li[5]")).click();

        // let fourOfFive = await driver.findElement(By.xpath("ng-binding")).getText().then(function(value){
        //     return value
        // });

        todoText.should.equal("4 of 5 remaining");

        await driver.quit();

    });

});