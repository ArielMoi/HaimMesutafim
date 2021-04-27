const puppeteer = require("puppeteer");

// "https://www.ruachtova.org.il/projects/101238";

const collectingPageData = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    await page.goto(url, {
      waitUntil: "networkidle0",
    });
    const header = await page.evaluate(
      () => document.querySelector("h1").innerText.split('').reverse().join('')
    );
    const imgSrc = await page.evaluate(
      () => document.querySelector(".project-content img").src
    );
    const description = await page.evaluate(() =>
      document
        .querySelector(".project-content p")
        .innerText.split("")
        .reverse()
        .join("")
    );

    await browser.close();

    return {
        url,
        img: imgSrc,
        title: header,
        description,
    }
  } catch (err) {
    console.error(err);
  }
};

collectingPageData("https://www.ruachtova.org.il/projects/101238").then(res => console.log(res))

module.exports = collectingPageData;
