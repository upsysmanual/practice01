# HTML

HTML 로 표현할 수 있는 것

- Contents
  - Text
  - Media
    - Image, Video, Audio (오디오스트리밍 컨텐츠를 제외하면 잘 안씀.)
- Structure
- Semantic (의미있는 구조)
- Layout

# HTML Basic

표시 언어. 기능 동작과는 상관이 없어서 프로그래밍 언어와는 다르다.

- HTML: Hyper Text Markup Language
  - Hyper Text: Hyper Link 로 연결된 문서. 웹페이지 (콘텐츠, 구조)
  - Markup: 표시
  - Language: 언어
- HTML 문법
  - 명칭: Tag, Element
  - 구성: 시작태그, 종료태그
  - 종료태그가 없는 태그도 있음: 빈 태그 (Empty element)
    ```
    <tag> contents </tag> : Element
    <tag ...>: Empty element
    ```
- HTML 속성 (Attribute)
  - HTML Eliment 를 표시할 떄 필요한 추가정보를 입력
  - name="value"
    '''
    <a href="https://www.naver.com">네이버</a>
    <img src="photo.jpg">
    '''

## HTML Basic Structure

```
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body></body>
</html>
```

### DOCTYPE

- HTML 문서의 타입. HTML 의 버전
- HTML 5 가 현재 2014 년 이후의 표준버전

### Head: 웹사이트의 기본정보

- meta: 웹사이트의 관련정보 (검색엔진과 연관된 정보. 검색엔진으로 검색했을때 노출되도록 하는 정보)
- title: 웹사이트의 제목

### Body: 웹사이트의 콘텐츠

- 웹사이트에 contents, structure 등을 표시하는 모든 태그는 body 에 들어간다.
- head 에 들어가는 부분을 제외한 다른 모든 태그가 들어간다.

## HTML Contents

### Text

#### Heading (제목)

- h(heading): 제목
- 1 to 6 단계로 표시됨

#### Paragraph (단락)

- p(paragraph): 단락
- 강제 줄바꿈과 여러 개의 공백은 공백 한 칸으로만 인식된다.
  - 단락은 아니지만 단락과 연관된 태그들이 있다.
    - line break: br (강제 줄바꿈 태그) 사용
    - space: &nbsp; (강제 공백 엔터티 (entity), 태그가 아님.) 사용.
- hr(horizontal rule): 수평선 긋기. 단락을 수평선 형태로 구분하며 단락의 개념을 포함한다.

#### List (목록)

- 순서 유무에 따라 다른 태그를 쓴다.
- ul (unordered list): 순서가 없는 목록
- ol (ordered list): 순서가 있는 목록
- li (list item): 목록 항목

\*\* 포함관계 (Nested structure)

- 태그 안에 다른 태그들이 포함되는 것을 의미한다.
- 포함하는 요소
  - 조상 요소 (Ancestor)
  - 부모 요소 (Parent)
- 포함되는 요소
  - 자식 요소 (Child)
  - 자손 요소 (Descendent)
- 옆에 나란히 있는 요소
  - 형제 요소 (Sibling)

'''
(1) <html>
(2) <body>
(3) <h1>내용 제목</h1>
(4) <p>
(5) 단락내용<br>

</P>
</body>
</html>
'''
(1) 조상 요소 | 기준 요소 | 조상 요소
(2) 조상 요소 | 자식 요소 | 부모 요소
(3)          | 자손 요소 | 형제 요소
(4) 부모 요소 | 자손 요소 | 기준 요소
(5) 기준 요소 | 자손 요소 | 자식 요소

- Description list (설명 목록)
  - dl (Description list)
  - dt (Description title): 항목
  - dd (Description data): 항목에 대한 부연 설명

#### Table (표)

- table
- thead (table head): 그룹핑을 위한 태그, 표 상단, 제목,
- tbody (table body): 그룹핑을 위한 태그, 컨텐츠, 데이터
- tr (table row): 줄, 행
- th (table header): 제목
- td (table data): 칸, 열

#### Hyper Link (하이퍼링크)

- a (anchor)
- 기본 속성: href (hypertext reference), 연결할 웹페이지의 위치를 표시해줌.
- 링크의 이동위치에 따라서 외부링크와 내부링크로 나뉜다.
  - 외부링크:
  - 내부링크: 북마크 기능 (bookmark)

