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
public class LoginController {
    public static class InputInfo {
        private String user_id;
        private String password;

        // 아이디 setter
        public void setuser_id(String user_id) {
            this.user_id = user_id;
        }

        // 아이디 getter
        public String getuser_id() {
            return this.user_id;
        }

        // 패스워드 setter
        public void setPassword(String password) {
            this.password = password;
        }

        // 패스워드 getter
        public String getPassword() {
            return this.password;
        }
    }

    final UserInfoRepository userInfoRepository;

    @PostMapping("/login")
    public Boolean getRegister(@RequestBody InputInfo inputInfo) {
        String inputId = inputInfo.getuser_id(); // 입력받은 아이디
        String inputPw = inputInfo.getPassword(); // 입력받은 패스워드
        UserInfo userInfo = userInfoRepository.findByuserId(inputId);

        System.out.println(inputPw.equals(userInfo.getPassword()));
        if (userInfo != null && inputPw.equals(userInfo.getPassword())) { // 테이블에 id 존재하면
            return true;
        }
        return false;

    }
}