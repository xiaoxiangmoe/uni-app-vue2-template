<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  mpType: 'app',
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
});
</script>

<style>
/*每个页面公共css */
</style>
