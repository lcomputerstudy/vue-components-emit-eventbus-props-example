<template>
   <v-container style="background-color:#fff;padding:20px;margin:20px;">
    <h3>자식컴포넌트</h3>
    <div>{{propsValue}}</div>
    <div>{{add}}</div>
    <div>{{this.Date}}</div>
    </v-container>
</template>
<script>
import {eventBus} from '@/main'
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
            Date : null
        }
    },
    computed: {
        add() {
            return this.propsValue + '입니다'
        }
    },
    created() {
        eventBus.$on('eventbus',date => {
            this.Date = date
        })
    }
}
</script>