const puppeteer = require("puppeteer");

const collectingPageData = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    await page.goto(url, {
      waitUntil: "networkidle0",
    });
    const header = await page.evaluate(
      () => document.querySelector("h1").innerText
    );
    const imgSrc = await page.evaluate(
      () => document.querySelector(".project-content img").src
    );
    
    const description = await page.evaluate(() =>
    document
      .querySelector(".project-content p")
      .innerText
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

const collectingDataHeaders = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    await page.goto(url, {
      waitUntil: "networkidle0",
    });

    const imgs = await page.evaluate(() =>
      [...document.querySelectorAll(".paging-wrapper .box-project a img")].map(
        (img) => img.src
      )
    );

    const textHeaders = await page.evaluate(() =>
      [...document.querySelectorAll(".paging-wrapper .col-xs-12 a img")].map(
        (a) => a.alt
      )
    );

    let href = await page.evaluate(() =>
      [...document.querySelectorAll(".paging-wrapper .col-xs-12")].map((a) =>
        a.getAttribute("data-me")
      )
    );

    href = href.filter((h) => h !== null);

    const data = {};

    let num = 0;
    textHeaders.forEach((header) => {
      href[num] !== "#" ? (data[header] = [imgs[num], href[num]]) : num++; // prevents adding irrelevant data.
      num++;
    });

    // console.log(data);
    await browser.close();

    return data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {collectingPageData, collectingDataHeaders};