### Media

#### Image (이미지)

- img (image)
- 기본속성
  - src (source): 이미지 파일의 이름과 위치를 표현
  - alt (alternate text): 대체 텍스트, 이미지가 화면에 표시되지 않을 때 이 텍스트를 표시함. screen reader 도 이미지를 대신해서 이 대체 텍스트를 읽는다.
    '''
    <img src="photo.png" alt="제주도 서귀포 바닷가 배경 사진">
    '''
  - 시작태그만 있는 빈 태그

#### Video (영상)

- video, source
- 속성
  - video 태그: on/off 형태의 attribute
    - controls: 동영상 제어 버튼의 화면 표시 여부
    - autoplay: 자동 재생 여부
    - muted: 재생시 음소거 여부
    - loop: 재생완료시 반복 재생 여부
  - source 태그
    - src: 파일 이름, 경로
    - type: 미디어 형식

## HTML Structure

### Semantic

구조의 각 영역을 표현해주는 태그들

- header:
  - logo, login
- nav (navigation):
  - menu,
- section:
  - 본문 영역
- article:
  - 본문 영역
- aside:
  - 본문 영역, 부수적인 컨텐츠
- footer:
  - 연락처, 주소, 회사명

### Layout

- block & inline : 위에서 얘기한 태그들은 모두 block 요소와 inline 요소로 구분될 수 있다.
  - block 요소
    - 태그가 브라우저에 표시될 때 각 태그 영역이 새 줄에서 표시되는 태그
    - 태그 영역이 부모 요소의 전체에 채워짐
  - inlie 요소
    - 태그가 브라우저에 표시될 때 각 태그 영역이 같은 줄에서 표시되는 태그
    - 태그 영역이 컨텐츠에 맞춰짐

### container element: 영역을 나눌 때 시멘틱 태그들을 사용해서 표현하기 애매한 경우에 보완적으로 사용 가능한 태그

- 단순히 묶어주는 용도이며 의미를 갖지 않음
- div (division)
  - block
- span
  - inline

## 경로 지정 방식

- 파일의 위치, 인터넷 주소(URL)
- 상대 경로
  - 이미지나 동영상 등의 리소스 파일을 사용하는 HTML 파일의 위치가 기준이 됨
  - HTML 페이지의 위치에 따라 주소가 변경됨
  - root (/) 폴더를 기준으로 주소가 정해지는 경우: root 상대 경로. 일단 root 로 이동함.
    '''
    [root(/)] - [html1] - home.html - [html2] - [about] - about.html - [imgaes] - photo.jpg

1. home.html 에서 photo.jpg 파일을 불러오려고 할 경우

- ../images/photo.jpg
<!-- ../ 는 상위 폴더로 이동함을 의미 -->
- /images/photo.jpg

2. about.html 에서 photo.jpg 파일을 불러오려고 할 경우

- ../../imgaes/photo.jpg
  <!-- 상위 폴더로 두번 이동해야됨 -->
- /images/photo.jpg
  '''
- 절대 경로
  - 서버부터 주소 (URL)을 사용하기 때문에 경로의 주소가 바뀌지 않음
  - 이미지를 표시하는 HTML 페이지가 기준이 되는 것이 아니라, 해당 서버가 기준이 됨
    '''
    사이트의 주소: www.image.com

[root(/)] - [html1] - home.html - [html2] - [about] - about.html - [imgaes] - photo.jpg

1. home.html 에서 photo.jpg 파일을 불러오려고 할 경우

- www.image.com/images/photo.jpg

2. about.html 에서 photo.jpg 파일을 불러오려고 할 경우

- www.image.com/imgaes/photo.jpg

  '''

## 강조 태그, 기타 태그

- 텍스트의 특정 부분을 강조: 두 가지의 태그가 있으며 둘을 구분하는 의미는 작성자가 나름대로 정해서 쓸 수 있다.

  - srtong: 강한 강조
  - em (emphasize); 일반 강조
  - mark: HTML 5 버전, 익스플로러 예전버전 등에서 안됨, block 강조 (단락을 통째로 강조) 등에 사용

- 텍스트를 표현할 때부족한 태그를 보완하는 태그

  - i (italic): 기울임
  - b (bold): 굵은 글씨

# CSS

- content styling
  - text styling
  - media styling
