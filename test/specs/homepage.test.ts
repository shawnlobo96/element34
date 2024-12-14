import Footer from '../pageobjects/footer.component'
import Navbar from '../pageobjects/navbar.component'
import HomePage from '../pageobjects/home.page'

describe('Elemnt34 Homepage', () => {
    it('should load the homepage and the ', async () => {
        await HomePage.open()
    })

    it("should load the navbar", async () => {
        await Navbar.test()
    })

    it("should have the header section with CTAs to book a demo and explore SBOX", async () => {
        let text = await HomePage.getHeaderText();
        expect(text).toEqual("The Test Automation Grid Running Inside Your Network")
    })

    it("should contain a client section with an h2 tag", async () => {
        const h2 = await HomePage.getClientSectionH2()
        let h2Text = await h2.getText()
        expect(h2Text).toEqual("Trusted by leading companies")
    })

    it("should contain a feature section", async () => {
        const h2 = (await HomePage.getFeatureSection()).h2;
        const h3s = (await HomePage.getFeatureSection()).h3s;
        const anchor = (await HomePage.getFeatureSection()).anchor;

        expect(await h2.getText()).toEqual("Experience the Future of Testing")

        expect(await h3s[0].getText()).toEqual("Extra Security")
        expect(await h3s[1].getText()).toEqual("Full Compliance")
        expect(await h3s[2].getText()).toEqual("High Performance")
        expect(await h3s[3].getText()).toEqual("Built for Scale")

        expect(await anchor.getText()).toEqual("See why the experts select SBOX")
        expect(await anchor.getAttribute("href")).toEqual("/seleniumbox/why-sbox")
    })

    it("should contain a testimonial section", async () => {
        const h2 = await HomePage.getsTestimonialsSectionH2();
        expect(await h2.getText()).toEqual("Our Customers Say it Better")
    })

    it("should contain a demo CTA section", async () => {
        const h2 = (await HomePage.getDemoCtaSection()).h2;
        const anchor = (await HomePage.getDemoCtaSection()).anchor;

        expect(await h2.getText()).toEqual("Ready to experience a more secure web & mobile testing?")
        expect(await anchor.getText()).toEqual("Schedule your demo")
        expect(await anchor.getAttribute("href")).toEqual("/request-demo")
    })

    it("should contain a resource section", async () => {
        const h2 = (await HomePage.getResourceSection()).h2;
        const anchor = (await HomePage.getResourceSection()).anchor;
        const cards = (await HomePage.getResourceSection()).cards;

        expect(await h2.getText()).toEqual("Latest Resources")

        // card[0][0] --> H3 of the 0th card, // card[0][1] --> Href of the 0th card, 
        expect(cards[0][0]).toEqual("Embracing the 'Shift Left' Model in Software Testing")
        expect(cards[0][1]).toEqual("/blog/shift-left-testing")

        expect(cards[1][0]).toEqual("Scaling Test Automation in the Enterprise: The 5 Key Things to Consider")
        expect(cards[1][1]).toEqual("/blog/scale-test-automation")

        expect(cards[2][0]).toEqual("Regression Testing: The Ultimate Guide for QA Professionals")
        expect(cards[2][1]).toEqual("/blog/regression-testing-guide")

        expect(await anchor.getText()).toEqual("Visit Resource Center")
        expect(await anchor.getAttribute("href")).toEqual("/resources")
    })


    it("should open the video player on clicking the Play button", async () => {
        expect(HomePage.getVideoSection).toBePresent()
        expect(HomePage.getPlayButton).toBeClickable()
        await HomePage.getPlayButton.click()
        expect(HomePage.getVideoPlayer).toBePresent()
        await HomePage.closeVideoPlayer()
    })

    it("should load the footer", async () => {
        await Footer.test()
    })

})