import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;

public class StepdefsSearchProfileCard {

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
    }

    @Given("^Im into the website$")
    public void imIntoTheWebsite() throws Throwable {
        driver.get("http://dupla-capicua-dupla-capicua.7e14.starter-us-west-2.openshiftapps.com");
    }

    @When("^I search for some keyworks$")
    public void iSearchForSomeKeyworks() throws Throwable {
        String text = driver.findElement(By.id("search")).getAttribute("value");
        driver.findElement(By.id("search")).sendKeys(text);
    }

    @Then("^the website should adjust the Profile Cards content$")
    public void theWebsiteShouldAdjustTheProfileCardsContent() throws Throwable {
        String text = driver.findElement(By.id("search")).getAttribute("value");
        assertTrue(driver.findElement(By.xpath("//body")).getText().contains(text));
    }

//    @Then("^the system should say \"([^\"]*)\"$")
//    public void theSystemShouldSay(String arg0) throws Throwable {
//        String text = driver.findElement(By.id("search")).getAttribute("value");
//
//        assertEquals("Não foram encontrados resultados", driver.findElement(By.xpath("/.//*[@id='team']/div/center/div/")).getText());
//    }
}
