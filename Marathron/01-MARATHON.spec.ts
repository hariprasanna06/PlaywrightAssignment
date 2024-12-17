import {test} from "@playwright/test";

test("Create Lead in Salesforce and then convert the Lead into an Opportunity", async({page})=>{
    // To launch and the salesforce application
    await page.goto("https://tatadigital-dev-ed.develop.my.salesforce.com/");
    // To fill the username
    const userName = await page.fill("#username", "hariprasa49@gmail.com");
    //To enter the password
    const password = await page.fill("#password", 'MsHarinath@2002');
    //
    let fName = 'Sanjay';
    let lName = 'K'
    // To click the Login button
    await page.click("#Login");
    await page.waitForTimeout(4000);
    // TO click the App Launcher button in the Home page
    await page.click("button[title='App Launcher']");
    await page.waitForTimeout(3000);
    //Click the View All button
    await page.click("[class$='slds-p-horizontal--small'] button");
    // To enter the Lead in the App Launcher
    await page.getByPlaceholder("Search apps or items...").fill("Leads");
    await page.waitForTimeout(3000);
    // To click the Leads button in the App Launcher
    await page.click("a[class='al-tab-item']");
    // To click New button
    await page.click("a[title='New']");
    // To enter the First Name
    await page.getByPlaceholder("First Name").fill(fName);
    // To click the Last Name
    await page.getByPlaceholder("Last Name").fill(lName);
    // // To select the Salutations
    await page.click("button[name='salutation'] span");
    // To enter the Company Name
    await page.locator("input[name='Company']").fill("Qaconfero");
    // To Select the Lead Status
    await page.click("button[aria-label='Lead Status']");
    // To click the Open - Not Contacted in the Lead Status Dropdown
    await page.click("[data-value='Open - Not Contacted']");
    // To click the Save button
    await page.click("button[name='SaveEdit']");
    await page.waitForTimeout(3000);
    //To click the Leads button
    await page.click("a[title='Leads']");
    //To click the down button in the Leads
    // await page.click("[title='Leads'] + * svg");

    // To enter and search the name in the Search textbox 
    await page.getByPlaceholder("Search this list...").fill(fName)
    await page.getByPlaceholder("Search this list...").focus()
    await page.keyboard.press("Enter");
    
    // To click the the Lead Name
    await page.click("a[class^='slds-truncate outputLookupLink']");
    // // To Click the Down button in the Lead screen
    await page.click("//button[text()='Submit for Approval']/following::button[1]");
    // To click Convert
    await page.click("[apiname='Convert'] a");
    // To click the Convert button
    await page.click("button[class$='slds-button_brand']");
    await page.waitForTimeout(2000);
    // Click the Go to Leads button
    await page.click("div[class$='slds-modal__footer'] button + button");
    // To verify whether the Lead is shown or not in the Lead sceen
    await page.click("a[title='Leads']"); 
    // await page.waitForTimeout(2000);
    // To enter and search the name in the Search textbox 
    await page.getByPlaceholder("Search this list...").fill(fName)
    await page.getByPlaceholder("Search this list...").focus()
    await page.keyboard.press("Enter");
    // Navigating to Opportunities
    await page.click("a[title='Opportunities']");


})