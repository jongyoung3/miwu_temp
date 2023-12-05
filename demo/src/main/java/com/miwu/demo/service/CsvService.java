package com.miwu.demo.service;

import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.stereotype.Service;

@Service
public class CsvService {
    public ArrayList<ArrayList<String>> getCsv(String csv_name) throws CsvValidationException, IOException {
        CSVReader csvReader = new CSVReader(new FileReader(csv_name, Charset.forName("utf-8")));
        String[] line;
        ArrayList<ArrayList<String>> csvInfo = new ArrayList<ArrayList<String>>();
        while ((line = csvReader.readNext()) != null) {
            ArrayList<String> tmp = new ArrayList<>();
            for (int i = 0; i < line.length; i++) {
                tmp.add(line[i]);
            }
            csvInfo.add(tmp);
        }

        // // 저장된 값 확인을 위한 출력
        // for (int i = 0; i < csvInfo.size(); i++) {
        // System.out.println(csvInfo.get(i));
        // }
        return csvInfo;
    }
}
