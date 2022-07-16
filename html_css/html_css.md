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
