package com.miwu.demo.controller;

// RequiredArgsConstructor
import lombok.RequiredArgsConstructor;
// RestController
import org.springframework.web.bind.annotation.RestController;
// PostMapping
import org.springframework.web.bind.annotation.PostMapping;
// RequestBody
import org.springframework.web.bind.annotation.RequestBody;
// Restaurant Repository
import com.miwu.demo.repository.UserInfoRepository;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor // 초기화 되지않은 final 변수에 대해 생성자를 생성
@RestController
public class CheckIdDuplicateController {
    final UserInfoRepository userInfoRepository;

    @PostMapping("/checkIdDuplicate")
    public boolean checkId(@RequestBody String name) { 
        System.out.println(name);
        List<String> userInfoList = new ArrayList<>();
        String userInfo_temp[] = name.split("\\{|\\}|:|\\s+|,");

        for (int i = 0; i < userInfo_temp.length; i++) {
            userInfo_temp[i] = userInfo_temp[i].replaceAll("\\\"", "");
            if (i != 0 && i % 2 == 0) {
                userInfoList.add(userInfo_temp[i]);
            }
        }
        String inputId = userInfoList.get(0);
        if( userInfoRepository.existsByuserId(inputId) ) {  // 테이블에 id 존재하면
            return false;
        } else {    // 테이블에 id 존재하지 않으면
            return true;
        }
    }
}
