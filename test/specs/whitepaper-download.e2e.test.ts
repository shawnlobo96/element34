import Navbar from '../pageobjects/navbar.component'
import HomePage from '../pageobjects/home.page'
import ResourcePage from '../pageobjects/resources.page'
import Blog from '../pageobjects/blog.page'
import Assets from '../pageobjects/assets.page'

describe('Elemnt34 Homepage', () => {
    it('should load the homepage and the ', async () => {
        await HomePage.open()
    })

    it("should load the navbar", async () => {
        await Navbar.test()
    })

    it("should open the resource page by tapping on the navbar", async () => {
        expect(Navbar.resourcePage).toBeClickable()
        await Navbar.resourcePage.click()
    })

    it("should open the blog post refering the whitepaper", async () => {
        expect(ResourcePage.whitePaperBlog).toBeClickable()
        await ResourcePage.whitePaperBlog.click()
    })

    it("should open a new page on cllicking the Download Whitepaper button", async () => {
        await Blog.whitePaperDownloadButton.scrollIntoView()
        expect(Blog.whitePaperDownloadButton).toBeClickable()
        await Blog.whitePaperDownloadButton.click()
    })

    it("should switch to the new page and fill up the form", async () => {
        await browser.switchWindow('Selecting A Selenium Grid For Your Enterprise - White Paper | Element34')
        await Assets.fillForm()
        const submitBtn = await Assets.btnSubmit
        expect(submitBtn).toBeClickable()
        await submitBtn.click()
        
        const formFailure = Assets.formFail
        await formFailure.waitForDisplayed()
        const text = await formFailure.getText()
        
        expect(formFailure).not.toBeDisplayed()
        await browser.takeScreenshot()
        expect(text).not.toEqual("Oops! Something went wrong while submitting the form.")
    })
})