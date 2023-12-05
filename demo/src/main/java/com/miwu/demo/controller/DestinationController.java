package com.miwu.demo.controller;

// RequiredArgsConstructor
import lombok.RequiredArgsConstructor;
// RestController
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
// GetMapping
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;
import java.io.File;
import java.io.IOException;
import com.opencsv.exceptions.CsvValidationException;

// CsvService 
import com.miwu.demo.service.CsvService;

// CrawlingService
import com.miwu.demo.service.CrawlingService;

// Destination Entity
import com.miwu.demo.entity.Destination;
// Img Entity
import com.miwu.demo.entity.Img;

// Destination Repository
import com.miwu.demo.repository.DestinationRepository;
import com.miwu.demo.repository.ImgRepository;

// 
import org.springframework.core.io.ClassPathResource;

@RequiredArgsConstructor // 초기화 되지않은 final 변수에 대해 생성자를 생성
@RestController
public class DestinationController {
    final DestinationRepository destinationRepository;
    final ImgRepository imgRepository;

    @Autowired
    private CsvService csvService;

    @Autowired
    private CrawlingService crawlingService;

    @GetMapping("/destination/{location}")
    public List<Destination> listDestination(@PathVariable("location") String location)
            throws CsvValidationException, IOException {
        // destinationRepository.deleteAllInBatch();
        // imgRepository.deleteAllInBatch();
        String csvPath = "./demo/csv/";

        String csvname = csvPath + location + ".csv";

        ArrayList<ArrayList<String>> getCsvInfo = csvService.getCsv(csvname);

        for (int i = 0; i < getCsvInfo.size(); i++) {
            Destination dst = new Destination(
                    getCsvInfo.get(i).get(0).toString(),
                    getCsvInfo.get(i).get(1).toString(),
                    getCsvInfo.get(i).get(2).toString(),
                    getCsvInfo.get(i).get(3).toString(),
                    getCsvInfo.get(i).get(4).toString(),
                    getCsvInfo.get(i).get(5).toString(),
                    getCsvInfo.get(i).get(6).toString(),
                    getCsvInfo.get(i).get(7).toString());

            String adrtmpDstNm = getCsvInfo.get(i).get(1).toString();
            String tmpDstNm = getCsvInfo.get(i).get(3).toString();
            String catDst = getCsvInfo.get(i).get(5).toString();
            List<String> urlsInfo = crawlingService.getImg(tmpDstNm);
            if (urlsInfo.size() >= 4) {
                System.out.println("이미지 개수: " + urlsInfo.size());
                Img imgUrl = new Img(adrtmpDstNm,
                        catDst,
                        tmpDstNm,
                        urlsInfo.get(0),
                        urlsInfo.get(1),
                        urlsInfo.get(2),
                        urlsInfo.get(3));
                dst.addImg(imgUrl);
            }

            destinationRepository.save(dst);
        }
        return destinationRepository.findAll();
    }

    // 지역별 관광지 상위 10개 리턴과 상세페이지의 지역별 관광지 모두 리턴 만들기
    // 상세페이지의 지역별 관광지 모두 리턴
    @GetMapping("/img/detail/{location}")
    public List<Img> showDestination(@PathVariable("location") String location)
            throws IOException {
        List<Img> img_detail = imgRepository.findByAdress1(location);

        // 진행과정 확인용
        System.out.println(img_detail);

        return img_detail;
    }

    // 지역별 관광지 상위 10개 리턴
    @GetMapping("/img/top10/{location}")
    public List<Img> showTopDestination(@PathVariable("location") String location)
            throws IOException {
        List<Img> tmp_des_top = imgRepository.findByAdress1(location);
        List<Img> top10List = new ArrayList<Img>();

        for (int i = 0; i < 10; i++) {
            top10List.add(tmp_des_top.get(i));
        }

        // 진행과정 확인용
        System.out.println(top10List);

        return top10List;
    }

    // 카테고리 별로 3개씩 관광지 데이터 다 보내기(전국.csv에서 읽어오는 것으로), 카테고리, 관광지 명만
    @GetMapping("/img/categorytop3")
    public List<Img> categorytop3Destination()
            throws IOException {

        List<Img> top3List = new ArrayList<Img>();

        String categoryList[] = {"문화관광", "자연관광", "역사관광", "레저스포츠"};
        List<Img> tmp_des_top = new ArrayList<Img>();
        for(int i=0; i<4; i++){
            tmp_des_top=imgRepository.findByMcategory(categoryList[i]);

            if(tmp_des_top.size()>=3){ // 카테고리 별로 가져온 개수가 3개이상이어야 함
                for (int k = 0; k < 3; k++) {
                    top3List.add(tmp_des_top.get(k));
                }
            }
        }
        // 진행과정 확인용
        System.out.println(top3List);

        return top3List;
    }
}
