package com.miwu.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.miwu.demo.entity.Destination;
import com.miwu.demo.entity.Img;
import com.miwu.demo.entity.Restaurant;
import com.miwu.demo.repository.DestinationRepository;
import com.miwu.demo.repository.ImgRepository;
import com.miwu.demo.repository.RestaurantRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor // 초기화 되지않은 final 변수에 대해 생성자를 생성
@RestController
public class SearchController {
    final DestinationRepository destinationRepository;
    final ImgRepository imgRepository;
    final RestaurantRepository restaurantRepository;

    @GetMapping("/search")
    public List<Map<String, String>> getSearchInfo(@RequestParam String keyword, @RequestParam String searchType) {
        String searchKeyword = "%" + keyword + "%";

        List<Map<String, String>> result = new ArrayList<>();

        if ("restaurant".equals(searchType)) {
            result.addAll(getSearchInfoRestDB(searchKeyword));
        } else if ("all".equals(searchType)) {
            result.addAll(getSearchInfoImgDB(searchKeyword, searchType));
            result.addAll(getSearchInfoRestDB(searchKeyword));
        } else {
            result.addAll(getSearchInfoImgDB(searchKeyword, searchType));
        }
        
        return result;
    }

    public List<Map<String, String>> getSearchInfoImgDB(String keyword, String searchType) {
        String searchKeyword = "%" + keyword + "%";
        List<Img> tmp = new ArrayList<>();
        List<Destination> tmp2 = new ArrayList<>();
        if("region".equals(searchType)) {
            tmp= imgRepository.findByAdress1Like(searchKeyword);
        } else if ("destination".equals(searchType)) {
            tmp= imgRepository.findByDestNameLike(searchKeyword);
        } else if("tag".equals(searchType)) {
            tmp= imgRepository.findByTagLike(searchKeyword);
        } else if("all".equals(searchType)){
            tmp= imgRepository.findBySearchValue(keyword);
        }
        
        List<Map<String, String>> result = new ArrayList<>();

        for (int i = 0; i < tmp.size(); i++) {
            Map<String, String> imgData = new HashMap<>();
            imgData.put("roadAdress", tmp.get(i).getAdress1());
            imgData.put("destName", tmp.get(i).getDestName());
            imgData.put("tag", tmp.get(i).getTag());
            imgData.put("url1", tmp.get(i).getUrl1());
            imgData.put("url2", tmp.get(i).getUrl2());
            imgData.put("url3", tmp.get(i).getUrl3());
            imgData.put("roadAdress", destinationRepository.findByDestName(tmp.get(i).getDestName()).get(0).getRoadAdress());
            result.add(imgData);
        }

        return result;
    }

    public List<Map<String, String>> getSearchInfoRestDB(String searchKeyword) {
        List<Restaurant> tmp = restaurantRepository.findBySearchValue(searchKeyword);

        List<Map<String, String>> result = new ArrayList<>();

        for (int i = 0; i < tmp.size(); i++) {

            Map<String, String> restData = new HashMap<>();
            restData.put("roadAdress", tmp.get(i).getAdress1());
            restData.put("restName", tmp.get(i).getRestName());
            restData.put("restAdress", tmp.get(i).getRestAdress());
            restData.put("restCategory", tmp.get(i).getRestCategory());
            restData.put("r_imgUrl", tmp.get(i).getR_imgUrl());
            result.add(restData);
        }

        return result;
    }
}