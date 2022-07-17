const phantom = require("phantom");

module.exports = {
  loadPage: async () => {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on("onResourceRequested", function (requestData) {
      console.info("Requesting", requestData.url);
      console.log("Request data", requestData.url);
    });

    // opens a url and returns "success" if retrieved, and "fail" if not
    const status = await page.open("https://stackoverflow.com/");
    // returns the content of the url
    const content = await page.property("content");
    if (status == "success") {
      await instance.exit();
      return content;
    } else {
      await instance.exit();
    }
  },
};
