<template>
  <pdf style="width: 75%" :src="$config.resume.pdfUrl"></pdf>
</template>

<script>
import pdf from "vue3-pdf";

export default {
  components: {
    pdf,
  },
};
</script>