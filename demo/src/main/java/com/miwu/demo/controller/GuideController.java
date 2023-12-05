package com.miwu.demo.controller;

import org.springframework.web.bind.annotation.RestController;

// java 데이터 타입
import java.util.ArrayList; // 배열
import java.util.Map; // 딕셔너리와 유사한 맵
import java.util.HashMap; // 맵을 상속받는 데이터 타입

import org.springframework.web.bind.annotation.GetMapping; // 링크 연결
import org.springframework.web.bind.annotation.PathVariable;

import com.plexpt.chatgpt.ChatGPT; // chatGPT for java API

// chatGPT 관련 기능 수행 클래스
class AnswerService {
    String location;

    AnswerService(String location) {
        this.location = location;
    }

    // 질문 요청
    public String requestAnswer() {
        ChatGPT chatGPT = ChatGPT.builder()
                .apiKey("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")
                .build()
                .init();

        String message = this.location + " " + "여행지 추천해줘"; // 질문
        String answer = chatGPT.chat(message); // 대답
        return answer;
    }
}

@RestController
public class GuideController {
    @GetMapping("/guide/{location}")
    // PathVariable: url에 있는 location(서울, 강릉) 값을 가져옴

    public ArrayList<Map<String, String>> getAnswer(@PathVariable("location") String location) {
        AnswerService answerService = new AnswerService(location);
        String answer = answerService.requestAnswer();
        String[] strData = answer.split("[1-9]\\. | 이 외에도");
        ArrayList<Map<String, String>> spotInfoList = new ArrayList<>();

        for (int i = 1; i < strData.length - 1; i++) {
            String[] spotData = strData[i].split(": ");
            HashMap<String, String> spotInfo = new HashMap<>();

            spotInfo.put("name", spotData[0]);
            spotInfo.put("summary", spotData[1]);

            spotInfoList.add(spotInfo);
        }
        return spotInfoList;
    }
}