- layout (structure styling)

  - 일반적인 layout 배치는 세로로 이루어지므로 가로배치를 어떻게 구현할지 중요함
  - 가로배치에는 다양한 방법이 있지만 flexbox 방식을 주로 사용

  ## CSS Basic

  - CSS: Cascading style sheet

'''

방법1: 가독성이 떨어지지만 브라우저가 렌더링하는데에는 효율적
h1 {color: blue; font-size: 14pt; align: center;}

방법2: 가독성이 좋지만 브라우저가 렌더링하는데에는 비효율적
h1 {
color: blue;
font-size: 20px;
align: center;
}
'''

일반적으로는 방법1로 작성한 후 방법2의 형태로 압축 가공하는데 이 과정을 minify, uglify 라고 한다.
이런 과정을 수행하는 자동화툴을 build tool 이라고함.

## Selector (선택자)

- 선택자로 HTML 요소를 선택하는 방법
  - Simple selector (단순선택자)
    - Tag/Element의 이름을 사용
    - Class 이름을 사용
    - Id 이름을 사용

'''

/_
a 태그 모두의 color 가 red 로 적용됨
_/

<a href = "http://www.naver.com">네이버</a>
<a href = "http://www.daum.net">다음</a>

a {
color:red;
}

/_
같은 a 태그 각각에 다른 속성을 적용하고 싶을 때에는 class 와 id 를 사용한다. 이때 class 앞에는 .을, id 앞에는 #을 써서 일반 태그와 구분해준다.
_/

<a href = "http://www.naver.com" class = "naver">네이버</a>
<a href = "http://www.daum.net" id = "daum">다음</a>

.naver {
color:green;
}

#daum {
color: blue;
}

'''

### id와 class 의 차이점

- id
  - 같은 HTML 페이지 내에서 고요/유일해야 한다.
  - 한 개의 HTML 요소에 여러 개의 id 이름을 사용하는 것은 불가능하다.
    - 중복사용할 경우 프론트엔드 상에서는 작동하지만 백엔드 상에서 오류가 발생할 수 있다.
- class
  - 같은 HTML 페이지 내에서 여러번 사용 가능하다.
  - 한 개의 HTML 요소에 여러 개의 class 이름을 사용할 수 있다.
  - 효율성 측면에서 프론트엔드 쪽에서는 class 만 사용해서 스타일링을 하고 id 는 백엔드 개발자가 쓰도록 남겨두는 경우가 많다.
  - 실제로 프론트엔드 개발에서는 반드시 id 를 사용하지 않아도 된다.
  - 프론트엔드 개발에서는 태그의 독립성을 위해서 일반적으로 모든 태그에 class 이름을 붙이는 경우가 많다.
  - class 의 일므을 붙이는 방법에 대해서는 다양한 방법론이 있다. OOCSS, BEM, ...

'''

<p class = "paragraph"> 단락내용 1</p>
<p class = "paragraph"> 단락내용 2</p>

<p id = "content"> 단락내용 3</p>
<p id = "content"> 단락내용 4</p> -> 사용불가. 단락내용 3에서 사용했으므로 동일한 id 를 중복해서 사용할 수 없다.

<P class="gnb-list-item">회사소개</p>

'''

<!-- - 표기법의 의미
  - 2 개 단어 이상으로 조합하여 단어와 단어 사이를 구별해서 사용
  - 예시: queryselector 보다 querySelector 가 단어와 단어 사이를 구분하기 쉬움
- 표기법의 종류 (정해진 규칙은 아니지만 build tool 이나 백엔드와의 협업을 고려할 때 권장되는 방법임.)
  - section_contents: Snake case - 파일이나 폴더의 이름을 만들 때
  - section-contents: Kebab case - HTML 에서의 id 와 class 만들 때
  - sectionContents: Camel case - Javascript
  - SectionContents: Pascal case - Javascript 의 Class 를 만들 때 -->

### CSS 선택자의 우선순위

\*\* cascading 규칙

- 동일한 대상에 여러 스타일이 적용될 때 제일 마지막에 적용된 스타일이 반영된다.

- 선택자 우선순위

  - 선택자의 종류에 따라 CSS 의 적용 우선순위가 다르게 정의
  - cascading 규칙에 따르지 않고 CSS 를 적용할 때 이 선택자 우선순위대로 스타일이 적용된다.
  - inline 작성방식: 1000
  - id: 100
  - class: 10
  - tag: 1

  ### Text Styling

  #### Color

