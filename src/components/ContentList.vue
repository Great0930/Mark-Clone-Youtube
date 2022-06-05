<template>
    <div class="flex h-full p-5 bg-[#181818]">
        <div class="grid grid-cols-12 gap-4 gap-y-4 w-full">
            <section class="col-span-12 sm:col-span-6 md:col-span-3" v-for="(ytv, index) in ytVideos" :key="index">
                <div class="flex flex-col w-full mb-4">
                    <div class="relative">
                        <!-- Video Image -->
                        <div class="w-full h-52">
                            <router-link to="/">
                                <img :src="ytv.url" class="w-full h-full" />
                            </router-link>
                        </div>
                        <p class="absolute right-2 bottom-2 text-xs text-gray-100 bg-gray-900 p-1">{{ ytv.long }}</p>
                    </div>

                    <div class="flex flex-row gap-2 mt-2">
                        <!-- Profile Photo -->
                        <div class="mt-2">
                            <router-link to="/">
                                <img :src="ytv.photo" class="w-10 h-10 rounded-full" />
                            </router-link>
                        </div>
                        <!-- Video Description -->
                        <div class="yt-video-description flex flex-col w-64">
                            <p class="line-clamp text-base text-gray-200 hover:text-gray-100 font-semibold mt-1">
                                <router-link to="/">{{ ytv.description.title }}</router-link>
                            </p>
                            <p class="text-sm text-gray-400 hover:text-gray-100 mt-1">
                                <router-link to="/">{{ ytv.description.channel }}</router-link>
                            </p>
                            <p class="text-sm text-gray-400 mt-1">
                                觀看次數: <span>{{ ytv.description.watchs }}</span> . <span>{{ ytv.description.upload }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    setup() {
        const ytVideos = reactive([
            {
                url: "https://picsum.photos/100",
                photo: "https://picsum.photos/100",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/200",
                photo: "https://picsum.photos/200",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/300",
                photo: "https://picsum.photos/300",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/400",
                photo: "https://picsum.photos/400",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/500",
                photo: "https://picsum.photos/500",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/600",
                photo: "https://picsum.photos/600",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/700",
                photo: "https://picsum.photos/700",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/800",
                photo: "https://picsum.photos/800",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/900",
                photo: "https://picsum.photos/900",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/1000",
                photo: "https://picsum.photos/1000",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/1100",
                photo: "https://picsum.photos/1100",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
            {
                url: "https://picsum.photos/1200",
                photo: "https://picsum.photos/1200",
                long: "1:15",
                description: {
                    title: "【關鍵復刻版】趁你虛要你命！ 金正恩裂嘴笑砲擊青瓦台第一波派出空降神兵！？ 20161212全集｜劉寶傑",
                    channel: "關鍵時刻",
                    watchs: "1.3萬次",
                    upload: "1小時前",
                },
            },
        ]);

        // todo
        return { ytVideos };
    },
});
</script>

<style lang="scss" scoped>
.yt-video-description {
    text-align: justify;
}
.line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
