class Footer {

    private textLinkMap: any = {
        "SeleniumBox (SBOX)": "/seleniumbox",
        "Why SBOX": "/seleniumbox/why-sbox",
        "Features": "/seleniumbox/features",
        "Pricing": "/pricing",
        "FAQs": "/seleniumbox/faq",
        "About Us": "/about",
        "Resource Center": "/resources",
        "Events": "/events",
        "Book a Demo": "/request-demo",
        "Contact Us": "/contact-us",
        "LinkedIn": "https://www.linkedin.com/company/element34/",
        "YouTube": "https://www.youtube.com/@Element34_Official",
        "Privacy Policy": "/legal/privacy-policy",
        "Cookie Policy": "/legal/cookie-policy"
    }

    private get getAnchorElements() {
        return $$("footer .footer_link_wrapper ul li a")
    }

    public async test() {
        const elements = await this.getAnchorElements;
        for (let element of elements) {
            
            await element.scrollIntoView()
            let href = await element.getAttribute("href")
            let text = await element.getText()
            expect(element).toBeClickable()
            expect(this.textLinkMap[text]).toEqual(href)
        }
    }
}

export default new Footer();