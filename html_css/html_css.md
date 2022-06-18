# HTML

HTML 로 표현할 수 있는 것

- Contents
  - Text
  - Media
    - Image, Video, Audio
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

** 

#### Table (표)

#### Hyper Link (하이퍼링크)

### Media

#### Image (이미지)

#### Video (영상)

## HTML Structure

### Semantic

### Layout

# CSS
