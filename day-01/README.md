## Demo

> https://parkoon.github.io/30days-front-dev/day-01/

## Note

1. width 처리하기

   ```css
   width: 100%;
   max-width: 380px;
   ```

   ```css
   width: 380px;
   ```

   width 만 380px 주게 되면 사이즈를 줄였을 때 잘리는 현상 발생, 따라서, width: 100% 와 max-width: 380px 조합으로 처리한다.

2. 폼 곂치기

   ```css
   // 부모
   display: grid;
   gird-template-colums: 1fr

   // 자식
   grid-column: 1 / 2;
   grid-rows: 1 / 2
   ```

3. z-index
   - postion (relative, absolute, fixed) 속성이 적용된 요소에만 작동한다
