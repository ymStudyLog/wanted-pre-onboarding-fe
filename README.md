# 원티드 프리온보딩 프론트엔드 코스 5차 사전과제

### 로그인용 계정 정보

> id: 'aaaaa@aaaaa.aaa' <br/>
> pw: 'aaa12a!@A'

### 실행

```

git clone https://github.com/ymStudyLog/wanted-pre-onboarding-fe.git

npm i

npm start

```

### 목표

필수로 주어진 assignment 5개를 모두 구현하는 것 

### 개발 순서(날짜별)

##### 1. 19/06/2022

:thumbsup: assignment 분석, 프로젝트 디렉토리 대략적인 분류 및 UI 준비 : NavBar, LoginPage 와 MainPage 컴포넌트 제작.

> Assignment 1 : Login 50% 완료 (UI 부분만 완료) <br/> > ~~Assignment 2 : GNB 100% 완료~~ <br/>
> Assignment 3 : Validation 0% 완료 <br/>
> Assignment 4 : SPA 라우팅 파트 50% 완료 (App.js에 라우팅 적용만 완료) <br/>
> Assignment 5 : Feed 개발 0% 완료 <br/>

##### 2. 20/06/2022

:thumbsup: 로그인 기능과 유효성 검사 구현, Mock data 미리 생성, 라우팅 기능 마무리

- LoginForm 컴포넌트 제작 : useState를 사용하여 input과 button에 스타일 변화 적용.
- 인풋 유효성 검사 validation() : 정규표현식 사용. id 와 pw 별로 함수를 분리하지 않고 regMap 객체를 선언해 정규표현식을 넣어서 id와 pw별로 각각에 할당된 정규표현식이 적용되도록 함.
- login() : 로그인 버튼 클릭 이벤트 발생시 id와 pw가 맞으면 useNavigate을 사용하여 MainPage로 이동.
- logout() : localStorage삭제만 진행하고, logout 버튼 클릭시 Link 컴포넌트를 통해 LoginPage로 이동.

> Assignment 1 : Login 파트 85% 완료 (코드 정리 필요) <br/> > ~~Assignment 2 : GNB 100% 완료~~ <br/>
> Assignment 3 : Validation 파트 90% 완료 (ID,PW 정규식 틀림. 수정 예정) <br/> > ~~Assignment 4 : SPA 라우팅 파트 100% 완료~~ <br/>
> Assignment 5 : Feed 개발 5% 완료 <br/>

##### 3. 21/06/2022

:thumbsup: Feed와 Comment 컴포넌트 제작, Mock data axios로 가져오기, 이전에 제작한 컴포넌트 중 수정 필요한 부분 수정.

- 피드를 보여주는 Feed 컴포넌트 제작. map 함수를 사용하여 렌더링함.
- comment를 보여주는 부분과 등록하는 부분은 Feed 컴포넌트에서 따로 분리하여 Comment 컴포넌트를 제작. UI만 준비 완료.
- public 디렉토리에 데이터를 저장해서 가져오는 방법은 처음 봐서 구글링하여 정보 얻음. axios로 데이터를 가져와 Feed 컴포넌트에 뿌림.
- 20/06/2022 완료하지 못한 정규식 수정, 코드 정리 진행.

> ~~Assignment 1 : Login 파트 100% 완료~~ <br/> > ~~Assignment 2 : GNB 100% 완료~~ <br/> > ~~Assignment 3 : Validation 파트 100% 완료~~ <br/> > ~~Assignment 4 : SPA 라우팅 파트 100% 완료~~ <br/>
> Assignment 5 : Feed 개발 50% 완료 (image.onload를 사용한 loading 상태와 Comment 컴포넌트 기능 구현 필요)<br/>

##### 4. 22/06/2022

:thumbsup: Comment 컴포넌트 댓글 추가 기능 구현, onload 기능 적용하기. 프로젝트 전체적으로 체크하고 마무리.

- Comment 컴포넌트 : useState 사용하여 댓글 입력 구현, map 함수로 댓글 출력 구현
- image.onload 이벤트 적용 : useState와 onload로 loading 상태를 구현. loading 상태에 따라 피드 컴포넌트를 숨기고 보여줌(css-visibility)

> ~~Assignment 1 : Login 파트 100% 완료~~ <br/> > ~~Assignment 2 : GNB 100% 완료~~ <br/> > ~~Assignment 3 : Validation 파트 100% 완료~~ <br/> > ~~Assignment 4 : SPA 라우팅 파트 100% 완료~~ <br/> > ~~Assignment 5 : Feed 개발 100% 완료~~ <br/>

### 클린 코드 작성법을 바탕으로 refactoring

- organization repository : https://github.com/Wanted-Pre-Onboarding-FE-Team5/pre-assginment-refactoring

:eyes: _Go back to github profile to check the other repositories_ :eyes:
[![github-profile](https://img.shields.io/badge/Github-Profile-blue?style=flat&logo=Git&logoColor=F05032)](https://github.com/ymStudyLog?tab=repositories)
