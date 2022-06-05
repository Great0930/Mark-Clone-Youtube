<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="flex flex-col w-full h-full">
        <header class="flex w-full bg-red-400">
            <top-navbar />
        </header>

        <div class="flex flex-row w-full h-full">
            <aside class="flex bg-green-400">
                <side-navbar />
            </aside>

            <div class="flex flex-col w-full h-full">
                <div class="flex-0 w-full bg-blue-400">
                    <banner-tags />
                </div>
                <main class="flex-0 w-full bg-yellow-400">
                    <content-list />
                </main>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopNavabr from "@/components/TopNavbar.vue";
import SideNavbar from "@/components/SideNavbar.vue";
import BannerTags from "@/components/BannerTags.vue";
import ContentList from "@/components/ContentList.vue";
import TopNavbar from "../components/TopNavbar.vue";

export default defineComponent({
    components: {
        TopNavabr,
        SideNavbar,
        BannerTags,
        ContentList,
        TopNavbar,
    },
    setup() {
        // todo
        return {};
    },
});
</script>

<style lang="scss" scoped></style>
