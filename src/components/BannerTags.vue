<template>
    <div class="flex items-center h-14 text-gray-200 bg-[#202020] border-y border-[#444444] px-4">
        <ul class="flex-1 p-3 space-x-3">
            <template v-for="(tag, index) in tags" :key="index">
                <router-link to="/">
                    <li v-if="tag.active" class="inline-flex items-center px-3 py-1 text-sm text-black bg-gray-200 rounded-full leading-sm">
                        {{ tag.name }}
                    </li>

                    <li v-else class="inline-flex items-center px-3 py-1 text-sm bg-[#363636] border border-[#545454] rounded-full leading-sm">
                        {{ tag.name }}
                    </li>
                </router-link>
            </template>

            <div></div>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    setup() {
        const tags = reactive([
            {
                name: "全部",
                active: true,
            },
            {
                name: "音樂",
                active: false,
            },
            {
                name: "直播中",
                active: false,
            },
            {
                name: "遊戲",
                active: false,
            },
            {
                name: "觀光",
                active: false,
            },
            {
                name: "烹飪節目",
                active: false,
            },
            {
                name: "動畫",
                active: false,
            },
            {
                name: "烹飪",
                active: false,
            },
            {
                name: "寵物",
                active: false,
            },
            {
                name: "自然",
                active: false,
            },
            {
                name: "最新上傳",
                active: false,
            },

            {
                name: "讓你耳目一新的影片",
                active: false,
            },
        ]);
        // todo
        return {
            tags,
        };
    },
});
</script>

<style lang="stylus" scoped></style>
