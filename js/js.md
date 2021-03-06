# Javascript

- 문법

  - Javascript 언어 문법
  - 문법적 내용
    - 데이터/변수/연산자
    - 명령문
    - 함수
    - 배열/객체/Class
    - 추가 문법

- 활용
  - HTML dom
  - HTML/CSS/Javascript
  - Open API - 객체

## Js basic

- Version
  - ES5
  - ES6
- 작성방식

  - External line: js 파일 생성
  - Internal line:
    - HTML 파일에 js 코드를 작성
    - js 코드 블럭을 따로 구분해서 작성
  - Inline: HTML Tag에 js 코드를 작성

- 작성 위치
  - Js 가 실행되는 시점에 HTML 이 로딩(렌더링)되어있어야함.
  - Js 가 실행되는 방식: 최초 한번만 실행됨.

## Js 문법

### 데이터/변수/연산자

- 데이터:

  - 숫자: 숫자는 항상 0 부터 시작
  - 문자
    '''
    숫자: 0, 1, 2, 3, 4, 5...
    문자: a, b, c, d, e... 가, 나, 다, 라, 마...
    '''
  - 데이터 타입 (종류)
    - 숫자: 정수, 실수
    - 문자:
      - 코드상에서 문자는 따옴표로 묶임 (큰따옴표, 작은따옴표는 상관없음), 따옴표로 묶여있지 않으면 문자 데이터가 아님.
      - 따옴표로 묶여있는 숫자는 문자로 취급됨.
      - 낱개글자, 묶음글자(단어나 문장)
    - 논리값, 불리언 (Boolean)
    - true/falsh (참/거짓)
      '''
      1+1=2
      'a'+1=a1
      '1'+1=11
      '''
      \*\* Javascript 는 데이터 타입을 엄격하게 구분하지 않음. (Javascript 에 엄격한 데이터탕비 관련 문법을 도입한 Typescript 라는 프레임워크가 개발되기도 함.)

- 변수 (Variable):
  - 데이터를 저장하는 공간
  - 변수는 선언 (Declaration), 정의 (Definition) 한 뒤에 사용할 수 있다.
  - 변수 선언 예약어 (Keyword) - var (ES5 에서 사용): 데이터 타입을 전혀 구분하지 않음. 데이터 변경이 자유로움. - let (ES6 에서 사용): 데이터 타입을 전혀 구분하지 않음. 데이터 변경이 자유로움. - const (ES6 에서 사용): 데이터 타입을 전혀 구분하지 않음. 변수이지만 데이터 변경이 불가능함. 긴 소수나 큰 수를 반복해서 사용할 경우의 불편함을 개선하기 위해 그 수를 대신해서 사용할 수 있도록 고정한 수. (원주율 등의 무리수)
    '''
    Java 의 경우
    정수 변수를 선언하는 경우: int number1;
    실수 변수를 선언하는 경우: float number2;
    문자 변수를 선언하는 경우: char text;

Javascript(ES5, ES6)의 경우
정수 변수를 선언하는 경우: var number1; | let number1; | const number1;
실수 변수를 선언하는 경우: var number2; | let number2; | const number2;
문자 변수를 선언하는 경우: var text; | let text; | const text;
'''

- 연산자

      - 연산하는 두 대상의 사이에 표현됨
      - 산술연산자
          - +, -, \*, /
          - %: 나머지 연산 (나눗셈의 나머지)
      - 할당 (대입) 연산자
          - =: 값을 변수에 저장하라는 의미

  '''
  const PI=30141592;
  ''' - 산술연산+대입연산 (재귀)
  '''
  let a=10;
  a=a+5
  a+=5
  '''
  \*\* 산술연선+대입연산이 반복실행되면 일정 값을 지속적으로 연산할 수 있게 된다. - 카운터 (1 씩 증가하거나 감소함. 갯수를 세는 효과)
  '''
  a+=1 (1 씩 증가함) 일때는 a++ 로 표시할 수 있다.
  a-=1 (1 씩 감소함) 일때는 a-- 로 표시할 수 있다.
  ''' - 비교연산자 - ==, ===: 같음 - !=, !==: 다름 - 비교연산자를 사용한 식의 결과는 항상 참 또는 거짓.

  - 논리연산자
    - 논리값 (참, 거짓)을 연산하는 것. 연산의 종류는 3 가지가 있다.
    - 논리식: 논리값이 결과로 나오는 식
    - AND: &&, 연산할 여러 개의 논리값이 모두 참이어야 연산결과가 참이 된다.
    - OR: ||, 연산할 여러 개의 논리값이 모두 거짓이어야 연산결과가 거짓이 된다. (하나라도 참이면 연산 결과는 참이 된다.)
    - NOT: !, 연산 결과의 반대값을 표시.

