const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 형식 확인(콜백으로 넣을 것) - 디바운스 함수
function validationDebounce(callback, elem, limit=500) {
  
  let timeout;
  
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if(!callback(elem.value)) {
        elem.classList.add('is--invalid');
      } else {
        elem.classList.remove('is--invalid');
      }
    }, limit);
  }
}

// email 형식 확인, 이벤트 바인딩
const userEmailInput = document.querySelector('#userEmail');
userEmailInput.addEventListener('input', validationDebounce(emailReg, userEmailInput));

// Password 형식 확인, 이벤트 바인딩
const userPwdInput = document.querySelector('#userPassword');
userPwdInput.addEventListener('input', validationDebounce(pwReg, userPwdInput));

// 로그인 버튼 동작
const loginForm = document.querySelector('.login-form');

function userValidation(userID, userPwd) {
  if ((userID.value === user.id) && (userPwd.value === user.pw)) {
    window.location.href = 'welcome.html';
  }else if(userID.value.length === 0 || userPwd.value.length === 0) {
    alert('아이디와 비밀번호는 필수 입력 값입니다.');
  } else {
    alert('존재하지 않는 회원이거나, 올바르지 않은 비밀번호 입니다.');
  }
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  userValidation(userEmailInput, userPwdInput);
});