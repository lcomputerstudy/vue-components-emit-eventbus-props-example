<template>
    <v-container>
        <v-layout>
            <Parent/>
        </v-layout>
    </v-container>
</template>
<script>
import Parent from '../components/eventbus/parent';
export default {
     components: {
        Parent,
    }
}
</script>