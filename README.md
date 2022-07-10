    
## :star: 1-webpack/1-entry 웹팩 엔트리/아웃풋 

<b> :paperclip: TODO: 웹팩으로 빌드한 자바스크립트를 여기에 로딩하세요</b>  

      1. npm init 으로 프로젝트 생성 - package.json파일 생성됨(-y옵션 붙이면 기본설정으로 생성됨)  
      2. webpack(번들 작업을 하는), webpack-cli(웹팩을 터미널 명령어로 사용 가능한) 두가지 패키지를 설치  
      3. 웹팩 설정파일을 만듦.  
        (명령어로 해도 되지만 난 에러가 났기도 하고 명령어는 너무 길기 때문에 설정파일이 편함)  
      3-1. mode, entry, output 설정 해줌  
      4. npm 스크립트에 build 명령어 추가해서 build 명령어 실행해줌  
      5. index.html에 스크립트 불러오기.  
  
  
## :star: 1-webpack/2-loader: 웹팩 로더  
  
    
  :notebook: note
```
- css-loader: 웹팩이 css파일을 자바스크립트에서 모듈로 가져올수 있도록 css파일을 처리해줌  
- style-loader: 자바스크립트로 변경된 스타일 코드를 HTML에 넣어줌. CSS가 자바스크립트 코드로만 있는데 이걸 CSSOM으로.  
- file-loader: 이미지 처리해주는 로더. webpack.config에서 name 설정에서 hash설정을 하면 매번 파일이름이 달라져서 캐시 관리에 용이함  
- url-loader: 사용하는 이미지가 많으면 서버부담. 때문에 작은 파일은 data URL사용해서 바로 HTML로 넣어줘서 네트워크 통신 한단계 줄이기  
```

<b>:paperclip: TODO: CSS 파일을 엔트리포인트(app.js)에서 로딩하세요. 웹팩에서 로딩할수 있도록 로더를 설정해야 합니다.</b>  

      1.
          CSS파일을 JS에서 모듈처럼 가져오려면 css로더필요.  
          그리고 이게 html에 주입이 되려면 스타일로더도 필요.  
          때문에 두개 모두 설치  
          npm i style-loader css-loader  
          
          근데 버전때문에 this.getOptions is not a function 에러가 났음.  
          이건 버전때문이라고 해서 버전을 명시해서 패키지 다시 설치해줌  
           npm i css-loader@3 file-loader@5 style-loader@1  
           
        2. webpack설정파일에 규칙 추가.  
          이렇게 해야 엔트리포인트인 app.js에서 css를 모듈로 임포트 가능  
          
<b>:paperclip: TODO: 파일을 로딩할수 있도록 웹팩 로더 설정을 추가하세요 (file-loader나 image-loader)</b>

       1. file-loader설치  
       2. webpack 설정파일에 파일로더 설정 추가  
       * 특정 용량 이하=작은 이미지는 data URL스키마 이용하는것이 낫다. src에 base64로 인코딩해서 문자열을 넣어주는것.
         때문에 url로더도 사용해서 작은 용량은 data URL스키마 사용
 
 
 ---
 <br/><br/><br/>
 # 프론트엔드 개발 환경의 이해 

"프론트엔드 개발 환경의 이해" 강의 자료입니다.

블로그 연재물 "[프론트엔드 개발 환경의 이해](http://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)"를 읽어보시기 바랍니다.

## 폴더 구성

- src: 프론트엔드 소스
- server: API 서버 코드 
- resource: 강의 진행에 필요한 리소스(이미지, 코드, 리액트 코드 )

## 브랜치 목록

강의 진행에 따라 적절한 브랜치로 이동합니다. 

- 1-webpack/1-entry: 웹팩 엔트리/아웃풋 실습
- 1-webpack/2-loader: 웹팩 로더 실습
- 1-webpack/3-plugin: 웹팩 플러그인 실습
- 2-babel/1-babel: 바벨 실습
- 3-lint/1-eslint: 린트 실습
- 3-lint/2-prettier: 프리티어 실습
- 4-webpack/1-dev-server: 웹팩 개발 서버 실습
- 4-webpack/2-hot: 웹팩 핫로딩 실습
- 4-webpack/3-optimazation: 웹팩 최적화 실습
- 
- master: 최종 결과물 