'''
h1 {
color: blue ;
}
'''

####Text alignment

'''
p {
text-aling: center ;
}
'''

- 정렬값 : left, center, right, justfy (양쪽맞춤)
- 단어 중간의 줄바꿈
- word-break

'''
p {
word-break: break-all ;
}
'''

#### Text Decoration (밑줄)

'''
h1 {
text-decoration:underline ;
}

h1 {
text-decoration:line-through ;
}

h1 {
text-decoration:overline ;
}

a {
text-decoration:none ;
}
'''

#### Text trasformation

텍스트의 대소문자를 변환해줌.

text-transform: uppercase;
}

p.lowercase {
text-transform: lowercase;
}

p.capitalize {
text-transform: capitalize;
}

#### Test spacing

'''
p {
text-indent:15px;
}

h2 {
letter-spacing:5px;
}

p {
word-spacing:3px;
}

p{
white-space:nowrap;
}

'''

- line-heignt
  - 텍스트 줄을 포함한 줄 높이
  - 단위/값
    - px
    - 배수값: 포트의 크기를 기준으로 정수 또는 소수를 사용할 수 있다.

\*\* 상속: 조상요소나 부모요소에 적용했을 때 자식요소나 자손요소들에도 적용되는 것

- HTML Element 중에 상속되지 않는 태그가 있음: 표 (단 표에서 부모요소에 적용하면 표의 자식요소에서는 적용됨)
- CSS 속성 둥에 상속되지 않는 속성이 있음: 색상

#### Font family

- CSS 파일이 브라우저에서 랜더링되기 때문에 폰트 파일을 클라이언트 PC 에서 찾음.
- Web safe: 클라이언트 PC 에서 CSS 를 랜더링할 때에 폰트가 원활하게 표시되도록 하기 위해서 다수의 클라이언트 PC 에 설치되어있을 만한 폰트를 선택해야한다.
- Fallback: font-family 속성의 값으로 정해준 폰트 종류를 순서대로 찾는다.
- Web font: 클라이언트마다 폰트를 표시하는 환경이 다르므로 서버에 폰트를 저장해두고 서버의 폰트를 사용할 수 있도록 하는 기능. CSS3 에서 추가된 기능.
- 구글 폰트:

- 폰트의 종류 (저작권 문제와 관련하여):

  - 폰트 파일의 포함여부

#### Font size

- font-size
- 폰트 크기
- px 단위를 사용

#### Font style

- font-style
- 기울임꼴 설정
- italic 값

#### Font-weite

- font-weight
- normal/bold 중에서 선택 또는 단위없는 100단위 숫자값 사용

#### Link style

- a 태그는 4가지 상태로 구분됨 (link, visited, hover, active)
  '''
  <a http://www.naver.com class="link">Naver</a>
  a: link {}
  a: visited {}
  a: hover {}
  a: active {}

  <!-- a 태그에 class 나 id 가 있다면 이 선택자로 선택할 수도 있다 -->

  .link: link {}
  .link: visited {}
  .link: hover {}
  .link: active {}

  '''

### Media contents styling

- image, video
- 크기 지정: Box model 의 적용
- 위치 지정:

### Layout styling

- Element 영역
  - Block 요소와 Inline 요소의 구분
- Element 영역의 styling
  - Box model
- Element 의 배치
  - 배치 지정: 인접한 박스들의 관계. (인접한 박스들의 위치에 서로 영향을 미침)
  - 위치 지정: 박스의 위치를 단독으로 지정. (다른 박스의 위치에 영향을 미치지 않음.)

#### Box model

- Box model 의 구성요소: 안쪽에서부터

  - content (width & Height) > padding > border > margin

- inline 요소에 box model 을 적용할 경우
  - width, height: 적용되지 않음.
  - margins: 좌우만 적용되고 상하는 적용되지 않음.
  - padding, border: 적용됨.

- 박스 크기 계산
  - 박스 모델 구성요소들의 크기의 합이 박스의 전체 크기가 된다. 
    (width * height + padding + border)
    ex) width 300 /padding 4방향 20px /border 4방향 1px /margin 4방향 10px
        300px + 20px + 20px + 1px + 1px = 342px

