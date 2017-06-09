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


    @Given("^Im into de landing page$")
    public void imIntoDeLandingPage() throws Throwable {
        driver.get("http://dupla-capicua-dupla-capicua.7e14.starter-us-west-2.openshiftapps.com/");
    }

    @When("^the landing page finished load$")
    public void theLandingPageFinishedLoad() throws Throwable {

     //  wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h1")));
       // wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h3")));
        //wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//section[2]/div/div/div/h3")));
    }

    @When("^the user clicks on the profile card of \"([^\"]*)\"$")
    public void theUserClicksOnTheProfileCardOf(String member) throws Throwable {
        if(member.equals("Margarida")){
            driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div/a/img")).click();
        }
        else if(member.equals("Joao")){
            driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div[2]/a/img")).click();
        }
        else if(member.equals("Monica")){
            driver.findElement(By.xpath("//section[@id='team']/div/div[3]/div[3]/a/img")).click();
        }
    }

    //do inicial
    @Then("^the system should show a page of  \"([^\"]*)\" with details like \"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\" and \"([^\"]*)\"$")
    public void theSystemShouldShowAPageOfWithDetailsLikeAnd(String member, String photo, String name, String workplace, String job) throws Throwable {
        if(member.equals("Margarida")){
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//img[@src='"+photo+"']")));
        assertEquals(name, driver.findElement(By.xpath("//h1")).getText());
        assertEquals(job, driver.findElement(By.xpath("//h3")).getText());
        assertEquals(workplace, driver.findElement(By.xpath("//h3[2]")).getText());
        }
        else if(member.equals("Joao")){
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//img[@src='"+photo+"']")));
            assertEquals(name, driver.findElement(By.xpath("//h1")).getText());
            assertEquals(job, driver.findElement(By.xpath("//h3")).getText());
            assertEquals(workplace, driver.findElement(By.xpath("//h3[2]")).getText());

        }
        else if(member.equals("Monica")){
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//img[@src='"+photo+"']")));
            assertEquals(name, driver.findElement(By.xpath("//h1")).getText());
            assertEquals(job, driver.findElement(By.xpath("//h3")).getText());
            assertEquals(workplace, driver.findElement(By.xpath("//h3[2]")).getText());

        }
    }

    //SO Da parte da experiencia do trabalho
    @Then("^the system should show a page of  \"([^\"]*)\" with work details like \"([^\"]*)\" and \"([^\"]*)\"$")
    public void theSystemShouldShowAPageOfWithWorkDetailsLikeAnd(String member, String workplace, String job) throws Throwable {


        if(member.equals("Margarida")){
            assertEquals(workplace, driver.findElement(By.xpath("//div/div/div[2]")).getText());
            //assertEquals(job, driver.findElement(By.xpath("//section/div/div/div/h3")).getText());
        }else if(member.equals("Joao")){
            assertEquals(workplace, driver.findElement(By.xpath("//div/div/div[2]")).getText());
          //  assertEquals(job, driver.findElement(By.xpath("//section/div/div/div/h3")).getText());
        }
        else if(member.equals("Monica")){
            assertEquals(workplace, driver.findElement(By.xpath("//div/div/div[2]")).getText());
        //  assertEquals(job, driver.findElement(By.xpath("//section/div/div/div/h3")).getText());
        }


}

    //Escola
    @Then("^the system should show a page of  \"([^\"]*)\" with education details like \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void theSystemShouldShowAPageOfWithEducationDetailsLikeAnd(String member, String school, String course, String date) throws Throwable {
        if(member.equals("Margarida")){
            assertEquals(school, driver.findElement(By.xpath("//section[2]/div/div/div/h3")).getText());
            assertEquals(course, driver.findElement(By.xpath("//div/div/div/div[2]")).getText());
           // assertEquals(date, driver.findElement(By.xpath("//section[2]/div/div/div/div")).getText());
        }
        else if(member.equals("Joao")){
            assertEquals(school, driver.findElement(By.xpath("//section[2]/div/div/div/h3")).getText());
            assertEquals(course, driver.findElement(By.xpath("//div/div/div/div[2]")).getText());
            // assertEquals(date, driver.findElement(By.xpath("//section[2]/div/div/div/div")).getText());
        }
        else if(member.equals("Monica")){
            assertEquals(school, driver.findElement(By.xpath("//section[2]/div/div/div/h3")).getText());
            assertEquals(course, driver.findElement(By.xpath("//div/div/div/div[2]")).getText());
            // assertEquals(date, driver.findElement(By.xpath("//section[2]/div/div/div/div")).getText());
        }
    }

    @Then("^the system should show a page with \"([^\"]*)\" with skills details \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void theSystemShouldShowAPageWithWithSkillsDetailsAnd(String member, String projects, String certifications, String skills) throws Throwable {
        if(member.equals("Margarida")){
            assertEquals(projects, driver.findElement(By.xpath("//span[2]")).getText());
            assertEquals(certifications, driver.findElement(By.xpath("//div/p")).getText());

            String html = driver.findElement(By.xpath("//section[5]/div/div/h3")).getText();
            String js =  driver.findElement(By.xpath("//div[2]/h3")).getText();
            String php =  driver.findElement(By.xpath("//div[3]/h3")).getText();
            String ruby = driver.findElement(By.xpath("//div[4]/h3")).getText();
            String c = driver.findElement(By.xpath("//div[5]/h3")).getText();
            String andr = driver.findElement(By.xpath("//div[6]/h3")).getText();
            String sql = driver.findElement(By.xpath("//div[7]/h3")).getText();
            String swift = driver.findElement(By.xpath("//div[8]/h3")).getText();

            assertEquals(skills, html+" "+" "+js+" "+php+" "+ruby+" "+c+" "+andr+" "+sql+" "+swift);
        }
        else if(member.equals("Joao")){
            assertEquals(projects, driver.findElement(By.xpath("//span[2]")).getText());
            assertEquals(certifications, driver.findElement(By.xpath("//div/p")).getText());

            String html = driver.findElement(By.xpath("//section[5]/div/div/h3")).getText();
            String js =  driver.findElement(By.xpath("//div[2]/h3")).getText();
            String php =  driver.findElement(By.xpath("//div[3]/h3")).getText();
            String ruby = driver.findElement(By.xpath("//div[4]/h3")).getText();
            String c = driver.findElement(By.xpath("//div[5]/h3")).getText();
            String andr = driver.findElement(By.xpath("//div[6]/h3")).getText();
            String sql = driver.findElement(By.xpath("//div[7]/h3")).getText();
            String swift = driver.findElement(By.xpath("//div[8]/h3")).getText();

            assertEquals(skills, html+" "+" "+js+" "+php+" "+ruby+" "+c+" "+andr+" "+sql+" "+swift);
        }
        else if(member.equals("Monica")){
            assertEquals(projects, driver.findElement(By.xpath("//span[2]")).getText());
            assertEquals(certifications, driver.findElement(By.xpath("//div/p")).getText());

            String html = driver.findElement(By.xpath("//section[5]/div/div/h3")).getText();
            String js =  driver.findElement(By.xpath("//div[2]/h3")).getText();
            String php =  driver.findElement(By.xpath("//div[3]/h3")).getText();
            String ruby = driver.findElement(By.xpath("//div[4]/h3")).getText();
            String c = driver.findElement(By.xpath("//div[5]/h3")).getText();
            String andr = driver.findElement(By.xpath("//div[6]/h3")).getText();
            String sql = driver.findElement(By.xpath("//div[7]/h3")).getText();
            String swift = driver.findElement(By.xpath("//div[8]/h3")).getText();

            assertEquals(skills, html+" "+" "+js+" "+php+" "+ruby+" "+c+" "+andr+" "+sql+" "+swift);
        }
    }


}
