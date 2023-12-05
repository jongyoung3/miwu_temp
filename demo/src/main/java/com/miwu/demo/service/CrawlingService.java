package com.miwu.demo.service;

import java.io.IOException;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.ObjectUtils.Null;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import org.springframework.stereotype.Service;

@Service
public class CrawlingService {

    public static final String WEB_DRIVER_ID = "webdriver.chrome.driver";
    public static final String WEB_DRIVER_PATH = "/Users/rla/Desktop/chromedriver-win64/chromedriver-win64/chromedriver.exe";

    public List<String> getImg(String imgName) throws IOException {
        // 크롬 드라이버 설정
        System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);

        // 크롬 옵션 설정
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        options.addArguments("--no-sandbox");
        WebDriver driver = new ChromeDriver(options);

        // 구석구석 검색 페이지 접속
        driver.get("https://korean.visitkorea.or.kr/search/search_list.do?keyword=" + imgName);

        String tagInfo;
        try {
            tagInfo = driver.findElement(By.xpath("//*[@id=\"s_attraction\"]/div[1]/ul/li[1]/div[1]/div[2]")).getText();
        } catch (Exception e) {
            tagInfo = "";
        }

        // 구글 이미지
        String baseUrl = "https://www.google.com/search?q=" + imgName
                + "&tbm=isch&tbs=isz:l&rlz=1C5CHFA_enKR970KR970&hl=ko&sa=X&ved=0CAIQpwVqFwoTCPiMtuqVoIIDFQAAAAAdAAAAABAD&biw=1288&bih=664";

        Document rawData = Jsoup.connect(baseUrl).get();
        Elements imgs = rawData.select("img[class=rg_i Q4LuWd]"); // 구글 class id

        List<String> imageUrls = new ArrayList<>();

        if (imgs.size() >= 5) {
            int page = 0;
            for (Element img : imgs) {
                String url = img.attr("abs:data-src"); // 구글

                if (url != "" && url != null) {
                    page++;
                    imageUrls.add(url);
                }
                if (page == 3)
                    break;
            }
        }
        imageUrls.add(tagInfo);
        System.out.println(imgName + " 이미지 검색 완료");
        driver.close();
        return imageUrls;
    }
}
