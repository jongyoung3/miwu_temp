package com.miwu.demo.controller;

// RequiredArgsConstructor
import lombok.RequiredArgsConstructor;

// RestController
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

// GetMapping
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.io.IOException;

// RestaurantService
import com.miwu.demo.service.RestaurantService;

// Restaurant Entity
import com.miwu.demo.entity.Restaurant;

// Restaurant Repository
import com.miwu.demo.repository.RestaurantRepository;

@RequiredArgsConstructor // 초기화 되지않은 final 변수에 대해 생성자를 생성
@RestController
public class RestaurantController {
    final RestaurantRepository restaurantRepository;

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/restaurant")
    public List<Restaurant> listRestaurants()
            throws IOException {

        restaurantRepository.deleteAllInBatch();
        // 지역명은 총 14개 있음
        String[] adress_list = { "부산광역시", "대구광역시", "대전광역시", "광주광역시", "경기도",
                "인천광역시", "세종특별자치시", "서울특별시", "울산광역시", "제주특별자치도", "강원특별자치도", "경상남도", "경상북도", "전라남도", "전라북도", "충청남도",
                "충청북도" };

        for (int k = 0; k < 17; k++) {

            // 맛집 정보(다른 테이블), r_tmpAdr은 지역명임(roadAdress)
            String r_tmpAdr = adress_list[k]; // adress_list 의 지역명 가져옴

            // r_tmpAdr 이 RestaurantService로 매개변수(restaurantName) 보내주는 역할
            List<String> resAdr = restaurantService.getRestaurant(r_tmpAdr);
            System.out.println(r_tmpAdr + " 맛집 개수: " + (resAdr.size() / 4));

            for (int i = 0; i < resAdr.size(); i = i + 4) {
                if (resAdr.size() != 0) {
                    Restaurant res = new Restaurant(r_tmpAdr,
                            resAdr.get(i).toString(),
                            resAdr.get(i + 1).toString(),
                            resAdr.get(i + 2).toString(),
                            resAdr.get(i + 3).toString());
                    // 저장?
                    restaurantRepository.save(res);
                }
                if ((i + 4) == resAdr.size()) { // 배열범위를 넘어서는 것을 방지
                    break;
                }

            }
        }
        return restaurantRepository.findAll();
    }

    // DB에서 특정 지역 맛집 보내기(+이미지 포함)
    @GetMapping("/restaurant/{roadAdress}")
    /*
     * "http://localhost:8080/restaurant/" 주소 다음에 roadAdress에 한글로 광역시/도 입력해주면 됩니다.
     * ex) http://localhost:8080/restaurant/부산광역시 라고 치면 DB에서 부산광역시 맛집 전부 리턴해 줍니다.
     * 그리고 한번에 전부 리턴 되는 데 res1.get(0) 이렇게 해보면 인데스 하나 당 맛집 1개 정보씩 볼수 있을 겁니다.
     */
    public List<Restaurant> showRestaurants(@PathVariable("roadAdress") String adress)
            throws IOException {
        List<Restaurant> res1 = restaurantRepository.findByAdress1(adress);

        // 진행과정 확인용
        System.out.println(res1);

        return res1;
    }
}
