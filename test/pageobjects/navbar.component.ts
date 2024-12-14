class Navbar {

    private textLinkMap: any = {
        "SeleniumBox/SBOX" : "/seleniumbox",
        "Why SBOX" : "/seleniumbox/why-sbox",
        "Features" : "/seleniumbox/features",
        "Pricing" : "/pricing",
        "Resources" : "/resources",
        "Book a Demo" : "/request-demo",
        "Contact Us" : "/contact-us"
    }

    private get getAnchorElements() {
        return $$("nav a")
    }

    public get resourcePage() {
        return $("nav").$("=Resources")
    }

    public async test() {
        const elements = await this.getAnchorElements;

        for (let element of elements) {
            let href = await element.getAttribute("href")
            let text = await element.getText()
            expect(element).toBeClickable()
            expect(this.textLinkMap[text]).toEqual(href)
        }
    }
}

export default new Navbar();