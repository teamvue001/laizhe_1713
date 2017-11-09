<template>
    <div>
        <div class="header">
            <span class="iconfont icon-huise back" ></span>
            <p class="login">登录</p>
            <a href="#" class="register">注册</a>
        </div>

        <loginSms v-show="sms" @smsClick="click"  ></loginSms>
        <loginAccount v-show="account" @accountClick="click"></loginAccount>

    </div>

</template>

<script>
    import axios from "axios"
    import loginsms from './login-sms'
    import loginaccount from './login-account'

    export default {

        name: 'login',
        data() {
            return {
                sms: true,
                account: false
            }
        },
        methods: {
            click() {
                this.sms = !this.sms;
                this.account = !this.account;
            }
        },
        computed: {

        },
        components: {
            'loginSms' : loginsms,
            'loginAccount' : loginaccount
        }


    }

</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .88rem;
        background: #18a9b9;
    }
    .header .back {
        padding-left: .2rem;
        line-height: .88rem;
        color: #75ffff;
        font-size: .30rem;
        font-weight: bold;
    }
    .header .login {
        line-height: .88rem;
        color: #fff;
        font-size: .34rem;
    }
    .header .register {
        padding-right: .2rem;
        text-align: right;
        line-height: .88rem;
        color: #75ffff;
        font-size: .30rem;
    }
</style>
