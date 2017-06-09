import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by Monica Francisco on 09/06/2017.
 */
public class StepdefsDetailsProfile {

    private static WebDriver driver;
    private static WebDriverWait wait;
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

    @Given("^the speaker had all the information$")
    public void theSpeakerHadAllTheInformation() throws Throwable {
        driver.get("http://stagingapp-duplacapicua.1d35.starter-us-east-1.openshiftapps.com/");
    }

    @When("^the user clicks on the profile card$")
    public void theUserClicksOnTheProfileCard() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^the system should show a page with \"([^\"]*)\" details who clicked with  \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" ,\"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void theSystemShouldShowAPageWithDetailsWhoClickedWithAnd(String arg0, String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
