import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchComponent = () => {
  const [keyword, setKeyword] = useState('');
  const [searchType, setSearchType] = useState('all');
  const [searchResult, setSearchResult] = useState([]);
  const [keywordValidity, setKeywordValidity] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryKeyword = queryParams.get('keyword');
    const querySearchType = queryParams.get('searchType');

    if (queryKeyword) {
      setKeyword(queryKeyword);
      setKeywordValidity(queryKeyword.trim().length >= 1);
    }

    if (querySearchType) {
      setSearchType(querySearchType);
    }

    if (queryKeyword && querySearchType) {
      handleSearch();
    }
  }, [location.search]);

  const updateKeyword = (event) => {
    const newKeyword = event.currentTarget.value;
    setKeyword(newKeyword);
    const isValid = newKeyword.trim().length >= 1;
    setKeywordValidity(isValid);
  };

  const updateSearchType = (event) => {
    setSearchType(event.currentTarget.value);
  };

  const handleSearch = () => {
    setLoading(true);

    const apiUrl = `/search?keyword=${encodeURIComponent(keyword)}&searchType=${encodeURIComponent(searchType)}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setSearchResult(response.data);
        setLoading(false);
        navigate(`/search?keyword=${encodeURIComponent(keyword)}&searchType=${encodeURIComponent(searchType)}`);
      })
      .catch((error) => {
        console.error('검색 에러:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (searchResult.length > 0) {
      navigate(`/search?keyword=${encodeURIComponent(keyword)}&searchType=${encodeURIComponent(searchType)}`);
    }
  }, [searchResult]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="search-container">
        <select value={searchType} onChange={updateSearchType}>
          <option value="all">전체</option>
          <option value="region">광역시도명</option>
          <option value="destination">관광지명</option>
          <option value="tag">태그</option>
          <option value="restaurant">식당</option>
        </select>
        <input
          type="text"
          placeholder="검색어 입력"
          value={keyword}
          onChange={updateKeyword}
          onKeyPress={handleKeyPress}
        />
        <button onClick={() => { handleSearch(); }} disabled={!keywordValidity || loading}>
          검색
        </button>
      </div>
      <div className="result-list">
        {loading && <p className="no-results">로딩 중...</p>}
        {!loading && searchResult.map((item, index) => (
          <div key={index} className="result-item">
            <div className="result-card-content">
              <div className="result-image-container">
              {(item.url1 || item.r_imgUrl) && <img src={item.url1 || item.r_imgUrl} alt={item.roadAdress} />}
            </div>
            </div>
            <div className="result-details">
              <p className="result-name">{item.destName || item.restName}</p>
              <p className="result-addr">{item.restAdress || item.roadAdress} </p>
              <p className="result-tag">{item.tag || item.restCategory}</p>
            </div>
            </div>
        ))}
        
        {!loading && searchResult.length === 0 && keywordValidity && <p className="no-results">검색 결과가 없습니다.</p>}
      </div>
    </div>
  );
};

export default SearchComponent;