### 명령문

- 프로그래밍 언어의 실행 흐름에 관여
- 조건문 (conditional statement)/분기문

  - if (제일 많이 사용됨): 조건/상화에 대한 다른 결정에 대해 각각 다른 실행방식을 선택
    - if
    - else if
    - else

'''
if(조건식, 결과값이 bool 데이터인 식){
결과값이 참일 때의 실행코드  
}
if(bool 데이터 1){
bool 1 이 참일 때의 실행코드
}
else if(bool 데이터 2){
bool 2 이 참일 때의 실행코드
}

if(bool){
bool 이 참일 때의 실행코드
}
else(bool){
bool 이 거짓일 때의 실행코드
}

if(bool1){
bool1 이 참일 때의 실행코드
}
else if(bool2){
bool2 가 참일 때의 실행코드
}
else{
bool1, bool2 가 모두 거짓일 때의 실행코드
}

'''
'''
if(a>10){}
if(true){}
if(a+1){}: 값이 숫자인 경우 이를 bool 데이터로 바꿔서 생각 0:false, 나머지 정수: ture
if(1){}
'''

- switch

  - 식의 결과값에 따라 실행 분기

  '''
  let a = 0
  switch(a+1) {
  case 1:
  실행코드
  break;
  case 2:
  실행코드
  break;
  }
  '''

- 반복문
  - for (제일 많이 사용됨): 결정된 반복 횟수만큼 반복 실행하는 구문 - 구문 1, 구문 2, 구문 3이 유기적으로 연결되어 반복 횟수를 결정함.
    '''
    for(초기값 구문1; 비교식 구문2; 수식 구문3){
    반복 실행 코드
    }

1. 초기값 구문1이 최초 한번 실행됨
2. 비교식 구문2가 실행 뒤 결과값이 참 또는 거짓으로 나뉨
3. 결과값이 참이면 실행코드가 실행 (거짓이면 반복 구문이 실행 종료됨.)
4. 수식 구문3이 실행됨
5. 2. 부터 반복 실행

'''
for(let i=0; i<3; i++){
코드블럭
}

1. i=0
2. i<3 true 또는 false 로 표시됨, 첫번째에서는 true 가 나옴
3. 코드블럭 실행함
4. i 값을 1 증가시킴, i=1 가 됨.
5. 2)로 가서 i<3 를 실행, i=2 이므로 두번째에서도 true 가 나옴
6. 코드블럭 실행함
7. i 값을 1 증가시킴, i=2 이 됨.
   .
   .
   .
8. 2)로 가서 i<3 를 실행, i=3 이므로 세번째에서는 false 가 나옴. 실행이 종료됨.
   '''

'''
for(let i=0; i<5; i++){} :5번 반복됨.
for(let i=1; i<=5; i++){} :5번 반복됨.
for(let i=0; i<=8; i+=2){} :5번 반복됨.
'''

1. 초기값 구문1

'''

- while

  - 조건식의 결과값이 참일 때 반복 실행함

  '''
  while(조건식) {
  실행코드
  }

  조건식의 결과값이 참일 때 계속 반복 실행

  '''

### 함수

- 특정작업을 실행할 수 있도록 만들어진 코드 블럭
- 하나의 함수가 독립적으로 실행될 수 있음
- 코드를 그룹화시켜줌
- 함수를 실행하기 위해서는 해당 함수를 호출해야 한다.
- 매개변수: 외부로부터 값을 받아서 실행할 때 사용하는 변수

