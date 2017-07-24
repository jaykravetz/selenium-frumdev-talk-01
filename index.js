const WebDriver = require('selenium-webdriver'),
      By        = WebDriver.By;

let browser = new WebDriver.Builder()
    .withCapabilities(WebDriver.Capabilities.chrome())
    .withCapabilities(WebDriver.Capabilities.ie())
    .usingServer('http://localhost:4444/wd/hub')
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

