package com.miwu.demo.service;

import java.io.IOException;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.stereotype.Service;

/*해야할 일
 1. 이름, 주소 등 가가 동적할당 되있는데 이거 리턴할 때 하나만 리턴할 수 있어서 방법 찾아야함
 ㄴ 방법은 찾아서 해놓음
 */
@Service
public class RestaurantService {

    public static final String baseUrl = "https://m.map.naver.com/search2/search.naver?query=";
    public static final String WEB_DRIVER_ID = "webdriver.chrome.driver";
    public static final String WEB_DRIVER_PATH = "/Users/rla/Desktop/chromedriver-win64/chromedriver-win64/chromedriver.exe";
    public List<String> getRestaurant(String restaurantName) throws IOException {
        // 크롬 드라이버 설정
        System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);

        // 크롬 옵션 설정
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        options.addArguments("--no-sandbox");

        options.setPageLoadStrategy(PageLoadStrategy.NORMAL);

        // 보안 설정추가
        options.addArguments("--remote-allow-origins=*");

        WebDriver driver = new ChromeDriver(options);

        // 네이버 모바일 지도 검색 페이지 접속
        driver.get(baseUrl + restaurantName + "%20맛집");

        // 끝까지 스크롤 다운
        JavascriptExecutor jse = (JavascriptExecutor) driver;

        String name; // 음식점 이름
        String roadAdress;
        String adress_last; // 주소
        String category; // 분류
        String imgUrl; // 이미지

        // 크롤링한 데이터 담아두는 배열
        // List<String> restName = new ArrayList<>();
        // List<String> restroadAdress = new ArrayList<>();
        // List<String> restCategory = new ArrayList<>();
        // List<String> r_imgUrl = new ArrayList<>();
        List<String> resList = new ArrayList<>();

        // 음식점 50개 크롤링
        for (int i = 1; i <= 50; i++) {
            try {
                name = driver.findElement(By.xpath("//*[@id=\"ct\"]/div[2]/ul/li[" + i + "]/div[1]/a[2]/div/strong"))
                        .getText();
                roadAdress = driver.findElement(By.xpath("//*[@id=\"ct\"]/div[2]/ul/li[" + i + "]/div[1]/div[1]/div/a"))
                        .getText();
                adress_last = roadAdress.substring(5); // '주소보기' 문자열 지움
                category = driver.findElement(By.xpath("//*[@id=\"ct\"]/div[2]/ul/li[" + i + "]/div[1]/a[2]/div/em"))
                        .getText();
                imgUrl = driver.findElement(By.xpath("//*[@id=\"ct\"]/div[2]/ul/li[" + i + "]/div[1]/a[1]/img"))
                        .getAttribute("src");

                // 끝까지 스크롤 다운
                jse.executeScript("window.scrollBy(0, document.body.scrollHeight)");

                // restName.add(name);
                // restroadAdress.add(adress_last);
                // restCategory.add(category);
                // r_imgUrl.add(imgUrl);
                resList.add(name);
                resList.add(adress_last);
                resList.add(category);
                resList.add(imgUrl);

            } catch (Exception e) {
                name = "";
                roadAdress = "";
                category = "";
                imgUrl = "";
            }
        }

        // Test용
        // for(int i=0;i<resList.size(); i++){
        // System.out.println(resList.get(i));
        // }
        // for(int i=0;i<resList.size(); i=i+4){
        // System.out.println(resList.get(i));
        // System.out.println(resList.get(i+1));
        // System.out.println(resList.get(i+2));
        // System.out.println(resList.get(i+3));
        // if((i+4)==resList.size()){ // 배열범위를 넘어서는 것을 방지
        // break;
        // }
        // }
        System.out.println(restaurantName + "맛집 크롤링 완료");
        driver.close();

        return resList;
    }

}
