
<div align="center">
  <h2>🔥24/7 Cloud Library client-users🔥</h2>
  |　<a href="https://www.notion.so/Cloud-Library-b9bb2c8ddbc241f5b4d8c160208cf108">노션</a>　
  |　<a href="https://metroretro.io/board/LB5JSXC2NCBV">Event Storming</a>　
  |　<a href="https://www.marimba.team/board/7ffcfbc5-0bef-4c77-bb9f-a630a6f18ec6">Boris Diagram</a>　
  |　<a href="https://www.figma.com/file/HHNzpgsiaHdkr8lDSwAQo5/Cloud-Library?node-id=0%3A1">Snap-E</a>　|　
  <br>
</div>
<br>
<div align="center">
  <img src="https://img.shields.io/badge/React-17.0.2-61DAFB?logo=React">
  <img src="https://img.shields.io/badge/node-16.15.0-339933?logo=node.js"> 
  <img src="https://img.shields.io/badge/Sass-7.01-009639?logo=Sass"> 
</div>

## 소개

> Cloud Library는 한 번의 회원가입, 통합 도서 데이터 관리로 도서관 관리자와 사용자에게 하나의 도서관을 제공하는 웹 서비스입니다.   
> client-users은 도서관 에게 간편하고 편리한 사용자 경험을 제공할 수 있도록 설계되었습니다.

<div align="center">
<table>
<thead>
  <tr>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/93421415/168957531-0e1f74fd-a9d1-41c2-b257-ec1ed09f7dd1.gif" width="470" height="290">
      </div>
      도서 조회 및 검색
    </th>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/93421415/168950313-6699f1f7-1b7a-4bce-b607-54b9b392aba5.gif" width="470" height="290">
      </div>
      도서 목록 필터 및 예약
    </th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/93421415/168958160-675866c5-a512-460f-9a9b-96596042faf2.gif" width="470" height="290">
      </div>
      도서관 조회
    </th>
    <th>
      <div>
       <img src="https://user-images.githubusercontent.com/93421415/168958160-675866c5-a512-460f-9a9b-96596042faf2.gif" width="470" height="290">
      </div>
       회원 가입
    </th>
  </tr>
</tbody>
</table>

| 김주상 | 김한휘 | 홍인수 |
|:--------:|:--------:|:--------:|
| [fable0831](https://github.com/fable0831) | [KimHanWhee](https://github.com/KimHanWhee) | [iinsue](https://github.com/iinsue) | |
| Web Frontend | Web Frontend | Web Frontend |
  
  </div>

<details>
<summary>✅ 모든 구현 기능 리스트</summary>
<br>
  
**공통 메인 페이지**

- 관리자 / 회원 로그인 가능
- Cloud Library 주요 기능 소개

**회원 메인 페이지**

- 공통 메인 페이지에서 회원 로그인 시 진입 가능

**회원 마이 페이지**

- 회원 정보 수정 가능
 
**도서 검색 페이지**

- 도서 검색 가능
- 목록 필터( 도서관 별 / 카테고리 별) 가능
- 예약 가능
  
**도서관 찾기 페이지**

- 도서관 검색 가능
- 도서관 상세정보 조회(게시판, 도서관 정보)
  
**게시판 페이지**
  
- 각 도서관 별 게시글 조회
- 각 도서관 별 위치 카카오 지도API를 이용하여 표시

**대출 기록 페이지**

- 대출 기록 조회 가능
  
**예약 기록 페이지**

- 대출 기록 조회 가능
  
  
</details>

## Client Homepage
홈페이지 gif 추가

## client-user main page
![user-main](https://user-images.githubusercontent.com/93421415/168957185-b9246cdf-a020-46f1-94a3-97883737427c.gif)

## 프로젝트 장점 🛠
<details>
<summary>🛠 프론트엔드 코드 통일성에 대한 지속적인 고민</summary>
<br>

**협업 및 분업**을 원활하게 하기 위해 개발 시 다양한 방법을 고민

- **Git-flow** 전략을 토대로 issue 생성 -> branch 생성 -> PR -> 코드 리뷰 -> Merge 순으로 개발
- **코드 리뷰**는 모든 FE 개발자들이 함께 Discord를 통해 소통
- 매일 **Daily Scrum**을 통해 진행 방식 및 에러 사항 공유 -> Notion을 사용하여 회의 내용 정리
  
</details>

<details>
<summary>🛠 DDD 방식을 통한 MSA 설계</summary>
<br>
  
Domain Driven Design 방식을 통해 MSA 프로젝트 기획.
- client는 **client-admin**과 **client-user**로 인스턴스 분리
- 다양한 **협업 tool**을 사용하여 DDD 단계별로 기획(MetroRetro / Marimba / Figma)
- 전체 개발 기간 중 절반을 오롯히 기획에 투자 => **프로젝트 구조**의 완성도를 높임
  
</details>
