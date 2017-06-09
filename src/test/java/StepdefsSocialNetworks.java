import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by joaofernandes on 09/06/17.
 */
public class StepdefsSocialNetworks {

    private static WebDriver driver;
    private static WebDriverWait wait;
    private boolean hasInstagram;
    static {
        Logger.getLogger("").setLevel(Level.OFF);
        System.setProperty("webdriver.gecko.driver", "drivers\\geckodriver.exe");
        System.setProperty("webdriver.edge.driver", "drivers\\MicrosoftWebDriver.exe");
        System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
        System.setProperty("phantomjs.binary.path", "drivers\\phantomjs.exe"); //
        if (driver == null) {
            driver = new HtmlUnitDriver();
        }
        if(wait == null){
            wait = new WebDriverWait(driver, 5);
        }
    }


    @Given("^the speaker has \"([^\"]*)\"$")
    public void theSpeakerHas(String instagram) throws Throwable {
        driver.get("http://stagingapp-duplacapicua.1d35.starter-us-east-1.openshiftapps.com/");

        if(instagram != null){

            // hasInstagram = true;

        }
    }

    @When("^the user clicks on the Instagram button$")
    public void theUserClicksOnTheInstagramButton() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        if(hasInstagram){

            //  WebElement element = driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div/ul/li[3]/a"));
            //  element.click();

        }
    }

    @Then("^the system should show each \"([^\"]*)\" his Instagram page$")
    public void theSystemShouldShowEachHisInstagramPage(String arg0) throws Throwable {

        // WebDriverWait wait = new WebDriverWait(driver, 10);
        // wait.until(ExpectedConditions.titleContains("Instagram"));
    }
}
