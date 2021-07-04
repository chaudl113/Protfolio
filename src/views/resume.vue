<template>
  <pdf-viewer :initialDoc="$config.resume.pdfUrl" />
</template>
<script>
import PdfViewer from "@/components/PdfViewer.vue";
export default {
  components: { PdfViewer },
};
</script>

<style>
</style>