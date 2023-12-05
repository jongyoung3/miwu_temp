package com.miwu.demo.entity;

// lombok
import lombok.ToString; // toString() 생략
import lombok.Getter; // get 메소드 생성
import lombok.Builder; // builder 패턴 자동 생성
import lombok.AllArgsConstructor; // 모든 필드 값을 파라미터로 받는 생성자(id 제외)를 만듦
import lombok.NoArgsConstructor; // 파라미터가 없는 기본 생성자(id)를 생성
// jakarta
import jakarta.persistence.Table; // 테이블 지정
import jakarta.persistence.Entity; // 데이터베이스 테이블과 매핑되는 클래스
import jakarta.persistence.Id; // 엔터티의 기본 키를 지정
import jakarta.persistence.GeneratedValue; // 기본 키 값에 대한 생성자 제공
import jakarta.persistence.GenerationType; // 기본 키 값에 대한 생성 타입

import jakarta.persistence.Column; // 열 지정

// 여행지 테이블
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user_info")
@Entity
public class UserInfo {
    // 기본키 id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // MySQL의 AUTO_INCREMENT를 사용
    private Long id;

    // 유저 id
    @Column(name = "userId", nullable = false, length = 100)
    private String userId;

    // 유저 name
    @Column(name = "userName", nullable = false, length = 100)
    private String userName;

    // 패스워드
    @Column(name = "password", nullable = false, length = 100)
    private String password;

    // 힌트 질문
    @Column(name = "question", nullable = false, length = 100)
    private String question;

    // 힌트 답변
    @Column(name = "answer", nullable = false, length = 100)
    private String answer;

    // 생성자
    public UserInfo(String userId, String password, String userName, String question, String answer) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.question = question;
        this.answer = answer;
    }

    public String getUserId() {
        return userId;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getUserName() {
        return userName;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getQuestion() {
        return question;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getAnswer() {
        return answer;
    }
}
