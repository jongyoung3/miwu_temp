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
import jakarta.persistence.FetchType;
import jakarta.persistence.Id; // 엔터티의 기본 키를 지정
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapKey;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GeneratedValue; // 기본 키 값에 대한 생성자 제공
import jakarta.persistence.GenerationType; // 기본 키 값에 대한 생성 타입

import java.util.List;
import java.util.ArrayList;
import java.util.Collection;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column; // 열 지정

// 여행지 테이블
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "destination")
@Entity
public class Destination {
    // 기본키 id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // MySQL의 AUTO_INCREMENT를 사용
    private Long id;

    // 순위
    @Column(name = "rank_number", nullable = false, length = 100)
    private String rank_number;

    // 광역시/도
    @Column(name = "adress1", nullable = false, length = 45)
    private String adress1;

    // 시/군/구
    @Column(name = "adress2", nullable = false, length = 45)
    private String adress2;

    // 관광지명 (not null, varchar(45))
    @Column(name = "dest_name", nullable = false, length = 45)
    private String destName;

    // 도로명주소
    @Column(name = "road_adress", nullable = false, length = 200)
    private String roadAdress;

    // 중분류 카테고리
    @Column(name = "m_category", nullable = false, length = 200)
    private String mcategory;

    // 소분류 카테고리
    @Column(name = "s_category", nullable = false, length = 200)
    private String s_category;

    // 검색건수
    @Column(name = "search_number", nullable = false, length = 200)
    private String search_number;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "dest_name", insertable = false, updatable = false)
    private List<Img> img;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "adress1", insertable = false, updatable = false)
    private List<Img> img_adress1;

    // 중분류 카테고리
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "m_category", insertable = false, updatable = false)
    private List<Img> img_mcategory;

    // 생성자
    public Destination(String rank_number, String adress1, String adress2,
            String destName, String roadAdress, String mcategory, String s_category, String search_number) {
        this.rank_number = rank_number;
        this.adress1 = adress1;
        this.adress2 = adress2;
        this.destName = destName;
        this.roadAdress = roadAdress;
        this.mcategory = mcategory;
        this.s_category = s_category;
        this.search_number = search_number;
    }

    public void setImg(List<Img> img) {
        this.img = img;
    }

    public void addImg(Img i) {
        if (img == null) {
            img = new ArrayList<Img>();
        }
        img.add(i);
    }
}
