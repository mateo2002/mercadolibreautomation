import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */



    get searchBox () {
        return $('#cb1-edit')

    }

    get btnSearch (){
        return $('body > header > div > div.nav-area.nav-top-area.nav-center-area > form > button')
    }

    get results() {
        return $('#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords > aside > div.ui-search-search-result')
    }

    async search(query) {
        await this.searchBox.setValue(query)
        await this.btnSearch.click()
        await expect(this.results).toBeDisplayed()
    }



    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new HomePage();
