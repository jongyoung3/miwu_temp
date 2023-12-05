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
import java.util.List;

@RequiredArgsConstructor // 초기화 되지않은 final 변수에 대해 생성자를 생성
@RestController
public class FindAccountController {
    public static class InputInfo1 {
        private String user_name;

        // 아이디 getter
        public String getuser_name() {
            return this.user_name;
        }
    }

    public static class InputInfo2 {
        private String userId;
        private String queryId;
        private String answer;

        // 아이디 getter
        public String getuserId() {
            return this.userId;
        }

        // 비밀번호 힌트 질문 getter
        public String getqueryId() {
            return this.queryId;
        }

        // 비밀번호 힌트 대답 getter
        public String getanswer() {
            return this.answer;
        }
    }

    final UserInfoRepository userInfoRepository;

    @PostMapping("/find_id")
    public ArrayList<String> getId(@RequestBody InputInfo1 inputInfo) {
        String inputName = inputInfo.getuser_name(); // 입력받은 이름
        List<UserInfo> userInfo = userInfoRepository.findByuserName(inputName);

        ArrayList<String> idInfo = new ArrayList<String>();
        if (userInfo != null) {
            for (int i = 0; i < userInfo.size(); i++) {
                idInfo.add(userInfo.get(i).getUserId());
            }
        }
        return idInfo;
    }

    @PostMapping("/find_pw")
    public String getPassword(@RequestBody InputInfo2 inputInfo) {
        String inputId = inputInfo.getuserId(); // 입력받은 이름
        String inputQueryId = inputInfo.getqueryId(); // 입력받은 비밀번호 힌트 질문 (아이디)
        String inputAnswer = inputInfo.getanswer(); // 입력받은 비밀번호 힌트 대답

        UserInfo userInfo = userInfoRepository.findByuserId(inputId);
        if (userInfo != null && inputQueryId.equals(userInfo.getQuestion())
                && inputAnswer.equals(userInfo.getAnswer())) { // 테이블에 id 존재하면
            return userInfo.getPassword();
        }
        return "";
    }
}