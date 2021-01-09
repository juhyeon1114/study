import vue from 'vue'; // 설치한 vue를 가져오는 것 (package.json 참고)
import numberBaseball from "./numberBaseball";

new vue(numberBaseball).$mount("#root"); // #root 태그를 element로 하는 vue 인스턴스 만들어줌
