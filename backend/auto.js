const puppeteer = require('puppeteer');


module.exports = async (pincode) => {

    let cTab;
    let hlist;
    const link = "https://www.cowin.gov.in/";

    const browserOpen = puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
    });
    const browserInstance = await browserOpen;
    const allTabArr = await browserInstance.pages();
    cTab = allTabArr[0];
    await cTab.goto(link);

    await cTab.evaluate(() => {
        document.querySelectorAll("#mat-tab-label-1-1")[0].click();
    })
    await cTab.type("#mat-input-0", pincode);
    await cTab.evaluate(() => {
        document
            .querySelector(
                "#mat-tab-content-1-1 > div > div.col-padding.filerandsearchblock.margin0auto.pt-4.ng-star-inserted > div > div > button"
            )
            .click();
    });
    await cTab.waitForSelector(
        "body > app-root > div > section > app-home > div.nearestCentersSection > div > appointment-table > div > div > div > div > div > div > div > div > div > div > div > form > div > div > div.mobile-hide.slots-availablity-table.ng-star-inserted > div.col-padding.matlistingblock.ng-star-inserted > div > div > div > div > div > div.main-slider-wrap.col.col-lg-3.col-md-3.col-sm-3.col-xs-12 > div > h5"
    );

    hlist = await cTab.evaluate(() => {
        return Array.from(
            document.querySelectorAll(
                "body > app-root > div > section > app-home > div.nearestCentersSection > div > appointment-table > div > div > div > div > div > div > div > div > div > div > div > form > div > div > div.mobile-hide.slots-availablity-table.ng-star-inserted > div.col-padding.matlistingblock.ng-star-inserted > div > div > div > div > div > div.main-slider-wrap.col.col-lg-3.col-md-3.col-sm-3.col-xs-12 > div > h5"
            )
        ).map((x) => x.textContent);
    });
    

    return hlist;
};
