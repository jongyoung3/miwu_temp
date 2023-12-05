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
@Table(name = "img")
@Entity
public class Img {
    // 기본키 id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // MySQL의 AUTO_INCREMENT를 사용
    private Long id;

    // 이미지 url
    @Column(name = "url1", nullable = false, length = 2083)
    private String url1;

    // 이미지 url
    @Column(name = "url2", nullable = false, length = 2083)
    private String url2;

    // 이미지 url
    @Column(name = "url3", nullable = false, length = 2083)
    private String url3;

    // 관광지명
    @Column(name = "dest_name", nullable = false, length = 45)
    private String destName;

    // 광역시/도
    @Column(name = "adress1", nullable = false, length = 45)
    private String adress1;

    // 중분류 카테고리
    @Column(name = "m_category", nullable = false, length = 200)
    private String mcategory;

    // 관광지 tag
    @Column(name = "tag", nullable = false, length = 2083)
    private String tag;

    // 생성자
    public Img(String adress1, String mcategory, String destName, String url1, String url2, String url3, String tag) {
        this.adress1 = adress1;
        this.mcategory = mcategory;
        this.destName = destName;
        this.url1 = url1;
        this.url2 = url2;
        this.url3 = url3;
        this.tag = tag;
    }
}
