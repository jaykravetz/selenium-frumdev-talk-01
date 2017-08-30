const WebDriver = require('selenium-webdriver'),
      By        = WebDriver.By;

process.env.SELENIUM_SERVER_JAR = 'C:\\apps\\selenium\\bin\\selenium-server-standalone-3.4.0.jar';

let browser = new WebDriver.Builder()
    .withCapabilities(WebDriver.Capabilities.chrome())
    .build();


browser.get('http://www.amazon.com');

browser.findElement(By.name('field-keywords')).sendKeys('snorkel');
browser.findElement(By.css('input[value="Go"]')).click();

browser.findElement(By.css('#centerMinus li.s-result-item a')).click();
browser.findElement(By.xpath('//input[@id="add-to-cart-button"]')).click();
browser.findElement(By.id('hlb-view-cart-announce')).click();

browser.findElement(By.name('proceedToCheckout')).click();
browser.findElement(By.id('createAccountSubmit')).click();

browser.findElement(By.name('customerName')).sendKeys('Jay Kravetz');
browser.findElement(By.name('email')).sendKeys('jay@jkravetz.net');
browser.findElement(By.name('password')).sendKeys('sup3rs3cure123!!');
browser.findElement(By.name('passwordCheck')).sendKeys('sup3rs3cure123!!');