- box-sizing 속성
  - width 계산 기준을 content 또는 전체 크기로 선택함

  '''
  div {
    width: 300px;
    padding: 300px;
    border: 1px solid black;
    box-sizing: content-box; /* default*/
  }

  박스 전체 가로길이: 300+40+2=342px

  div {
    width: 300px;
    padding: 300px;
    border: 1px solid black;
    box-sizing: border-box;
  }

  박스 전체 가로길이: content 의 길이+40+2=300px
  '''

##### width & height

- block 요소
  - width 는 부모요소에 맞게 채워짐
  - height 는 contents 또는 자식요소에 맞춰짐
- px: 지정된 수치로 고정됨. (절대적)
- %: 부모요소를 기준으로 해당 비율만큼 지정 width 에만 적용되고 height 에는 적용되지 않음. (상대적)
- auto: width와 height 의 크기를 자동으로 지정함 (width와 height 의 원래 특성으로 적용)

##### padding

- 안쪽여백

'''
padding-top: 10pt;
padding-right: 20pt;
padding-bottom: 30pt;
padding-left: 40pt;

padding: 10pt 20pt 30pt 40pt;
(방향은 top (12시 방향) 을 기준으로 시계방향)

padding: 10pt 20pt 30pt 40pt; > 4 방향을 각각 적용.

padding: 10pt 20pt 30pt; > 두번째 값을 좌우 공통 적용. 좌우 20pt

padding: 10pt 20pt; > 서로 마주보는 값을 공통 적용. 상하: 10pt 좌우: 20pt

padding: 10pt; > 4 방향을 모두 공통 적용.
'''
\*\* padding 과 margin 은 사용 방법이 동일함.

##### margin

- margin 사용방법은 padding 과 동일함.
  '''
  margin-top: 10pt;
  margin-right: 20pt;
  margin-bottom: 30pt;
  margin-left: 40pt;

margin: 10pt 20pt 30pt 40pt;
(방향은 top (12시 방향) 을 기준으로 시계방향)

margin: 10pt 20pt 30pt 40pt; > 4 방향을 각각 적용.

margin: 10pt 20pt 30pt; > 두번째 값을 좌우 공통 적용. 좌우 20pt

margin: 10pt 20pt; > 서로 마주보는 값을 공통 적용. 상하: 10pt 좌우: 20pt

margin: 10pt; > 4 방향을 모두 공통 적용.
'''

- margin 겹침과 상쇄 (collapse)
  - 위,아래로 인접한 박스의 margin 이 상쇄되는 현상
  - 두 여백 중 큰 쪽의 여백만 적용됨.
  - 상하의 여백은 상, 하 중 하나만 적용하는 것이 좋다.
  - 좌우로 인접한 박스에서는 margin 이 상쇄되지 않고 모두 적용되어 함쳐짐.

##### border

'''
모든 방향에 동일하게 지정할 때
border: 1px solid red;

각 방향을 다르게 지정할 때
border-top: 3px solid red;
border-right: 1px solid red;
border-bottom: 3px solid red;
border-left: 1px solid red;
'''

##### background

- 배경색, 배경이미지 표시
- 배경은 box model 요소 중 content 와 padding 영역까지 적용된다. (border 안쪽)

'''
배경색을 적용할 경우 지정할 수 있는 속성
background-color: red;

배경이미지로 적용할 경우 지정할 수 있는 속성
background-image: url (이미지파일의 주소);
background-repeat:no-repeat;
background-position: 10px 20px;
background-attachment: fixed;
'''

- background-repeat

  - repeat < default 가로,세로로 모두 반복
  - repeat-x: 가로로만 반복
  - repeat-y: 세로로만 반복
  - no-repeat: 반복하지 않음

- background-position

  - 배경이미지를 반복하지 않을 때에만 의미가 있음
  - px
  - left, top, right (가로)
  - top, center, bottom (세로)

- background-attachment

  - 배경이미지를 고정함
  - fixed

- 축약형으로 표시할 때 뒤에 나열하는 값의 위치가 자유로움.

#### display

- box 의 표시 속성을 변경해서 표시함
- 표시방식만 바뀌고 원래의 속성이 바뀌는 것은 아님.

