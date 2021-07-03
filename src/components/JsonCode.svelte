<script lang="ts">
  import { compiled } from "../util/cumincode.ts";
</script>

<textarea
  class="textarea is-warning is-normal"
  class:error={!$compiled || !$compiled[0]}
  placeholder="Primary textarea"
  readonly
  >{!$compiled
    ? "wasm not loaded"
    : $compiled[0]
    ? JSON.stringify($compiled[1], null, "\t")
    : $compiled[1]}</textarea
>

<style>
  textarea.error {
    background-color: #fafafa;
  }
</style>
