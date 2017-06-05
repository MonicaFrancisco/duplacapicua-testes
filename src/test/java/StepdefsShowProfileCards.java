import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * Created by Monica Francisco on 28/05/2017.
 */
public class StepdefsShowProfileCards {

    private static WebDriver driver;
    private static WebDriverWait wait;
    private static String webSiteUrl;

    static {
        webSiteUrl = "http://stagingapp-duplacapicua.1d35.starter-us-east-1.openshiftapps.com/";
        Logger.getLogger("").setLevel(Level.OFF);
        if (driver == null) {
            driver = Driver.INSTANCE.getDriver();
        }
        if(wait == null){
            wait = new WebDriverWait(driver, 5);
        }
    }

    @Given("^Im into de website$")
    public void imIntoDeWebsite() throws Throwable {
        driver.get(webSiteUrl);
    }

    @When("^the page finished load$")
    public void thePageFinishedLoad() throws Throwable {

        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/h4")));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/p")));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/b/p")));
    }

    @Then("^the website shows the profile cards of each member with \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
    public void theWebsiteShowsTheProfileCardsOfEachMemberWithAnd(String photo, String name, String job, String workplace, String linkedIn, String facebook, String instagram) throws Throwable {

        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/a/img[@src='"+photo+"']")));
        assertEquals(name, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div/h4")).getText());
        assertEquals(job, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div/p")).getText());
        assertEquals(workplace, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div/b/p")).getText());
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li/a[@href='"+facebook+"']")));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li[2]/a[@href='"+linkedIn+"']")));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li[3]/a[@href='"+instagram+"']")));
    }

    @After
    public void tearDown() {
        driver.close();
    }
}
