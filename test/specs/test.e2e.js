import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import HomePage from "../pageobjects/home.page.js";
describe('My Login application', () => {
  /*  it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })*/

    it('should search something', async () => {
        await LoginPage.open()

        await HomePage.search('laptop')
        // await browser.pause(5000)
        await browser.saveScreenshot('./screenshot.png')
    })
})

