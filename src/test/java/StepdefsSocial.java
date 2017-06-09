import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by MargaridaWeber on 01/06/2017.
 */
public class StepdefsSocial {

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

    @Given("^the speaker has socialNetwork$")
    public void theSpeakerHasSocialNetwork() throws Throwable {
        driver.get("http://dupla-capicua-dupla-capicua.7e14.starter-us-west-2.openshiftapps.com/");
    }

    @When("^the user clicks on the Instagram button of \"([^\"]*)\"$")
    public void theUserClicksOnTheInstagramButtonOf(String member) throws Throwable {
        if(member.equals("Margarida")) {
            driver.findElement(By.cssSelector("i.fa.fa-instagram")).click();
        }
        else if(member.equals("Joao")) {
            driver.findElement(By.cssSelector("i.fa.fa-instagram")).click();
        }
        else if(member.equals("Monica")) {
            driver.findElement(By.cssSelector("i.fa.fa-instagram")).click();
        }
    }

    @When("^the user clicks on  the Facebook button of \"([^\"]*)\"$")
    public void theUserClicksOnTheFacebookButtonOf(String member) throws Throwable {
        if(member.equals("Margarida")) {
            driver.findElement(By.cssSelector("i.fa.fa-facebook")).click();
        }
        else if(member.equals("Joao")) {
            driver.findElement(By.cssSelector("i.fa.fa-facebook")).click();
        }
        else if(member.equals("Monica")) {
            driver.findElement(By.cssSelector("i.fa.fa-facebook")).click();
        }
    }

    @Then("^the system should show speaker \"([^\"]*)\" page of \"([^\"]*)\"$")
    public void theSystemShouldShowSpeakerPageOf(String instagram, String member) throws Throwable {
        if(member.equals("Margarida")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li[3]/a[@href='" + instagram + "']")));
        }
        else if(member.equals("Joao")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li[3]/a[@href='" + instagram + "']")));
        }
        else if(member.equals("Monica")) {

        }
    }


    @Then("^the website should show speaker \"([^\"]*)\" page of \"([^\"]*)\"$")
    public void theWebsiteShouldShowSpeakerPageOf(String facebook, String member) throws Throwable {
        if(member.equals("Margarida")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li/a[@href='" + facebook + "']")));
        }
        else if(member.equals("Joao")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li/a[@href='" + facebook + "']")));
        }
        else if(member.equals("Monica")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li/a[@href='" + facebook + "']")));
        }
    }

    @When("^the user clicks on the LinkedIn button of \"([^\"]*)\"$")
    public void theUserClicksOnTheLinkedInButtonOf(String member) throws Throwable {
        if(member.equals("Margarida")) {
            driver.findElement(By.cssSelector("i.fa.fa-linkedin")).click();
        }
        else if(member.equals("Joao")) {
            driver.findElement(By.cssSelector("i.fa.fa-linkedin")).click();
        }
        else if(member.equals("Monica")) {
            driver.findElement(By.cssSelector("i.fa.fa-linkedin")).click();
        }
    }

    @Then("^the system should show profile card \"([^\"]*)\" page of \"([^\"]*)\"$")
    public void theSystemShouldShowProfileCardPageOf(String linkedin, String member) throws Throwable {
        if(member.equals("Margarida")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li[2]/a[@href='" + linkedin + "']")));
        }
        else if(member.equals("Joao")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li/a[@href='" + linkedin + "']")));
        }
        else if(member.equals("Monica")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li/a[@href='" + linkedin + "']")));
        }

    }
}
