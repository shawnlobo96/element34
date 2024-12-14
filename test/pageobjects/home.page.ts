import { $ } from '@wdio/globals'
import Page from './page';

class HomePage extends Page {

    public open() {
        return super.open('');
    }

    public async getHeaderText() {
        return await $("h1").getText()
    }

    public get getVideoSection() {
        return $("div.home_video_image_wrapper")
    }

    public get getPlayButton() {
        return $("div.home_play_button")
    }

    public get getVideoPlayer() {
        return $("#wistia_simple_video_125")
    }

    public async closeVideoPlayer() {
        const elem = await $('aria/close lightbox')
        await elem.click()
        await browser.switchToParentFrame()
        await browser.pause(2000)
    }

    private async getHomeClientsSection() {
        const elem = $("section.section_home_clients")
        await elem.scrollIntoView()
        return elem;
    }

    public async getClientSectionH2() {
        const elem = (await this.getHomeClientsSection()).$("h2")
        return elem;
    }

    public async getFeatureSection() {
        const elem = $("section.section_features")
        await elem.scrollIntoView()
        browser.waitUntil(elem.isDisplayed)
        const h2 = elem.$("h2")
        const h3s = elem.$$("h3")
        const anchor = elem.$("a")
        return { h2, h3s, anchor }
    }

    public async getsTestimonialsSectionH2() {
        const elem = $("section.section_testimonials")
        await elem.scrollIntoView()
        browser.waitUntil(elem.isDisplayed)
        const h2 = elem.$("h2")
        return h2
    }

    public async getDemoCtaSection() {
        const elem = $("section.section_cta")
        await elem.scrollIntoView()
        browser.waitUntil(elem.isDisplayed)
        const h2 = elem.$("h2")
        const anchor = elem.$("a")
        return { h2, anchor }
    }

    public async getResourceSection() {
        const elem = $("section#resource")
        await elem.scrollIntoView()
        browser.waitUntil(elem.isDisplayed)
        await browser.pause(2000)
        const h2 = elem.$("h2")
        const cardsElement = await $$("section#resource div.blog_list div.blog_item").getElements()

        let cards = []

        // Get the card h3 and anchor link for each card
        for (let card of cardsElement) {
            card = await card.getElement()
            let cardH3 = await card.$("h3.heading-style-h6").getText()
            let cardHref = await card.$("a").getAttribute("href")
            cards.push([cardH3, cardHref])
        }

        const anchor = elem.$("div.button-group a")
        return { h2, cards, anchor }
    }

}

export default new HomePage();
