# Front end develop class

codesandbox 원본 주소: https://codesandbox.io/s/edu-ministori/git06

- md 파일 문법

````

# ~ ##### : 제목

- : 목록

``` ~ ``` : 코드 블럭 (Backtick)

````

## 클라이언트 서버 모델

- 소프트웨어, IT 서비스 개발시 복잡한 네트워크 하드웨어를 배제한
  공급자, 사용자 양쪽 부분만 고려한 모델
- 클라이언트의 요청 (Request) 과 서버의 응답 (Response) 의 사이클을 통해 서비스와 데이터 처리 등의 기능이 실행됨

### Front end develop vs. Back end develop

- Front end, Back end 용어

  - Front: 사용자를 기준으로 사용자와 맞닿을 수 있는 화면 영역
  - Back: 사용자가 보지 못하고, 서버 상에서 데이터 처리, 기능 동작 등이 이루어지는 영역

- Front end develop: 사용자가 볼 수 있는 화면 개발

  - Web front end develop: 브라우저에서 처리되고 렌더링되는 언어를 사용해서 개발
  - 언어: HTML, CSS, Javacsript

- Back end develop: 사용자가 보지 못하는 영역에서 데이터 처리
  - Web back end develop: 서버에서 처리되는 언어를 사용해서 개발
  - 언어: Java, PHP, ASP, Python, Nodejs

## Naming 표기법

- Naming 하는 경우
  - Naming 만 보고서도 HTML, CSS, Javascript 요소를 구분할 수 있음
  - HTML, CSS: id, class
  - JS: 변수, 함수의 이름을 정의할 경우
  - 파일, 폴더
- 표기법의 의미
  - 2 개 단어 이상으로 조합하여 단어와 단어 사이를 구별해서 사용
  - 예시: queryselector 보다 querySelector 가 단어와 단어 사이를 구분하기 쉬움
- 표기법의 종류
  - section_contents: Snake case - 파일이나 폴더의 이름을 만들 때
  - section-contents: Kebab case - HTML 에서의 id 와 class 만들 때
  - sectionContents: Camel case - Javascript
  - SectionContents: Pascal case - Javascript 의 Class 를 만들 때
