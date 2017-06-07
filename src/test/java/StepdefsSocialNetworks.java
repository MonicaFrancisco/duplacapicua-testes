import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by joaofernandes on 07/06/17.
 */
public class StepdefsSocialNetworks {
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
}
