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

@RequiredArgsConstructor // 초기화 되지않은 final 변수에 대해 생성자를 생성
@RestController
public class ChangeController {
    public static class InputInfo1 {
        private String user_id;
        private String password;

        // 아이디 getter
        public String getuser_id() {
            return this.user_id;
        }

        // 비밀번호 getter
        public String getpassword() {
            return this.password;
        }
    }

    public static class InputInfo2 {
        private String user_id;
        private String query_id;
        private String answer;

        // 아이디 getter
        public String getuser_id() {
            return this.user_id;
        }

        // 비밀번호 힌트 질문 id getter
        public String getquery_id() {
            return this.query_id;
        }

        // 비밀번호 힌트 대답 getter
        public String getanswer() {
            return this.answer;
        }

    }

    final UserInfoRepository userInfoRepository;

    @PostMapping("/change_pw")
    public boolean changePw(@RequestBody InputInfo1 inputInfo) {
        String userId = inputInfo.getuser_id(); // 유저 아이디
        System.out.println("유저 아이디: " + userId);

        String inputPw = inputInfo.getpassword(); // 패스워드
        System.out.println("유저 패스워드: " + inputPw);
        UserInfo userInfo = userInfoRepository.findByuserId(userId);
        if (userInfo != null) {
            userInfo.setPassword(inputPw);
            userInfoRepository.save(userInfo);
            System.out.println("비밀번호: " + userInfo.getPassword());
            return true;
        }
        return false;
    }

    @PostMapping("/change_hint")
    public boolean changeHint(@RequestBody InputInfo2 inputInfo) {
        String userId = inputInfo.getuser_id(); // 유저 아이디
        String inputQueryId = inputInfo.getquery_id(); // 비밀번호 힌트 질문 아이디
        String inputAnswer = inputInfo.getanswer(); // 비밀번호 힌트 대답
        UserInfo userInfo = userInfoRepository.findByuserId(userId);

        if (userInfo != null) {
            userInfo.setQuestion(inputQueryId);
            userInfo.setAnswer(inputAnswer);
            userInfoRepository.save(userInfo);
            System.out.println("비밀번호 질문 아이디: " + userInfo.getQuestion());
            System.out.println("비밀번호 질문 대답: " + userInfo.getAnswer());
            return true;
        }
        return false;
    }
}