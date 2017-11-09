<template>
    <div>
        <div class="header_sub">
            <div class="tab">
                <button class="login-sms tab-item">短信验证码登录</button>
                <button class="tab-item login-account"  @click="handleClick">账号登录</button>
            </div>
        </div>
        <!--action="/api/isLogin" method="post"-->
        <form  target="" enctype="" autocomplete="off" accept="" accept-charset="">
            <div class="form-style">
                <div class="form-control">
                    <label class="control-container" for="mobile">手机号</label>
                    <div class="control-label">
                        <input class="mobile" name="mobile" id="mobile" type="text" autofocus="autofocus" maxlength="11" placeholder="请输入手机号" v-model="mobileVal" @blur="handleMobile">
                    </div>
                </div>

                <div class="form-control  last">
                    <label class="control-container " for="vercode">验证码</label>
                    <input class="vercode" name="vercode" id="vercode" type="text"  maxlength="6" placeholder="请输入验证码" v-model="vercodeVal" @blur="handleVercode">
                    <a class="vercode-btn" href="#">获取验证码</a>
                </div>
            </div>
            <div class="operate">
                <input class="btn" type="button" value="登录" v-if="mobile && vercode" @click="handleSubmit"/>
                <input class="btn" type="submit" value="登录" v-else disabled="disabled" style="background: #85d1db"/>

            </div>
        </form>
    </div>
</template>

<script>
    import axios from "axios"
    export default {

        name: 'login-sms',
        data() {
            return {
                mobile: false,
                vercode: false,
                mobileVal: "",
                vercodeVal: ""

            }
        },
        methods: {
            handleClick() {

                this.$emit("smsClick");
            },
            handleVercode() {
                this.vercode = true;
                console.log(this.vercodeVal)

            },
            handleMobile() {
                this.mobile = true;
                console.log(this.mobileVal)
            },
            handleSubmit() {
                axios.get('/api/login?phoneNumber='+this.mobileVal+'&code='+this.vercodeVal).then((res) => {
                    console.log(res)
                })

                axios.get('/api/isLogin').then((res) => {
                    console.log(res)
                })
            }
        },
        computed: {

        },
        mounted: function() {
            if(this.mobileVal == " "){
                console.log("请输入账号")
            }else{

            }

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
    .header_sub .login-sms {
        background: #fff;
        color: #25a4bb;
    }
    .header_sub .login-account {
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
        width: 80%;
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
        width: 50%;
        font-family: “Microsoft YaHei”;
        font-size: 0.30rem;
    }
    .form-style .vercode-btn {
        display: block;
        margin: 0 .09rem;
        width: 30%;
        height: .7rem;
        border-radius: .06rem;
        border: .01rem solid #ccc;
        text-align: center;
        line-height: .7rem;
        color: #d7dce0;
        cursor: pointer;
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
