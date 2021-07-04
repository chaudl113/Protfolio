<template>
  <div id="webviewer" ref="viewr"></div>
</template>

<script>
import WebViewer from "@pdftron/webviewer";
import { ref, onMounted } from "vue";
export default {
  props: { initialDoc: { type: String } },
  setup(props) {
    const viewr = ref(null);
    onMounted(() => {
      const path = `${process.env.BASE_URL}webviewer`;
      WebViewer(
        {
          path,
          initialDoc: props.initialDoc,
          css: "/stylesheet.css",
          isReadOnly: true,
        },
        viewr.value
      );
    });

    return {
      viewr,
    };
  },
};
</script>

<style lang="scss" scoped>
#webviewer {
  height: 800px;
}
</style>