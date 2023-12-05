package com.miwu.demo.repository;

// 엔티티: 데이터베이스 테이블과 매핑되는 클래스
import com.miwu.demo.entity.UserInfo;
// 간단히 DB에 Create/Read/Update/Delete 쿼리 수행을 가능토록 함
import org.springframework.data.jpa.repository.JpaRepository;
// 리스트
import java.util.List;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
    @Override
    List<UserInfo> findAll(); // 조건없이 테이블의 전체 레코드 조회

    boolean existsByuserId(String userId); // 유저 아이디로 유저 존재 여부 확인

    boolean existsBypassword(String password); // 패스워드로 유저 존재 여부 확인

    UserInfo findByuserId(String userId); // 유저 아이디로 유저 조회

    UserInfo findBypassword(String password); // 패스워드로 유저 조회

    List<UserInfo> findByuserName(String userName);

    void deleteAllInBatch(); // 조건없이 테이블의 전체 레코드 삭제
}