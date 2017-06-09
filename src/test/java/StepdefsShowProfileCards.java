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

import static junit.framework.TestCase.assertEquals;


public class StepdefsShowProfileCards {

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

    @Given("^Im into de website$")
    public void imIntoDeWebsite() throws Throwable {
        driver.get("http://dupla-capicua-dupla-capicua.7e14.starter-us-west-2.openshiftapps.com/");
    }

    @When("^the page finished load$")
    public void thePageFinishedLoad() throws Throwable {
       wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/h4")));
       wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div[2]/h4")));
       wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div[3]/h4")));
    }

    @Then("^the website shows the profile cards of each \"([^\"]*)\" with \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
    public void theWebsiteShowsTheProfileCardsOfEachMemberWithAnd(String member, String photo, String name, String job, String workplace, String linkedIn, String facebook, String instagram) throws Throwable {

        if(member.equals("Margarida")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/a/img[@src='" + photo + "']")));
            assertEquals(name, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div/h4")).getText());
            assertEquals(job, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div/p")).getText());
            assertEquals(workplace, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div/b/p")).getText());
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li/a[@href='" + facebook + "']")));
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li[2]/a[@href='" + linkedIn + "']")));
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div/ul/li[3]/a[@href='" + instagram + "']")));
        } else if(member.equals("Joao")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div[2]/a/img[@src='" + photo + "']")));
            assertEquals(name, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div[2]/h4")).getText());
            assertEquals(job, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div[2]/p")).getText());
            assertEquals(workplace, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div[2]/b/p")).getText());
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div[2]/ul/li/a[@href='" + facebook + "']")));
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div[2]/ul/li[2]/a[@href='" + linkedIn + "']")));
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div[2]/ul/li[3]/a[@href='" + instagram + "']")));
        }
        else if(member.equals("Monica")){
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div[3]/a/img[@src='" + photo + "']")));
            assertEquals(name, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div[3]/h4")).getText());
            assertEquals(job, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div[3]/p")).getText());
            assertEquals(workplace, driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div[3]/b/p")).getText());
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div[3]/ul/li/a[@href='" + facebook + "']")));
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div[3]/ul/li[2]/a[@href='" + linkedIn + "']")));
            //wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[@id='team']/div/div[3]/div[3]/ul/li[3]/a[@href='" + instagram + "']")));

        }

    }


    @Then("^the system must hace a disable \"([^\"]*)\" link with the color grey of \"([^\"]*)\"$")
    public void theSystemMustHaceADisableLinkWithTheColorGreyOf(String status, String member) throws Throwable {
        int position = 0;
        if(member.toLowerCase().equals("monica")){
            position = 3;
        }
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='team']/div/div[3]/div["+position+"]/ul/li[3]/a[@class='"+status+"']")));
    }
}
