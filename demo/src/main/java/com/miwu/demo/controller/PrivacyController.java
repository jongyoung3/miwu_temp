package com.miwu.demo.controller;

// RequiredArgsConstructor
import lombok.RequiredArgsConstructor;
// RestController
import org.springframework.web.bind.annotation.RestController;
// PostMapping
import org.springframework.web.bind.annotation.PostMapping;
// RequestBody
import org.springframework.web.bind.annotation.RequestBody;

import com.miwu.demo.entity.UserInfo;
import com.miwu.demo.repository.UserInfoRepository;

import java.util.ArrayList;

@RequiredArgsConstructor // 초기화 되지않은 final 변수에 대해 생성자를 생성
@RestController
public class PrivacyController {
    public static class InputInfo1 {
        private String user_id;

        // 아이디 getter
        public String getuser_id() {
            return this.user_id;
        }
    }

    // public static class InputInfo2 {
    // private String queryId;
    // PRIVATE String
    // private public String getquery_id() {
    // return this.query_id;
    // }

    // }

    final UserInfoRepository userInfoRepository;

    @PostMapping("/privacy_read")
    public ArrayList<String> getUserInfo(@RequestBody InputInfo1 inputInfo) {
        String userId = inputInfo.getuser_id(); // 입력받은 아이디
        ArrayList<String> info = new ArrayList<String>();
        UserInfo userInfo = userInfoRepository.findByuserId(userId); // 아이디를 통해서 유저 검색

        info.add(userInfo.getUserId()); // 유저 아이디 추가
        System.out.println(userInfo.getUserId());

        info.add(userInfo.getPassword()); // 유저 패스워드 추가
        System.out.println(userInfo.getPassword());

        info.add(userInfo.getUserName()); // 유저 이름 추가
        System.out.println(userInfo.getUserName());

        info.add(userInfo.getQuestion()); // 유저 비밀번호 힌트 질문 추가
        System.out.println(userInfo.getQuestion());

        info.add(userInfo.getAnswer()); // 유저 비밀번호 힌트 대답 추가
        System.out.println(userInfo.getAnswer());

        System.out.println(info);
        return info;
    }

    // @PostMapping("/privacy_update")
    // public ArrayList<String> getUserInfo(@RequestBody InputInfo2 inputInfo) {
    // String userId = inputInfo.getuser_id(); // 입력받은 아이디
    // ArrayList<String> info = new ArrayList<String>();
    // UserInfo userInfo = userInfoRepository.findByuserId(userId); // 아이디를 통해서 유저
    // 검색

    // info.add(userInfo.getUserId()); // 유저 아이디 추가
    // System.out.println(userInfo.getUserId());

    // info.add(userInfo.getPassword()); // 유저 패스워드 추가
    // System.out.println(userInfo.getPassword());

    // info.add(userInfo.getUserName()); // 유저 이름 추가
    // System.out.println(userInfo.getUserName());

    // info.add(userInfo.getQuestion()); // 유저 비밀번호 힌트 질문 추가
    // System.out.println(userInfo.getQuestion());

    // info.add(userInfo.getAnswer()); // 유저 비밀번호 힌트 대답 추가
    // System.out.println(userInfo.getAnswer());

    // System.out.println(info);
    // return info;
    // }
}