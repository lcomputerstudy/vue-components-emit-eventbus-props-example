<template>
    <v-container style="background-color:#ededed;padding:20px;margin:0 auto;width:800px">
    <h3 style="margin-bottom:20px;">부모컴포넌트</h3>
        <v-layout >
            <v-flex row wrap style="padding-left:20px;align-items:center">
                    <div>이름: {{ value }}</div>
                    <v-btn
                    icon
                    color="green"
                    @click="change()"
                    >
                    <v-icon>mdi-cached</v-icon>
                    </v-btn>
            </v-flex>
        </v-layout>
        <v-layout style="margin:20px;">
            <v-flex row wrap>
                <v-row>
                     <Child1 :propsValue="value" />
                </v-row>
                <v-row>
                    <Child2 @child="emit" />
                </v-row>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
//props : 부모 컴포넌트에서 자식 컴포넌트로 값을 전달해줄때 사용
import Child1 from './child1'
import Child2 from './child2'
export default {
    components: {
        Child1,
        Child2
    },
    data() {
        return {
            value : '엘컴퓨터학원'
        }
    },
    methods: {
        change() {
            this.value = 'LcomputerStudy'
        },
         emit(value) {
            this.value = value
        }
    }
}
</script>