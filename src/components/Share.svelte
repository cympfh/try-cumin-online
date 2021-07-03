<script lang="ts">
  import Icon from "svelte-awesome";
  import { shareSquare } from "svelte-awesome/icons";
  import { source } from "../util/cumincode.ts";

  function share() {
    location.hash = "#" + encodeBase64($source);
    var tmp = document.createElement("input");
    document.body.appendChild(tmp);
    tmp.value = location.href;
    tmp.select();
    document.execCommand("copy");
    tmp.remove();
    this.console = "URL copied!";
  }

  function encodeBase64(text) {
    return btoa(unescape(encodeURIComponent(text)));
  }
</script>

<button class="button is-light is-small" on:click={share}
  ><Icon data={shareSquare} />&nbsp; Share Code</button
>
