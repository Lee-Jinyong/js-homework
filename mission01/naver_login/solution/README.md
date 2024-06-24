# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.


---
### JavaScript 간단 설명
##### 파일 바로가기 [main.js](js/main.js "mission00-2.js")

&nbsp;
##### validationDebounce 함수
- 첫번째 인수로 콜백 함수(본 과제에서는 정규표현식을 사용한 validation 함수)를 넣어준다.
- 두번째 인수로 validation을 할 요소를 넣어준다.
- 세번째 인수로 디바운스 함수의 시간을 넣어준다.

##### addEventListener - input 태그
- input 태그에 키 입력 이벤트 발생 시 validationDebounce 함수 실행

##### userValidation 함수
- 첫번째 인수로 사용자 ID 요소를 넣어준다.
- 두번째 인수로 사용자 비밀번호 요소를 넣어준다.
- 등록된 사용자 ID와 비밀번호와 일치하면 welcome 페이지로 이동
- 두 항목 중 입력이 안된 항목이 있으면 알림창
- 두 항목 중 일치하지 않은 값이 있으면 알림창

##### addEventListener - form 태그
- 원래는 button 태그에 click 이벤트를 이용하려 했으나, welcome 페이지로 넘어가지 않는 문제 발생
- 검색 결과 서버와 연동되지 않은 상태에서 서버에 요청을 해서 생기는 문제임을 발견
- form 태그에 submit 이벤트가 발생했을 때 userValidation 함수 실행
- 단, submit의 기본 동작은 무시(preventDefault 메서드 사용)