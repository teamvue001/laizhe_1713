<template>
    <div>
        <div class="header_sub">
            <div class="tab">

                <button class="tab-item login-sms"  @click="handleClick">短信验证码登录</button>
                <button class="login-account tab-item">账号登录</button>
            </div>
        </div>
        <form  action="/api/login" method="post" name="login-account" target="" enctype="" autocomplete="off" accept="" accept-charset="">
            <div class="form-style">
                <div class="form-control">
                    <label class="control-container" for="mobile">账号</label>
                    <div class="control-label">
                        <input class="mobile" name="mobile" id="mobile" type="text" autofocus="autofocus" maxlength="11" placeholder="手机号/邮箱/用户名">
                    </div>
                </div>

                <div class="form-control last">
                    <label class="control-container" for="vercode">密码</label>
                    <input class="vercode" name="vercode" id="vercode" type="text" maxlength="6" placeholder="请输入密码">
                </div>
            </div>
            <div class="operate">
                <input class="btn" type="submit" value="登录" v-if="mobile && vercode"/>
                <input class="btn" type="submit" value="登录" v-else disabled="disabled" style="background: #85d1db"/>
            </div>
        </form>
    </div>
</template>

<script>

    export default {

        name: 'login-account',
        data() {
            return {
                mobile: false,
                vercode: false
            }
        },
        methods: {
            handleClick(){

                this.$emit("accountClick");
            }
        },
        computed: {

        }
    }

</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    .header_sub {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: .9rem;
        background: #18a9b9;
        padding: 0 .2rem;
    }
    .header_sub .tab {
        display: flex;
        justify-content: center;
        align-items: center;
        border: .02rem solid #fff;
        border-radius: .03rem;
        width: 100%;
        height: .68rem;
    }
    .header_sub .login-account {
        background: #fff;
        color: #25a4bb;
    }
    .header_sub .login-sms {
        width: 100%;
        height: .60rem;
        border: 0;
        line-height: .60rem;
        font-size: .30rem;
        text-align: center;
        background: #18a9b9;
        color: #fff;
    }

    .header_sub .tab-item {
        width: 50%;
        height: .64rem;
        border: 0;
        line-height: .64rem;
        font-size: .30rem;
        font-family: “Microsoft YaHei”;
        text-align: center;

    }
    .form-style {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: .3rem;
        padding-left: .2rem;
        border: .02rem solid #ddd;
        border-right: 0;
        border-left: 0;
    }
    .form-style .form-control {
        display: flex;
        justify-content: flex-start;
        padding-right: .1rem;
        align-items: center;
        width: 100%;
        height: 1rem;
        border-bottom: .02rem solid #ddd;
    }
    .form-style .control-container{
        padding-right: .3rem;
        width: 20%;
        height: .9rem;
        font-size: 0.30rem;
        line-height: .9rem;
        color: #19a9ba;
    }
    .form-style .control-label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: .9rem;
        font-size: 0.30rem;
        color: #333;
    }
    .form-style .last {
        border: 0;
    }
    .form-style .mobile {
        border: 0;
        width: 100%;
        font-family: “Microsoft YaHei”;
        font-size: 0.30rem;
    }
    .form-style .vercode {
        border: 0;
        width: 100%;
        font-family: “Microsoft YaHei”;
        font-size: 0.30rem;
    }

    .operate {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: .3rem;
        padding: .2rem;

    }
    .operate .btn {
        display: block;
        border-radius: .06rem;
        border: 0;
        height: 1rem;
        background: #18a9b9;
        line-height: 1rem;
        font-size: .34rem;
        font-family: “Microsoft YaHei”;
        text-align: center;
        color: #fff;
    }

</style>




















