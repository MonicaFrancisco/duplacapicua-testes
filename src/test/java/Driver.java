import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

/**
 * Created by Monica Francisco on 28/05/2017.
 */
public enum Driver {
    INSTANCE;

    private WebDriver driver;

    private Driver(){
        driver = new HtmlUnitDriver();
    }

    public WebDriver getDriver() {
        return driver;
    }
}