'''
display: inline; <- block 요소에 적용하면 inline 요소인 것처럼 표시됨.
display: block; <- inline 요소에 적용하면 block 요소인 것처럼 표시됨.
display: inline-block; <- inline 요소처럼 나란히 표시하면서 block 요소처럼 box model 을 적용할 수 있음.

'''

### layout 배치 (box 들의 배치방식)

- float:
- flex: 현재 실무에서 제일 많이 사용되는 방식
- grid: 최신 방법. 아직 많이 사용되지는 않지만 점차 flex에서 이 방식으로 바뀌고 있음

#### flexbox

- HTML Element 가 포함 관계 (부모-자식)로 구성되어야 한다.
- 부모 요소에 Flex 설정, 배치 관련 속성들을 적용
-

'''

<div class = "flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

.flex-container {
display:flex;
flex-direction:column; /_ 박스의 배치 방향을 설정함_/
flex-wrap:wrap; /_박스의 배치 줄바꿈 설정_/
justify-content:center; /_박스의 배치 가로정렬, 간격_/
align-items:center; /_박스의 배치 세로정렬_/
}
'''

#### position

- 박스 위치를 단독으로 지정해주는 속성
- top, right, bottom, left 순으로 위치 지정 속성과 같이 사용

- relative

  - 박스의 원래 위치에서 좌표의 크기만큼 이동한 지점에 위치함
  - 요소의 일반 흐름에서 제외되지 않음

- absolute

  - position 속성이 지정된 가장 가까운 조상 요소를 기준으로 위치를 지정함
  - 요소의 일반 흐름에서 제외됨
  - 문서에서 제외되지는 않는다.

- fixed
  - 브라우저를 기준으로 위치를 지정
  - 스크롤해도 지정한 브라우저상 위치에서 움직이지 않음
  - 요소의 일반 흐름에서 제외됨
  - 문서 밖에 위치

#### z-index

- 박스가 겹칠 때 앞뒤 순서를 지정해줌
- 단위없는 정수를 사용해서 지정 가능하다 (음수도 사용 가능)
- z-index 를 사용할 때에는 position 속성이 적용되어 있어야 한다.
- 숫자가 크면 앞쪽에 배치되거 작으면 뒤에 배치된다.

## 반응형 웹 RWD (Responsive Web Design)

- 다양한 디바이스의 화면에 컨텐츠, 레이아웃이 잘 보이도록 스타일을 구현
- OSMU (One Source Multi Use)
  - 하나의 HTML source 여러 개의 CSS source

### 뷰포트

- 모바일 화면에서 컨텐츠가 잘 보이게 하기 위해서 설정
- 설정하지 않는 경우 PC 에 최적화된 화면이 작은 모바일 화면으로 축소되어 보이기 때문에 잘 보이지 않음

### 미디어쿼리

- 특정 조건, 상황에 대해 true/false 여부를 확인
- true 인 경우 포함하고 있는 CSS 코드 블럭을 실행하여 스타일을 적용함
- cascading 규칙이 적용되기 때문에 특정 조건이 아닐 경우의 스타일을 먼저 지정해주고 미디어쿼리를 적용해야 제대로 최종적용된다.

'''
@media screen and (max-width:600px;) {
background-color: gray;
}
600px 보다 폭이 작을 때 배경 색상이 회색으로 적용됨

max-width: 600px; -> 600px 보다 작은 범위를 의미
mix-width: 600px; -> 600px 보다 큰 범위를 의미
'''

- 화면의 해상도: 가로값을 기준으로 한다. (세로 방향은 스크롤하기 때문에 무한하게 늘어남)

  - PC 모니터
    - 1024 x 768 px (홈페이지 개발시 작은 화면을 기준으로 개발하면 큰 화면에서도 지원됨)
    - 1280 x 720 (1024) px
    - 1920 x 1080 px (full HD, 1K)
    - 3840 x 2160 px (4K)
  - 태블릿 (가로모드와 세로모드를 모두 지원함)
    - 1024 x 768 px
    - 1280 x 720 px
    - 1920 x 1080 px
  - 모바일 (매우 다양함)
    - 400 x 800
    - 320 x 640

- breakpoint
  - 미디어쿼리의 true/false 를 판단하는 기준점
  - 일반적으로는 디바이스의 화면 해상도가 breakpoint 로 적용됨
  - 위의 해상도 구분에서는 1024, 720, 320 해상도가 breakpoint 로 설정될 수 있음
