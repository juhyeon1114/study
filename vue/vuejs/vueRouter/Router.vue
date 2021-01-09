<template>
    <div>
        <div>
            <router-link to="/game">게임매쳐</router-link>
            <router-link to="/game/number-baseball?pages=3&offset=10&limit=1&sort=breatedAt">숫자야구</router-link>
            <router-link to="/game/response-check">반응속도</router-link>
            <router-link to="/game/rock-scissor">가위바위보</router-link>
            <router-link to="/game/lotto-generator">로또</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import router from './routes';

    export default {
        router
    };
</script>

<style>
    table{
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 50px;
        height: 50px;
        text-align: center;
        font-size: 24px;
        user-select: none;
    }
</style>
<!--
쿼리스트링은 주로 게시판같은 곳에서 쓴다.
10페이지를 보다가 새로고침한 경우 다시 10페이지를 볼 수 있도록
-->