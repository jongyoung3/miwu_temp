package com.miwu.demo.config;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // localhost:8000이 localhost:3000에게 get, post할 수 있는 권한 부여
        registry.addMapping("/**").allowedOrigins("http://localhost:3000/*").allowedMethods("GET", "POST");
    }
}