### 배열/객체/Class

- 복잡한 형태의 데이터
- 데이터의 묶음 형태, 데이터의 집합

#### 배열

- 같은 타입의 데이터들을 나열해서 패키지화 한 것
- 같은 타입이 아니면 배열이 성립되지 않음

'''
let array = [1,2,3,4,5] 배열이 성립됨

let arr = [1,2,3,4,a] 배열이 성립되지 않음
'''

#### 객체

- 어떤 대상을 데이터화 시킨 집합 데이터
- 객체 데이터

  - property: 객체 데이터화 시킨 것, 객체가 갖고 있는 성질, 형태들을 데이터화함.
  - method: 객체에 포함된 함수, 객체의 기능에 대한 정의

#### Class (HTML 과 SCC 의 Class 와 혼동하지 않게 주의)

- 객체 데이터를 만들 수 있게 하는 설계도
- 자체적으로 데이터를 갖고 있지는 않음
-

### 추가 문법 (변수에 대한 내용)

#### 변수 scope

- scope
  - global scope
    - 변수는 모든 범위에서 접근 가능함
  - function scope
    - 해당 함수 번위에서만 접근이 가능함
  - block scope
    - 해당 block 범위에서만 접근이 가능함

'''

<script>
//global scope
let a = 1;
var _a = 1;
function myFunction () {
  //function scope
  let b = 2;
  var _b = 2;
  for (statement) {
    //block scope1
    let c = 3;
    var _c = 3;
  }
}
if (condition) {
  //block scope2
  let d = 4;
  var _d = 4;
}
</script>

'''

'''

## Js 활용

- 데이터 입출력
- UI 효과

### HTML DOM (Document object model)

- HTML Element 들을 객체화시킨 모델
- HTML DOM 을 사용하여 HTML Element 를 제어.

-

### DOM 접근 API

- DOM API: DOM 객체 메소드 형태로 제공

'''
HTML4 에서의 DOM 접근
document.getElementById('id') : id 로 DOM 에 접근
document.getElementsByClassName('class') : class 로 DOM 에 접근
document.getElementsByTagName('tag이름') " tag 로 DOM 에 접근
API 이름이 너무 길어짐

jQuery
$('#id')
$('.class')
\$('tag')
CSS 와 통일된 방법

HTML5 에서의 DOM 접근
document.querySelector('#id')
document.querySelector('.class')
document.querySelector('tag')
-> class 와 tag 는 여러개가 존재할 수 있지만 이 경우 첫번째 class 만 적용됨

document.querySelectorAll('.class')
document.querySelectorAll('tag')
-> 여러개의 class 와 tag 에 모두 적용하려면 document.querySelectorAll 로 쓴다.

'''

### 이벤트

- 상태 또는 상황의 변화
- ~할 때: 이벤트가 발생
  '''
  마우스를 클릭할 때, 키보드의 키를 누를 때...
  '''
  '''
  이벤트 흐름
  이벤트가 발생 -> 신호가 발생 -> 신호 감지 -> 해당 이벤트에 대응하는 기능이나 동작을 실행
  '''
- addEventListener(이벤트핸들러 함수): 이벤트를 감지
- 이벤트핸들러 함수: 익명함수로 사용

  - 익명 함수: 이름이 없는 함수. 선언과 동시에 실행됨.
    '''
    function 이름(파라미터){

  }
  '''

'''
dom.addEventListener(function(){
실행코드블럭
});
'''

### CRUD

### 화면효과 (effect)
- CSS 를 제어해서 화면에 시각적 효과를 줌
- effect 구현 밸런스
  - 효과를 표현하는 것은 CSS 가 설정하고 표현된 효과를 동적으로 제어하는 것은 JavaScript 가 한다.
  - 순서 상 CSS 로 시각 효과의 처음 상태와 마지막 상태를 구현한 뒤 JavaScript 로 동작을 만들어줌.
