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
