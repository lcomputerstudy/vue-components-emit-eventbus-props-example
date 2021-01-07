<template>
    <v-container style="background-color:#fff;padding:20px;margin:20px;">
    <h3>자식컴포넌트</h3>
    <v-layout> 
        <v-flex row wrap style="margin:0">
            <v-text-field
                style="width:70%;"
                v-model="value"
            ></v-text-field>
            <v-btn
                icon
                color="green"
                @click="change()"
                >
                <v-icon>mdi-cached</v-icon>
                </v-btn>
        </v-flex>
    </v-layout>
    </v-container>
</template>
<script>
export default {
    // props: ['parentValue'],
    props: {
        propsValue: {
           type:String,
           //required:true null 허용x
           //default:1234 부모 컴포넌트에서 값 전달이 없을 경우 디폴트 값
        }
    },
    data() {
        return {
            value:null
        }
    },
    created() {
        this.value=this.propsValue
    },
    methods: {
        change() {
            this.$emit("child",this.value)
        }
    }
}
</script>