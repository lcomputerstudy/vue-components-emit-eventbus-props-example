<template>
    <v-container style="background-color:#ededed;padding:20px;margin:0 auto;width:500px">
    <h3 style="margin-bottom:20px;">부모컴포넌트</h3>
    <v-row justify="start" style="padding-left:20px;align-items:center"> 
        <div>이름: {{ value }}</div>
    </v-row>
            
    <v-row>
        <Child :propsValue="value" 
        @child="emit"/>
    </v-row>
    </v-container>
</template>

<script>
//props : 부모 컴포넌트에서 자식 컴포넌트로 값을 전달해줄때 사용
//$emit : 자식 컴포넌트에서 부모 컴포넌트로 값을 전달할때 사용
import Child from './child'
export default {
    components: {
        Child
    },
    data() {
        return {
            value : '엘컴퓨터학원'
        }
    },
    methods: {
        emit(value) {
            this.value = value
        }
    }
}
</script>